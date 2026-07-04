# Deployment — Bennet Legal Research Group

Production host: **bruhnfreeman-com** AWS Lightsail box (`3.223.180.176`), a shared Ubuntu host
running Docker behind a reverse proxy. The domain **bennetlegalgroup.com** has an A record
pointing at this box; the app runs as a container bound to `127.0.0.1:3020` and is exposed to the
internet only through the host's reverse proxy (TLS terminated there).

> This is a **shared** host running other stacks. Never expose the container on `0.0.0.0`, never
> bind privileged ports directly, and never run a standalone certbot — go through the existing
> proxy per-subdomain.

---

## Architecture

```
Internet ──HTTPS──> Caddy (host :443, auto-TLS)
                      └── bennetlegalgroup.com ──reverse_proxy──> 127.0.0.1:3020
                                                                    └── Docker: bennet-legal-web (:3000)
```

## Prerequisites (already true on the box)

- Docker + Docker Compose plugin
- A reverse proxy (Caddy) fronting all subdomains
- DNS: `bennetlegalgroup.com` A record → `3.223.180.176` (done)

---

## 1. Get a short-lived SSH key (run on your PC — Git Bash)

Lightsail temp keys expire in ~13 minutes; refresh when you get `Permission denied (publickey)`.

```bash
aws lightsail get-instance-access-details \
  --instance-name bruhnfreeman-com --region us-east-1 \
  --query '{priv:accessDetails.privateKey, cert:certKey, ip:ipAddress}' --output json
```

Write the `privateKey` to `~/.ssh/ls_key` with **LF** line endings (CRLF corrupts it), then:

```bash
chmod 600 ~/.ssh/ls_key
ssh -i ~/.ssh/ls_key ubuntu@3.223.180.176
```

## 2. Create a least-privilege IAM user for SES (run on your PC once)

The container needs to send email via SES but must **not** hold admin credentials.

```bash
# Create the user
aws iam create-user --user-name bennetlegal-ses

# Attach an inline policy limited to sending email
aws iam put-user-policy --user-name bennetlegal-ses \
  --policy-name ses-send-only \
  --policy-document '{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Action": ["ses:SendEmail", "ses:SendRawEmail"],
      "Resource": "*"
    }]
  }'

# Generate access keys (copy AccessKeyId + SecretAccessKey into the server .env)
aws iam create-access-key --user-name bennetlegal-ses
```

`CONTACT_FROM_EMAIL` must be a **verified** SES identity. `bruhn@bruhnfreeman.com` is already
verified. To send from `intelligence@bennetlegalgroup.com`, first verify the
`bennetlegalgroup.com` domain in SES (adds a few DNS records) or verify that specific address.

## 3. Deploy the app (run on the server)

```bash
# Clone (first time)
cd ~ && git clone https://github.com/bruhnf/bennetlegal.git bennetlegal
cd ~/bennetlegal

# Create the environment file from the template and fill in real values
cp .env.example .env
nano .env    # set AWS keys, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL, HOST_PORT

# Build + start (bound to 127.0.0.1:3020)
docker compose up -d --build

# Verify the container is healthy and answering locally
docker compose ps
curl -s http://127.0.0.1:3020/api/health   # -> {"status":"ok",...}
```

### Redeploying after a code change

A bare `docker restart` keeps stale baked-in code — always rebuild:

```bash
cd ~/bennetlegal && git pull && docker compose up -d --build
```

## 4. Wire up the reverse proxy (run on the server)

### If the host uses Caddy

Add a site block to the host Caddyfile (commonly `/etc/caddy/Caddyfile`), then reload:

```caddy
bennetlegalgroup.com, www.bennetlegalgroup.com {
    encode zstd gzip
    reverse_proxy 127.0.0.1:3020
}
```

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

Caddy will obtain and renew the TLS certificate automatically.

### If the host uses nginx + certbot instead

Create `/etc/nginx/sites-available/bennetlegalgroup.com`:

```nginx
server {
    server_name bennetlegalgroup.com www.bennetlegalgroup.com;
    location / {
        proxy_pass http://127.0.0.1:3020;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/bennetlegalgroup.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d bennetlegalgroup.com -d www.bennetlegalgroup.com
```

## 5. Verify live

```bash
curl -I https://bennetlegalgroup.com                 # 200, valid TLS
curl -s https://bennetlegalgroup.com/api/health      # {"status":"ok",...}
```

Then load the site in a browser: dark theme by default, animated hero, all sections, and submit a
test message through the contact form — it should arrive at `CONTACT_TO_EMAIL`.

---

## Operations

```bash
docker compose logs -f web      # tail app logs
docker compose restart web      # restart without rebuild (use only for config changes)
docker compose down             # stop & remove the container
docker image prune -f           # reclaim space after rebuilds
```

## Dev → prod discipline

Follow the standard flow: land work on `develop` → verify → promote `develop` → `main` via PR →
deploy `main`. Keep the shared host on a tagged release of `main`, not an arbitrary branch.

## Rollback

```bash
cd ~/bennetlegal
git log --oneline -5            # find the previous good commit/tag
git checkout <good-ref>
docker compose up -d --build
```

## Security checklist

- [ ] Container bound to `127.0.0.1` only (never `0.0.0.0`)
- [ ] `.env` present on server, **not** in git (`.gitignore` covers it)
- [ ] SES uses the least-privilege `bennetlegal-ses` user, not admin keys
- [ ] TLS/HSTS handled by the host proxy
- [ ] `docker compose ps` shows `healthy`

# Deployment — Bennet Legal Research Group

Production host: **bruhnfreeman-com** AWS Lightsail box (`3.223.180.176`), a shared Ubuntu host
running a **containerized Caddy** reverse proxy on the external Docker network `web`. The domain
**bennetlegalpartners.com** has an A record pointing at this box. The app runs as a container
(`bennetlegal-web`) joined to the `web` network; Caddy reaches it by container name and terminates
TLS. The container publishes **no** host ports — it's reachable only through Caddy.

> This is a **shared** host running other stacks (naturalbliss, merlin, bruhnfreeman). Never
> publish host ports, never bind `0.0.0.0`, and never run a standalone certbot — Caddy owns TLS.

---

## Architecture

```
Internet ──HTTPS──> caddy container (:443, auto-TLS, network: web)
                      └── bennetlegalpartners.com ──reverse_proxy──> bennetlegal-web:3000
                                                                       (Next.js, network: web)
```

## Prerequisites (already true on the box)

- Docker + Docker Compose plugin
- Containerized Caddy on the external `web` network; config at `/srv/proxy/Caddyfile`
- DNS: `bennetlegalpartners.com` A record → `3.223.180.176` (done)

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
verified. To send from `intelligence@bennetlegalpartners.com`, first verify the
`bennetlegalpartners.com` domain in SES (adds a few DNS records) or verify that specific address.

## 3. Deploy the app (run on the server)

```bash
# Clone (first time)
cd ~ && git clone https://github.com/bruhnf/bennetlegal.git bennetlegal
cd ~/bennetlegal

# Create the environment file from the template and fill in real values
cp .env.example .env
nano .env    # set AWS keys, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL

# Build + start (joins the external `web` network; no host ports)
docker compose up -d --build

# Verify the container is healthy and answering from inside the network
docker compose ps
docker exec bennetlegal-web node -e "fetch('http://127.0.0.1:3000/api/health').then(r=>r.text()).then(console.log)"
```

### Redeploying after a code change

A bare `docker restart` keeps stale baked-in code — always rebuild:

```bash
cd ~/bennetlegal && git pull && docker compose up -d --build
```

## 4. Wire up the reverse proxy (run on the server)

The host runs a containerized Caddy with its config at `/srv/proxy/Caddyfile`. Append a site block
that proxies to the app by container name (the `(app_headers)` snippet already defined in that file
suits a dynamic app — it omits the strict static-site CSP that would block Google Fonts):

```caddy
bennetlegalpartners.com {
    import app_headers
    encode gzip zstd
    reverse_proxy bennetlegal-web:3000
}
```

Then reload Caddy in place (no restart needed):

```bash
docker exec caddy caddy reload --config /etc/caddy/Caddyfile
```

Caddy obtains and renews the TLS certificate automatically. (Skip a `www.` block unless a `www`
DNS record exists, or Caddy will retry a cert it can't get for that name.)

## 5. Verify live

```bash
curl -I https://bennetlegalpartners.com                 # 200, valid TLS
curl -s https://bennetlegalpartners.com/api/health      # {"status":"ok",...}
```

> First request after adding the Caddy block may take a few seconds while Caddy provisions the
> Let's Encrypt certificate.

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

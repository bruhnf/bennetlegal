import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import type { ContactInput } from "@/lib/validation";

/**
 * AWS SES mailer for contact/proposal submissions.
 *
 * Required environment variables (see .env.example):
 *   AWS_REGION              e.g. us-east-1
 *   AWS_ACCESS_KEY_ID       least-privilege IAM user with ses:SendEmail
 *   AWS_SECRET_ACCESS_KEY
 *   CONTACT_FROM_EMAIL      a *verified* SES identity (sender)
 *   CONTACT_TO_EMAIL        where notifications are delivered
 *
 * On the server the SDK reads credentials from the environment automatically.
 */

let cachedClient: SESClient | null = null;

function getClient(): SESClient {
  if (cachedClient) return cachedClient;
  cachedClient = new SESClient({
    region: process.env.AWS_REGION ?? "us-east-1",
    // Credentials are picked up from AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY.
  });
  return cachedClient;
}

/** Returns true if SES is configured enough to attempt a send. */
export function isMailerConfigured(): boolean {
  return Boolean(
    process.env.CONTACT_FROM_EMAIL &&
      process.env.CONTACT_TO_EMAIL &&
      process.env.AWS_ACCESS_KEY_ID &&
      process.env.AWS_SECRET_ACCESS_KEY,
  );
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(input: ContactInput): Promise<void> {
  const from = process.env.CONTACT_FROM_EMAIL!;
  const to = process.env.CONTACT_TO_EMAIL!;

  const rows: [string, string][] = [
    ["Name", input.name],
    ["Email", input.email],
    ["Company", input.company || "—"],
    ["Service", input.service || "—"],
  ];

  const textBody = [
    "New intelligence request from bennetlegalpartners.com",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    input.message,
  ].join("\n");

  const htmlBody = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;color:#0a1128">
      <h2 style="color:#4f46e5;margin-bottom:4px">New Intelligence Request</h2>
      <p style="color:#55627d;margin-top:0">via bennetlegalpartners.com</p>
      <table style="width:100%;border-collapse:collapse;margin:16px 0">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px;background:#f6f8fd;font-weight:600;width:140px">${escapeHtml(
                k,
              )}</td><td style="padding:8px 12px;border-bottom:1px solid #eef2fb">${escapeHtml(
                v,
              )}</td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin-bottom:6px">Message</h3>
      <p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(input.message)}</p>
    </div>
  `;

  await getClient().send(
    new SendEmailCommand({
      Source: from,
      Destination: { ToAddresses: [to] },
      ReplyToAddresses: [input.email],
      Message: {
        Subject: {
          Data: `New Intelligence Request — ${input.name}${input.company ? ` (${input.company})` : ""}`,
          Charset: "UTF-8",
        },
        Body: {
          Text: { Data: textBody, Charset: "UTF-8" },
          Html: { Data: htmlBody, Charset: "UTF-8" },
        },
      },
    }),
  );
}

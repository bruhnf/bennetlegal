import { z } from "zod";

/**
 * Shared schema for the contact / proposal form.
 * Used by both the client form and the API route so validation stays in sync.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Enter a valid email address").max(200),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (10+ characters)")
    .max(4000, "Message is too long"),
  // Honeypot — must stay empty. Bots tend to fill every field.
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const serviceOptions = [
  "AI-Powered Legal Research",
  "Big Data Intelligence & Analytics",
  "Predictive Legal Strategy",
  "Investigative Due Diligence",
  "Regulatory & Compliance Intelligence",
  "Attorney Referral Network",
  "Custom Intelligence Reports",
  "Not sure yet — advise me",
] as const;

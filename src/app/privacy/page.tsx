import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bennet Legal Research Group collects, uses, and protects your information.",
};

/**
 * Placeholder privacy policy. This is template copy — review with counsel before
 * publishing and tailor to your actual data practices (analytics, cookies, etc.).
 */
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 2026">
      <p>
        This Privacy Policy explains how {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us&rdquo;)
        collects, uses, and safeguards information when you use our website and services. This
        document is a template and should be reviewed by legal counsel before publication.
      </p>

      <h2>Information we collect</h2>
      <p>
        When you submit a request through our contact form, we collect the details you provide —
        your name, email, company, service interest, and message. We may also collect standard
        technical data (such as IP address and browser type) for security and analytics.
      </p>

      <h2>How we use information</h2>
      <p>
        We use your information to respond to your inquiry, scope potential engagements, and
        improve our services. We do not sell your personal information. Engagement materials are
        handled under strict confidentiality controls.
      </p>

      <h2>Data security</h2>
      <p>
        We apply bank-grade encryption in transit and at rest, strict access controls, and
        confidentiality protocols designed to keep client intelligence secure.
      </p>

      <h2>Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal information by
        contacting us at{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach us at{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>
    </LegalPage>
  );
}

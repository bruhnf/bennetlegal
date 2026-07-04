import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the Bennet Legal Research Group website and services.",
};

/**
 * Placeholder terms of service. Template copy — review with counsel before publishing.
 */
export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 2026">
      <p>
        These Terms govern your use of the {siteConfig.name} website and services. By using this
        site you agree to these Terms. This document is a template and should be reviewed by legal
        counsel before publication.
      </p>

      <h2>Not a law firm</h2>
      <p>
        {siteConfig.name} provides research and intelligence services only. We are not a law firm
        and do not provide legal advice or representation. Using this site or contacting us does
        not create an attorney-client relationship. Where legal counsel is needed, ask about our
        Attorney Referral Network.
      </p>

      <h2>Use of services</h2>
      <p>
        Our deliverables are provided for your internal decision-making. You agree not to misuse
        the site, attempt unauthorized access, or use our services for unlawful purposes.
      </p>

      <h2>Confidentiality</h2>
      <p>
        Engagement materials are handled under confidentiality controls described in your
        individual engagement agreement, which governs in the event of any conflict with these
        Terms.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, our services are provided &ldquo;as is,&rdquo; and
        our liability is limited as set out in your engagement agreement.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Reach us at{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>
    </LegalPage>
  );
}

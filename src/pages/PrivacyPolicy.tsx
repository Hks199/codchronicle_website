import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how contact details, career applications and resume attachments are handled."
      />
      <PageHero
        eyebrow="Privacy policy"
        title="A clear approach to your information."
        description="This policy describes how website submissions are handled. Review and adapt it to your company and hosting arrangements before publication."
      />
      <article className="container legal-content">
        <h2>Form information</h2>
        <p>
          Contact and career submissions are validated in your browser and on
          our server, then emailed to our team to respond to inquiries and
          review applications. The application does not store submissions in a
          database. Email copies are held by the configured mailbox and email
          provider.
        </p>
        <h2>Resume attachments</h2>
        <p>
          When you submit an application, your resume is uploaded to our server
          and attached to the application email. PDF, DOC and DOCX files up to 5
          MB are supported. Uploads are processed in memory rather than saved as
          files by the application. Email copies remain subject to the mailbox
          and provider's retention policies.
        </p>
        <h2>Cookies and analytics</h2>
        <p>
          This application does not set tracking cookies, use browser storage or
          include analytics scripts. Hosting providers may process connection
          information, such as IP addresses and access logs, according to their
          own policies.
        </p>
        <h2>External services</h2>
        <p>
          Configured social links open third-party websites. Clicking WhatsApp
          opens a chat using a generic prewritten message. The policies of those
          external services apply when you visit them.
        </p>
        <h2>Retention and requests</h2>
        <p>
          Use the website's contact options to ask about your submitted
          information. Before publication, the company should specify its
          retention periods, privacy contact and applicable rights here.
        </p>
      </article>
    </>
  );
}

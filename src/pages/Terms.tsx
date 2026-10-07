import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Understand website content, inquiry submissions and career applications."
      />
      <PageHero
        eyebrow="Terms & conditions"
        title="Clear expectations. Better beginnings."
        description="These template terms describe the website. Adapt them to the actual company, services and applicable requirements before publication."
      />
      <article className="container legal-content">
        <h2>Informational purpose</h2>
        <p>
          This website presents service categories and illustrative concepts.
          Descriptions are general information and do not constitute a binding
          offer or guarantee of results.
        </p>
        <h2>Demo content</h2>
        <p>
          Sample projects, statistics and career roles are illustrative. They do
          not represent verified customer work, business achievements or
          confirmed vacancies.
        </p>
        <h2>Forms and applications</h2>
        <p>
          Contact inquiries and career applications are sent to our team by
          email, with uploaded resumes attached to application emails. A success
          message means the email provider accepted the submission for delivery;
          it does not guarantee inbox placement, a response or an offer of
          employment.
        </p>
        <h2>Project agreements</h2>
        <p>
          Actual scope, pricing, deliverables, timelines, support and
          intellectual property arrangements should be set out in a separate
          written agreement.
        </p>
        <h2>External links</h2>
        <p>
          Links to configured social platforms lead to third-party services with
          their own terms and policies.
        </p>
        <h2>Updates</h2>
        <p>
          Review these terms before publishing this website or adding new
          functionality. Keep the description of the website’s behavior current.
        </p>
      </article>
    </>
  );
}

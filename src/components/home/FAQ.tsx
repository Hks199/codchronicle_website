import SectionHeading from "../common/SectionHeading";
import FAQAccordion from "../common/FAQAccordion";
export default function FAQ() {
  return (
    <section className="section soft-section">
      <div className="container faq-layout">
        <SectionHeading
          eyebrow="LET’S CLEAR THINGS UP"
          title="Good questions. Clear answers."
          description="A few things you might want to know before we start a conversation."
        />
        <FAQAccordion />
      </div>
    </section>
  );
}

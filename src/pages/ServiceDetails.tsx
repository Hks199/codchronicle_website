import { useParams } from "react-router-dom";
import { Check } from "lucide-react";
import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import FAQAccordion from "../components/common/FAQAccordion";
import Process from "../components/home/Process";
import CTA from "../components/home/CTA";
import { services } from "../data/services";
import NotFound from "./NotFound";
export default function ServiceDetails() {
  const { slug } = useParams();
  const s = services.find((s) => s.slug === slug);
  if (!s) return <NotFound />;
  const questions = [
    {
      question: `What is included in ${s.name.toLowerCase()}?`,
      answer: `We define the scope together. Available capabilities include ${s.features.join(", ")}. Your proposal will specify the agreed deliverables.`,
    },
    {
      question: "Can the solution fit our existing business?",
      answer: s.solution,
    },
    {
      question: "How do you define the timeline and budget?",
      answer:
        "Discovery establishes requirements, priorities and milestones. Timing and cost are agreed based on the specific scope.",
    },
  ];
  return (
    <>
      <SEO
        title={s.name}
        description={s.description}
        service={s.name}
        questions={questions}
      />
      <PageHero
        eyebrow={s.name}
        title={s.description}
        description="A considered approach, shaped around your business and the people who use it."
      />
      <section className="section">
        <div className="container">
          <div className="mission-grid">
            <article className="content-card">
              <span className="eyebrow">THE CHALLENGE</span>
              <h2>A problem worth solving.</h2>
              <p>{s.problem}</p>
            </article>
            <article className="content-card solution-card">
              <span className="eyebrow">OUR SOLUTION</span>
              <h2>A practical way forward.</h2>
              <p>{s.solution}</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="KEY FEATURES"
            title="Designed for what you need."
          />
          <div className="feature-grid">
            {s.features.map((f) => (
              <div className="feature-item" key={f}>
                <Check size={19} />
                <h3>{f}</h3>
              </div>
            ))}
          </div>
          <h2 className="values-heading">Benefits for your business</h2>
          <ul className="benefits">
            {s.benefits.map((b) => (
              <li key={b}>
                <Check size={18} />
                {b}
              </li>
            ))}
          </ul>
          <h2 className="values-heading">Technology & tools</h2>
          <div className="tags">
            {s.technology.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>
      <Process />
      <section className="section soft-section">
        <div className="container faq-layout">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="A little more clarity."
          />
          <FAQAccordion questions={questions} />
        </div>
      </section>
      <CTA />
    </>
  );
}

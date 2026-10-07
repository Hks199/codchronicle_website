import {
  Target,
  Cpu,
  Layers3,
  ShieldCheck,
  Gauge,
  Handshake,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
const reasons = [
  {
    title: "Business-Focused",
    text: "We understand your business requirements before designing the solution.",
    icon: Target,
  },
  {
    title: "Modern Technology",
    text: "Thoughtful tools and development practices for a changing digital world.",
    icon: Cpu,
  },
  {
    title: "Scalable Solutions",
    text: "A foundation designed to adapt as your business grows.",
    icon: Layers3,
  },
  {
    title: "Security First",
    text: "Security considered throughout the development process.",
    icon: ShieldCheck,
  },
  {
    title: "Performance",
    text: "Fast, optimized experiences that respect your users’ time.",
    icon: Gauge,
  },
  {
    title: "Long-Term Partnership",
    text: "Support, honest conversations and continuous improvement.",
    icon: Handshake,
  },
];
export default function WhyChooseUs() {
  return (
    <section className="section dark-section">
      <div className="container">
        <SectionHeading
          eyebrow="THE DIFFERENCE IS IN THE DETAILS"
          title="Built with purpose. Backed by partnership."
          description="Good technology solves a problem. Great partnerships help you see what comes next."
          center
        />
        <div className="why-grid">
          {reasons.map(({ title, text, icon: Icon }) => (
            <article key={title}>
              <Icon size={27} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

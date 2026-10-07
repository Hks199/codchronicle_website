import SectionHeading from "../common/SectionHeading";
import { processSteps } from "../../data/services";
const descriptions = [
  "Understand your goals.",
  "Map the way forward.",
  "Shape the experience.",
  "Bring the idea to life.",
  "Refine every detail.",
  "Make your next move.",
  "Keep moving forward.",
];
export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="FROM FIRST CONVERSATION TO WHAT’S NEXT"
          title="A clear path to a better outcome."
          center
        />
        <ol className="process-grid">
          {processSteps.map((step, i) => (
            <li key={step}>
              <span className="step-number">0{i + 1}</span>
              <h3>{step}</h3>
              <p>{descriptions[i]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

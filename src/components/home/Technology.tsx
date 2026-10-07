import SectionHeading from "../common/SectionHeading";
import { technologies } from "../../data/technologies";
export default function Technology() {
  return (
    <section className="section soft-section">
      <div className="container">
        <SectionHeading
          eyebrow="THE RIGHT TOOLS FOR THE RIGHT IDEAS"
          title="Modern technology. Practical possibilities."
          center
        />
        <div className="technology-grid">
          {Object.entries(technologies).map(([category, items]) => (
            <div key={category}>
              <h3>{category}</h3>
              <div className="tags">
                {items.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

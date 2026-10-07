import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { services } from "../../data/services";
export default function ServicesPreview() {
  const [selected, setSelected] = useState(0);
  const service = services[selected];
  return (
    <section className="section home-services" id="home-services">
      <div className="container">
        <div className="section-top">
          <SectionHeading
            eyebrow="GOOD IDEAS. GREAT EXECUTION."
            title="One partner. Infinite possibilities."
            description="Your next chapter could be a standout website, a smarter system or a campaign that connects. Let’s make it happen."
          />
          <Link to="/services" className="text-link">
            All our services <ArrowUpRight size={19} />
          </Link>
        </div>
        <div className="service-explorer">
          <div
            className="service-selector"
            role="group"
            aria-label="Explore our expertise"
          >
            {services.slice(0, 6).map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.slug}
                  type="button"
                  className={`service-tile tile-${index} ${selected === index ? "selected" : ""}`}
                  aria-pressed={selected === index}
                  aria-controls="service-spotlight"
                  onClick={() => setSelected(index)}
                >
                  <span className="tile-top">
                    <span className="tile-icon">
                      <Icon size={32} strokeWidth={1.5} />
                    </span>
                    <span className="selector-number">0{index + 1}</span>
                  </span>
                  <span className="tile-title">{item.name}</span>
                  <span className="tile-description">{item.description}</span>
                  <span className="tile-bottom">
                    Explore the possibilities{" "}
                    <span>
                      <ArrowUpRight size={22} />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <article
            className="service-spotlight"
            id="service-spotlight"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="spotlight-copy">
              <span className="eyebrow">
                <Sparkles size={14} /> YOUR IDEA, OUR EXPERTISE
              </span>
              <h3>{service.name}</h3>
            </div>
            <div className="spotlight-features">
              {service.features.slice(0, 4).map((f) => (
                <span key={f}>
                  <Check size={15} />
                  {f}
                </span>
              ))}
            </div>
            <Link className="button" to={`/services/${service.slug}`}>
              Let’s explore <ArrowUpRight size={18} />
              <span className="sr-only">{service.name}</span>
            </Link>
          </article>
        </div>
        <div className="home-extra-services">
          <span>More ways to move forward:</span>
          {services.slice(6).map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.slug} to={`/services/${item.slug}`}>
                <Icon size={19} />
                {item.name}
                <ArrowUpRight size={15} />
              </Link>
            );
          })}
          <Link to="/services">
            Cloud, DevOps & consulting <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

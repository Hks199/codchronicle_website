import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { ProjectMockup } from "../common/PortfolioCard";
import { projects } from "../../data/portfolio";
export default function PortfolioPreview() {
  return (
    <section className="section home-portfolio">
      <div className="container">
        <div className="section-top">
          <SectionHeading
            eyebrow="A LOOK AT THE POSSIBILITIES"
            title="From ‘what if’ to what’s next."
            description="Explore sample concepts across websites, commerce and business software."
          />
          <Link className="text-link" to="/portfolio">
            Explore our portfolio <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="portfolio-grid">
          {projects.slice(0, 3).map((p, index) => (
            <Link className="preview-project" key={p.id} to="/portfolio">
              <ProjectMockup project={p} />
              <div className="project-preview-body">
                <span className="eyebrow">Sample Project · {p.category}</span>
                <h3>
                  {p.name.split(" / ")[0]}{" "}
                  <span className="project-preview-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </h3>
                <p>{p.description}</p>
                <span className="project-preview-index">
                  CONCEPT 0{index + 1}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

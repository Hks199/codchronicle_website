import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/portfolio";
export function ProjectMockup({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div
      className={`project-mockup ${project.theme}`}
      role="img"
      aria-label={`Sample ${project.category.toLowerCase()} interface mockup`}
    >
      <div className="mock-window">
        <div className="mock-top">
          <span>● ● ●</span>
          <span>{project.id.toUpperCase()}®</span>
          <span>Menu ↗</span>
        </div>
        {project.theme === "dashboard" ? (
          <div className="mock-dashboard">
            <div className="mock-sidebar">
              Overview
              <br />
              Workspace
              <br />
              Reports
              <br />
              Settings
            </div>
            <div className="mock-content">
              <small>YOUR WORKSPACE</small>
              <strong>Everything. Connected.</strong>
              <div className="mock-metrics">
                <span>
                  Overview
                  <br />
                  <b>24.8k</b>
                </span>
                <span>
                  Progress
                  <br />
                  <b>86%</b>
                </span>
              </div>
              <div className="mock-chart">
                {[30, 50, 40, 75, 55, 90, 70, 100].map((v, i) => (
                  <i key={i} style={{ height: `${v}%` }} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mock-editorial">
            <small>
              {project.theme === "shop"
                ? "LESS, BUT BETTER."
                : "A NEW PERSPECTIVE."}
            </small>
            <strong>
              {project.theme === "shop"
                ? "Made for\nthe everyday."
                : "Ideas with\nreal impact."}
            </strong>
            <span className="mock-pill">Explore the collection ↗</span>
            <div className="mock-sculpture" />
          </div>
        )}
      </div>
    </div>
  );
}
export default function PortfolioCard({
  project,
  onView,
}: {
  project: (typeof projects)[number];
  onView: (project: (typeof projects)[number]) => void;
}) {
  return (
    <article className="portfolio-card">
      <ProjectMockup project={project} />
      <div className="portfolio-info">
        <span className="eyebrow">Sample Project · {project.category}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <button className="text-link" onClick={() => onView(project)}>
          View Project <ArrowUpRight size={17} />
        </button>
      </div>
    </article>
  );
}

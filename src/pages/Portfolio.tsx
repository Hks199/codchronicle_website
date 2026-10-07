import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import PortfolioCard, {
  ProjectMockup,
} from "../components/common/PortfolioCard";
import Button from "../components/common/Button";
import { projects } from "../data/portfolio";
import CTA from "../components/home/CTA";
export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(
    null,
  );
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (selected) dialog.current?.showModal();
    else dialog.current?.close();
  }, [selected]);
  return (
    <>
      <SEO
        title="Portfolio & Sample Projects"
        description="Explore clearly labeled sample website, e-commerce, ERP, CRM, custom software and digital marketing concepts."
      />
      <PageHero
        eyebrow="Portfolio"
        title="A little inspiration for your next big idea."
        description="Explore the possibilities through our sample project concepts. Every project here is demo content, ready to be replaced with approved work."
      />
      <section className="section">
        <div className="container">
          <div className="filter-row" aria-label="Filter projects">
            {[
              "All",
              "Website",
              "E-commerce",
              "ERP",
              "CRM",
              "Custom Software",
              "Digital Marketing",
            ].map((c) => (
              <button
                key={c}
                className={filter === c ? "selected" : ""}
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="filter-count" role="status">
            {
              projects.filter((p) => filter === "All" || p.category === filter)
                .length
            }{" "}
            sample projects
          </p>
          <div className="portfolio-grid">
            {projects
              .filter((p) => filter === "All" || p.category === filter)
              .map((project) => (
                <PortfolioCard
                  key={project.id}
                  project={project}
                  onView={setSelected}
                />
              ))}
          </div>
        </div>
      </section>
      <dialog
        ref={dialog}
        className="project-dialog"
        onCancel={() => setSelected(null)}
        onClose={() => setSelected(null)}
        aria-labelledby="project-title"
      >
        {selected && (
          <>
            <button
              className="dialog-close"
              aria-label="Close project"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>
            <ProjectMockup project={selected} />
            <div className="dialog-body">
              <span className="eyebrow">
                Sample Project · {selected.category}
              </span>
              <h2 id="project-title">{selected.name}</h2>
              <p>{selected.description}</p>
              <p>
                This is an illustrative design concept. No client, results or
                live product are claimed.
              </p>
              <div className="tags">
                {selected.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div onClick={() => setSelected(null)}>
                <Button to="/contact">Discuss a similar project</Button>
              </div>
            </div>
          </>
        )}
      </dialog>
      <CTA />
    </>
  );
}

import { useState } from "react";
import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import StaticForm from "../components/common/StaticForm";
import type { Field } from "../components/common/StaticForm";
import JobCard from "../components/common/JobCard";
import { jobs } from "../data/jobs";
export default function Careers() {
  const [position, setPosition] = useState("");
  function apply(title: string) {
    setPosition(title);
    requestAnimationFrame(() => {
      document.getElementById("application")?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
      document.getElementById("career-name")?.focus({ preventScroll: true });
    });
  }
  const fields: Field[] = [
    { name: "name", label: "Name", required: true, min: 2, max: 80 },
    { name: "email", label: "Email", type: "email", required: true, max: 254 },
    { name: "phone", label: "Phone", type: "tel", required: true, max: 30 },
    {
      name: "position",
      label: "Position",
      type: "select",
      required: true,
      options: jobs.map((j) => j.title),
      defaultValue: position,
    },
    { name: "experience", label: "Experience", required: true, max: 100 },
    { name: "resume", label: "Resume", type: "file", required: true },
    { name: "message", label: "Message", type: "textarea", min: 10, max: 2000 },
  ];
  return (
    <>
      <SEO
        title="Careers"
        description="Explore roles in development, design, marketing and sales, and get to know our approach to building together."
      />
      <PageHero
        eyebrow="Careers"
        title="Build the Future With Us"
        description="Bring your curiosity, your craft and your ideas. Create useful things with people who care about the details."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="FIND YOUR NEXT CHAPTER"
            title="Room for your kind of talent."
            description="Demo Content · These roles illustrate possible opportunities and are not confirmed job openings."
          />
          <div className="job-grid">
            {jobs.map((job) => (
              <JobCard key={job.title} job={job} onApply={apply} />
            ))}
          </div>
        </div>
      </section>
      <section className="section soft-section" id="application">
        <div className="container form-layout">
          <SectionHeading
            eyebrow="INTRODUCE YOURSELF"
            title="Great work starts with a conversation."
            description="Tell us about your experience and attach your resume. Your application will be emailed to our team."
          />
          <div className="form-panel">
            <StaticForm key={position} fields={fields} kind="career" />
          </div>
        </div>
      </section>
    </>
  );
}

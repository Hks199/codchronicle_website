import { MapPin, Clock3, ArrowUpRight } from "lucide-react";
import { jobs } from "../../data/jobs";
export default function JobCard({
  job,
  onApply,
}: {
  job: (typeof jobs)[number];
  onApply: (title: string) => void;
}) {
  return (
    <article className="job-card">
      <span className="eyebrow">SAMPLE ROLE</span>
      <h3>{job.title}</h3>
      <div className="job-meta">
        <span>
          <MapPin size={14} />
          {job.location}
        </span>
        <span>
          <Clock3 size={14} />
          {job.type}
        </span>
      </div>
      <p>{job.description}</p>
      <p className="experience">Experience: {job.experience}</p>
      <div className="tags">
        {job.skills.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <button className="text-link" onClick={() => onApply(job.title)}>
        Apply Now <ArrowUpRight size={17} />
      </button>
    </article>
  );
}

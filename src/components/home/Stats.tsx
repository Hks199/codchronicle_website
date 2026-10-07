import { stats } from "../../data/stats";
export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <p className="demo-note">
          Demo Content · Illustrative values, configurable before publication.
        </p>
      </div>
    </section>
  );
}

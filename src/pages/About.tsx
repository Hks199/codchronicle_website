import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import AboutPreview from "../components/home/AboutPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CTA from "../components/home/CTA";
export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Our approach brings digital marketing, software development and business automation together around your goals."
      />
      <PageHero
        eyebrow="About us"
        title="Connected thinking. Shared ambition."
        description="We believe the best digital solutions start with understanding the people and businesses behind them."
      />
      <AboutPreview />
      <section className="section soft-section">
        <div className="container">
          <div className="mission-grid">
            <article className="content-card">
              <span className="eyebrow">OUR MISSION</span>
              <h2>Make digital progress practical.</h2>
              <p>
                Help businesses establish a strong digital presence and improve
                their operations with clear strategy and purposeful technology.
              </p>
            </article>
            <article className="content-card">
              <span className="eyebrow">OUR VISION</span>
              <h2>A better way to grow.</h2>
              <p>
                Build lasting partnerships that make modern marketing, software
                and business automation more useful and accessible.
              </p>
            </article>
          </div>
          <h2 className="values-heading">The values behind our work</h2>
          <div className="tags values">
            {[
              "Innovation",
              "Quality",
              "Transparency",
              "Customer First",
              "Security",
              "Long-Term Partnership",
            ].map((v) => (
              <span key={v}>{v}</span>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <CTA />
    </>
  );
}

import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import ServiceCard from "../components/common/ServiceCard";
import { services } from "../data/services";
import Process from "../components/home/Process";
import CTA from "../components/home/CTA";
export default function Services() {
  return (
    <>
      <SEO
        title="Digital Marketing & Technology Services"
        description="Explore digital marketing, websites, e-commerce, ERP, CRM, custom software, mobile apps and UI/UX design services."
      />
      <PageHero
        eyebrow="Our services"
        title="Your ambitions. Our expertise."
        description="From building your presence to simplifying your operations, find the right solution for your next chapter."
      />
      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <div className="consulting-strip">
            <h3>Looking at the bigger picture?</h3>
            <p>
              Cloud Solutions, DevOps and IT Consulting help connect your
              technology choices to your business priorities.
            </p>
          </div>
        </div>
      </section>
      <Process />
      <CTA />
    </>
  );
}

import SEO from "../components/common/SEO";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Process from "../components/home/Process";
import Technology from "../components/home/Technology";
import PortfolioPreview from "../components/home/PortfolioPreview";
import FAQ from "../components/home/FAQ";
import CTA from "../components/home/CTA";
import { faqs } from "../data/faqs";
import "../home.css";
export default function Home() {
  return (
    <div className="homepage">
      <SEO
        title="Digital Marketing & Software Solutions Company"
        description="Digital marketing, websites, e-commerce, ERP, CRM and custom software for your next stage of growth."
        questions={faqs}
      />
      <Hero />
      <Stats />
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <Process />
      <PortfolioPreview />
      <Technology />
      <FAQ />
      <CTA />
    </div>
  );
}

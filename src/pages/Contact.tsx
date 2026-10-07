import { MessageCircle, Sparkles } from "lucide-react";
import SEO from "../components/common/SEO";
import PageHero from "../components/common/PageHero";
import StaticForm from "../components/common/StaticForm";
import type { Field } from "../components/common/StaticForm";
import SocialLinks from "../components/common/SocialLinks";
import { whatsappUrl } from "../config/company";
const fields: Field[] = [
  { name: "name", label: "Name", required: true, min: 2, max: 80 },
  { name: "email", label: "Email", type: "email", required: true, max: 254 },
  { name: "phone", label: "Phone", type: "tel", required: true, max: 30 },
  { name: "company", label: "Company", max: 120 },
  {
    name: "service",
    label: "Service",
    type: "select",
    required: true,
    options: [
      "Digital Marketing",
      "Website Development",
      "E-commerce Development",
      "ERP",
      "CRM",
      "Custom Software",
      "Mobile App",
      "Other",
    ],
  },
  {
    name: "budget",
    label: "Budget",
    type: "select",
    required: true,
    options: [
      "Under ₹25,000",
      "₹25,000 – ₹50,000",
      "₹50,000 – ₹1,00,000",
      "₹1,00,000+",
      "Not Sure",
    ],
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
    min: 10,
    max: 2000,
  },
];
export default function Contact() {
  return (
    <>
      <SEO
        title="Contact & Free Consultation"
        description="Tell the CodeChronicle team about your digital marketing, website or software goals."
      />
      <PageHero
        eyebrow="Let’s talk"
        title="A small conversation. A big possibility."
        description="Whether you have a clear brief or the beginning of an idea, your next chapter starts here."
      />
      <section className="section">
        <div className="container form-layout">
          <div className="contact-info">
            <span className="icon-box">
              <MessageCircle />
            </span>
            <h2>Tell us what you have in mind.</h2>
            <p>
              A new website? A smarter workflow? A fresh approach to growth?
              Let’s explore the possibilities.
            </p>
            <div className="contact-tip">
              <Sparkles size={22} />
              <div>
                <h3>A good starting point</h3>
                <p>
                  Share your goals, current challenges and ideal timeline. The
                  more context, the clearer the next step.
                </p>
              </div>
            </div>
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp <MessageCircle size={17} />
              </a>
            )}
            <SocialLinks />
          </div>
          <div className="form-panel">
            <h2>Let’s get to know your project</h2>
            <StaticForm fields={fields} kind="contact" />
          </div>
        </div>
      </section>
    </>
  );
}

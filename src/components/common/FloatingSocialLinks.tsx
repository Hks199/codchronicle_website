import WhatsAppButton from "./WhatsAppButton";
import InstagramButton from "./InstagramButton";
import { companyConfig, whatsappUrl } from "../../config/company";

export default function FloatingSocialLinks() {
  return (
    <aside className="floating-social-links" aria-label="Connect with us">
      <span className="floating-social-item">
        <InstagramButton />
        <span className="floating-social-tooltip" aria-hidden="true">
          {companyConfig.instagram
            ? "Follow us on Instagram"
            : "Instagram profile coming soon"}
        </span>
      </span>
      <span className="floating-social-item">
        <WhatsAppButton />
        <span className="floating-social-tooltip" aria-hidden="true">
          {whatsappUrl
            ? "Chat with us on WhatsApp"
            : "WhatsApp chat coming soon"}
        </span>
      </span>
    </aside>
  );
}

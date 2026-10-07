import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../../config/company";
export default function WhatsAppButton() {
  return whatsappUrl ? (
    <a
      className="floating-social-button whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={25} />
    </a>
  ) : (
    <button
      className="floating-social-button whatsapp unavailable"
      type="button"
      disabled
      aria-label="WhatsApp chat coming soon"
      title="WhatsApp chat coming soon"
    >
      <MessageCircle size={25} />
    </button>
  );
}

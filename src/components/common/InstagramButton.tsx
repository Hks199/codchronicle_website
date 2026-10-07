import { Instagram } from "lucide-react";
import { companyConfig } from "../../config/company";

export default function InstagramButton() {
  return companyConfig.instagram ? (
    <a
      className="floating-social-button instagram"
      href={companyConfig.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Instagram"
      title="Follow us on Instagram"
    >
      <Instagram size={25} />
    </a>
  ) : (
    <button
      className="floating-social-button instagram unavailable"
      type="button"
      disabled
      aria-label="Instagram profile coming soon"
      title="Instagram profile coming soon"
    >
      <Instagram size={25} />
    </button>
  );
}

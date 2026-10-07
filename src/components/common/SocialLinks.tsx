import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { companyConfig, whatsappUrl } from "../../config/company";
const links = [
  { name: "Instagram", url: companyConfig.instagram, icon: Instagram },
  { name: "Facebook", url: companyConfig.facebook, icon: Facebook },
  { name: "LinkedIn", url: companyConfig.linkedin, icon: Linkedin },
  { name: "YouTube", url: companyConfig.youtube, icon: Youtube },
  { name: "WhatsApp", url: whatsappUrl, icon: MessageCircle },
];
export default function SocialLinks() {
  return (
    <div className="social-links">
      {links
        .filter((link) => link.url)
        .map(({ name, url, icon: Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <Icon size={19} />
          </a>
        ))}
    </div>
  );
}

import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { companyConfig } from "../../config/company";
import { services } from "../../data/services";
import { navigation } from "./Navbar";
import SocialLinks from "../common/SocialLinks";
import Brand from "../common/Brand";
export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand">
            <Brand />
          </Link>
          <p>
            Connecting digital ambition with technology that makes a difference.
          </p>
          <SocialLinks />
        </div>
        <div>
          <h3>Explore</h3>
          {navigation.map(([label, to]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Our expertise</h3>
          {services.slice(0, 6).map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`}>
              {s.name}
            </Link>
          ))}
        </div>
        <div>
          <h3>Let’s build something.</h3>
          <p>Have an idea? Let’s find the right way forward, together.</p>
          <Link className="text-link" to="/contact">
            Start a conversation <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {companyConfig.name}. All rights
          reserved.
        </span>
        <div>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

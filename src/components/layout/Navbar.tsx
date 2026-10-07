import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Brand from "../common/Brand";
import "./Navbar.css";
export const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 16);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);
  return (
    <header
      className={`navbar premium-navbar ${scrolled ? "scrolled" : ""} ${open ? "menu-is-open" : ""}`}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
        }
      }}
    >
      <div className="container nav-shell">
        <div className="nav-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <Brand />
          </Link>
          <nav aria-label="Main navigation" className="desktop-nav">
            {navigation.map(([label, to]) => (
              <NavLink key={to} to={to} end={to === "/"}>
                {label}
              </NavLink>
            ))}
          </nav>
          <Link className="nav-cta" to="/contact">
            <span className="nav-cta-copy">
              <small>LET'S BUILD WHAT'S NEXT</small>Get Free Consultation
            </span>
            <span className="nav-cta-icon">
              <ArrowUpRight size={20} />
            </span>
          </Link>
          <button
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          key={pathname}
          id="mobile-menu"
          aria-label="Mobile navigation"
          className={`mobile-menu ${open ? "open" : ""}`}
          inert={!open}
        >
          {navigation.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
            >
              <span className="mobile-link-label">{label}</span>
              <ArrowUpRight size={18} />
            </NavLink>
          ))}
          <Link to="/contact" className="button" onClick={() => setOpen(false)}>
            Get Free Consultation <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

import {
  ArrowUpRight,
  TrendingUp,
  Users,
  Zap,
  Check,
  Sparkles,
  ArrowDown,
  Code2,
  Layers3,
  Globe,
} from "lucide-react";
import Button from "../common/Button";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-label">
            <span className="hero-status-dot" /> BIG IDEAS DESERVE A BIGGER
            DIGITAL FUTURE
          </div>
          <h1>
            <span>Digital Growth</span>
            <span>Meets Powerful</span>
            <em>
              Technology.
              <Sparkles
                className="headline-spark"
                size={48}
                strokeWidth={1.5}
              />
            </em>
          </h1>
          <p>
            Stand out online. Build something brilliant. Make business simpler.
            We bring digital marketing and powerful software together to move
            your next big idea forward.
          </p>
          <div className="hero-actions">
            <Button to="/contact">Get Free Consultation</Button>
            <Button to="/services" secondary>
              Explore Our Services
            </Button>
          </div>
          <div className="hero-note">
            <span>
              <Check size={15} /> Strategy meets execution
            </span>
            <span>
              <Check size={15} /> Built around your business
            </span>
          </div>
          <a className="hero-scroll" href="#home-services">
            <span>
              <ArrowDown size={17} />
            </span>
            Scroll into your next chapter
          </a>
        </div>
        <div
          className="hero-visual"
          role="img"
          aria-label="Illustrative digital ecosystem connecting marketing, software and automation. Demo content."
        >
          <div className="visual-grid" />
          <span className="visual-label">THE FUTURE LOOKS BRIGHT.</span>
          <div className="growth-sculpture" aria-hidden="true">
            <div className="sculpture-halo" />
            <div className="sculpture-ring ring-a" />
            <div className="sculpture-ring ring-b" />
            <div className="sculpture-ring ring-c" />
            <div className="sculpture-core">
              <Code2 size={55} strokeWidth={1.2} />
            </div>
            <span className="sculpture-dot dot-a" />
            <span className="sculpture-dot dot-b" />
            <span className="sculpture-dot dot-c" />
          </div>
          <div className="visual-sticker">
            <Sparkles size={17} /> IDEAS INTO IMPACT
          </div>
          <div className="floating-card growth">
            <span className="float-icon">
              <TrendingUp size={24} />
            </span>
            <div>
              <small>Digital growth</small>
              <strong>Make your next move.</strong>
            </div>
            <ArrowUpRight size={18} />
          </div>
          <div className="floating-card customers">
            <span className="float-icon blue">
              <Users size={24} />
            </span>
            <div>
              <small>Marketing that connects</small>
              <strong>Find your people.</strong>
            </div>
          </div>
          <div className="floating-card automation">
            <span className="float-icon purple">
              <Zap size={24} />
            </span>
            <div>
              <small>Smarter systems</small>
              <strong>Less friction. More flow.</strong>
            </div>
          </div>
          <div className="hero-mini-dashboard">
            <div>
              <span className="mini-dashboard-icon">
                <Layers3 size={18} />
              </span>
              <strong>Business Dashboard</strong>
              <span className="demo-label">DEMO</span>
            </div>
            <div className="mini-dashboard-chart">
              {[30, 45, 35, 60, 52, 80, 68, 100].map((value, index) => (
                <i key={index} style={{ height: `${value}%` }} />
              ))}
            </div>
            <span>
              Built for the bigger picture <Globe size={13} />
            </span>
          </div>
          <span className="visual-footnote">
            Marketing + technology. Connected by design.
          </span>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="container">
          <span>DREAM BIG. BUILD SMART.</span>
          <span>
            <Sparkles size={22} /> DIGITAL MARKETING
          </span>
          <span>
            <Sparkles size={22} /> SOFTWARE DEVELOPMENT
          </span>
          <span>
            <Sparkles size={22} /> BUSINESS AUTOMATION
          </span>
        </div>
      </div>
    </section>
  );
}

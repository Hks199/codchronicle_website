import { Code2, Compass, Sparkles, ArrowUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
export default function AboutPreview() {
  return (
    <section className="section">
      <div className="container about-layout">
        <div className="about-art">
          <div className="art-grid" />
          <span className="art-caption">THE BIG PICTURE</span>
          <div className="art-tile tile-marketing">
            <Compass />
            <span>Digital strategy</span>
            <ArrowUpRight size={16} />
          </div>
          <div className="art-tile tile-code">
            <Code2 size={40} />
            <strong>
              Ideas into
              <br />
              possibilities.
            </strong>
          </div>
          <div className="art-tile tile-growth">
            <Sparkles />
            <span>Built for growth</span>
          </div>
          <span className="art-bottom">
            Connected thinking. Lasting impact.
          </span>
        </div>
        <div>
          <SectionHeading
            eyebrow="MORE THAN A SERVICE PROVIDER"
            title="Your Technology Partner for Digital Growth"
            description="Great things happen when your strategy and technology work together. We bring digital marketing, software development, business automation and technology consulting under one roof."
          />
          <p className="body-copy">
            From your first digital impression to the systems behind your
            business, we help you build a stronger presence and better ways of
            working.
          </p>
          <div className="about-points">
            <span>
              <i /> Thoughtful strategy
            </span>
            <span>
              <i /> Purpose-built solutions
            </span>
            <span>
              <i /> Clear communication
            </span>
            <span>
              <i /> Long-term thinking
            </span>
          </div>
          <Button to="/about">Learn More About Us</Button>
        </div>
      </div>
    </section>
  );
}

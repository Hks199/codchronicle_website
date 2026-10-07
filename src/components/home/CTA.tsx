import Button from "../common/Button";
import { Sparkles } from "lucide-react";
export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <div>
            <span className="eyebrow">
              <Sparkles size={14} /> YOUR NEXT BIG THING
            </span>
            <h2>
              Let’s build what’s next.
              <br />
              <span>Together.</span>
            </h2>
            <p>Your goals. Our expertise. A whole world of possibility.</p>
          </div>
          <Button to="/contact">Get Free Consultation</Button>
        </div>
      </div>
    </section>
  );
}

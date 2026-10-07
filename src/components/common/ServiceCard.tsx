import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
export default function ServiceCard({
  service,
  index = 0,
}: {
  service: (typeof services)[number];
  index?: number;
}) {
  const Icon = service.icon;
  return (
    <article className="service-card">
      <div className="flex items-center justify-between">
        <span className="icon-box">
          <Icon size={25} />
        </span>
        <span className="card-number">0{index + 1}</span>
      </div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <Link to={`/services/${service.slug}`} className="text-link">
        Learn More <span className="sr-only">about {service.name}</span>
        <ArrowUpRight size={17} />
      </Link>
    </article>
  );
}

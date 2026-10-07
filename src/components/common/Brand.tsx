import { companyConfig } from "../../config/company";

export default function Brand() {
  return (
    <>
      <img
        className="brand-logo"
        src={companyConfig.logo}
        alt={`${companyConfig.name} logo`}
        width={40}
        height={48}
        decoding="async"
        fetchPriority="high"
      />
      <span>
        {companyConfig.name}
        <small>DIGITAL & TECHNOLOGY</small>
      </span>
    </>
  );
}

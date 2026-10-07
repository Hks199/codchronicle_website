import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { companyConfig } from "../../config/company";
import type { faqs } from "../../data/faqs";
export default function SEO({
  title,
  description,
  service,
  questions,
  noindex = false,
}: {
  title: string;
  description: string;
  service?: string;
  questions?: typeof faqs;
  noindex?: boolean;
}) {
  const { pathname } = useLocation();
  const url = companyConfig.website + (pathname === "/" ? "/" : pathname);
  const fullTitle = `${title} | ${companyConfig.name}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": `${companyConfig.website}/#organization`,
      name: companyConfig.name,
      url: companyConfig.website,
      logo: new URL(companyConfig.logo, companyConfig.website).href,
    },
    {
      "@type": "WebSite",
      name: companyConfig.name,
      url: companyConfig.website,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${companyConfig.website}/`,
        },
        ...(pathname === "/"
          ? []
          : [{ "@type": "ListItem", position: 2, name: title, item: url }]),
      ],
    },
  ];
  if (service)
    graph.push({
      "@type": "Service",
      name: service,
      description,
      provider: { "@id": `${companyConfig.website}/#organization` },
      url,
    });
  if (questions)
    graph.push({
      "@type": "FAQPage",
      mainEntity: questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: { "@type": "Answer", text: q.answer },
      })),
    });
  useEffect(() => {
    document.title = fullTitle;
    const values: Record<string, string> = {
      description,
      robots: noindex ? "noindex,follow" : "index,follow",
      "og:title": fullTitle,
      "og:description": description,
      "og:url": url,
      "og:type": "website",
      "og:site_name": companyConfig.name,
      "og:image": `${companyConfig.website}/social-card.png`,
      "twitter:card": "summary_large_image",
      "twitter:title": fullTitle,
      "twitter:description": description,
      "twitter:image": `${companyConfig.website}/social-card.png`,
    };
    for (const [key, value] of Object.entries(values)) {
      const attribute = key.startsWith("og:") ? "property" : "name";
      let element = document.head.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${key}"]`,
      );
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.append(element);
      }
      element.content = value;
    }
    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = url;
  }, [fullTitle, description, url, noindex]);
  return (
    <script type="application/ld+json">
      {JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}
    </script>
  );
}

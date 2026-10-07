import {
  Megaphone,
  Globe,
  ShoppingBag,
  Layers3,
  Users,
  Code2,
  Smartphone,
  PenTool,
} from "lucide-react";
export const services = [
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    icon: Megaphone,
    description:
      "Turn attention into opportunity with marketing that moves your business forward.",
    features: [
      "SEO",
      "Social Media Marketing",
      "Google Ads",
      "Meta Ads",
      "Content Marketing",
      "Lead Generation",
      "Marketing Strategy",
    ],
    problem:
      "Your audience is online. Reaching the right people with a consistent message takes a clear strategy.",
    solution:
      "Connect search, content and paid campaigns around your business goals and measure what matters.",
    benefits: [
      "Build relevant visibility",
      "Reach high-intent audiences",
      "Make informed marketing decisions",
    ],
    technology: ["SEO", "Google Ads", "Meta Ads", "Analytics"],
  },
  {
    slug: "website-development",
    name: "Website Development",
    icon: Globe,
    description:
      "Fast, thoughtful and SEO-friendly websites built to make a lasting first impression.",
    features: [
      "Corporate Websites",
      "Landing Pages",
      "Business Websites",
      "Portfolio Websites",
      "Responsive Design",
      "Technical SEO",
    ],
    problem:
      "An outdated or slow website can make it harder for visitors to understand and trust your business.",
    solution:
      "Create a clear, accessible and responsive experience that turns your website into a useful business asset.",
    benefits: [
      "Communicate your value clearly",
      "Improve the mobile experience",
      "Make content easier to discover",
    ],
    technology: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    slug: "ecommerce-development",
    name: "E-commerce Development",
    icon: ShoppingBag,
    description:
      "Seamless shopping experiences. Scalable stores. More room for your business to grow.",
    features: [
      "Online Stores",
      "Product Management",
      "Shopping Cart",
      "Checkout",
      "Payment Gateway Integration",
      "Order Management",
    ],
    problem:
      "Disconnected catalogs and complicated checkouts add friction for customers and store teams.",
    solution:
      "Plan an easy-to-navigate store with clear product information and a considered buying journey.",
    benefits: [
      "Simplify product discovery",
      "Streamline store operations",
      "Build a foundation for growth",
    ],
    technology: ["React", "Node.js", "PostgreSQL"],
  },
  {
    slug: "erp-solutions",
    name: "ERP Solutions",
    icon: Layers3,
    description:
      "Bring your people, processes and business operations together in one place.",
    features: [
      "Inventory",
      "Sales",
      "Purchase",
      "Finance",
      "HR",
      "Reports",
      "Business Operations",
    ],
    problem:
      "Separate spreadsheets and systems make it difficult to see how your business is performing.",
    solution:
      "Design connected workflows around your teams, reporting needs and day-to-day operations.",
    benefits: [
      "Reduce duplicate work",
      "Improve operational visibility",
      "Standardize business processes",
    ],
    technology: ["Angular", "NestJS", "PostgreSQL", "Docker"],
  },
  {
    slug: "crm-solutions",
    name: "CRM Solutions",
    icon: Users,
    description:
      "Better relationships start with a clearer picture of your leads and customers.",
    features: [
      "Leads",
      "Customers",
      "Sales Pipeline",
      "Follow-ups",
      "Customer Management",
      "Reports",
    ],
    problem:
      "Scattered contact records and missed follow-ups make customer relationships harder to manage.",
    solution:
      "Organize your sales workflow and give your team a shared view of customer interactions.",
    benefits: [
      "Keep follow-ups organized",
      "Understand your sales pipeline",
      "Create consistent customer experiences",
    ],
    technology: ["React", "Node.js", "MongoDB"],
  },
  {
    slug: "custom-software",
    name: "Custom Software",
    icon: Code2,
    description:
      "Purpose-built software that fits your business. Not the other way around.",
    features: [
      "Business Automation",
      "Custom Dashboards",
      "Internal Business Applications",
      "API Integration",
      "Workflow Automation",
    ],
    problem:
      "Off-the-shelf tools do not always fit the way your business needs to work.",
    solution:
      "Translate your requirements into maintainable tools and workflows designed for your team.",
    benefits: [
      "Automate repetitive tasks",
      "Connect existing tools",
      "Adapt as your needs evolve",
    ],
    technology: ["React", "Express", "PostgreSQL", "AWS"],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    icon: Smartphone,
    description:
      "Intuitive Android and iOS experiences that bring your business closer to customers.",
    features: [
      "Android and iOS",
      "Product Strategy",
      "Accessible Interfaces",
      "Release Planning",
    ],
    problem:
      "Customers need a consistent experience wherever they interact with your business.",
    solution:
      "Plan a mobile experience around real user needs and clear product priorities.",
    benefits: [
      "Reach mobile audiences",
      "Simplify everyday tasks",
      "Build consistent experiences",
    ],
    technology: ["Mobile UI", "Cloud Solutions"],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    icon: PenTool,
    description:
      "Make every interaction count with clear, beautiful and human-centered design.",
    features: [
      "User Research",
      "Wireframes",
      "Prototypes",
      "Design Systems",
      "Accessibility",
    ],
    problem:
      "Confusing navigation and inconsistent interfaces prevent people from completing their goals.",
    solution:
      "Use research, thoughtful interaction patterns and clear visual systems to reduce friction.",
    benefits: [
      "Make products easier to use",
      "Create a consistent identity",
      "Validate ideas before development",
    ],
    technology: ["Design Systems", "Prototyping", "Accessibility"],
  },
];
export const processSteps = [
  "Discover",
  "Plan",
  "Design",
  "Develop",
  "Test",
  "Launch",
  "Support",
];

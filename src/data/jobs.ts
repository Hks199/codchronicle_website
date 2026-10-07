export const jobs = [
  {
    title: "Frontend Developer",
    experience: "1–3 years",
    skills: ["React", "TypeScript", "CSS"],
    description:
      "Build accessible, responsive experiences with thoughtful components.",
  },
  {
    title: "Backend Developer",
    experience: "2–4 years",
    skills: ["Node.js", "Databases", "Security"],
    description:
      "Design reliable services and well-structured business systems.",
  },
  {
    title: "Full Stack Developer",
    experience: "2–5 years",
    skills: ["React", "Node.js", "SQL"],
    description:
      "Connect polished interfaces with maintainable application architecture.",
  },
  {
    title: "UI/UX Designer",
    experience: "1–3 years",
    skills: ["Research", "Prototyping", "Design Systems"],
    description:
      "Turn user needs into clear and considered product experiences.",
  },
  {
    title: "SEO Specialist",
    experience: "1–3 years",
    skills: ["Technical SEO", "Content", "Analytics"],
    description: "Help businesses build sustainable visibility in search.",
  },
  {
    title: "Digital Marketing Executive",
    experience: "1–3 years",
    skills: ["Google Ads", "Meta Ads", "Content"],
    description: "Plan and improve campaigns across digital channels.",
  },
  {
    title: "Sales Executive",
    experience: "1–3 years",
    skills: ["Communication", "CRM", "Business Development"],
    description: "Understand business needs and build lasting relationships.",
  },
].map((job) => ({
  ...job,
  location: "Location to be confirmed",
  type: "Full-time",
}));

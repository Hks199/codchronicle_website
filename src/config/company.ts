const env = import.meta.env;
export function publicUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol)
      ? url.href.replace(/\/$/, "")
      : undefined;
  } catch {
    return undefined;
  }
}
export const companyConfig = {
  name: env.VITE_APP_NAME?.trim() || "CodeChronicle",
  logo: "/codechronicle__logo-web.png",
  tagline: "Digital & Technology Solutions",
  website: publicUrl(env.VITE_SITE_URL) || "https://example.com",
  whatsapp: /^\d{7,15}$/.test(env.VITE_WHATSAPP_NUMBER || "")
    ? env.VITE_WHATSAPP_NUMBER
    : undefined,
  instagram: publicUrl(env.VITE_INSTAGRAM_URL),
  facebook: publicUrl(env.VITE_FACEBOOK_URL),
  linkedin: publicUrl(env.VITE_LINKEDIN_URL),
  youtube: publicUrl(env.VITE_YOUTUBE_URL),
};
export const whatsappUrl = companyConfig.whatsapp
  ? `https://wa.me/${companyConfig.whatsapp}?text=${encodeURIComponent("Hello, I would like to know more about your digital marketing and software development services.")}`
  : undefined;

import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/logo.png",
  siteUrl: "https://devscribe.me/",
  siteName: "Devscribe",
  siteDescription:
    "One stop solution for new technologies and simplified web items.",
  siteThumbnail: "/logo.png",
  nav: [
    { label: "Home", href: "/" },
    { label: "All Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
};
export default siteConfig;

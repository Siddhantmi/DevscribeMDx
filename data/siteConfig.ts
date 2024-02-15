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
    { label: "Posts", href: "/posts" },
    
    { label: "Tags", href: "/tags" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://youtube.com/",
    twitter: "https://twitter.com/DevScribeHQ",
    linkedin: "https://www.linkedin.com/company/devscribe/",
    instagram: "https://www.instagram.com/",
  },
};
export default siteConfig;

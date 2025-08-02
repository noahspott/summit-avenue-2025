import { URL } from "./business";

export type SeoMeta = {
  title: string;
  description: string;
  url?: string;
  image?: string;
};

export const defaultSeo: SeoMeta = {
  title: "Summit Avenue Web Solutions",
  description: "",
  url: URL,
  image: "/images/open-graph.png",
};

export const seo: Record<string, SeoMeta> = {
  home: {
    title: "Website Design and Development | Summit Avenue Web Solutions",
    description: "",
    url: URL,
  },
  contact: {
    title: "Contact | Summit Avenue Web Solutions",
    description: "Let's talk about your website.",
    url: `${URL}/contact`,
  },
  notFound: {
    title: "404 Not Found | Summit Avenue Web Solutions",
    description: "404 Not Found",
    url: `${URL}/404`,
  },
};

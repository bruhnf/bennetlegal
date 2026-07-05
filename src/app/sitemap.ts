import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services, insights, successStories, differentiators, team } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes = ["", "/about", "/insights", "/portal", "/privacy", "/terms"];

  const detailRoutes = [
    ...services.map((s) => `/services/${s.id}`),
    ...differentiators.map((d) => `/advantages/${d.slug}`),
    ...insights.map((i) => `/insights/${i.slug}`),
    ...successStories.map((c) => `/case-studies/${c.slug}`),
    ...team.map((m) => `/team/${m.slug}`),
  ];

  return [...staticRoutes, ...detailRoutes].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : path.includes("/") && path.split("/").length > 2 ? 0.6 : 0.7,
  }));
}


import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description:
    "Explore practical guides from Z Code Crafts on digital strategy, website development, branding, and digital products.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Resources & Insights | Z Code Crafts",
    description:
      "Practical guides for websites, branding, and digital products from Z Code Crafts.",
    url: "https://zcodecrafts.dev/resources",
    type: "website",
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}

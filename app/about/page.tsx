import PlaceholderPage from "@/components/PlaceholderPage";
import { buildSeo } from "@/lib/seo";
import content from "./content";

export const metadata = buildSeo({ ...content.seo, path: "/about" });

export default function AboutPage() {
  return <PlaceholderPage title={content.heading} description={content.body} />;
}

import { buildSeo } from "@/lib/seo";
import { colors } from "@/theme/colors";
import homeContent from "./content";
import HeroSection from "./sections/HeroSection";
import FeatureSection from "./sections/FeatureSection";
import FaqSection from "./sections/FaqSection";
import DownloadSection from "./sections/DownloadSection";
import { sectionIds } from "./sections/ids";
import SectionIndicator, { type IndicatorStep } from "@/components/SectionIndicator";

export const metadata = buildSeo({ ...homeContent.seo, path: "/" });

const indicatorSteps: IndicatorStep[] = [
  { id: sectionIds.hero, label: homeContent.indicator.hero },
  { id: sectionIds.teasers, label: homeContent.indicator.teasers },
  { id: sectionIds.restaurants, label: homeContent.indicator.restaurants },
  { id: sectionIds.faq, label: homeContent.indicator.faq },
  { id: sectionIds.download, label: homeContent.indicator.download, tone: "light" },
];

export default function HomePage() {
  return (
    <main>
      <SectionIndicator steps={indicatorSteps} />
      <HeroSection />
      <FeatureSection
        id={sectionIds.teasers}
        nextId={sectionIds.restaurants}
        background={colors.cream}
        heading={homeContent.teasers.heading}
        paragraphs={homeContent.teasers.paragraphs}
        phoneSrc="/images/mockups/teasers-screen.png"
        phoneFrame="white"
        textSide="right"
        storeTone={{ desktop: "dark", mobile: "light" }}
      />
      <FeatureSection
        id={sectionIds.restaurants}
        nextId={sectionIds.faq}
        background={colors.softGlow}
        heading={homeContent.restaurants.heading}
        paragraphs={homeContent.restaurants.paragraphs}
        phoneSrc="/images/mockups/restaurants-screen.png"
        phoneFrame="dark"
        textSide="left"
        storeTone={{ desktop: "dark", mobile: "dark" }}
      />
      <FaqSection />
      <DownloadSection />
    </main>
  );
}

import { CalibrateSection } from "@/components/CalibrateSection";
import { FeatureColumns } from "@/components/FeatureColumns";
import { GatherInsights } from "@/components/GatherInsights";
import { HeroSection } from "@/components/HeroSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SoftwareIntro } from "@/components/SoftwareIntro";
import { UnderstandSection } from "@/components/UnderstandSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <SoftwareIntro />
        <FeatureColumns />
        <CalibrateSection />
        <UnderstandSection />
        <GatherInsights />
      </main>
      <SiteFooter />
    </>
  );
}

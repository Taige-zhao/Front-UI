import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { UseCasesSection } from "@/components/UseCasesSection";

export const metadata: Metadata = {
  title: "Survey Services - Scalera AI",
  description:
    "Explore Scalera AI's human feedback, AI-generated, and agent-based market research survey services.",
};

export default function UseCasesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <UseCasesSection />
      </main>
      <SiteFooter />
    </>
  );
}

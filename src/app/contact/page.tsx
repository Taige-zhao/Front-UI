import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Us - Scalera AI",
  description:
    "Hello and welcome to Scalera AI. Speak to us today to find out how we can help your organization.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

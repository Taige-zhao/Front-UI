import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introduction - Scalera AI",
  description:
    "We’re on a mission to reframe how we all see the world. Welcome to the Age of Simulation.",
};

/**
 * Mirrors https://simudyne.com/introduction/ —
 * a full-viewport locked page that embeds the brandstory WebGL experience.
 */
export default function IntroductionPage() {
  return (
    <div className="intro-page fixed inset-0 z-[200] h-full w-full overflow-hidden bg-simu-bg">
      <iframe
        src="/brandstory/index.html"
        title="Scalera AI Introduction"
        className="absolute inset-0 h-full w-full border-0"
        allow="autoplay"
      />
    </div>
  );
}

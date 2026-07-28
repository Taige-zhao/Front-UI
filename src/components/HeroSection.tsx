"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const FRAME_COUNT = 53; // every 2nd frame 0..104
const FRAME_PATHS = Array.from({ length: FRAME_COUNT }, (_, i) => {
  const n = String(i * 2).padStart(3, "0");
  return `/images/hero/logoanim/frame_${n}.png`;
});

export function HeroSection() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [frame, setFrame] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let last = 0;
    const tick = (t: number) => {
      if (t - last > 40) {
        setFrame((f) => (f + 1) % FRAME_COUNT);
        last = t;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = parallaxRef.current;
      if (!el) return;
      const y = window.scrollY * 0.4;
      el.style.transform = `translate3d(0px, ${y}px, 0px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ScrollReveal variant="straight">
      <section className="page-header relative flex h-[calc(100vh-92px)] min-h-[560px] max-h-[780px] items-center overflow-hidden md:h-[690px]">
        <div
          ref={parallaxRef}
          className="parallax-container absolute inset-0 z-[-1] will-change-transform"
        >
          <div
            className="absolute inset-0 hidden bg-cover bg-center md:block"
            style={{ backgroundImage: "url(/images/hero/background.jpg)" }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center md:hidden"
            style={{
              backgroundImage: "url(/images/hero/background-mobile.jpg)",
            }}
          />

          <div className="video-container absolute inset-0 hidden overflow-hidden bg-simu-bg md:block">
            <div className="absolute top-1/2 left-[calc(29.167%-18px)] w-[calc(100%-(29.167%-18px))] -translate-y-1/2">
              <div className="relative aspect-video w-full">
                <video
                  className="absolute inset-0 h-full w-full object-contain"
                  src="/videos/hero-datavis.mp4"
                  muted
                  autoPlay
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>

          {/* Dimensional logo animation (theme Seq07) */}
          <div className="pointer-events-none absolute top-[18%] left-[8%] z-[2] hidden h-[70px] w-[70px] md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FRAME_PATHS[frame]}
              alt=""
              className="h-[70px] w-[70px] object-contain"
            />
          </div>
        </div>

        <div
          className="video-info absolute top-1/2 right-[30px] z-[99]"
          onMouseEnter={() => setInfoOpen(true)}
          onMouseLeave={() => setInfoOpen(false)}
        >
          <div className="info-icon flex h-5 w-5 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white text-[11px] leading-[15px]">
            i
          </div>
          <div
            className={cn(
              "pointer-events-none absolute top-0 right-[30px] w-[300px] -translate-y-1/2 p-5 transition-opacity duration-500",
              infoOpen ? "opacity-100" : "opacity-0",
            )}
          >
            <div className="absolute inset-0 -z-10 rounded bg-simu-blue" />
            <p className="text-[12px] leading-relaxed text-white">
              A visualization based on real stock market data from Nasdaq
            </p>
          </div>
        </div>

        <div className="content-row relative z-[3] !m-0 h-full items-center">
          <div className="col-offset-2 col-14 flex flex-col justify-center py-10">
            <div className="section-header !mb-0 flex flex-col items-start !opacity-100">
              <span className="text-[11px] tracking-[1px] text-white uppercase opacity-75">
                Reality
              </span>
              <span className="spacer-line" />
              <span className="text-[11px] tracking-[1px] text-white uppercase opacity-75">
                Re-engineered
              </span>
            </div>
            <h1 className="mt-12 mb-12 max-w-[803px] text-[40px] leading-[1.05] tracking-[-1.2px] text-white md:mt-[48px] md:mb-[48px] md:text-[72px] md:leading-[72px] md:tracking-[-2px]">
              Welcome to the Age of Simulation
            </h1>
            <div>
              <Link href="/introduction" className="simu-button mr-6">
                Enter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

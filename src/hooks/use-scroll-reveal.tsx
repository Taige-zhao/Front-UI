"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "fade" | "straight";
};

function isNearViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || 0;
  return rect.top < vh * 0.92 && rect.bottom > 0;
}

export function ScrollReveal({
  children,
  className,
  variant = "fade",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      if (isNearViewport(el)) setShown(true);
    };

    reveal();
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(el);
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("resize", reveal);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("resize", reveal);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        variant === "fade" ? "scroll-fade" : "scroll-straight",
        shown && "scroll-show",
        className,
      )}
    >
      {children}
    </div>
  );
}

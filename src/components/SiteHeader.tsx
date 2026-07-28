"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DeadLink } from "@/components/DeadLink";
import { CloseIcon, MenuIcon } from "@/components/icons";
import type { NavItem } from "@/types/simudyne";
import { cn } from "@/lib/utils";

const NAV: NavItem[] = [
  { label: "Use Cases", href: "/use-cases" },
  { label: "Talk to us", href: "/contact" },
];

export function SiteHeader({ lockLinks = false }: { lockLinks?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="relative z-10 bg-gradient-to-t from-transparent to-[rgba(15,3,60,0.6)] px-0 pt-10 pb-[30px]">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-simu-blue transition-opacity duration-500",
          scrolled ? "opacity-80" : "opacity-0",
        )}
        aria-hidden
      />

      <div className="content-row relative z-[4] !m-0 h-[22px] items-center justify-between">
        {lockLinks ? (
          <DeadLink
            className="col-offset-2 relative z-[4] flex h-[21px] items-center text-[14px] tracking-[0.5px] text-white"
            aria-label="Scalera AI"
          >
            Scalera AI
          </DeadLink>
        ) : (
          <Link
            href="/"
            className="col-offset-2 relative z-[4] flex h-[21px] items-center text-[14px] tracking-[0.5px] text-white"
            aria-label="Scalera AI"
          >
            Scalera AI
          </Link>
        )}

        <nav className="desktop-menu relative -left-[18px] hidden md:block" aria-label="Primary">
          <ul className="flex list-none items-start gap-0 p-0 pl-10">
            {NAV.map((item) => {
              const isCta = item.label === "Talk to us";
              const isInternal = !lockLinks && item.href.startsWith("/");
              return (
                <li
                  key={item.label}
                  className={cn(
                    "group relative mr-10 last:mr-0",
                    isCta && "talk-cta",
                  )}
                >
                  {isCta && (
                    <span
                      className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[110px] w-[108px] -translate-x-1/2 -translate-y-1/2 bg-simu-blue"
                      aria-hidden
                    />
                  )}
                  {isInternal ? (
                    <Link
                      href={item.href}
                      className="relative z-[2] mx-[5px] inline-block py-0.5 text-[11px] tracking-[1px] text-white uppercase"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <DeadLink className="relative z-[2] mx-[5px] inline-block py-0.5 text-[11px] tracking-[1px] text-white uppercase">
                      {item.label}
                    </DeadLink>
                  )}
                  {item.children && item.children.length > 0 && (
                    <ul className="invisible absolute top-full left-0 z-20 min-w-[160px] list-none bg-simu-bg/95 p-3 opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
                      {item.children.map((child) => (
                        <li key={child.label} className="py-1">
                          <DeadLink className="text-[11px] tracking-[1px] text-white uppercase opacity-80 hover:opacity-100">
                            {child.label}
                          </DeadLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="relative z-[4] mr-[18px] text-[11px] tracking-[1px] text-white uppercase md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className="inline-flex items-center gap-2">
            <MenuIcon className="h-5 w-5" />
            Menu
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-simu-blue md:hidden">
          <div className="flex items-center justify-between px-5 pt-10">
            <span className="text-[14px] tracking-[0.5px] text-white">
              Scalera AI
            </span>
            <button
              type="button"
              className="simu-button !border !border-white !bg-transparent"
              onClick={() => setMobileOpen(false)}
            >
              <span className="inline-flex items-center gap-2">
                <CloseIcon className="h-4 w-4" />
                Close
              </span>
            </button>
          </div>
          <ul className="mt-16 flex list-none flex-col gap-4 px-8">
            {NAV.map((item) => {
              const isInternal = !lockLinks && item.href.startsWith("/");
              return (
                <li key={item.label}>
                  <div className="flex items-center justify-between">
                    {isInternal ? (
                      <Link
                        href={item.href}
                        className="text-[14px] tracking-[1px] text-white uppercase"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <DeadLink
                        className="text-[14px] tracking-[1px] text-white uppercase"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </DeadLink>
                    )}
                    {item.children && (
                      <button
                        type="button"
                        className="px-2 text-white"
                        onClick={() =>
                          setOpenMobileSection((s) =>
                            s === item.label ? null : item.label,
                          )
                        }
                        aria-label={`Expand ${item.label}`}
                      >
                        {openMobileSection === item.label ? "−" : "+"}
                      </button>
                    )}
                  </div>
                  {item.children && openMobileSection === item.label && (
                    <ul className="mt-2 ml-3 list-none space-y-2">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <DeadLink
                            className="text-[12px] tracking-[1px] text-white/80 uppercase"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </DeadLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

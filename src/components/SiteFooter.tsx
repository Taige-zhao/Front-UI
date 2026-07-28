"use client";

import Link from "next/link";
import { DeadLink } from "@/components/DeadLink";
import type { FooterLink } from "@/types/simudyne";

const LEGAL: FooterLink[] = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Disclaimer", href: "#" },
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "#" },
  { label: "Patents", href: "#" },
];

export function SiteFooter({ lockLinks = false }: { lockLinks?: boolean }) {
  return (
    <footer
      className="mt-[60px] bg-simu-footer bg-repeat pt-px text-white"
      style={{ backgroundImage: "url(/images/footer-bg.png)" }}
    >
      <div className="content-row cta-row !mt-20 !mb-0 block">
        <div className="col-offset-2 col-20">
          <div className="section-header">Let&apos;s Chat</div>
          <div className="my-[17px] mb-[25px] max-w-[calc(58.333%-18px)] text-[16px] leading-[1.6]">
            Discover how Scalera AI can help your organization harness the power of
            advanced simulation.
          </div>
          <Link href="/contact" className="simu-button">
            Get in touch
          </Link>
          <div className="dotted-divider mt-10 border-b border-dotted border-white/40" />
        </div>
      </div>

      <div className="content-row !mb-8 !mt-10">
        <div className="col-offset-2 col-20 text-[12px] text-white/80">
          <span>ⓒ 2026 Scalera AI Ltd. </span>
          <nav className="mt-2 inline md:mt-0">
            <ul className="footer-menu m-0 inline list-none p-0">
              {LEGAL.map((link, i) => {
                const goInternal =
                  !lockLinks && link.href.startsWith("/");
                return (
                  <li key={link.label} className="inline">
                    {i > 0 && <span className="mx-1 text-white/50">/</span>}
                    {goInternal ? (
                      <Link
                        href={link.href}
                        className="text-[12px] text-white/80 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <DeadLink className="text-[12px] text-white/80 hover:text-white">
                        {link.label}
                      </DeadLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

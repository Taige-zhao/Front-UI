"use client";

import { useEffect, useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import { DeadLink } from "@/components/DeadLink";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

const FRAME_COUNT = 59; // every 4th of 0..233
const FRAME_PATHS = Array.from({ length: FRAME_COUNT }, (_, i) => {
  const n = String(i * 4).padStart(3, "0");
  return `/images/contact/logoanim/frame_${n}.png`;
});

export function ContactSection() {
  const [frame, setFrame] = useState(0);

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

  return (
    <ScrollReveal variant="straight">
      <section className="contact-page relative pb-16 md:pb-24">
        <div className="content-row !m-0 flex-col gap-12 md:flex-row md:items-start md:gap-0">
          <div className="col-offset-2 relative w-[calc(100%-36px)] max-w-none px-[18px] md:w-[calc(33.333%-18px)] md:max-w-[457px] md:px-0">
            <div className="dots-symbol relative mb-6 h-[35px] w-[35px]">
              <div className="logo-animation intelligent absolute top-[-17.5px] left-[-17.5px] h-[70px] w-[70px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FRAME_PATHS[frame]}
                  alt=""
                  className="h-[70px] w-[70px] object-contain"
                />
              </div>
            </div>

            <h1 className="mt-8 mb-8 text-[36px] leading-[1.15] tracking-[-1px] text-white md:text-[48px] md:leading-[56px] md:tracking-[-1.2px]">
              Contact us
            </h1>

            <p className="mb-[17px] text-[17px] text-[#9f9ab1]">
              Hello and welcome to Scalera AI. We put better tools in the hands of
              people.
            </p>
            <p className="my-[17px] text-[17px] text-[#9f9ab1]">
              Imagine if you could make a decision, understand its consequences
              and re-engineer it with zero risk.
            </p>
            <p className="mt-[17px] text-[17px] text-[#9f9ab1]">
              Speak to us today to find out how we can make this a reality for
              your organization.
            </p>

            <div className="small-type mt-[60px] text-[12px] leading-[18px] tracking-[-0.27px] text-[#b7b3c4] md:mt-[110px]">
              <h5 className="relative mb-[16.7px] inline-block w-1/2 border-b border-dotted border-white/40 text-[10px] tracking-[1px] text-[#b7b3c4] uppercase">
                Email us
              </h5>
              <p className="mt-3 mb-0">
                <DeadLink className="relative inline-block border-b border-dotted border-white/40 text-[12px] tracking-[-0.27px] text-white uppercase">
                  Info@scaleraitech.com
                </DeadLink>
              </p>
            </div>
          </div>

          <div className="col-offset-2 w-[calc(100%-36px)] px-[18px] md:ml-[calc(8.333%)] md:w-[calc(41.667%-18px)] md:max-w-[576px] md:px-0">
            <ContactForm />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

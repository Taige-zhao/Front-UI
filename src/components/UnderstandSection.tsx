import Image from "next/image";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export function UnderstandSection() {
  return (
    <ScrollReveal>
      <section className="two-columns">
        <div className="content-row section-spacing !my-[60px] flex-col-reverse gap-12 md:flex-row md:items-center md:gap-0">
          <div className="col-offset-2 col-9-5">
            <Image
              src="/images/understand-impact.png"
              alt="Simulation impact visualization panels"
              width={1536}
              height={668}
              className="h-auto w-full"
            />
          </div>
          <div className="col-offset-1 col-9-5">
            <h3 className="mb-6 text-[28px] text-white">Understand impact</h3>
            <p className="mb-5 text-[16px] leading-[1.6] text-white">
              Realistic simulators provide decision makers with insights into the
              possible real-world impact of a decision
            </p>
            <p className="text-[16px] leading-[1.6] text-white">
              Optimize existing strategies and design new ones to improve the
              quality and speed of decisions while navigating complex problems.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

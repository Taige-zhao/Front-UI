import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import type { FeatureItem } from "@/types/simudyne";

const FEATURES: FeatureItem[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Scalera AI Horizon is an agentic process for automated model discovery, calibration, and validation dramatically expediting the time from research to production for advanced simulation capabilities.",
  },
  {
    number: "02",
    title: "Simulate",
    description:
      "Scalera AI Pulse foundation and multi-agent simulation models capture highly-realistic dynamics of real world systems for exploring the impact of decisions in virtual environments.",
  },
  {
    number: "03",
    title: "Reason",
    description:
      "Scalera AI Nexus environments train reasoning models to explore and optimize systems, unlocking value for leaders.",
  },
];

export function FeatureColumns() {
  return (
    <ScrollReveal>
      <section className="three-columns">
        <div className="content-row no-vertical-margin !mb-[100px] flex-col gap-10 md:flex-row md:gap-0">
          {FEATURES.map((item, index) => (
            <div
              key={item.number}
              className={
                index === 0
                  ? "col-offset-2 col-6"
                  : "col-offset-1 col-6 md:!ml-[calc(18px+(4.167%-18px))]"
              }
            >
              <div className="number-pill">{item.number}</div>
              <div className="my-5">
                <h4 className="m-0 text-[16px] text-white">{item.title}</h4>
              </div>
              <p className="text-[14px] leading-[1.6] text-white/90">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

"use client";

import { ScrollReveal } from "@/hooks/use-scroll-reveal";

const SERVICES = [
  {
    number: "01",
    title: "Human Feedback Surveys",
    description:
      "Collect direct, reliable feedback from the people who matter most. Design targeted questionnaires, reach the right audience, and turn real responses into clear decisions.",
  },
  {
    number: "02",
    title: "AI-Agent-Generated Surveys",
    description:
      "Use AI agents to create thoughtful survey questions in minutes. Explore multiple angles, tailor each questionnaire to your research goal, and move from idea to fieldwork faster.",
  },
  {
    number: "03",
    title: "Agent-Based Market Research Surveys",
    href: "https://agentsociety-sandbox.onrender.com/",
    description:
      "Test market scenarios before you launch. Our agent-based simulations model different customer perspectives, helping you investigate likely demand, preferences, and market reactions.",
  },
];

export function UseCasesSection() {
  return (
    <ScrollReveal variant="straight">
      <section className="bg-white px-[18px] pt-20 pb-24 text-[#0f033c] md:px-0 md:pt-32 md:pb-32">
        <div className="content-row !m-0">
          <div className="col-offset-2 col-20">
            <div className="max-w-[720px]">
              <p className="mb-5 text-[11px] tracking-[1.2px] text-simu-blue uppercase">
                Our services
              </p>
              <h1 className="max-w-[660px] text-[38px] leading-[1.05] tracking-[-1.4px] md:text-[64px] md:tracking-[-2.2px]">
                Survey intelligence for better market decisions.
              </h1>
              <p className="mt-7 max-w-[590px] text-[17px] leading-7 text-[#625d73] md:text-[19px]">
                From direct human feedback to AI-powered research and market
                simulation, Scalera AI helps you understand your audience with
                confidence.
              </p>
            </div>

            <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-3 md:gap-7">
              {SERVICES.map((service) => (
                <article
                  key={service.number}
                  className="group relative flex min-h-[310px] flex-col border border-[#dedbe5] bg-[#f7f6f8] p-7 transition-colors duration-300 hover:bg-simu-blue md:min-h-[390px] md:p-9"
                >
                  <span className="text-[11px] tracking-[1px] text-simu-blue transition-colors duration-300 group-hover:text-white">
                    {service.number}
                  </span>
                  <div className="mt-auto border-t border-[#c9c4d2] pt-6 transition-colors duration-300 group-hover:border-white/40">
                    <h2 className="max-w-[280px] text-[25px] leading-[1.08] tracking-[-0.8px] transition-colors duration-300 group-hover:text-white md:text-[30px]">
                      {service.href ? (
                        <a
                          href={service.href}
                          target="_blank"
                          rel="noreferrer"
                          className="relative z-10 underline decoration-1 underline-offset-4"
                        >
                          {service.title}
                        </a>
                      ) : (
                        service.title
                      )}
                    </h2>
                    <p className="mt-5 text-[15px] leading-6 text-[#625d73] transition-colors duration-300 group-hover:text-white/80">
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export function SoftwareIntro() {
  return (
    <ScrollReveal>
      <section className="three-quarters-wide">
        <div className="content-row section-spacing no-vertical-margin !mt-[120px] !mb-10">
          <div className="col-offset-2 col-12">
            <div className="section-header">Software</div>
            <h2 className="mb-[23px] text-[28px] text-white">
              AI-powered Simulation
            </h2>
            <p className="max-w-[686px] text-[16px] leading-[1.6] text-white">
              Our secure simulation software is built for enterprise and provides
              a set of patented technologies for exploring scenarios across
              industries, saving our customers time and money.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

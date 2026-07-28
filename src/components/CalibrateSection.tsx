import Image from "next/image";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export function CalibrateSection() {
  return (
    <ScrollReveal>
      <section className="two-columns">
        <div className="content-row section-spacing !my-[80px] flex-col gap-12 md:flex-row md:items-center md:gap-0">
          <div className="col-offset-2 col-9-5">
            <h3 className="mb-6 text-[28px] text-white">Calibrate your model</h3>
            <p className="mb-5 text-[16px] leading-[1.6] text-white">
              A model’s ability to reproduce realistic behaviors and the dynamics
              that generate these behaviors is dependent on quality calibration.
            </p>
            <p className="text-[16px] leading-[1.6] text-white">
              Our simulators are validated in a 6-step process that ensures the
              model design and parameters reproduce statistical and behavioral
              dynamics that match real-world data.
            </p>
          </div>
          <div className="col-offset-1 col-9-5">
            <Image
              src="/images/calibration.svg"
              alt="Six-step model calibration diagram"
              width={521}
              height={522}
              className="h-auto w-full max-w-[539px]"
            />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

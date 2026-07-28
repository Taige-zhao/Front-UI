import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export function GatherInsights() {
  return (
    <ScrollReveal>
      <section className="row-with-background-and-list relative">
        <div className="content-row section-spacing relative !my-[80px] min-h-[500px] md:min-h-[638px]">
          <div className="background-wrapper pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute top-0 left-[calc(36px+(8.333%-18px))] hidden h-full w-[min(1169px,calc(83.333%-18px))] bg-[length:100%_auto] bg-left-top bg-no-repeat md:block"
              style={{
                backgroundImage: "url(/images/console-dashboard.png)",
              }}
            />
            <div
              className="absolute inset-x-[18px] top-0 h-[240px] bg-contain bg-center bg-no-repeat md:hidden"
              style={{ backgroundImage: "url(/images/console-mobile.png)" }}
            />
          </div>

          <div className="relative z-[2] ml-[18px] w-[calc(100%-36px)] pt-[260px] md:col-offset-12-5 md:col-8-5 md:ml-[calc(36px+(52.083%-18px))] md:w-[calc(35.417%-18px)] md:pt-16 md:pb-16">
            <div className="large-type">
              <h3 className="mb-6 text-[28px] text-white">Gather insights</h3>
              <p className="mb-8 text-[16px] leading-[1.6] text-white">
                Build massively scalable, distributed, virtual environments and
                deploy effortlessly in custom dashboards, empowering management
                across the organization to run analyses in real-time.
              </p>
            </div>

            <div className="numbred-list space-y-6">
              <div className="list-item">
                <div className="number-pill">01</div>
                <div className="my-5">
                  <h4 className="m-0 text-[16px] text-white">Customizable</h4>
                </div>
                <p className="text-[14px] leading-[1.6] text-white/90">
                  Dashboards can be automatically built and are easily
                  customized.
                </p>
              </div>
              <div className="list-item">
                <div className="number-pill">02</div>
                <div className="my-5">
                  <h4 className="m-0 text-[16px] text-white">Interactive</h4>
                </div>
                <p className="text-[14px] leading-[1.6] text-white/90">
                  Put the power of advanced simulations directly in the
                  decision-maker’s hands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

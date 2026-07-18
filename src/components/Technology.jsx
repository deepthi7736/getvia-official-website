import {
  ArrowRight,
  Gauge,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Reliable platform experience",
    body:
      "Getvia is designed to provide a stable and dependable experience for customers, businesses, and professionals.",
  },
  {
    icon: Gauge,
    title: "Performance-focused",
    body:
      "Pages, profiles, and discovery experiences are structured to remain clear, responsive, and easy to use across devices.",
  },
  {
    icon: Layers3,
    title: "Built for expansion",
    body:
      "The platform is designed to support additional categories, locations, businesses, services, and digital features over time.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive by design",
    body:
      "Getvia is built to provide a consistent experience across mobile phones, tablets, laptops, and desktop screens.",
  },
  {
    icon: RefreshCw,
    title: "Continuously improving",
    body:
      "The platform continues to evolve through product improvements, feedback, and changing business and customer needs.",
  },
  {
    icon: LockKeyhole,
    title: "Responsible data handling",
    body:
      "Platform information and account access are managed through structured systems designed to support secure digital interactions.",
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-12 h-80 w-80 rounded-full bg-[#E8F7EA]/80 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#B7F27D]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#CFE5D3] bg-[#F3FBF4] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              <Layers3 size={14} />
              Technology
            </span>

            <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] sm:text-5xl lg:text-6xl">
              Technology designed to make local discovery
              <span className="text-[#007A1F]"> simpler and smarter.</span>
            </h2>
          </div>

          <p className="max-w-2xl font-body text-lg leading-8 text-[#646464] lg:justify-self-end">
            Getvia combines structured business information, responsive
            interfaces, search, location-based discovery, and communication
            tools to create a practical digital experience.
          </p>
        </div>

        {/* Technology overview */}
        <div className="mt-16 overflow-hidden rounded-[34px] border border-[#DDE5DE] bg-[#F3FBF4] shadow-[0_24px_75px_rgba(0,100,30,0.08)]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* Visual */}
            <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#007A1F] to-[#005E17] p-8 sm:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#7CE629]/20 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

              <div className="relative w-full max-w-md rounded-[30px] border border-white/15 bg-white p-7 shadow-[0_30px_80px_rgba(0,0,0,0.20)]">
                <div className="flex items-center justify-between border-b border-[#E3E9E3] pb-5">
                  <div>
                    <p className="font-body text-sm font-semibold text-[#141414]">
                      Getvia platform
                    </p>

                    <p className="mt-1 font-body text-xs text-[#747A74]">
                      Connected digital infrastructure
                    </p>
                  </div>

                  <span className="rounded-full bg-[#E8F7EA] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-[#007A1F]">
                    Online
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[#E3E9E3] bg-[#FAFCFA] p-4">
                    <Gauge size={20} className="text-[#007A1F]" />

                    <p className="mt-4 font-display text-xl font-semibold text-[#141414]">
                      Responsive
                    </p>

                    <p className="mt-1 font-body text-xs leading-5 text-[#747A74]">
                      Smooth digital experience
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E3E9E3] bg-[#FAFCFA] p-4">
                    <ShieldCheck size={20} className="text-[#007A1F]" />

                    <p className="mt-4 font-display text-xl font-semibold text-[#141414]">
                      Reliable
                    </p>

                    <p className="mt-1 font-body text-xs leading-5 text-[#747A74]">
                      Structured platform systems
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-[#E3E9E3] bg-[#FAFCFA] p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-body text-sm font-semibold text-[#141414]">
                      Platform capabilities
                    </p>

                    <Layers3 size={18} className="text-[#007A1F]" />
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      "Business profiles",
                      "Category discovery",
                      "Location information",
                      "Customer connections",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-xl bg-white px-4 py-3"
                      >
                        <span className="font-body text-xs font-medium text-[#454B45]">
                          {item}
                        </span>

                        <span className="h-2 w-2 rounded-full bg-[#007A1F]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
                Built around real needs
              </p>

              <h3 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
                A modern foundation for customers and growing businesses.
              </h3>

              <p className="mt-6 font-body text-base leading-8 text-[#646464]">
                Every part of the Getvia platform is designed to make business
                information easier to organise, discover, understand, and act
                upon.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Structured business data",
                  "Mobile-friendly design",
                  "Location-based discovery",
                  "Direct contact options",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#DDE5DE] bg-white px-4 py-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8F7EA] text-[#007A1F]">
                      <ShieldCheck size={16} />
                    </span>

                    <span className="font-body text-sm font-semibold text-[#303530]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-9 inline-flex w-fit items-center gap-2 rounded-xl bg-[#007A1F] px-6 py-3.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-[0_14px_35px_rgba(0,100,30,0.20)]"
              >
                Learn more about Getvia
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Technology pillars */}
        <div className="mt-20">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              Platform principles
            </p>

            <h3 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#141414]">
              The principles behind the Getvia digital experience.
            </h3>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-[28px] border border-[#DDE5DE] bg-white p-7 shadow-[0_14px_42px_rgba(0,80,20,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#B7DDBF] hover:shadow-[0_26px_65px_rgba(0,100,30,0.10)]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#E8F7EA] transition-transform duration-500 group-hover:scale-125" />

                <div className="relative flex h-13 w-13 h-[52px] items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F] transition-colors duration-300 group-hover:bg-[#007A1F] group-hover:text-white">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h4 className="relative mt-6 font-display text-2xl font-semibold text-[#141414]">
                  {title}
                </h4>

                <p className="relative mt-4 font-body text-sm leading-7 text-[#646464]">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

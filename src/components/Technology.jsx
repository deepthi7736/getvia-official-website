import {
  ArrowRight,
  Database,
  Gauge,
  Layers3,
  MapPin,
  MonitorSmartphone,
  RefreshCw,
  Search,
} from "lucide-react";

const PILLARS = [
  {
    icon: Database,
    title: "Structured information",
    body:
      "Business details are organised into clear sections such as services, products, timings, contact information, locations, galleries, and offers.",
  },
  {
    icon: Search,
    title: "Search-led navigation",
    body:
      "The platform helps users move from a search or category to relevant business profiles without unnecessary steps.",
  },
  {
    icon: MapPin,
    title: "Location-aware discovery",
    body:
      "Business locations and map details help users understand what is available nearby and how to reach it.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive experience",
    body:
      "Pages are designed to remain clear and usable across mobile phones, tablets, laptops, and desktop screens.",
  },
  {
    icon: Gauge,
    title: "Focused performance",
    body:
      "The experience is designed around lightweight navigation, readable information, and faster movement between key actions.",
  },
  {
    icon: RefreshCw,
    title: "Designed to evolve",
    body:
      "The platform can expand with additional categories, locations, profile tools, and customer-facing features over time.",
  },
];

const CAPABILITIES = [
  "Business profile management",
  "Category-based browsing",
  "Search and filtering",
  "Location and map information",
];

const FOUNDATION_ITEMS = [
  "Structured business content",
  "Mobile-friendly interfaces",
  "Search and category navigation",
  "Direct contact pathways",
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
              Platform Foundation
            </span>

            <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] sm:text-5xl lg:text-6xl">
              The systems that make business information
              <span className="text-[#007A1F]">
                {" "}
                easier to use.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl font-body text-lg leading-8 text-[#646464] lg:justify-self-end">
            Getvia organises profile content, search, categories, location
            details, and contact actions into one connected platform
            experience.
          </p>
        </div>

        {/* Platform overview */}
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
                      Core product capabilities
                    </p>
                  </div>

                  <span className="rounded-full bg-[#E8F7EA] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-[#007A1F]">
                    Connected
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[#E3E9E3] bg-[#FAFCFA] p-4">
                    <MonitorSmartphone
                      size={20}
                      className="text-[#007A1F]"
                    />

                    <p className="mt-4 font-display text-xl font-semibold text-[#141414]">
                      Responsive
                    </p>

                    <p className="mt-1 font-body text-xs leading-5 text-[#747A74]">
                      Designed for different screen sizes
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E3E9E3] bg-[#FAFCFA] p-4">
                    <Database size={20} className="text-[#007A1F]" />

                    <p className="mt-4 font-display text-xl font-semibold text-[#141414]">
                      Structured
                    </p>

                    <p className="mt-1 font-body text-xs leading-5 text-[#747A74]">
                      Clear and organised profile content
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
                    {CAPABILITIES.map((item) => (
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
                Built around useful actions
              </p>

              <h3 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
                A practical foundation for browsing, comparing, and contacting.
              </h3>

              <p className="mt-6 font-body text-base leading-8 text-[#646464]">
                The platform is organised around the actions people take most:
                finding a relevant business, reviewing its information,
                checking its location, and making contact.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {FOUNDATION_ITEMS.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#DDE5DE] bg-white px-4 py-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8F7EA] text-[#007A1F]">
                      <Layers3 size={16} />
                    </span>

                    <span className="font-body text-sm font-semibold text-[#303530]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://getvia.in"
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex w-fit items-center gap-2 rounded-xl bg-[#007A1F] px-6 py-3.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-[0_14px_35px_rgba(0,100,30,0.20)]"
              >
                Explore the platform
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Platform principles */}
        <div className="mt-20">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              Product principles
            </p>

            <h3 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#141414]">
              How the Getvia experience is organised.
            </h3>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-[28px] border border-[#DDE5DE] bg-white p-7 shadow-[0_14px_42px_rgba(0,80,20,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#B7DDBF] hover:shadow-[0_26px_65px_rgba(0,100,30,0.10)]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#E8F7EA] transition-transform duration-500 group-hover:scale-125" />

                <div className="relative flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F] transition-colors duration-300 group-hover:bg-[#007A1F] group-hover:text-white">
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

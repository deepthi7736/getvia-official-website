import {
  ArrowRight,
  BadgeCheck,
  Building2,
  HeartHandshake,
  Lightbulb,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "We present clear and useful business information that helps people make more informed decisions.",
  },
  {
    icon: Sparkles,
    title: "Simplicity",
    description:
      "We make business discovery and profile management straightforward and easy to understand.",
  },
  {
    icon: HeartHandshake,
    title: "People first",
    description:
      "We design practical experiences for customers, professionals, and business owners.",
  },
  {
    icon: Lightbulb,
    title: "Progress",
    description:
      "We continue improving the platform around real customer and business needs.",
  },
];

const BENEFITS = [
  {
    icon: Search,
    title: "Clear information",
    description:
      "Customers can review useful business details before deciding who to contact.",
  },
  {
    icon: Building2,
    title: "Better profiles",
    description:
      "Businesses can organise their services, products, images, timings, and contact information.",
  },
  {
    icon: Users,
    title: "Easier contact",
    description:
      "People can move from business discovery to calls, messages, maps, and directions.",
  },
];

const JOURNEY = [
  {
    year: "2022",
    title: "The idea began",
    description:
      "Getvia started with a simple observation: useful local business information was often difficult to find.",
  },
  {
    year: "2023",
    title: "Trust came first",
    description:
      "The platform began organising business information into clearer and more useful profiles.",
  },
  {
    year: "2024",
    title: "Built for both sides",
    description:
      "Getvia developed tools for customers who search and businesses that need to present their work.",
  },
  {
    year: "Today",
    title: "Growing with communities",
    description:
      "The platform continues to improve through new categories, locations, and practical product features.",
  },
];

const PROFILE_DETAILS = [
  "Products and services",
  "Opening hours",
  "Location and directions",
  "Direct contact options",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8FCF8] py-12 md:py-14 lg:py-16"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-[#B7F27D]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-40 h-[420px] w-[420px] rounded-full bg-[#007A1F]/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#CFE5D3] to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Main section */}
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
          {/* Text content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#CFE5D3] bg-white px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F] shadow-sm">
              <BadgeCheck size={14} />
              About Getvia
            </span>

            <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#141414] sm:text-5xl lg:text-[56px]">
              Making local business information{" "}
              <span className="text-[#007A1F]">easier to find.</span>
            </h2>

            <p className="mt-5 max-w-xl font-body text-lg leading-8 text-[#555B55]">
              Getvia brings useful business details into one clear place so
              people can understand their options and contact the right
              business more easily.
            </p>

            <div className="mt-6 space-y-4">
              <p className="max-w-xl font-body text-[15px] leading-7 text-[#646964]">
                Finding a nearby service should not require searching across
                multiple websites, social pages, maps, and messaging apps.
                Getvia organises important information into structured business
                profiles.
              </p>

              <p className="max-w-xl font-body text-[15px] leading-7 text-[#646964]">
                Customers can understand what a business offers, where it is
                located, when it is open, and how to make contact. Businesses
                gain a clearer way to present their work online.
              </p>
            </div>

            <a
              href="#what-we-do"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#007A1F] px-6 py-3.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#006619] hover:shadow-[0_16px_35px_rgba(0,100,30,0.22)] focus:outline-none focus:ring-2 focus:ring-[#007A1F] focus:ring-offset-2"
            >
              See how Getvia works
              <ArrowRight size={17} />
            </a>
          </div>

          {/* Simple product preview */}
          <div className="relative">
            <div className="rounded-[32px] border border-[#DDE5DE] bg-white p-5 shadow-[0_28px_75px_rgba(0,90,25,0.12)] sm:p-7">
              {/* Search bar */}
              <div className="flex items-center gap-3 rounded-2xl border border-[#DDE5DE] bg-[#F8FCF8] px-4 py-3.5">
                <Search
                  size={19}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#007A1F]"
                />

                <span className="font-body text-sm text-[#7A807A]">
                  Search for a nearby business or service
                </span>
              </div>

              {/* Business result */}
              <div className="mt-5 rounded-[26px] border border-[#E1E7E1] bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F]">
                      <Building2 size={25} strokeWidth={1.7} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl font-semibold text-[#141414]">
                          Green Leaf Bakery
                        </h3>

                        <BadgeCheck size={17} className="text-[#007A1F]" />
                      </div>

                      <p className="mt-1 font-body text-sm text-[#646464]">
                        Bakery · Local business
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-body text-xs text-[#747A74]">
                        <span className="font-semibold text-[#007A1F]">
                          ★ 4.8
                        </span>

                        <span>212 reviews</span>

                        <span>Open until 8 PM</span>
                      </div>
                    </div>
                  </div>

                  <span className="hidden rounded-full bg-[#E8F7EA] px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-[#007A1F] sm:inline-flex">
                    Verified
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {PROFILE_DETAILS.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-[#F8FCF8] px-4 py-3"
                    >
                      <BadgeCheck
                        size={16}
                        className="shrink-0 text-[#007A1F]"
                      />

                      <span className="font-body text-sm text-[#454B45]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <button
                    type="button"
                    className="rounded-xl bg-[#007A1F] px-3 py-3 font-body text-sm font-semibold text-white transition hover:bg-[#006619]"
                  >
                    Call
                  </button>

                  <button
                    type="button"
                    className="rounded-xl border border-[#D6DED7] bg-white px-3 py-3 font-body text-sm font-semibold text-[#141414] transition hover:border-[#B7DDBF] hover:bg-[#F8FCF8]"
                  >
                    Message
                  </button>

                  <button
                    type="button"
                    className="rounded-xl border border-[#D6DED7] bg-white px-3 py-3 font-body text-sm font-semibold text-[#141414] transition hover:border-[#B7DDBF] hover:bg-[#F8FCF8]"
                  >
                    Directions
                  </button>
                </div>
              </div>

              {/* Supporting information */}
              <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-[#E1E7E1] bg-[#F8FCF8] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#007A1F] shadow-sm">
                    <Search size={18} />
                  </div>

                  <div>
                    <p className="font-body text-sm font-semibold text-[#141414]">
                      Everything in one place
                    </p>

                    <p className="mt-0.5 font-body text-xs text-[#747A74]">
                      Search, review, contact, and get directions.
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={18}
                  className="shrink-0 text-[#007A1F]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[28px] border border-[#DDE5DE] bg-white p-6 shadow-[0_15px_45px_rgba(0,80,20,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#B7DDBF] hover:shadow-[0_25px_65px_rgba(0,100,30,0.11)]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#E8F7EA] transition-transform duration-500 group-hover:scale-125" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F] transition-colors duration-300 group-hover:bg-[#007A1F] group-hover:text-white">
                <Icon size={22} strokeWidth={1.8} />
              </div>

              <h3 className="relative mt-5 font-display text-2xl font-semibold text-[#141414]">
                {title}
              </h3>

              <p className="relative mt-3 font-body text-sm leading-7 text-[#646464]">
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* Values section */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              Our values
            </p>

            <h3 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#141414] sm:text-5xl">
              Principles that guide how Getvia is built.
            </h3>

            <p className="mt-5 max-w-lg font-body text-base leading-7 text-[#646464]">
              We focus on useful information, clear experiences, and practical
              tools instead of unnecessary complexity.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, description }, index) => {
              const highlighted = index === 0 || index === 3;

              return (
                <article
                  key={title}
                  className={`rounded-[28px] border p-6 shadow-[0_14px_42px_rgba(0,80,20,0.05)] transition-transform duration-300 hover:-translate-y-1 ${
                    highlighted
                      ? "border-[#007A1F] bg-[#007A1F]"
                      : "border-[#DDE5DE] bg-white"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      highlighted
                        ? "bg-white/15 text-white"
                        : "bg-[#E8F7EA] text-[#007A1F]"
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <h4
                    className={`mt-5 font-display text-2xl font-semibold ${
                      highlighted ? "text-white" : "text-[#141414]"
                    }`}
                  >
                    {title}
                  </h4>

                  <p
                    className={`mt-3 font-body text-sm leading-7 ${
                      highlighted ? "text-white/75" : "text-[#646464]"
                    }`}
                  >
                    {description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Journey section */}
        <div className="mt-16 rounded-[36px] border border-[#DDE5DE] bg-white p-7 shadow-[0_24px_75px_rgba(0,100,30,0.08)] sm:p-9 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
                Our journey
              </p>

              <h3 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#141414] sm:text-5xl">
                Built step by step around a real local need.
              </h3>
            </div>

            <p className="max-w-2xl font-body text-base leading-7 text-[#646464] lg:justify-self-end">
              Getvia continues to improve by listening to customers and
              businesses and building features that solve practical problems.
            </p>
          </div>

          <div className="relative mt-10">
            <div className="absolute left-0 top-[22px] hidden h-px w-full bg-[#CFE5D3] lg:block" />

            <div className="grid gap-5 lg:grid-cols-4">
              {JOURNEY.map(({ year, title, description }, index) => (
                <article
                  key={year}
                  className="relative rounded-[26px] border border-[#E1E7E1] bg-[#FAFCFA] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B7DDBF] hover:bg-white hover:shadow-[0_16px_40px_rgba(0,90,25,0.08)]"
                >
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-[#007A1F] font-mono text-[10px] font-semibold text-white shadow-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#007A1F]">
                    {year}
                  </p>

                  <h4 className="mt-3 font-display text-xl font-semibold text-[#141414]">
                    {title}
                  </h4>

                  <p className="mt-3 font-body text-sm leading-6 text-[#646464]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

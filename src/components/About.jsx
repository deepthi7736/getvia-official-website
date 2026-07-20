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

const ABOUT_IMAGES = {
  businessOwner:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",

  customer:
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=85",
};

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

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8FCF8] py-24 lg:py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-[#B7F27D]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-40 h-[420px] w-[420px] rounded-full bg-[#007A1F]/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#CFE5D3] to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Main section */}
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Text content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#CFE5D3] bg-white px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F] shadow-sm">
              <BadgeCheck size={14} />
              About Getvia
            </span>

            <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#141414] sm:text-5xl lg:text-[58px]">
              Making local business information{" "}
              <span className="text-[#007A1F]">easier to find.</span>
            </h2>

            <p className="mt-7 max-w-xl font-body text-lg leading-8 text-[#555B55]">
              Getvia brings useful business details into one clear place so
              people can understand their options and contact the right
              business more easily.
            </p>

            <div className="mt-8 space-y-5">
              <p className="max-w-xl font-body text-[15px] leading-8 text-[#646964]">
                Finding a nearby service should not require searching across
                multiple websites, social pages, maps, and messaging apps.
                Getvia organises important information into structured business
                profiles.
              </p>

              <p className="max-w-xl font-body text-[15px] leading-8 text-[#646964]">
                Customers can understand what a business offers, where it is
                located, when it is open, and how to make contact. Businesses
                gain a clearer way to present their work online.
              </p>
            </div>

            <a
              href="#what-we-do"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#007A1F] px-6 py-3.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#006619] hover:shadow-[0_16px_35px_rgba(0,100,30,0.22)] focus:outline-none focus:ring-2 focus:ring-[#007A1F] focus:ring-offset-2"
            >
              See how Getvia works
              <ArrowRight size={17} />
            </a>
          </div>

          {/* Image area */}
          <div className="relative">
            <div className="grid gap-5 sm:grid-cols-[1.08fr_0.92fr]">
              {/* Large business image */}
              <figure className="group relative min-h-[540px] overflow-hidden rounded-[34px] border border-white/70 bg-[#E8F7EA] shadow-[0_30px_80px_rgba(0,90,25,0.14)]">
                <img
                  src={ABOUT_IMAGES.businessOwner}
                  alt="Local business owner working inside a modern business"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#002D0C]/85 via-[#002D0C]/10 to-transparent" />

                <figcaption className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-md">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
                    Built for real businesses
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-[#141414]">
                    A clearer way to present what you do.
                  </h3>

                  <p className="mt-2 font-body text-sm leading-6 text-[#646464]">
                    Services, products, location, timings, images, and contact
                    details organised in one profile.
                  </p>
                </figcaption>
              </figure>

              {/* Right image and information card */}
              <div className="grid gap-5 sm:grid-rows-[0.88fr_1.12fr]">
                <figure className="group relative min-h-[255px] overflow-hidden rounded-[30px] border border-white/70 bg-[#E8F7EA] shadow-[0_22px_60px_rgba(0,90,25,0.11)]">
                  <img
                    src={ABOUT_IMAGES.customer}
                    alt="Customer using a mobile phone to explore businesses"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

                  <figcaption className="absolute bottom-5 left-5 right-5">
                    <p className="font-display text-xl font-semibold text-white">
                      Easier choices
                    </p>

                    <p className="mt-1 font-body text-sm leading-6 text-white/80">
                      Review useful details before making contact.
                    </p>
                  </figcaption>
                </figure>

                {/* Business information card */}
                <div className="rounded-[30px] border border-[#DDE5DE] bg-white p-6 shadow-[0_22px_60px_rgba(0,90,25,0.09)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
                        Business profile
                      </p>

                      <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-[#141414]">
                        Useful information in one place
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F]">
                      <Building2 size={21} />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      "Services and products",
                      "Business timings",
                      "Location and directions",
                      "Calls and WhatsApp",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-[#E5EAE5] bg-[#FAFCFA] px-4 py-3"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8F7EA] text-[#007A1F]">
                          <BadgeCheck size={15} />
                        </span>

                        <span className="font-body text-sm font-medium text-[#454B45]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating search card */}
            <div className="absolute -bottom-7 left-8 hidden rounded-2xl border border-[#DDE5DE] bg-white px-5 py-4 shadow-[0_20px_50px_rgba(0,80,20,0.15)] md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#007A1F] text-white">
                  <Search size={18} />
                </div>

                <div>
                  <p className="font-body text-xs text-[#747A74]">
                    From search to contact
                  </p>

                  <p className="mt-1 font-display text-base font-semibold text-[#141414]">
                    Fewer unnecessary steps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits cards */}
        <div className="mt-28 grid gap-6 md:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[28px] border border-[#DDE5DE] bg-white p-7 shadow-[0_15px_45px_rgba(0,80,20,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#B7DDBF] hover:shadow-[0_25px_65px_rgba(0,100,30,0.11)]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#E8F7EA] transition-transform duration-500 group-hover:scale-125" />

              <div className="relative flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F] transition-colors duration-300 group-hover:bg-[#007A1F] group-hover:text-white">
                <Icon size={23} strokeWidth={1.8} />
              </div>

              <h3 className="relative mt-6 font-display text-2xl font-semibold text-[#141414]">
                {title}
              </h3>

              <p className="relative mt-4 font-body text-sm leading-7 text-[#646464]">
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* Values section */}
        <div className="mt-28 grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              Our values
            </p>

            <h3 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#141414] sm:text-5xl">
              Principles that guide how Getvia is built.
            </h3>

            <p className="mt-6 max-w-lg font-body text-base leading-8 text-[#646464]">
              We focus on useful information, clear experiences, and practical
              tools instead of unnecessary complexity.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map(
              ({ icon: Icon, title, description }, index) => {
                const highlighted = index === 0 || index === 3;

                return (
                  <article
                    key={title}
                    className={`rounded-[28px] border p-7 shadow-[0_14px_42px_rgba(0,80,20,0.05)] transition-transform duration-300 hover:-translate-y-1 ${
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
                      className={`mt-6 font-display text-2xl font-semibold ${
                        highlighted ? "text-white" : "text-[#141414]"
                      }`}
                    >
                      {title}
                    </h4>

                    <p
                      className={`mt-4 font-body text-sm leading-7 ${
                        highlighted ? "text-white/75" : "text-[#646464]"
                      }`}
                    >
                      {description}
                    </p>
                  </article>
                );
              },
            )}
          </div>
        </div>

        {/* Journey section */}
        <div className="mt-28 rounded-[36px] border border-[#DDE5DE] bg-white p-7 shadow-[0_24px_75px_rgba(0,100,30,0.08)] sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
                Our journey
              </p>

              <h3 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#141414] sm:text-5xl">
                Built step by step around a real local need.
              </h3>
            </div>

            <p className="max-w-2xl font-body text-base leading-8 text-[#646464] lg:justify-self-end">
              Getvia continues to improve by listening to customers and
              businesses and building features that solve practical problems.
            </p>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-0 top-[22px] hidden h-px w-full bg-[#CFE5D3] lg:block" />

            <div className="grid gap-6 lg:grid-cols-4">
              {JOURNEY.map(
                ({ year, title, description }, index) => (
                  <article
                    key={year}
                    className="relative rounded-[26px] border border-[#E1E7E1] bg-[#FAFCFA] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B7DDBF] hover:bg-white hover:shadow-[0_16px_40px_rgba(0,90,25,0.08)]"
                  >
                    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-[#007A1F] font-mono text-[10px] font-semibold text-white shadow-md">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#007A1F]">
                      {year}
                    </p>

                    <h4 className="mt-3 font-display text-2xl font-semibold text-[#141414]">
                      {title}
                    </h4>

                    <p className="mt-4 font-body text-sm leading-7 text-[#646464]">
                      {description}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

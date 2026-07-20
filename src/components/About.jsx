import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const STORY_STEPS = [
  {
    year: "2022",
    title: "The idea began",
    body: "Getvia started with one clear goal: make it easier for people to find reliable local businesses.",
  },
  {
    year: "2023",
    title: "Trust came first",
    body: "We focused on clear business information, stronger profiles, and simple ways for customers to connect.",
  },
  {
    year: "2024",
    title: "Built for both sides",
    body: "Getvia grew into a platform for customers, professionals, and businesses across different industries.",
  },
  {
    year: "Today",
    title: "Growing with communities",
    body: "We continue improving the experience with better information, useful tools, and stronger local connections.",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Trust",
    body: "We provide clear information that helps people make better choices.",
  },
  {
    icon: Lightbulb,
    title: "Simplicity",
    body: "We make business search and profile management easy to understand.",
  },
  {
    icon: HeartHandshake,
    title: "People first",
    body: "We build useful experiences for customers, professionals, and business owners.",
  },
  {
    icon: Target,
    title: "Progress",
    body: "We help businesses improve their reach and connect with more customers.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F3FBF4] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#DDF3E1]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#B7F27D]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Main about section */}
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#CFE5D3] bg-white px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              <Sparkles size={14} />
              About Getvia
            </span>

            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#141414] sm:text-5xl lg:text-6xl">
              Making local business information easier to find.
            </h2>

            <p className="mt-6 max-w-xl font-body text-lg leading-8 text-[#646464]">
              Getvia brings useful business details into one clear place so
              people can compare options and contact the right business.
            </p>

            <a
              href="#what-we-do"
              className="mt-8 inline-flex items-center gap-2 font-body text-sm font-semibold text-[#007A1F] transition-colors hover:text-[#006619]"
            >
              See how Getvia works
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[30px] border border-[#DDE5DE] bg-white p-7 shadow-[0_24px_70px_rgba(0,100,30,0.08)] sm:p-9">
              <div className="space-y-6 font-body text-base leading-8 text-[#545954]">
                <p>
                  Finding the right local business should not be difficult.
                  Getvia brings services, products, location, and contact
                  details together in one place.
                </p>

                <p>
                  Customers can understand their options more easily and reach
                  businesses without searching across several platforms.
                </p>

                <p>
                  Businesses get a professional space to present what they
                  offer, share updates, and make it easier for customers to
                  contact them.
                </p>
              </div>

              <div className="mt-8 grid gap-4 border-t border-[#E7ECE7] pt-7 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#F8FCF8] p-4">
                  <BadgeCheck className="text-[#007A1F]" size={22} />
                  <p className="mt-3 text-sm font-semibold text-[#141414]">
                    Clear information
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F8FCF8] p-4">
                  <Building2 className="text-[#007A1F]" size={22} />
                  <p className="mt-3 text-sm font-semibold text-[#141414]">
                    Better profiles
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F8FCF8] p-4">
                  <HeartHandshake className="text-[#007A1F]" size={22} />
                  <p className="mt-3 text-sm font-semibold text-[#141414]">
                    Easier contact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-28">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              What guides us
            </span>

            <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
              Clear values behind every decision.
            </h3>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-3xl border border-[#E1E5E1] bg-white p-6 shadow-[0_14px_40px_rgba(0,80,20,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B8DDBF] hover:shadow-[0_20px_55px_rgba(0,110,30,0.10)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F]">
                  <Icon size={23} />
                </div>

                <h4 className="mt-5 font-display text-2xl font-semibold text-[#141414]">
                  {title}
                </h4>

                <p className="mt-3 font-body text-sm leading-7 text-[#646464]">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Story timeline */}
        <div className="mt-28">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
                Our journey
              </span>

              <h3 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
                Built step by step around a real local need.
              </h3>
            </div>

            <p className="max-w-2xl font-body text-base leading-8 text-[#646464] lg:justify-self-end">
              Getvia continues to improve by listening to customers and
              businesses and building features that solve practical problems.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STORY_STEPS.map((step, index) => (
              <article
                key={step.year}
                className="relative rounded-3xl border border-[#DDE5DE] bg-white p-6 shadow-[0_12px_35px_rgba(0,80,20,0.04)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-medium text-[#007A1F]">
                    {step.year}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F7EA] font-mono text-xs font-semibold text-[#007A1F]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h4 className="mt-5 font-display text-xl font-semibold leading-snug text-[#141414]">
                  {step.title}
                </h4>

                <p className="mt-4 font-body text-sm leading-7 text-[#646464]">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

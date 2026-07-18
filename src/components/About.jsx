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
    title: "The idea took shape",
    body: "Getvia began with a simple problem: people were struggling to find reliable local businesses, while many genuine businesses had no strong digital visibility.",
  },
  {
    year: "2023",
    title: "Trust became the foundation",
    body: "The platform evolved around better business information, stronger profiles, direct contact options, and a clearer way for people to discover local services.",
  },
  {
    year: "2024",
    title: "Built for customers and businesses",
    body: "Getvia expanded into a two-sided platform that helps customers discover with confidence and helps businesses improve visibility, credibility, and customer reach.",
  },
  {
    year: "Today",
    title: "Growing with local communities",
    body: "Getvia continues to build a more dependable discovery experience for businesses, professionals, customers, and communities across multiple industries.",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Trust",
    body: "We aim to make local discovery more dependable through clear business information and credible profiles.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "We simplify the way people discover businesses and the way businesses build their digital presence.",
  },
  {
    icon: HeartHandshake,
    title: "Customer first",
    body: "Every platform decision should create real value for both customers and business owners.",
  },
  {
    icon: Target,
    title: "Growth",
    body: "We help businesses improve reach, strengthen visibility, and connect with more potential customers.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F3FBF4] py-24 lg:py-32"
    >
      {/* Soft decorative elements */}
      <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#DDF3E1]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#B7F27D]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Main about section */}
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#CFE5D3] bg-white px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              <Sparkles size={14} />
              Who we are
            </span>

            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#141414] sm:text-5xl lg:text-6xl">
              Helping people discover businesses worth knowing.
            </h2>

            <p className="mt-6 max-w-xl font-body text-lg leading-8 text-[#646464]">
              Getvia is a technology-driven business discovery company built to
              make local search clearer, more useful, and more trustworthy.
            </p>

            <a
              href="#what-we-do"
              className="mt-8 inline-flex items-center gap-2 font-body text-sm font-semibold text-[#007A1F] transition-colors hover:text-[#006619]"
            >
              Explore what Getvia does
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[30px] border border-[#DDE5DE] bg-white p-7 shadow-[0_24px_70px_rgba(0,100,30,0.08)] sm:p-9">
              <div className="space-y-6 font-body text-base leading-8 text-[#545954]">
                <p>
                  Getvia helps people discover trusted local businesses,
                  professionals, services, and useful business information in
                  one easy-to-use platform.
                </p>

                <p>
                  At the same time, it gives businesses a professional digital
                  presence where they can showcase their services, products,
                  galleries, offers, contact details, and business story.
                </p>

                <p>
                  Our purpose is to reduce the gap between local businesses and
                  the people actively searching for them. We believe that
                  genuine businesses should be easier to discover, easier to
                  understand, and easier to contact.
                </p>

                <p>
                  The long-term vision is to make Getvia a trusted destination
                  for business discovery while helping local businesses grow
                  through better visibility, credibility, and customer access.
                </p>
              </div>

              <div className="mt-8 grid gap-4 border-t border-[#E7ECE7] pt-7 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#F8FCF8] p-4">
                  <BadgeCheck className="text-[#007A1F]" size={22} />
                  <p className="mt-3 text-sm font-semibold text-[#141414]">
                    Trusted discovery
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F8FCF8] p-4">
                  <Building2 className="text-[#007A1F]" size={22} />
                  <p className="mt-3 text-sm font-semibold text-[#141414]">
                    Business visibility
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F8FCF8] p-4">
                  <HeartHandshake className="text-[#007A1F]" size={22} />
                  <p className="mt-3 text-sm font-semibold text-[#141414]">
                    Better connections
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
              Built around trust, usefulness, and long-term value.
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
                From a local problem to a platform for better discovery.
              </h3>
            </div>

            <p className="max-w-2xl font-body text-base leading-8 text-[#646464] lg:justify-self-end">
              Getvia continues to grow by focusing on what matters most:
              clearer information, stronger business profiles, dependable
              discovery, and meaningful connections between businesses and
              customers.
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

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Search,
  Store,
  Users,
} from "lucide-react";

const STEPS = [
  {
    tag: "Step 1",
    title: "Discover",
    body: "Search for businesses, professionals, and services by category or location. Compare useful details and choose with more confidence.",
    icon: Search,
    points: [
      "Search businesses and professionals",
      "Browse categories and services",
      "Compare business profiles",
    ],
  },
  {
    tag: "Step 2",
    title: "Present",
    body: "Businesses can create complete profiles with services, products, galleries, contact details, offers, and updates.",
    icon: Store,
    points: [
      "Create a professional profile",
      "Show services and products",
      "Share offers and updates",
    ],
  },
  {
    tag: "Step 3",
    title: "Connect",
    body: "Customers can contact businesses directly, while businesses gain better visibility and more opportunities to receive enquiries.",
    icon: Building2,
    points: [
      "Contact businesses directly",
      "Improve business visibility",
      "Build customer relationships",
    ],
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#E8F7EA]/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#B7F27D]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#CFE5D3] bg-[#F3FBF4] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              <Users size={14} />
              How Getvia Works
            </span>

            <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] sm:text-5xl lg:text-6xl">
              A simple way to
              <span className="text-[#007A1F]">
                {" "}
                discover, present, and connect.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl font-body text-lg leading-8 text-[#646464] lg:justify-self-end">
            Whether you are looking for a service or promoting a business,
            Getvia makes each step clear and easy to understand.
          </p>
        </div>

        {/* Workflow sections */}
        <div className="mt-20 space-y-12">
          {STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.tag}
                className={`grid overflow-hidden rounded-[32px] border border-[#DDE5DE] bg-[#F8FCF8] shadow-[0_20px_60px_rgba(0,80,20,0.06)] lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Visual panel */}
                <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#E8F7EA] via-[#F8FCF8] to-white p-8 sm:p-12">
                  <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#7CE629]/20 blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#007A1F]/10 blur-3xl" />

                  <div className="relative w-full max-w-md rounded-[28px] border border-white/80 bg-white p-7 shadow-[0_22px_60px_rgba(0,90,25,0.12)]">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#007A1F] text-white">
                        <Icon size={27} strokeWidth={1.9} />
                      </div>

                      <div>
                        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.17em] text-[#007A1F]">
                          Getvia process
                        </p>

                        <p className="mt-1 font-display text-xl font-semibold text-[#141414]">
                          {step.tag}
                        </p>
                      </div>
                    </div>

                    <div className="mt-7 space-y-3">
                      {step.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 rounded-2xl border border-[#E4EAE4] bg-[#FAFCFA] px-4 py-3"
                        >
                          <CheckCircle2
                            size={18}
                            className="shrink-0 text-[#007A1F]"
                          />

                          <span className="font-body text-sm text-[#555B55]">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text panel */}
                <div className="flex flex-col justify-center bg-white p-8 sm:p-12 lg:p-14">
                  <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
                    {step.tag}
                  </span>

                  <h3 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#141414] sm:text-4xl">
                    {step.title}
                  </h3>

                  <p className="mt-6 max-w-xl font-body text-base leading-8 text-[#646464]">
                    {step.body}
                  </p>

                  <a
                    href={
                      index === 0
                        ? "https://getvia.in"
                        : index === 1
                          ? "#contact"
                          : "#contact"
                    }
                    target={index === 0 ? "_blank" : undefined}
                    rel={index === 0 ? "noreferrer" : undefined}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#007A1F] px-6 py-3 font-body text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg"
                  >
                    {index === 0
                      ? "Browse Getvia"
                      : index === 1
                        ? "List your business"
                        : "Contact our team"}

                    <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-8 rounded-[32px] bg-[#007A1F] px-8 py-10 shadow-[0_25px_65px_rgba(0,100,30,0.18)] sm:px-10 lg:flex-row lg:items-center">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/65">
              One connected experience
            </p>

            <h3 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Find what you need or make your business easier to find.
            </h3>
          </div>

          <a
            href="https://getvia.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 font-body text-sm font-semibold text-[#007A1F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F3FBF4]"
          >
            Explore Getvia
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

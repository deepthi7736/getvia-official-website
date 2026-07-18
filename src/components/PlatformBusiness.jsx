import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Eye,
  LayoutDashboard,
  Megaphone,
  Search,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Search,
    title: "Smarter business discovery",
    body:
      "Customers can explore businesses, professionals, products, services, locations, and offers through one clear platform.",
  },
  {
    icon: BadgeCheck,
    title: "Professional business presence",
    body:
      "Businesses can present important information clearly through structured profiles designed for better visibility and trust.",
  },
  {
    icon: Users,
    title: "Direct customer connections",
    body:
      "Getvia helps customers move from discovery to action using contact details, maps, enquiry options, and business information.",
  },
];

const BUSINESS_BENEFITS = [
  {
    icon: Eye,
    title: "Better visibility",
    body:
      "Present your business to people who are already exploring local products and services.",
  },
  {
    icon: ShieldCheck,
    title: "Stronger credibility",
    body:
      "A complete and professional business profile helps customers understand your business more clearly.",
  },
  {
    icon: Megaphone,
    title: "Showcase what you offer",
    body:
      "Display your services, products, galleries, offers, business details, and contact information in one place.",
  },
  {
    icon: LayoutDashboard,
    title: "Easy profile management",
    body:
      "Keep your business information organised and update important details as your business grows.",
  },
];

export default function PlatformBusiness() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#E8F7EA]/80 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-16 h-96 w-96 rounded-full bg-[#B7F27D]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#CFE5D3] bg-[#F3FBF4] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              <BarChart3 size={14} />
              Platform for business
            </span>

            <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] sm:text-5xl lg:text-6xl">
              Everything businesses need to build a stronger
              <span className="text-[#007A1F]"> digital presence.</span>
            </h2>
          </div>

          <p className="max-w-2xl font-body text-lg leading-8 text-[#646464] lg:justify-self-end">
            Getvia helps businesses present their identity, services, products,
            offers, contact details, and location through one organised and
            customer-friendly profile.
          </p>
        </div>

        {/* Platform highlights */}
        <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {HIGHLIGHTS.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <article
                key={highlight.title}
                className="group relative overflow-hidden rounded-[28px] border border-[#DDE5DE] bg-[#F8FCF8] p-8 shadow-[0_16px_45px_rgba(0,80,20,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#B7DDBF] hover:shadow-[0_26px_65px_rgba(0,100,30,0.11)]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#E8F7EA] transition-transform duration-500 group-hover:scale-125" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#007A1F] shadow-sm transition-all duration-300 group-hover:bg-[#007A1F] group-hover:text-white">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <h3 className="relative mt-7 font-display text-2xl font-semibold text-[#141414]">
                  {highlight.title}
                </h3>

                <p className="relative mt-4 font-body text-sm leading-7 text-[#646464]">
                  {highlight.body}
                </p>
              </article>
            );
          })}
        </div>

        {/* Business section */}
        <div className="mt-20 overflow-hidden rounded-[34px] border border-[#DDE5DE] bg-[#F3FBF4] shadow-[0_24px_75px_rgba(0,100,30,0.08)]">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
                Why businesses choose Getvia
              </span>

              <h3 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#141414] sm:text-4xl lg:text-5xl">
                Present your business clearly and make it easier for customers
                to connect.
              </h3>

              <p className="mt-6 max-w-2xl font-body text-base leading-8 text-[#646464]">
                A Getvia business profile acts as a digital destination where
                customers can understand what you offer, explore your
                information, view your location, and contact you directly.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#007A1F] px-6 py-3.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-[0_14px_35px_rgba(0,100,30,0.20)]"
                >
                  List your business
                  <ArrowRight size={17} />
                </a>

                <a
                  href="https://getvia.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#C9D8CB] bg-white px-6 py-3.5 font-body text-sm font-semibold text-[#007A1F] transition-all duration-300 hover:border-[#007A1F] hover:bg-[#F8FCF8]"
                >
                  Explore Getvia
                </a>
              </div>
            </div>

            {/* Visual */}
            <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#007A1F] to-[#005E17] p-8 sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#7CE629]/20 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

              <div className="relative w-full max-w-md rounded-[30px] border border-white/15 bg-white p-7 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F]">
                      <Store size={27} />
                    </div>

                    <div>
                      <p className="font-body text-sm font-semibold text-[#141414]">
                        Business profile
                      </p>

                      <p className="mt-1 font-body text-xs text-[#747A74]">
                        Manage your presence
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-[#E8F7EA] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-[#007A1F]">
                    Active
                  </span>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[#E3E9E3] bg-[#FAFCFA] p-4">
                    <Eye size={19} className="text-[#007A1F]" />

                    <p className="mt-4 font-display text-2xl font-semibold text-[#141414]">
                      Visible
                    </p>

                    <p className="mt-1 font-body text-xs text-[#747A74]">
                      Business information
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E3E9E3] bg-[#FAFCFA] p-4">
                    <MessageCircleIcon />

                    <p className="mt-4 font-display text-2xl font-semibold text-[#141414]">
                      Direct
                    </p>

                    <p className="mt-1 font-body text-xs text-[#747A74]">
                      Customer enquiries
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-[#E3E9E3] bg-[#FAFCFA] p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-body text-sm font-semibold text-[#141414]">
                      Profile completeness
                    </p>

                    <p className="font-mono text-xs text-[#007A1F]">Ready</p>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#E5EBE5]">
                    <div className="h-full w-[88%] rounded-full bg-[#007A1F]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-20">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              Business benefits
            </p>

            <h3 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#141414]">
              Tools designed to help businesses become easier to discover.
            </h3>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BUSINESS_BENEFITS.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-[26px] border border-[#DDE5DE] bg-white p-7 shadow-[0_14px_40px_rgba(0,80,20,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F7EA] text-[#007A1F]">
                    <Icon size={22} />
                  </div>

                  <h4 className="mt-5 font-display text-xl font-semibold text-[#141414]">
                    {benefit.title}
                  </h4>

                  <p className="mt-3 font-body text-sm leading-7 text-[#646464]">
                    {benefit.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MessageCircleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[19px] w-[19px] text-[#007A1F]"
      aria-hidden="true"
    >
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6A8.38 8.38 0 0 1 12.5 3h.5a8.48 8.48 0 0 1 8 8v.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

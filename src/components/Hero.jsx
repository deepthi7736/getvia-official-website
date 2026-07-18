import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  Search,
  ShieldCheck,
  Star,
  Store,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#FAFCFA] to-[#E8F7EA] pb-24 pt-36 lg:pb-32 lg:pt-44"
    >
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute -right-40 top-24 h-[460px] w-[460px] rounded-full bg-[#B7F27D]/20 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-[#DDF3E1]/60 blur-3xl" />

      {/* Decorative route lines */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 650 C 250 500, 400 700, 700 480 S 1100 250, 1550 350"
          stroke="#B7E8BF"
          strokeWidth="2"
          strokeDasharray="6 12"
          fill="none"
        />

        <path
          d="M-100 200 C 300 300, 500 100, 850 220 S 1200 450, 1550 300"
          stroke="#DDF3E1"
          strokeWidth="2"
          strokeDasharray="6 12"
          fill="none"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
        {/* Left content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#CFE5D3] bg-[#E8F7EA] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.17em] text-[#007A1F]">
            <span className="h-2 w-2 rounded-full bg-[#7CE629]" />
            Better local discovery starts here
          </span>

          <h1 className="mt-7 max-w-2xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-[#141414] sm:text-6xl lg:text-7xl">
            Discover trusted businesses with{" "}
            <span className="text-[#007A1F]">Getvia.</span>
          </h1>

          <p className="mt-7 max-w-xl font-body text-lg leading-8 text-[#646464]">
            Explore verified businesses, skilled professionals, local services,
            offers, and useful information through one clear and dependable
            discovery platform.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="https://getvia.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#007A1F] px-7 py-3.5 font-body text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg"
            >
              Explore Getvia
              <ArrowRight size={17} strokeWidth={2.2} />
            </a>

            <a
              href="#what-we-do"
              className="inline-flex items-center gap-2 rounded-xl border border-[#CDD5CE] bg-white px-7 py-3.5 font-body text-sm font-semibold text-[#141414] transition-all duration-300 hover:border-[#007A1F] hover:text-[#007A1F]"
            >
              See how it works
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-sm text-[#646464]">
              <BadgeCheck size={17} className="text-[#007A1F]" />
              Verified profiles
            </div>

            <div className="flex items-center gap-2 text-sm text-[#646464]">
              <Search size={17} className="text-[#007A1F]" />
              Easy discovery
            </div>

            <div className="flex items-center gap-2 text-sm text-[#646464]">
              <MapPin size={17} className="text-[#007A1F]" />
              Nearby businesses
            </div>
          </div>

          {/* Statistics */}
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-[#DDE5DE] pt-8">
            {[
              ["18,000+", "Verified businesses"],
              ["40+", "Cities"],
              ["4.8/5", "Average rating"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-mono text-xl font-medium text-[#007A1F] sm:text-2xl">
                  {value}
                </dt>

                <dd className="mt-1 font-body text-xs leading-5 text-[#707570]">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right product preview */}
        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute -inset-10 -z-10 rounded-full bg-[#B7F27D]/20 blur-3xl" />

          <div className="rounded-[30px] border border-[#DDE4DE] bg-white p-5 shadow-[0_30px_90px_rgba(0,122,31,0.12)] sm:p-7">
            {/* Search preview */}
            <div className="flex items-center gap-4 rounded-2xl bg-[#007A1F] p-4 text-white">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Search size={24} />
              </div>

              <div>
                <p className="text-xs text-white/70">
                  What are you looking for?
                </p>

                <p className="mt-1 font-body text-sm font-semibold sm:text-base">
                  Search businesses and professionals
                </p>
              </div>
            </div>

            {/* Business card */}
            <div className="mt-5 rounded-2xl border border-[#E1E5E1] bg-white p-5 shadow-[0_12px_35px_rgba(0,80,20,0.05)]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F]">
                    <Store size={25} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-body text-lg font-semibold text-[#141414]">
                        Trusted Local Business
                      </h2>

                      <BadgeCheck
                        size={18}
                        className="text-[#007A1F]"
                      />
                    </div>

                    <p className="mt-1 text-sm text-[#777C77]">
                      Local services · Kerala
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-[#7CE629] px-3 py-1 text-[11px] font-bold uppercase text-[#16351B]">
                  Open
                </span>
              </div>

              {/* Feature chips */}
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#F8FAF8] px-3 py-2 text-xs text-[#646464]">
                  <Star size={14} className="fill-[#007A1F] text-[#007A1F]" />
                  4.8 rating
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-[#F8FAF8] px-3 py-2 text-xs text-[#646464]">
                  <MapPin size={14} className="text-[#007A1F]" />
                  Nearby
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-[#F8FAF8] px-3 py-2 text-xs text-[#646464]">
                  <ShieldCheck size={14} className="text-[#007A1F]" />
                  Verified
                </span>
              </div>

              {/* Image preview tiles */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="h-24 rounded-xl bg-[#E8F7EA]" />
                <div className="h-24 rounded-xl bg-[#F3FBF4]" />
                <div className="h-24 rounded-xl bg-[#CFEED5]" />
              </div>

              {/* Footer action */}
              <div className="mt-5 flex items-center justify-between border-t border-[#E8ECE8] pt-5">
                <p className="text-sm text-[#646464]">
                  View complete business profile
                </p>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#007A1F] text-white">
                  <ArrowRight size={18} />
                </span>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 rounded-xl bg-[#7CE629] px-6 py-3 shadow-[0_15px_35px_rgba(70,160,20,0.25)] sm:block">
            <p className="whitespace-nowrap font-body text-sm font-semibold text-[#16351B]">
              Discover. Compare. Connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

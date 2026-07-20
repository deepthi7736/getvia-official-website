import { Store } from "lucide-react";
import ArtTile from "./ArtTile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#FAFCFA] to-[#E8F7EA] pb-24 pt-20 lg:pb-32 lg:pt-28"
    >
      {/* ambient route lines */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 650 C 250 500, 400 700, 700 480 S 1100 250, 1550 350"
          stroke="#007A1F"
          strokeWidth="2"
          strokeDasharray="6 10"
          fill="none"
        />
        <path
          d="M-100 200 C 300 300, 500 100, 850 220 S 1200 450, 1550 300"
          stroke="#7CE629"
          strokeWidth="2"
          strokeDasharray="6 10"
          fill="none"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#DDE5DE] bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#646464]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#007A1F]" />
            Now live in 40+ cities
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-[#141414] lg:text-6xl">
            The route to every trusted business{" "}
            <span className="italic text-[#007A1F]">near you.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-[#646464]">
            Getvia connects people with verified local businesses, and helps
            those businesses get found, get chosen, and get growing. One
            platform, built for both sides of every local decision.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/list-your-business"
              className="rounded-xl bg-[#007A1F] px-7 py-3.5 font-body text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg"
            >
              List your business
            </a>
            <a
              href="#what-we-do"
              className="rounded-xl border border-[#CDD5CE] bg-white px-7 py-3.5 font-body text-sm font-semibold text-[#141414] transition-all duration-300 hover:border-[#007A1F] hover:text-[#007A1F]"
            >
              See how it works
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-[#E1E5E1] pt-8">
            {[
              ["18,000+", "Verified businesses"],
              ["40", "Cities"],
              ["4.8/5", "Avg. rating"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-mono text-2xl font-medium text-[#141414]">
                  {value}
                </dt>
                <dd className="mt-1 text-xs text-[#858585]">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          {/* soft glow behind the product preview */}
          <div className="absolute -inset-10 -z-10 rounded-full bg-[#B7F27D]/20 blur-3xl" />

          <div className="overflow-hidden rounded-[30px] border border-[#DDE4DE] bg-white shadow-[0_30px_90px_rgba(0,122,31,0.12)]">
            {/* Replace with a real, high-quality photo: a business owner
                at their storefront, warmly lit, candid rather than posed. */}
            <ArtTile icon={Store} variant="fresh" className="h-[560px] w-full" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-[#E1E5E1] bg-white p-4 shadow-xl sm:block">
            <p className="font-mono text-xs uppercase tracking-wide text-[#858585]">
              Verified this week
            </p>
            <p className="mt-1 font-display text-lg text-[#141414]">
              212 new businesses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

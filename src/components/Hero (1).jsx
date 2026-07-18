import { Store } from "lucide-react";
import ArtTile from "./ArtTile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#14361F] pb-24 pt-36 lg:pb-32 lg:pt-44"
    >
      {/* ambient route lines */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 650 C 250 500, 400 700, 700 480 S 1100 250, 1550 350"
          stroke="#8BC63F"
          strokeWidth="2"
          strokeDasharray="6 10"
          fill="none"
        />
        <path
          d="M-100 200 C 300 300, 500 100, 850 220 S 1200 450, 1550 300"
          stroke="#1E5631"
          strokeWidth="2"
          strokeDasharray="6 10"
          fill="none"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E5631]" />
            Now live in 40+ cities
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-white lg:text-6xl">
            The route to every trusted business{" "}
            <span className="italic text-[#8BC63F]">near you.</span>
          </h1>

          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-white/75">
            Getvia connects people with verified local businesses, and helps
            those businesses get found, get chosen, and get growing. One
            platform, built for both sides of every local decision.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#8BC63F] px-7 py-3.5 font-body text-sm font-medium text-[#14361F] shadow-lg shadow-[#8BC63F]/20 transition-transform hover:scale-[1.03]"
            >
              List your business
            </a>
            <a
              href="#what-we-do"
              className="rounded-full border border-white/25 px-7 py-3.5 font-body text-sm text-white transition-colors hover:border-white/50"
            >
              See how it works
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              ["18,000+", "Verified businesses"],
              ["40", "Cities"],
              ["4.8/5", "Avg. rating"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-mono text-2xl font-medium text-white">
                  {value}
                </dt>
                <dd className="mt-1 font-body text-xs text-white/55">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            {/* Replace with a real, high-quality photo: a business owner
                at their storefront, warmly lit, candid rather than posed. */}
            <ArtTile icon={Store} variant="fresh" className="h-[560px] w-full" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-xl sm:block">
            <p className="font-mono text-xs uppercase tracking-wide text-[#6B7280]">
              Verified this week
            </p>
            <p className="mt-1 font-display text-lg text-[#14361F]">
              212 new businesses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

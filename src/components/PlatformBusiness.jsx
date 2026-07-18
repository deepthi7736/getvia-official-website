const HIGHLIGHTS = [
  { title: "Real-time discovery engine", body: "Search results update as new businesses verify and new reviews confirm, so what customers see is always current." },
  { title: "Verification pipeline", body: "A structured process — document checks, on-site confirmation, ongoing monitoring — behind every green checkmark." },
  { title: "Two-sided visibility model", body: "Customer demand and business supply are matched by relevance, not by whoever paid the most for placement." },
];

const BUSINESS_BENEFITS = [
  { stat: "3.2x", label: "Average increase in profile views after verification" },
  { stat: "61%", label: "Of listed businesses report new customers within 30 days" },
  { stat: "24/7", label: "Discoverable — no opening hours on your visibility" },
];

export default function PlatformBusiness() {
  return (
    <section id="platform" className="bg-[#14361F] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Platform highlights */}
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8BC63F]">
            Platform highlights
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-white lg:text-5xl">
            The infrastructure behind every trusted result.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className="border-t border-white/15 pt-6">
              <h3 className="font-display text-lg text-white">{h.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-white/60">
                {h.body}
              </p>
            </div>
          ))}
        </div>

        {/* Why businesses choose Getvia */}
        <div className="mt-28 grid grid-cols-1 items-center gap-14 rounded-3xl bg-white/[0.04] p-10 lg:grid-cols-2 lg:p-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#1E5631]">
              Why businesses choose getvia
            </span>
            <h3 className="mt-3 font-display text-3xl text-white lg:text-4xl">
              Visibility, credibility, and leads — without buying ads.
            </h3>
            <p className="mt-5 font-body text-base leading-relaxed text-white/65">
              A verified Getvia profile does double duty: it's a storefront
              for customers already searching, and a credibility signal that
              travels with your business everywhere it's shared. Owners use
              Getvia to build digital presence, generate qualified leads, and
              grow without competing in an ad auction.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-block rounded-full bg-[#8BC63F] px-7 py-3.5 font-body text-sm font-medium text-[#14361F] transition-transform hover:scale-[1.03]"
            >
              Claim your business
            </a>
          </div>

          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
            {BUSINESS_BENEFITS.map((b) => (
              <div key={b.label} className="flex items-baseline gap-4 lg:border-l lg:border-white/15 lg:pl-6">
                <dt className="font-mono text-3xl font-medium text-[#8BC63F]">
                  {b.stat}
                </dt>
                <dd className="font-body text-sm text-white/65">{b.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

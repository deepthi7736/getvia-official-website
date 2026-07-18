const VALUES = [
  { title: "Trust", body: "We verify before we publish. If we can't confirm it, it doesn't go live." },
  { title: "Transparency", body: "No pay-to-rank. Visibility is earned by service quality, not ad spend." },
  { title: "Simplicity", body: "Finding a business — or being found — should take minutes, not research." },
  { title: "Customer-first", body: "Every feature is judged by whether it helps someone make a better decision." },
  { title: "Quality over quantity", body: "We'd rather list 18,000 real businesses than 180,000 unverified ones." },
  { title: "Growth, shared", body: "Getvia only succeeds if the businesses on it are actually growing." },
];

export default function MissionValues() {
  return (
    <section id="mission" className="bg-[#14361F] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8BC63F]">
              Our mission
            </span>
            <p className="mt-4 font-display text-2xl leading-snug text-white lg:text-3xl">
              To connect people with local businesses they can trust, and
              give those businesses an honest way to be found.
            </p>
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#1E5631]">
              Our vision
            </span>
            <p className="mt-4 font-display text-2xl leading-snug text-white lg:text-3xl">
              To become the world's most trusted platform for local business
              discovery — the first place anyone checks before they buy,
              book, or visit.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <span className="font-mono text-xs uppercase tracking-widest text-white/50">
            Our values
          </span>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title}>
                <h4 className="font-display text-lg text-white">
                  {v.title}
                </h4>
                <p className="mt-2 font-body text-sm leading-relaxed text-white/60">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

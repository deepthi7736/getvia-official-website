const STORY_STEPS = [
  {
    year: "2022",
    title: "A frustrating Saturday",
    body: "Getvia started with a founder driving across town three times looking for a plumber who actually answered the phone. Every listing was outdated. Every review felt fake.",
  },
  {
    year: "2023",
    title: "Verification, not volume",
    body: "Instead of scraping the web for every business that ever existed, the team built a verification process — real people, real visits, real confirmation that a business is who it says it is.",
  },
  {
    year: "2024",
    title: "Built for both sides",
    body: "Business owners kept asking for the same tool customers were using to find them. So Getvia became a two-sided platform: discovery for customers, growth tools for owners.",
  },
  {
    year: "Today",
    title: "40 cities, one standard",
    body: "Getvia now covers 40 cities and 18,000+ verified businesses, with the same bar for trust in every one of them.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#F5F7F4] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* About */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1E5631]">
              Who we are
            </span>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#14361F] lg:text-5xl">
              A local-business platform, built like a trust company.
            </h2>
          </div>
          <div className="space-y-5 font-body text-base leading-relaxed text-[#374151] lg:col-span-6 lg:col-start-7">
            <p>
              Getvia is a technology company that helps people discover
              trusted local businesses — and helps those businesses reach the
              customers actively looking for them. We exist because local
              search has long rewarded whoever spends the most on ads, not
              whoever actually deserves the visit.
            </p>
            <p>
              Every business on Getvia is verified before it's listed.
              Every review comes from a real visit we can confirm. That's the
              whole premise: a directory people can actually rely on, and a
              growth channel businesses can actually trust.
            </p>
            <p>
              Our long-term goal is simple to say and hard to build: become
              the default way anyone, anywhere, finds a business worth their
              time.
            </p>
          </div>
        </div>

        {/* Story timeline */}
        <div className="mt-28">
          <span className="font-mono text-xs uppercase tracking-widest text-[#1E5631]">
            Our story
          </span>
          <h3 className="mt-3 max-w-xl font-display text-3xl font-semibold text-[#14361F] lg:text-4xl">
            From one bad Saturday to a standard for local trust.
          </h3>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {STORY_STEPS.map((step) => (
              <div
                key={step.year}
                className="border-t-2 border-[#14361F]/10 pt-5"
              >
                <p className="font-mono text-sm text-[#8BC63F]">
                  {step.year}
                </p>
                <h4 className="mt-2 font-display text-xl text-[#14361F]">
                  {step.title}
                </h4>
                <p className="mt-3 font-body text-sm leading-relaxed text-[#6B7280]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

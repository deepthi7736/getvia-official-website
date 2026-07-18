const AUDIENCES = [
  {
    tag: "For customers",
    title: "Find a business you can actually trust",
    body: "Search by need, not just category. Every result is verified, every review is confirmed, and every profile shows exactly what you need to decide — hours, pricing signals, real photos, direct contact.",
    img: "https://placehold.co/640x480/1E5631/F5F7F4?text=Customer+searching+on+phone",
    alt: "A customer browsing local businesses on their phone",
  },
  {
    tag: "For businesses",
    title: "Get found by people ready to choose you",
    body: "Build a profile that actually converts, appear where local searches happen, and reach customers who are already looking — not cold traffic. Verification builds the trust; Getvia brings the visibility.",
    img: "https://placehold.co/640x480/8BC63F/14361F?text=Business+owner+managing+profile",
    alt: "A business owner managing their Getvia profile",
  },
  {
    tag: "For communities",
    title: "Grow local economies from the ground up",
    body: "When trusted businesses are easier to find, they grow — and so does everything around them. Getvia is built to make local commerce healthier, city by city.",
    img: "https://placehold.co/640x480/14361F/F5F7F4?text=Local+shopping+street",
    alt: "A thriving local shopping street",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-[#F5F7F4] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#1E5631]">
            What we do
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#14361F] lg:text-5xl">
            One platform. Three groups of people it's built for.
          </h2>
        </div>

        <div className="mt-16 space-y-20">
          {AUDIENCES.map((a, i) => (
            <div
              key={a.tag}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={a.img}
                  alt={a.alt}
                  className="h-80 w-full object-cover"
                />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#8BC63F]">
                  {a.tag}
                </span>
                <h3 className="mt-3 font-display text-3xl text-[#14361F]">
                  {a.title}
                </h3>
                <p className="mt-4 max-w-md font-body text-base leading-relaxed text-[#6B7280]">
                  {a.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

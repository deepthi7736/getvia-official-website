const TESTIMONIALS = [
  {
    quote:
      "We used to rely entirely on word of mouth. Within two months of verifying our profile, Getvia was our second-largest source of new customers.",
    name: "Amara Osei",
    role: "Owner, Osei & Co. Bakery",
    img: "https://placehold.co/160x160/8BC63F/14361F?text=AO",
  },
  {
    quote:
      "I stopped checking three different apps before booking anything. Every result I click on is a business that's actually real, actually open, and actually good.",
    name: "Daniel Reyes",
    role: "Getvia customer",
    img: "https://placehold.co/160x160/1E5631/F5F7F4?text=DR",
  },
  {
    quote:
      "The verification badge did more for our credibility in a month than our website had in three years.",
    name: "Priya Nair",
    role: "Founder, Nair Physiotherapy Clinic",
    img: "https://placehold.co/160x160/14361F/F5F7F4?text=PN",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <span className="font-mono text-xs uppercase tracking-widest text-[#1E5631]">
          What people say
        </span>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-tight text-[#14361F] lg:text-5xl">
          Trusted by owners and customers alike.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-[#14361F]/8 bg-[#F5F7F4] p-8"
            >
              <blockquote className="font-display text-lg leading-snug text-[#14361F]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-body text-sm font-medium text-[#14361F]">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-[#6B7280]">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

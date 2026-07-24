import { BadgeCheck } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Within two months of getting verified, Getvia became our second-largest source of new customers.",
    name: "Amara Osei",
    role: "Owner, Osei & Co. Bakery",
    tag: "Verified business owner",
    img: "https://placehold.co/160x160/7CE629/141414?text=AO",
  },
  {
    quote:
      "I stopped juggling three different apps. Every result here is a business that's actually real and open.",
    name: "Daniel Reyes",
    role: "Getvia customer",
    tag: "Verified customer",
    img: "https://placehold.co/160x160/007A1F/FFFFFF?text=DR",
  },
  {
    quote:
      "The verification badge did more for our credibility in a month than our website had in three years.",
    name: "Priya Nair",
    role: "Founder, Nair Physiotherapy Clinic",
    tag: "Verified business owner",
    img: "https://placehold.co/160x160/006619/FFFFFF?text=PN",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-12 md:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <span className="inline-flex rounded-full bg-[#E8F7EA] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
          What people say
        </span>

        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight text-[#141414] lg:text-5xl">
          Trusted by owners and customers alike.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col justify-between rounded-3xl border border-[#E1E5E1] bg-white p-6 shadow-[0_16px_50px_rgba(20,60,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9DDBF] hover:shadow-[0_22px_60px_rgba(0,122,31,0.10)] md:p-7"
            >
              <blockquote className="font-display text-lg leading-snug text-[#141414]">
                “{testimonial.quote}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  loading="lazy"
                  decoding="async"
                  className="h-11 w-11 rounded-full object-cover"
                />

                <div>
                  <p className="font-body text-sm font-semibold text-[#141414]">
                    {testimonial.name}
                  </p>

                  <p className="text-xs text-[#858585]">
                    {testimonial.role}
                  </p>

                  <p className="mt-0.5 flex items-center gap-1 text-[11px] font-medium text-[#007A1F]">
                    <BadgeCheck size={12} />
                    {testimonial.tag}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

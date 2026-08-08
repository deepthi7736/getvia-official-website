import { BadgeCheck } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Getvia helped us reach more genuine customers in Kochi. After creating our profile, we started receiving better enquiries from people actually looking for our services.",
    name: "Anupama Krishnan",
    role: "Owner, Anu's Bridal Studio, Kochi",
    tag: "Verified business owner",
    img: "https://placehold.co/160x160/7CE629/141414?text=AK",
  },
  {
    quote:
      "We used to depend mostly on referrals and WhatsApp enquiries. With Getvia, more people can discover our services online and contact us directly when they need help.",
    name: "Nithin Raj",
    role: "Owner, FixPro Home Services, Ernakulam",
    tag: "Verified business owner",
    img: "https://placehold.co/160x160/007A1F/FFFFFF?text=NR",
  },
  {
    quote:
      "Having our business information in one place makes it much easier for customers to understand what we offer before contacting us. It has made our online presence feel more professional.",
    name: "Sajith Mathew",
    role: "Owner, Sajith Motors, Thrissur",
    tag: "Verified business owner",
    img: "https://placehold.co/160x160/006619/FFFFFF?text=SM",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section Label */}
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#007A1F]">
          What people say
        </span>

        {/* Heading */}
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-[#141414] lg:text-5xl">
          Trusted by owners and customers alike.
        </h2>

        {/* Testimonials */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="
                flex min-h-[285px] flex-col justify-between
                rounded-3xl
                border border-[#E1E5E1]
                bg-white
                p-6
                shadow-[0_16px_50px_rgba(20,60,30,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#B9DDBF]
                hover:shadow-[0_22px_60px_rgba(0,122,31,0.10)]
                md:p-7
              "
            >
              {/* Review */}
              <blockquote className="font-display text-lg leading-relaxed text-[#141414]">
                “{testimonial.quote}”
              </blockquote>

              {/* Customer */}
              <figcaption className="mt-7 flex items-center gap-3">

                {/* Profile Image */}
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  loading="lazy"
                  decoding="async"
                  className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                />

                {/* Customer Details */}
                <div>
                  <p className="font-body text-sm font-semibold text-[#141414]">
                    {testimonial.name}
                  </p>

                  <p className="mt-0.5 text-xs leading-relaxed text-[#858585]">
                    {testimonial.role}
                  </p>

                  <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-[#007A1F]">
                    <BadgeCheck size={12} strokeWidth={2} />
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

import { BadgeCheck } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Getvia helped us reach more genuine customers in Kochi. After our profile was verified, we started receiving better enquiries and customers seemed more confident contacting us.",
    name: "Anupama Krishnan",
    role: "Owner, Anu's Bridal Studio, Kochi",
    tag: "Verified business owner",
    img: "https://placehold.co/160x160/007A1F/FFFFFF?text=AK",
  },
  {
    quote:
      "Our clinic visibility improved after listing on Getvia. The platform is simple to use, the information stays organised, and the enquiries we receive are much more relevant.",
    name: "Dr. Rahul Menon",
    role: "Founder, Menon's Dental Care, Kozhikode",
    tag: "Verified business owner",
    img: "https://placehold.co/160x160/006619/FFFFFF?text=RM",
  },
  {
    quote:
      "Getvia has made it easier for local customers to discover our business. We now receive regular enquiries, and the support team has been responsive whenever we needed help.",
    name: "Sajith Mathew",
    role: "Owner, Sajith Motors, Thrissur",
    tag: "Verified business owner",
    img: "https://placehold.co/160x160/0A8F2A/FFFFFF?text=SM",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#007A1F]">
          What people say
        </span>

        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight text-[#141414] lg:text-5xl">
          Trusted by owners and customers alike.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex min-h-[280px] flex-col justify-between rounded-3xl border border-[#E1E5E1] bg-white p-6 shadow-[0_16px_50px_rgba(20,60,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9DDBF] hover:shadow-[0_22px_60px_rgba(0,122,31,0.10)] md:p-7"
            >
              <blockquote className="font-display text-lg leading-relaxed text-[#141414]">
                “{testimonial.quote}”
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3">
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

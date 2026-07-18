import { BadgeCheck, Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Getvia gave our business a clearer digital presence and made it easier for customers to understand our services and contact us directly.",
    name: "Amara Osei",
    role: "Local business owner",
    initials: "AO",
  },
  {
    quote:
      "The platform makes local discovery much simpler. I can quickly check business information, services, location, and contact details in one place.",
    name: "Daniel Reyes",
    role: "Getvia customer",
    initials: "DR",
  },
  {
    quote:
      "A complete and professional business profile helped us present our clinic more clearly and build stronger confidence with new customers.",
    name: "Priya Nair",
    role: "Healthcare professional",
    initials: "PN",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F3FBF4] py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#DDF3E1]/80 blur-3xl" />

      <div className="pointer-events-none absolute -right-28 bottom-12 h-80 w-80 rounded-full bg-[#B7F27D]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#CFE5D3] bg-white px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
            <BadgeCheck size={14} />
            What people say
          </span>

          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] sm:text-5xl lg:text-6xl">
            Built to create better connections between
            <span className="text-[#007A1F]"> people and businesses.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-8 text-[#646464]">
            Getvia is designed to help customers discover with more confidence
            while giving businesses a stronger and more professional digital
            presence.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[30px] border border-[#DDE5DE] bg-white p-8 shadow-[0_16px_45px_rgba(0,80,20,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#B7DDBF] hover:shadow-[0_28px_70px_rgba(0,110,30,0.12)]"
            >
              {/* Quote icon */}
              <div className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F7EA] text-[#007A1F] transition-colors duration-300 group-hover:bg-[#007A1F] group-hover:text-white">
                <Quote size={23} strokeWidth={1.8} />
              </div>

              <div>
                {/* Rating */}
                <div
                  className="flex items-center gap-1"
                  aria-label="5 out of 5 stars"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className="fill-[#7CCF36] text-[#7CCF36]"
                    />
                  ))}
                </div>

                <blockquote className="mt-8 pr-5 font-display text-xl leading-relaxed text-[#202320]">
                  “{testimonial.quote}”
                </blockquote>
              </div>

              <figcaption className="mt-10 flex items-center gap-4 border-t border-[#E8ECE8] pt-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#007A1F] font-body text-sm font-semibold text-white shadow-sm">
                  {testimonial.initials}
                </div>

                <div>
                  <p className="font-body text-sm font-semibold text-[#141414]">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 font-body text-xs text-[#727772]">
                    {testimonial.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div className="mt-16 grid gap-5 rounded-[30px] border border-[#DDE5DE] bg-white p-6 shadow-[0_16px_45px_rgba(0,80,20,0.05)] sm:grid-cols-3 sm:p-8">
          <div className="text-center sm:border-r sm:border-[#E5EAE5]">
            <p className="font-display text-3xl font-semibold text-[#007A1F]">
              Simple
            </p>
            <p className="mt-2 font-body text-sm text-[#646464]">
              Easy to explore and understand
            </p>
          </div>

          <div className="text-center sm:border-r sm:border-[#E5EAE5]">
            <p className="font-display text-3xl font-semibold text-[#007A1F]">
              Clear
            </p>
            <p className="mt-2 font-body text-sm text-[#646464]">
              Useful business details in one place
            </p>
          </div>

          <div className="text-center">
            <p className="font-display text-3xl font-semibold text-[#007A1F]">
              Connected
            </p>
            <p className="mt-2 font-body text-sm text-[#646464]">
              Direct access to businesses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

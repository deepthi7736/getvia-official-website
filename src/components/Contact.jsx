import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: "hello@getvia.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 019-2044" },
  { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 019-2044" },
  { icon: MapPin, label: "Office", value: "148 Market Street, Suite 400, San Francisco, CA" },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9:00 AM – 6:00 PM PT" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1E5631]">
              Get in touch
            </span>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#14361F] lg:text-5xl">
              Let's get you on the map.
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-[#6B7280]">
              Whether you're a business ready to get verified or a partner
              exploring what Getvia can do for your city, we'd like to hear
              from you.
            </p>

            <ul className="mt-10 space-y-5">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <Icon className="mt-0.5 shrink-0 text-[#8BC63F]" size={20} strokeWidth={1.75} />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#6B7280]">
                      {label}
                    </p>
                    <p className="font-body text-sm text-[#14361F]">{value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 overflow-hidden rounded-2xl">
              {/* Replace with an embedded Google Map (iframe) once you have an address/API key. */}
              <img
                src="https://placehold.co/560x260/14361F/F5F7F4?text=Embedded+map"
                alt="Map showing Getvia's office location"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>

          <form
            className="space-y-5 rounded-3xl border border-[#14361F]/8 bg-[#F5F7F4] p-8 lg:col-span-6 lg:col-start-7 lg:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#6B7280]">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-[#14361F]/15 bg-white px-4 py-3 font-body text-sm text-[#14361F] outline-none focus:border-[#8BC63F]"
                  placeholder="Jane Cooper"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#6B7280]">
                  Business name
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-[#14361F]/15 bg-white px-4 py-3 font-body text-sm text-[#14361F] outline-none focus:border-[#8BC63F]"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-[11px] uppercase tracking-wider text-[#6B7280]">
                Email
              </label>
              <input
                type="email"
                className="mt-2 w-full rounded-lg border border-[#14361F]/15 bg-white px-4 py-3 font-body text-sm text-[#14361F] outline-none focus:border-[#8BC63F]"
                placeholder="jane@company.com"
              />
            </div>

            <div>
              <label className="font-mono text-[11px] uppercase tracking-wider text-[#6B7280]">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-lg border border-[#14361F]/15 bg-white px-4 py-3 font-body text-sm text-[#14361F] outline-none focus:border-[#8BC63F]"
                placeholder="Tell us what you're looking for"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#14361F] px-7 py-3.5 font-body text-sm font-medium text-white transition-transform hover:scale-[1.01]"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

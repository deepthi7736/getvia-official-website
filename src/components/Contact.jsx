import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "support@getvia.in",
    href: "mailto:support@getvia.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXX XXX XXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 XXX XXX XXXX",
    href: "https://wa.me/91XXXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Kerala, India",
    href: "https://www.google.com/maps/search/?api=1&query=Kerala+India",
  },
  {
    icon: Clock,
    label: "Working hours",
    value: "Monday–Saturday, 9:00 AM–6:00 PM",
  },
];

const INPUT_CLASS =
  "mt-2 w-full rounded-xl border border-[#D8E1D9] bg-white px-4 py-3.5 font-body text-sm text-[#141414] outline-none transition-all duration-200 placeholder:text-[#9A9F9A] focus:border-[#007A1F] focus:ring-4 focus:ring-[#007A1F]/10";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      This currently prevents the browser from refreshing.

      To send the form, connect it to:
      1. Your backend API
      2. Formspree
      3. EmailJS
      4. Supabase
    */
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#E8F7EA]/80 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-12 h-96 w-96 rounded-full bg-[#B7F27D]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#CFE5D3] bg-[#F3FBF4] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              <MessageCircle size={14} />
              Get in touch
            </span>

            <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] sm:text-5xl lg:text-6xl">
              Let&apos;s build better local
              <span className="text-[#007A1F]"> connections.</span>
            </h2>
          </div>

          <p className="max-w-2xl font-body text-lg leading-8 text-[#646464] lg:justify-self-end">
            Whether you want to list your business, learn more about Getvia,
            explore a partnership, or request support, our team would be happy
            to hear from you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Contact information */}
          <div className="lg:col-span-5">
            <div className="rounded-[30px] border border-[#DDE5DE] bg-[#F3FBF4] p-7 shadow-[0_18px_55px_rgba(0,80,20,0.06)] sm:p-9">
              <h3 className="font-display text-3xl font-semibold text-[#141414]">
                Contact information
              </h3>

              <p className="mt-4 font-body text-base leading-7 text-[#646464]">
                Reach our team using the contact method that is most convenient
                for you.
              </p>

              <ul className="mt-8 space-y-4">
                {CONTACT_ITEMS.map(
                  ({ icon: Icon, label, value, href }) => (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            href.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                          className="group flex items-start gap-4 rounded-2xl border border-[#E0E8E1] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B7DDBF] hover:shadow-[0_12px_30px_rgba(0,100,30,0.08)]"
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F7EA] text-[#007A1F] transition-colors group-hover:bg-[#007A1F] group-hover:text-white">
                            <Icon size={20} strokeWidth={1.9} />
                          </span>

                          <span>
                            <span className="block font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#7A807A]">
                              {label}
                            </span>

                            <span className="mt-1 block font-body text-sm font-medium leading-6 text-[#242724]">
                              {value}
                            </span>
                          </span>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 rounded-2xl border border-[#E0E8E1] bg-white p-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F7EA] text-[#007A1F]">
                            <Icon size={20} strokeWidth={1.9} />
                          </span>

                          <span>
                            <span className="block font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#7A807A]">
                              {label}
                            </span>

                            <span className="mt-1 block font-body text-sm font-medium leading-6 text-[#242724]">
                              {value}
                            </span>
                          </span>
                        </div>
                      )}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Map */}
            <div className="mt-7 overflow-hidden rounded-[30px] border border-[#DDE5DE] bg-white p-2 shadow-[0_18px_55px_rgba(0,80,20,0.05)]">
              <iframe
                title="Getvia office location"
                src="https://maps.google.com/maps?q=Kerala,India&z=7&output=embed"
                className="h-64 w-full rounded-[24px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-[#DDE5DE] bg-white p-7 shadow-[0_24px_75px_rgba(0,100,30,0.09)] sm:p-9 lg:col-span-7 lg:p-11"
          >
            <div className="mb-9">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.17em] text-[#007A1F]">
                Send us a message
              </p>

              <h3 className="mt-3 font-display text-3xl font-semibold text-[#141414] sm:text-4xl">
                Tell us how we can help
              </h3>

              <p className="mt-3 max-w-xl font-body text-sm leading-7 text-[#646464]">
                Complete the form below and the Getvia team will respond as
                soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="font-body text-sm font-semibold text-[#303430]"
                >
                  Full name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={INPUT_CLASS}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-business"
                  className="font-body text-sm font-semibold text-[#303430]"
                >
                  Business name
                </label>

                <input
                  id="contact-business"
                  name="businessName"
                  type="text"
                  autoComplete="organization"
                  className={INPUT_CLASS}
                  placeholder="Enter business name"
                />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-email"
                  className="font-body text-sm font-semibold text-[#303430]"
                >
                  Email address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={INPUT_CLASS}
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="font-body text-sm font-semibold text-[#303430]"
                >
                  Phone number
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={INPUT_CLASS}
                  placeholder="+91 00000 00000"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="font-body text-sm font-semibold text-[#303430]"
              >
                I am contacting Getvia about
              </label>

              <select
                id="contact-subject"
                name="subject"
                defaultValue=""
                required
                className={INPUT_CLASS}
              >
                <option value="" disabled>
                  Select an option
                </option>

                <option value="business-listing">
                  Listing my business
                </option>

                <option value="business-support">
                  Business account support
                </option>

                <option value="partnership">
                  Partnership opportunity
                </option>

                <option value="general">
                  General enquiry
                </option>

                <option value="other">
                  Other
                </option>
              </select>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="font-body text-sm font-semibold text-[#303430]"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={6}
                required
                className={`${INPUT_CLASS} resize-none`}
                placeholder="Tell us what you would like help with"
              />
            </div>

            <label className="mt-5 flex items-start gap-3">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-[#CBD5CC] accent-[#007A1F]"
              />

              <span className="font-body text-xs leading-6 text-[#707570]">
                I agree that Getvia may use the information provided to respond
                to this enquiry.
              </span>
            </label>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#007A1F] px-7 py-4 font-body text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-[0_14px_35px_rgba(0,100,30,0.20)]"
            >
              Send message
              <Send size={17} />
            </button>

            <p className="mt-4 text-center font-body text-xs text-[#858A85]">
              We will only use your information to respond to your enquiry.
            </p>
          </form>
        </div>

        {/* Business CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-7 rounded-[32px] bg-[#007A1F] px-8 py-10 shadow-[0_24px_65px_rgba(0,100,30,0.18)] sm:px-10 lg:flex-row lg:items-center">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/65">
              Are you a business owner?
            </p>

            <h3 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Build your professional presence on Getvia.
            </h3>
          </div>

          <a
            href="https://getvia.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-body text-sm font-semibold text-[#007A1F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F3FBF4]"
          >
            Explore Getvia
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

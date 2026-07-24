import { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { supabase } from "../lib/supabase";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: "hello@getvia.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 019-2044" },
  { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 019-2044" },
  {
    icon: MapPin,
    label: "Office",
    value: "148 Market Street, Suite 400, San Francisco, CA",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri, 9:00 AM – 6:00 PM PT",
  },
];

const EMPTY_FORM = {
  name: "",
  subject: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
  company_website: "",
};

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (field) => (event) => {
    const value =
      field === "consent" ? event.target.checked : event.target.value;

    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === "submitting") return;

    if (form.company_website.trim() !== "") {
      setStatus("success");
      setForm(EMPTY_FORM);
      return;
    }

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setStatus("error");
      setErrorMessage(
        "Please fill in your name, subject, email, and message."
      );
      return;
    }

    if (!form.consent) {
      setStatus("error");
      setErrorMessage(
        "Please confirm you agree to be contacted before sending."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const { error } = await supabase.from("contact_messages").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      subject: form.subject.trim(),
      message: form.message.trim(),
      source_page:
        typeof window !== "undefined" ? window.location.pathname : null,
    });

    if (error) {
      console.error("Contact submission failed:", error);
      setStatus("error");
      setErrorMessage(
        "Something went wrong on our end. Please try again in a moment."
      );
      return;
    }

    setStatus("success");
    setForm(EMPTY_FORM);
  };

  return (
    <section
      id="contact"
      className="bg-white py-12 md:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#007A1F]">
              Get in touch
            </span>

            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#141414] lg:text-5xl">
              Let&apos;s get you on the map.
            </h2>

            <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-[#646464]">
              Whether you&apos;re a business ready to get verified or a
              partner exploring what Getvia can do for your city, we&apos;d
              like to hear from you.
            </p>

            <ul className="mt-7 space-y-4">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F7EA] text-[#007A1F]">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>

                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#646464]">
                      {label}
                    </p>

                    <p className="mt-0.5 font-body text-sm leading-relaxed text-[#141414]">
                      {value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-7 overflow-hidden rounded-2xl border border-[#E1E5E1]">
              <iframe
                title="Getvia office location"
                src="https://maps.google.com/maps?q=148+Market+Street,+San+Francisco,+CA&output=embed"
                className="h-48 w-full md:h-52"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4 rounded-3xl border border-[#E1E5E1] bg-[#F3FBF4] p-6 shadow-[0_16px_50px_rgba(20,60,30,0.05)] md:p-8 lg:col-span-6 lg:col-start-7"
          >
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company_website">
                Leave this field empty
              </label>

              <input
                id="company_website"
                name="company_website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.company_website}
                onChange={update("company_website")}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="font-mono text-[11px] uppercase tracking-wider text-[#646464]"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  className="mt-2 w-full rounded-lg border border-[#DDE5DE] bg-white px-4 py-3 font-body text-sm text-[#141414] outline-none transition focus:border-[#007A1F] focus:ring-4 focus:ring-[#007A1F]/10"
                  placeholder="Jane Cooper"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="font-mono text-[11px] uppercase tracking-wider text-[#646464]"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={update("subject")}
                  className="mt-2 w-full rounded-lg border border-[#DDE5DE] bg-white px-4 py-3 font-body text-sm text-[#141414] outline-none transition focus:border-[#007A1F] focus:ring-4 focus:ring-[#007A1F]/10"
                  placeholder="What&apos;s this about?"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-email"
                  className="font-mono text-[11px] uppercase tracking-wider text-[#646464]"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  className="mt-2 w-full rounded-lg border border-[#DDE5DE] bg-white px-4 py-3 font-body text-sm text-[#141414] outline-none transition focus:border-[#007A1F] focus:ring-4 focus:ring-[#007A1F]/10"
                  placeholder="jane@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="font-mono text-[11px] uppercase tracking-wider text-[#646464]"
                >
                  Phone{" "}
                  <span className="normal-case text-[#858585]">
                    (optional)
                  </span>
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  className="mt-2 w-full rounded-lg border border-[#DDE5DE] bg-white px-4 py-3 font-body text-sm text-[#141414] outline-none transition focus:border-[#007A1F] focus:ring-4 focus:ring-[#007A1F]/10"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="font-mono text-[11px] uppercase tracking-wider text-[#646464]"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                rows={4}
                required
                value={form.message}
                onChange={update("message")}
                className="mt-2 w-full resize-none rounded-lg border border-[#DDE5DE] bg-white px-4 py-3 font-body text-sm text-[#141414] outline-none transition focus:border-[#007A1F] focus:ring-4 focus:ring-[#007A1F]/10"
                placeholder="Tell us what you&apos;re looking for"
              />
            </div>

            <label className="flex items-start gap-3 font-body text-xs leading-relaxed text-[#646464]">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={update("consent")}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#CDD5CE] text-[#007A1F] focus:ring-[#007A1F]/30"
              />

              <span>
                I agree to be contacted by Getvia about my enquiry.
              </span>
            </label>

            {status === "error" && (
              <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 font-body text-sm text-red-700">
                <AlertCircle
                  size={18}
                  className="mt-0.5 shrink-0"
                />
                {errorMessage}
              </div>
            )}

            {status === "success" && (
              <div className="flex items-start gap-2 rounded-lg bg-[#E8F7EA] p-3 font-body text-sm text-[#006619]">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0"
                />
                Thank you. Your message has been submitted successfully —
                we&apos;ll be in touch soon.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-xl bg-[#007A1F] px-7 py-3.5 font-body text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "submitting"
                ? "Sending…"
                : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

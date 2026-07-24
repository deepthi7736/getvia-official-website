import { useState } from "react";
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Users,
  Zap,
} from "lucide-react";
import { supabase } from "../lib/supabase";

const CATEGORIES = [
  "Restaurants",
  "Hotels",
  "Shopping",
  "Beauty",
  "Healthcare",
  "Education",
  "Finance",
  "Automobiles",
  "Real Estate",
  "Professionals",
  "Fitness",
  "Travel",
  "Home Services",
  "Daily Needs",
  "Fashion",
  "Other",
];

const TEAM_SIZES = ["Just me", "2-10", "11-50", "51-200", "200+"];

const CONTACT_METHODS = ["Email", "Phone", "WhatsApp"];

const EMPTY_FORM = {
  full_name: "",
  business_email: "",
  phone: "",
  company_name: "",
  category: "",
  location: "",
  team_size: "",
  website_or_social: "",
  preferred_date: "",
  preferred_time: "",
  preferred_contact_method: "Email",
  message: "",
  consent: false,
  company_website: "",
};

const BENEFITS = [
  {
    icon: Calendar,
    title: "A focused walkthrough",
    description:
      "A 30-minute session arranged at a time that works for you.",
  },
  {
    icon: Users,
    title: "Built around your business",
    description:
      "The demo is tailored to your business category and team size.",
  },
  {
    icon: Zap,
    title: "See the platform live",
    description:
      "Understand how your business profile and discovery experience can work.",
  },
];

const inputClass =
  "mt-2 w-full rounded-xl border border-[#DDE5DE] bg-white px-4 py-3 text-sm text-[#141414] outline-none transition placeholder:text-[#9A9F9A] focus:border-[#007A1F] focus:ring-4 focus:ring-[#007A1F]/10";

const labelClass =
  "font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#646464]";

export default function BookDemo() {
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

    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
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
      !form.full_name.trim() ||
      !form.business_email.trim() ||
      !form.phone.trim() ||
      !form.company_name.trim()
    ) {
      setStatus("error");
      setErrorMessage(
        "Please enter your name, email, phone number, and business name.",
      );
      return;
    }

    if (!form.consent) {
      setStatus("error");
      setErrorMessage(
        "Please confirm that you agree to be contacted by Getvia.",
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const { error } = await supabase.from("demo_bookings").insert({
      full_name: form.full_name.trim(),
      business_email: form.business_email.trim(),
      phone: form.phone.trim(),
      company_name: form.company_name.trim(),
      category: form.category || null,
      location: form.location.trim() || null,
      team_size: form.team_size || null,
      website_or_social: form.website_or_social.trim() || null,
      preferred_date: form.preferred_date || null,
      preferred_time: form.preferred_time || null,
      preferred_contact_method: form.preferred_contact_method,
      message: form.message.trim() || null,
    });

    if (error) {
      console.error("Demo booking failed:", error);

      setStatus("error");
      setErrorMessage(
        "Something went wrong while submitting your request. Please try again.",
      );
      return;
    }

    setStatus("success");
    setForm(EMPTY_FORM);
  };

  if (status === "success") {
    return (
      <main className="min-h-screen bg-[#F3FBF4] px-5 pb-20 pt-28 sm:px-8 lg:px-12">
        <section className="mx-auto flex min-h-[65vh] max-w-5xl items-center justify-center">
          <div className="w-full max-w-xl rounded-[32px] border border-[#DDE5DE] bg-white px-7 py-12 text-center shadow-[0_28px_80px_rgba(0,80,20,0.12)] sm:px-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E8F7EA] text-[#007A1F]">
              <CheckCircle2 size={40} strokeWidth={1.7} />
            </div>

            <p className="mt-7 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
              Request received
            </p>

            <h1 className="mt-3 font-display text-3xl font-semibold tracking-[-0.025em] text-[#141414] sm:text-4xl">
              Your demo request has been received.
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#646464]">
              Thank you for contacting Getvia. Our team will reach out within
              1–2 business days to confirm a suitable time.
            </p>

            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 rounded-xl bg-[#007A1F] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg"
            >
              Submit another request
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#F3FBF4] px-5 pb-14 pt-32 sm:px-8 lg:px-12 lg:pb-16 lg:pt-36">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#B7F27D]/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#007A1F]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <span className="inline-flex rounded-full border border-[#CFE5D3] bg-white px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#007A1F] shadow-sm">
            Book a demo
          </span>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#141414] sm:text-5xl lg:text-[60px]">
                See how Getvia can support{" "}
                <span className="text-[#007A1F]">your business.</span>
              </h1>
            </div>

            <p className="max-w-xl text-base leading-8 text-[#646464] lg:justify-self-end">
              Tell us a little about your business and we will arrange a
              personalised walkthrough of the Getvia platform.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <aside>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[#007A1F]">
              What to expect
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.025em] text-[#141414]">
              A clear, practical product walkthrough.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#646464]">
              We will show you how Getvia helps businesses present useful
              information, improve visibility, and make customer contact easier.
            </p>

            <div className="mt-8 space-y-4">
              {BENEFITS.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-[#E1E7E1] bg-[#F8FCF8] p-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#007A1F] shadow-sm">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#141414]">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#747A74]">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#D8E8DA] bg-[#F3FBF4] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#007A1F]">
                Response time
              </p>

              <p className="mt-2 text-sm leading-6 text-[#646464]">
                We normally respond within 1–2 business days to confirm your
                preferred demo time.
              </p>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-[30px] border border-[#DDE5DE] bg-[#F8FCF8] p-6 shadow-[0_24px_70px_rgba(0,80,20,0.08)] sm:p-8 lg:p-10"
          >
            <div>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#007A1F]">
                Demo request
              </p>

              <h2 className="mt-2 font-display text-2xl font-semibold text-[#141414] sm:text-3xl">
                Tell us about your business
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#747A74]">
                Required fields are marked with an asterisk.
              </p>
            </div>

            <div className="hidden" aria-hidden="true">
              <label htmlFor="demo-company-website">
                Leave this field empty
              </label>

              <input
                id="demo-company-website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.company_website}
                onChange={update("company_website")}
              />
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="demo-full-name" className={labelClass}>
                  Full name *
                </label>

                <input
                  id="demo-full-name"
                  required
                  autoComplete="name"
                  value={form.full_name}
                  onChange={update("full_name")}
                  className={inputClass}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="demo-business-email" className={labelClass}>
                  Business email *
                </label>

                <input
                  id="demo-business-email"
                  required
                  type="email"
                  autoComplete="email"
                  value={form.business_email}
                  onChange={update("business_email")}
                  className={inputClass}
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="demo-phone" className={labelClass}>
                  Phone number *
                </label>

                <input
                  id="demo-phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  className={inputClass}
                  placeholder="+91"
                />
              </div>

              <div>
                <label htmlFor="demo-company-name" className={labelClass}>
                  Business name *
                </label>

                <input
                  id="demo-company-name"
                  required
                  autoComplete="organization"
                  value={form.company_name}
                  onChange={update("company_name")}
                  className={inputClass}
                  placeholder="Your business name"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div>
                <label htmlFor="demo-category" className={labelClass}>
                  Category
                </label>

                <select
                  id="demo-category"
                  value={form.category}
                  onChange={update("category")}
                  className={inputClass}
                >
                  <option value="">Select</option>

                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="demo-location" className={labelClass}>
                  Location
                </label>

                <input
                  id="demo-location"
                  value={form.location}
                  onChange={update("location")}
                  className={inputClass}
                  placeholder="City or area"
                />
              </div>

              <div>
                <label htmlFor="demo-team-size" className={labelClass}>
                  Team size
                </label>

                <select
                  id="demo-team-size"
                  value={form.team_size}
                  onChange={update("team_size")}
                  className={inputClass}
                >
                  <option value="">Select</option>

                  {TEAM_SIZES.map((teamSize) => (
                    <option key={teamSize} value={teamSize}>
                      {teamSize}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="demo-website" className={labelClass}>
                Website or social page
                <span className="ml-1 normal-case tracking-normal text-[#929792]">
                  (optional)
                </span>
              </label>

              <input
                id="demo-website"
                type="url"
                value={form.website_or_social}
                onChange={update("website_or_social")}
                className={inputClass}
                placeholder="https://"
              />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div>
                <label htmlFor="demo-preferred-date" className={labelClass}>
                  Preferred date
                </label>

                <input
                  id="demo-preferred-date"
                  type="date"
                  value={form.preferred_date}
                  onChange={update("preferred_date")}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="demo-preferred-time" className={labelClass}>
                  Preferred time
                </label>

                <input
                  id="demo-preferred-time"
                  type="time"
                  value={form.preferred_time}
                  onChange={update("preferred_time")}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="demo-contact-method" className={labelClass}>
                  Contact method
                </label>

                <select
                  id="demo-contact-method"
                  value={form.preferred_contact_method}
                  onChange={update("preferred_contact_method")}
                  className={inputClass}
                >
                  {CONTACT_METHODS.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="demo-message" className={labelClass}>
                What would you like us to cover?
                <span className="ml-1 normal-case tracking-normal text-[#929792]">
                  (optional)
                </span>
              </label>

              <textarea
                id="demo-message"
                rows={4}
                value={form.message}
                onChange={update("message")}
                className={`${inputClass} resize-none`}
                placeholder="Tell us what you would like to learn about Getvia."
              />
            </div>

            <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-[#E4E9E4] bg-white p-4 text-xs leading-5 text-[#646464]">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={update("consent")}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#CDD5CE] text-[#007A1F] focus:ring-[#007A1F]/30"
              />

              <span>
                I agree to be contacted by Getvia regarding this demo request.
              </span>
            </label>

            {status === "error" && (
              <div
                role="alert"
                className="mt-4 flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 p-3 text-sm text-red-700"
              >
                <AlertCircle size={18} className="mt-0.5 shrink-0" />

                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-5 w-full rounded-xl bg-[#007A1F] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-[0_14px_30px_rgba(0,100,30,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting"
                ? "Submitting request…"
                : "Book a demo"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

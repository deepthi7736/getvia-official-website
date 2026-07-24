
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Users,
  X,
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
    text: "30-minute personalised walkthrough",
  },
  {
    icon: Users,
    text: "Tailored to your business and team",
  },
  {
    icon: Zap,
    text: "See how your profile can look live",
  },
];

const inputClass =
  "mt-2 w-full rounded-xl border border-[#DDE5DE] bg-white px-4 py-3 text-sm text-[#141414] outline-none transition placeholder:text-[#9A9F9A] focus:border-[#007A1F] focus:ring-4 focus:ring-[#007A1F]/10";

const labelClass =
  "font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#646464]";

export default function BookDemoModal({ isOpen, onClose }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const firstInputRef = useRef(null);

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

  const resetModal = () => {
    setForm(EMPTY_FORM);
    setStatus("idle");
    setErrorMessage("");
  };

  const handleClose = () => {
    if (status === "submitting") return;

    onClose();

    window.setTimeout(() => {
      resetModal();
    }, 250);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      firstInputRef.current?.focus();
    }, 250);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.button
            type="button"
            aria-label="Close demo booking modal"
            className="absolute inset-0 cursor-default bg-[#071109]/70 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-demo-title"
            className="relative z-10 max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[30px] border border-white/50 bg-white shadow-[0_35px_100px_rgba(0,40,12,0.35)]"
            initial={{
              opacity: 0,
              y: 28,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.97,
            }}
            transition={{
              duration: 0.28,
              ease: "easeOut",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              disabled={status === "submitting"}
              aria-label="Close modal"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE5DE] bg-white text-[#555B55] shadow-sm transition hover:border-[#B7DDBF] hover:bg-[#F3FBF4] hover:text-[#007A1F] disabled:cursor-not-allowed disabled:opacity-50 sm:right-6 sm:top-6"
            >
              <X size={19} />
            </button>

            {status === "success" ? (
              <div className="flex min-h-[460px] items-center justify-center px-6 py-16">
                <div className="max-w-md text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E8F7EA] text-[#007A1F]">
                    <CheckCircle2 size={40} strokeWidth={1.7} />
                  </div>

                  <p className="mt-7 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
                    Request received
                  </p>

                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.025em] text-[#141414] sm:text-4xl">
                    Your demo is on its way.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#646464]">
                    Thank you for contacting Getvia. Our team will reach out
                    within 1–2 business days to confirm a suitable time.
                  </p>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-8 rounded-xl bg-[#007A1F] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                {/* Left information panel */}
                <aside className="relative overflow-hidden bg-[#F3FBF4] px-6 py-10 sm:px-9 lg:px-10 lg:py-12">
                  <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#B7F27D]/25 blur-3xl" />

                  <div className="relative">
                    <span className="inline-flex rounded-full border border-[#CFE5D3] bg-white px-3.5 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#007A1F]">
                      Book a demo
                    </span>

                    <h2
                      id="book-demo-title"
                      className="mt-5 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] sm:text-4xl"
                    >
                      See how Getvia can support your business.
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-[#646464]">
                      Tell us a little about your business and we will arrange a
                      personalised walkthrough of the platform.
                    </p>

                    <ul className="mt-8 space-y-5">
                      {BENEFITS.map(({ icon: Icon, text }) => (
                        <li key={text} className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#007A1F] shadow-sm">
                            <Icon size={18} strokeWidth={1.7} />
                          </div>

                          <p className="pt-1.5 text-sm leading-6 text-[#555B55]">
                            {text}
                          </p>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-9 rounded-2xl border border-[#D8E8DA] bg-white/80 p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#007A1F]">
                        Response time
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[#646464]">
                        We normally respond within 1–2 business days.
                      </p>
                    </div>
                  </div>
                </aside>

                {/* Form panel */}
                <div className="px-6 py-10 sm:px-9 lg:px-10 lg:py-12">
                  <div className="pr-10">
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#007A1F]">
                      Demo request
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-semibold text-[#141414]">
                      Tell us about your business
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#747A74]">
                      Required fields are marked with an asterisk.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="mt-7 space-y-4"
                  >
                    {/* Honeypot */}
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

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="demo-full-name"
                          className={labelClass}
                        >
                          Full name *
                        </label>

                        <input
                          ref={firstInputRef}
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
                        <label
                          htmlFor="demo-business-email"
                          className={labelClass}
                        >
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

                    <div className="grid gap-4 sm:grid-cols-2">
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
                        <label
                          htmlFor="demo-company-name"
                          className={labelClass}
                        >
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

                    <div className="grid gap-4 sm:grid-cols-3">
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

                    <div>
                      <label
                        htmlFor="demo-website"
                        className={labelClass}
                      >
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

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <label
                          htmlFor="demo-preferred-date"
                          className={labelClass}
                        >
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
                        <label
                          htmlFor="demo-preferred-time"
                          className={labelClass}
                        >
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
                        <label
                          htmlFor="demo-contact-method"
                          className={labelClass}
                        >
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

                    <div>
                      <label htmlFor="demo-message" className={labelClass}>
                        What would you like us to cover?
                        <span className="ml-1 normal-case tracking-normal text-[#929792]">
                          (optional)
                        </span>
                      </label>

                      <textarea
                        id="demo-message"
                        rows={3}
                        value={form.message}
                        onChange={update("message")}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us what you would like to learn about Getvia."
                      />
                    </div>

                    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#E4E9E4] bg-[#FAFCFA] p-4 text-xs leading-5 text-[#646464]">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={update("consent")}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#CDD5CE] text-[#007A1F] focus:ring-[#007A1F]/30"
                      />

                      <span>
                        I agree to be contacted by Getvia regarding this demo
                        request.
                      </span>
                    </label>

                    {status === "error" && (
                      <div
                        role="alert"
                        className="flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 p-3 text-sm text-red-700"
                      >
                        <AlertCircle
                          size={18}
                          className="mt-0.5 shrink-0"
                        />

                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full rounded-xl bg-[#007A1F] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-[0_14px_30px_rgba(0,100,30,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "submitting"
                        ? "Submitting request…"
                        : "Book a demo"}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

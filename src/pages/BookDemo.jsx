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

function getTodayDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function BookDemoModal({ isOpen, onClose }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const modalRef = useRef(null);
  const todayDateString = getTodayDateString();

  // Reset form/status whenever the modal is opened
  useEffect(() => {
    if (isOpen) {
      setForm(EMPTY_FORM);
      setStatus("idle");
      setErrorMessage("");
    }
  }, [isOpen]);

  // Lock body scroll while open, restore on close/unmount
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

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

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const handleCloseClick = () => {
    onClose();
  };

  const handleSubmitAnother = () => {
    setForm(EMPTY_FORM);
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="book-demo-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={handleBackdropClick}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A140C]/60 p-0 backdrop-blur-sm sm:p-6"
        >
          <motion.div
            key="book-demo-modal"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-demo-title"
            onMouseDown={handleModalClick}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative flex h-full max-h-full w-full flex-col overflow-hidden bg-white shadow-[0_30px_90px_rgba(0,40,10,0.28)] sm:h-auto sm:max-h-[92vh] sm:w-full sm:max-w-4xl sm:rounded-[28px] sm:border sm:border-[#DDE5DE]"
          >
            <button
              type="button"
              onClick={handleCloseClick}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#DDE5DE] bg-white text-[#646464] shadow-sm transition hover:bg-[#F3FBF4] hover:text-[#141414]"
            >
              <X size={18} strokeWidth={1.8} />
            </button>

            {status === "success" ? (
              <div className="flex-1 overflow-y-auto px-6 py-14 sm:px-12 sm:py-16">
                <div className="mx-auto max-w-md text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F7EA] text-[#007A1F]">
                    <CheckCircle2 size={32} strokeWidth={1.7} />
                  </div>

                  <p className="mt-6 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#007A1F]">
                    Request received
                  </p>

                  <h2
                    id="book-demo-title"
                    className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-[#141414] sm:text-3xl"
                  >
                    Your demo request has been received.
                  </h2>

                  <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#646464]">
                    Our team will respond within 1–2 business days to confirm
                    a suitable time.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <button
                      type="button"
                      onClick={handleSubmitAnother}
                      className="rounded-xl bg-[#007A1F] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg"
                    >
                      Submit another request
                    </button>

                    <button
                      type="button"
                      onClick={handleCloseClick}
                      className="rounded-xl border border-[#DDE5DE] bg-white px-6 py-3 text-sm font-semibold text-[#141414] transition hover:bg-[#F3FBF4]"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto sm:grid sm:grid-cols-[0.85fr_1.15fr]">
                <aside className="border-b border-[#E4E9E4] bg-[#F3FBF4] px-6 py-8 sm:border-b-0 sm:border-r sm:px-8 sm:py-10">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#007A1F]">
                    Book a demo
                  </p>

                  <h2
                    id="book-demo-title"
                    className="mt-3 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#141414]"
                  >
                    See how Getvia can support your business.
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#646464]">
                    Tell us a little about your business and we will arrange
                    a personalised walkthrough.
                  </p>

                  <div className="mt-6 space-y-3">
                    {BENEFITS.map(({ icon: Icon, title, description }) => (
                      <article
                        key={title}
                        className="flex items-start gap-3 rounded-2xl border border-[#E1E7E1] bg-[#F8FCF8] p-3.5"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#007A1F] shadow-sm">
                          <Icon size={16} strokeWidth={1.7} />
                        </div>

                        <div>
                          <h3 className="text-xs font-semibold text-[#141414]">
                            {title}
                          </h3>

                          <p className="mt-1 text-xs leading-5 text-[#747A74]">
                            {description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </aside>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="px-6 py-8 sm:px-8 sm:py-10"
                >
                  <p className="text-xs leading-5 text-[#747A74]">
                    Required fields are marked with an asterisk.
                  </p>

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

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
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
                      <label
                        htmlFor="demo-preferred-date"
                        className={labelClass}
                      >
                        Preferred date
                      </label>

                      <input
                        id="demo-preferred-date"
                        type="date"
                        min={todayDateString}
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

                  <div className="mt-4">
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

                  <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-[#E4E9E4] bg-white p-4 text-xs leading-5 text-[#646464]">
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
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

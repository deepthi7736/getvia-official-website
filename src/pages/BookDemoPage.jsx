import { useState } from "react";
import { CheckCircle2, AlertCircle, Calendar, Users, Zap } from "lucide-react";
import { supabase } from "../lib/supabase";
import PageHero from "../components/layout/PageHero";

const CATEGORIES = ["Restaurants", "Hotels", "Shopping", "Beauty", "Healthcare", "Education", "Finance", "Automobiles", "Real Estate", "Professionals", "Fitness", "Travel", "Home Services", "Daily Needs", "Fashion", "Other"];
const TEAM_SIZES = ["Just me", "2-10", "11-50", "51-200", "200+"];
const CONTACT_METHODS = ["Email", "Phone", "WhatsApp"];

const EMPTY_FORM = {
  full_name: "", business_email: "", phone: "", company_name: "", category: "",
  location: "", team_size: "", website_or_social: "", preferred_date: "",
  preferred_time: "", preferred_contact_method: "Email", message: "",
  consent: false, company_website: "", // honeypot
};

const BENEFITS = [
  { icon: Calendar, text: "30-minute walkthrough, at a time that works for you" },
  { icon: Users, text: "Tailored to your business category and team size" },
  { icon: Zap, text: "See exactly how your profile will look, live" },
];

export default function BookDemoPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (field) => (e) => {
    const value = field === "consent" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
  };

  const inputClass = "mt-2 w-full rounded-lg border border-[#DDE5DE] bg-white px-4 py-3 text-sm text-[#141414] outline-none transition focus:border-[#007A1F] focus:ring-4 focus:ring-[#007A1F]/10";
  const labelClass = "font-mono text-[11px] uppercase tracking-wider text-[#646464]";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (form.company_website.trim() !== "") {
      setStatus("success");
      setForm(EMPTY_FORM);
      return;
    }

    if (!form.full_name.trim() || !form.business_email.trim() || !form.phone.trim() || !form.company_name.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, phone, and business name.");
      return;
    }
    if (!form.consent) {
      setStatus("error");
      setErrorMessage("Please confirm you agree before submitting.");
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
      setErrorMessage("Something went wrong on our end. Please try again in a moment.");
      return;
    }

    setStatus("success");
    setForm(EMPTY_FORM);
  };

  if (status === "success") {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#F3FBF4] px-6 py-24">
        <div className="max-w-md rounded-3xl border border-[#E1E5E1] bg-white p-10 text-center shadow-[0_16px_50px_rgba(20,60,30,0.08)]">
          <CheckCircle2 className="mx-auto text-[#007A1F]" size={40} />
          <h1 className="mt-5 font-display text-2xl font-semibold text-[#141414]">Demo request received.</h1>
          <p className="mt-3 text-sm leading-relaxed text-[#646464]">We'll confirm a time that works within 1-2 business days.</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <PageHero eyebrow="Book a demo" title="See Getvia in action." description="A quick, tailored walkthrough — no pressure, no obligation." />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-xl text-[#141414]">What to expect</h2>
            <ul className="mt-6 space-y-5">
              {BENEFITS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8F7EA] text-[#007A1F]">
                    <Icon size={16} strokeWidth={1.75} />
                  </div>
                  <p className="text-sm text-[#646464]">{text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-[#858585]">
              We typically respond within 1-2 business days to confirm a time.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-3xl border border-[#E1E5E1] bg-[#F3FBF4] p-8 lg:col-span-8 lg:p-10">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="bd-company_website">Leave this field empty</label>
              <input id="bd-company_website" type="text" tabIndex={-1} autoComplete="off" value={form.company_website} onChange={update("company_website")} />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Full name</label>
                <input required value={form.full_name} onChange={update("full_name")} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Business email</label>
                <input required type="email" value={form.business_email} onChange={update("business_email")} className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Phone</label>
                <input required type="tel" value={form.phone} onChange={update("phone")} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Business name</label>
                <input required value={form.company_name} onChange={update("company_name")} className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div>
                <label className={labelClass}>Category</label>
                <select value={form.category} onChange={update("category")} className={inputClass}>
                  <option value="">Select</option>
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Location</label>
                <input value={form.location} onChange={update("location")} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Team size</label>
                <select value={form.team_size} onChange={update("team_size")} className={inputClass}>
                  <option value="">Select</option>
                  {TEAM_SIZES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>Website or social page <span className="normal-case text-[#858585]">(optional)</span></label>
              <input value={form.website_or_social} onChange={update("website_or_social")} className={inputClass} placeholder="https://" />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div>
                <label className={labelClass}>Preferred date <span className="normal-case text-[#858585]">(optional)</span></label>
                <input type="date" value={form.preferred_date} onChange={update("preferred_date")} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Preferred time <span className="normal-case text-[#858585]">(optional)</span></label>
                <input type="time" value={form.preferred_time} onChange={update("preferred_time")} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Preferred contact method</label>
                <select value={form.preferred_contact_method} onChange={update("preferred_contact_method")} className={inputClass}>
                  {CONTACT_METHODS.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>Anything specific you'd like covered? <span className="normal-case text-[#858585]">(optional)</span></label>
              <textarea rows={3} value={form.message} onChange={update("message")} className={inputClass} />
            </div>

            <label className="flex items-start gap-3 text-xs text-[#646464]">
              <input type="checkbox" checked={form.consent} onChange={update("consent")} className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#CDD5CE] text-[#007A1F] focus:ring-[#007A1F]/30" />
              I agree to be contacted by Getvia to schedule this demo.
            </label>

            {status === "error" && (
              <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                <AlertCircle size={18} className="mt-0.5 shrink-0" /> {errorMessage}
              </div>
            )}

            <button type="submit" disabled={status === "submitting"} className="w-full rounded-xl bg-[#007A1F] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60">
              {status === "submitting" ? "Submitting…" : "Book a demo"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

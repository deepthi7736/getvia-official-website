import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "../lib/supabase";

const CATEGORIES = [
  "Restaurants", "Hotels", "Shopping", "Beauty", "Healthcare", "Education",
  "Finance", "Automobiles", "Real Estate", "Professionals", "Fitness",
  "Travel", "Home Services", "Daily Needs", "Fashion", "Other",
];

const EMPTY_FORM = {
  business_name: "",
  owner_name: "",
  phone: "",
  whatsapp: "",
  email: "",
  category: "",
  location: "",
  district: "",
  state: "",
  website: "",
  social_url: "",
  description: "",
  preferred_plan: "",
  consent: false,
  company_website: "", // honeypot
};

export default function ListBusinessPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const update = (field) => (e) => {
    const value = field === "consent" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
  };

  const inputClass =
    "mt-2 w-full rounded-lg border border-[#DDE5DE] bg-white px-4 py-3 font-body text-sm text-[#141414] outline-none transition focus:border-[#007A1F] focus:ring-4 focus:ring-[#007A1F]/10";
  const labelClass = "font-mono text-[11px] uppercase tracking-wider text-[#646464]";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (form.company_website.trim() !== "") {
      setStatus("success");
      setForm(EMPTY_FORM);
      return;
    }

    const required = ["business_name", "owner_name", "phone", "email"];
    if (required.some((f) => !form[f].trim())) {
      setStatus("error");
      setErrorMessage("Please fill in business name, owner name, phone, and email.");
      return;
    }
    if (!form.consent) {
      setStatus("error");
      setErrorMessage("Please confirm you agree before submitting.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const { error } = await supabase.from("business_enquiries").insert({
      business_name: form.business_name.trim(),
      owner_name: form.owner_name.trim(),
      phone: form.phone.trim(),
      whatsapp: form.whatsapp.trim() || null,
      email: form.email.trim(),
      category: form.category || null,
      location: form.location.trim() || null,
      district: form.district.trim() || null,
      state: form.state.trim() || null,
      website: form.website.trim() || null,
      social_url: form.social_url.trim() || null,
      description: form.description.trim() || null,
      preferred_plan: form.preferred_plan || null,
    });

    if (error) {
      console.error("Business enquiry submission failed:", error);
      setStatus("error");
      setErrorMessage("Something went wrong on our end. Please try again in a moment.");
      return;
    }

    setStatus("success");
    setForm(EMPTY_FORM);
  };

  if (status === "success") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F3FBF4] px-6">
        <div className="max-w-md rounded-3xl border border-[#E1E5E1] bg-white p-10 text-center shadow-[0_16px_50px_rgba(20,60,30,0.08)]">
          <CheckCircle2 className="mx-auto text-[#007A1F]" size={40} />
          <h1 className="mt-5 font-display text-2xl font-semibold text-[#141414]">
            Thank you for your interest in Getvia.
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[#646464]">
            Our team will review your business and get in touch shortly.
          </p>
          <Link
            to="/"
            className="mt-7 inline-block rounded-xl bg-[#007A1F] px-6 py-3 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#006619]"
          >
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[#646464] transition-colors hover:text-[#007A1F]"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>

        <span className="mt-8 inline-flex rounded-full bg-[#E8F7EA] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
          List your business
        </span>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#141414] lg:text-5xl">
          Get found by people ready to buy.
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-[#646464]">
          Tell us about your business. Once verified, your profile goes live
          for customers already searching nearby.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 space-y-6 rounded-3xl border border-[#E1E5E1] bg-[#F3FBF4] p-8 lg:p-10"
        >
          <div className="hidden" aria-hidden="true">
            <label htmlFor="lb-company_website">Leave this field empty</label>
            <input
              id="lb-company_website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.company_website}
              onChange={update("company_website")}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Business name</label>
              <input required value={form.business_name} onChange={update("business_name")} className={inputClass} placeholder="Osei & Co. Bakery" />
            </div>
            <div>
              <label className={labelClass}>Owner / contact person</label>
              <input required value={form.owner_name} onChange={update("owner_name")} className={inputClass} placeholder="Amara Osei" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div>
              <label className={labelClass}>Phone</label>
              <input required type="tel" value={form.phone} onChange={update("phone")} className={inputClass} placeholder="+1 (555) 000-0000" />
            </div>
            <div>
              <label className={labelClass}>WhatsApp <span className="normal-case text-[#858585]">(optional)</span></label>
              <input type="tel" value={form.whatsapp} onChange={update("whatsapp")} className={inputClass} placeholder="Same as phone?" />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input required type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="owner@business.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Category</label>
              <select value={form.category} onChange={update("category")} className={inputClass}>
                <option value="">Select a category</option>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>Location / address</label>
              <input value={form.location} onChange={update("location")} className={inputClass} placeholder="Street, area" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass}>District</label>
              <input value={form.district} onChange={update("district")} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>State</label>
              <input value={form.state} onChange={update("state")} className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Website <span className="normal-case text-[#858585]">(optional)</span></label>
              <input value={form.website} onChange={update("website")} className={inputClass} placeholder="https://" />
            </div>
            <div>
              <label className={labelClass}>Instagram / social <span className="normal-case text-[#858585]">(optional)</span></label>
              <input value={form.social_url} onChange={update("social_url")} className={inputClass} placeholder="https://instagram.com/..." />
            </div>
          </div>

          <div>
            <label className={labelClass}>Tell us about your business</label>
            <textarea rows={4} value={form.description} onChange={update("description")} className={inputClass} placeholder="What do you offer? What makes you worth finding?" />
          </div>

          <div>
            <label className={labelClass}>Preferred plan <span className="normal-case text-[#858585]">(optional)</span></label>
            <select value={form.preferred_plan} onChange={update("preferred_plan")} className={inputClass}>
              <option value="">Not sure yet</option>
              <option value="basic">Basic — free verified listing</option>
              <option value="growth">Growth — enhanced visibility</option>
              <option value="premium">Premium — full toolkit</option>
            </select>
          </div>

          <label className="flex items-start gap-3 text-xs text-[#646464]">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={update("consent")}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#CDD5CE] text-[#007A1F] focus:ring-[#007A1F]/30"
            />
            I confirm this information is accurate and agree to be contacted by Getvia about listing this business.
          </label>

          {status === "error" && (
            <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-xl bg-[#007A1F] px-7 py-3.5 font-body text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {status === "submitting" ? "Submitting…" : "Submit for review"}
          </button>
        </form>
      </div>
    </main>
  );
}

import { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "../lib/supabase";
import { COMPANY_CONTACT, isContactInfoConfigured } from "../data/companyContact";
import PageHero from "../components/layout/PageHero";

const ENQUIRY_TYPES = [
  "General enquiry",
  "Sales",
  "Business listing",
  "Technical support",
  "Partnership",
  "Media",
  "Careers",
];

const EMPTY_FORM = {
  enquiry_type: "General enquiry",
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
  consent: false,
  company_website: "", // honeypot
};

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const contactConfigured = isContactInfoConfigured();

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

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name, subject, email, and message.");
      return;
    }
    if (!form.consent) {
      setStatus("error");
      setErrorMessage("Please confirm you agree to be contacted before sending.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    // Uses the existing contact_messages table — enquiry type and company
    // are folded into the subject/message so no schema change is needed.
    const { error } = await supabase.from("contact_messages").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      subject: `[${form.enquiry_type}] ${form.subject.trim()}`,
      message: form.company.trim()
        ? `Company: ${form.company.trim()}\n\n${form.message.trim()}`
        : form.message.trim(),
      source_page: "/contact",
    });

    if (error) {
      console.error("Contact page submission failed:", error);
      setStatus("error");
      setErrorMessage("Something went wrong on our end. Please try again in a moment.");
      return;
    }

    setStatus("success");
    setForm(EMPTY_FORM);
  };

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="How can we help?"
        description="Pick the option that fits best, and we'll route it to the right team."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-xl text-[#141414]">Reach us directly</h2>

            {contactConfigured ? (
              <ul className="mt-6 space-y-5">
                {[
                  { icon: Mail, label: "Email", value: COMPANY_CONTACT.email },
                  { icon: Phone, label: "Phone", value: COMPANY_CONTACT.phone },
                  { icon: MessageCircle, label: "WhatsApp", value: COMPANY_CONTACT.whatsapp },
                  { icon: MapPin, label: "Office", value: COMPANY_CONTACT.location },
                  { icon: Clock, label: "Hours", value: COMPANY_CONTACT.hours },
                ].map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <Icon className="mt-0.5 shrink-0 text-[#007A1F]" size={20} strokeWidth={1.75} />
                    <div>
                      <p className={labelClass}>{label}</p>
                      <p className="text-sm text-[#141414]">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6 rounded-2xl border border-dashed border-[#CDD5CE] bg-[#F3FBF4] p-6">
                <p className="text-sm text-[#646464]">
                  Direct contact details are coming soon. In the meantime,
                  use the form and we'll get back to you by email.
                </p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-3xl border border-[#E1E5E1] bg-[#F3FBF4] p-8 lg:col-span-7 lg:p-10">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="cp-company_website">Leave this field empty</label>
              <input id="cp-company_website" type="text" tabIndex={-1} autoComplete="off" value={form.company_website} onChange={update("company_website")} />
            </div>

            <div>
              <label className={labelClass}>I'm contacting Getvia about</label>
              <select value={form.enquiry_type} onChange={update("enquiry_type")} className={inputClass}>
                {ENQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Name</label>
                <input required value={form.name} onChange={update("name")} className={inputClass} placeholder="Jane Cooper" />
              </div>
              <div>
                <label className={labelClass}>Company <span className="normal-case text-[#858585]">(optional)</span></label>
                <input value={form.company} onChange={update("company")} className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Email</label>
                <input required type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="jane@company.com" />
              </div>
              <div>
                <label className={labelClass}>Phone <span className="normal-case text-[#858585]">(optional)</span></label>
                <input type="tel" value={form.phone} onChange={update("phone")} className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass}>Subject</label>
              <input required value={form.subject} onChange={update("subject")} className={inputClass} placeholder="What's this about?" />
            </div>

            <div>
              <label className={labelClass}>Message</label>
              <textarea required rows={4} value={form.message} onChange={update("message")} className={inputClass} />
            </div>

            <label className="flex items-start gap-3 text-xs text-[#646464]">
              <input type="checkbox" checked={form.consent} onChange={update("consent")} className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#CDD5CE] text-[#007A1F] focus:ring-[#007A1F]/30" />
              I agree to be contacted by Getvia about my enquiry.
            </label>

            {status === "error" && (
              <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                <AlertCircle size={18} className="mt-0.5 shrink-0" /> {errorMessage}
              </div>
            )}
            {status === "success" && (
              <div className="flex items-start gap-2 rounded-lg bg-[#E8F7EA] p-3 text-sm text-[#006619]">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" /> Thank you. Your message has been submitted successfully.
              </div>
            )}

            <button type="submit" disabled={status === "submitting"} className="w-full rounded-xl bg-[#007A1F] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60">
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

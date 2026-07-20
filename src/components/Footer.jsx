import { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp, Check, X } from "lucide-react";
import logo from "../assets/logo.png";
import { supabase } from "../lib/supabase";

const COLUMNS = [
  {
    title: "Products",
    links: ["Business discovery", "Business profiles", "Verified badge", "Getvia for maps"],
  },
  {
    title: "Solutions",
    links: ["For restaurants", "For healthcare", "For retail", "For services"],
  },
  {
    title: "Resources",
    links: ["Help center", "Verification guide", "Blog", "API docs"],
  },
  {
    title: "Company",
    links: ["About", "Our story", "Careers", "Press"],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | duplicate | error

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;

    const trimmed = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!isValidEmail) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // No email-confirmation flow is wired up yet (that's a later stage with
    // Resend), so subscribers go straight to "active" rather than sitting
    // in "pending" forever with no way to confirm.
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: trimmed, status: "active" });

    if (error) {
      // Postgres unique-violation code — this email is already subscribed.
      if (error.code === "23505") {
        setStatus("duplicate");
      } else {
        console.error("Newsletter signup failed:", error);
        setStatus("error");
      }
      return;
    }

    setStatus("success");
    setEmail("");
  };

  return (
    <footer className="border-t border-[#DCE5DD] bg-[#F3FBF4] pt-20 text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-10 border-b border-[#DDE5DE] pb-16 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Getvia" className="h-8 w-8" />
              <p className="font-display text-2xl font-semibold text-[#141414]">
                Getvia
              </p>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#646464]">
              The route to every trusted business near you. Verified
              listings, honest search, and growth tools for local business
              owners.
            </p>

            <form
              className="mt-6 flex max-w-xs gap-2 rounded-full border border-[#DDE5DE] bg-white p-1"
              onSubmit={handleSubscribe}
              noValidate
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle" && status !== "submitting") setStatus("idle");
                }}
                placeholder="you@email.com"
                className="w-full rounded-full bg-transparent px-3 py-2 font-body text-sm text-[#141414] placeholder:text-[#858585] outline-none"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="shrink-0 rounded-full bg-[#007A1F] px-4 py-2 font-body text-sm font-medium text-white transition-colors hover:bg-[#006619] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "…" : "Join"}
              </button>
            </form>

            {status === "success" && (
              <p className="mt-2 flex items-center gap-1 text-xs text-[#007A1F]">
                <Check size={13} /> You're subscribed. Welcome aboard.
              </p>
            )}
            {status === "duplicate" && (
              <p className="mt-2 text-xs text-[#646464]">
                That email is already subscribed.
              </p>
            )}
            {status === "error" && (
              <p className="mt-2 flex items-center gap-1 text-xs text-red-600">
                <X size={13} /> Please enter a valid email address.
              </p>
            )}

            <div className="mt-6 flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="text-[#858585] transition-colors hover:text-[#007A1F]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs uppercase tracking-wider text-[#858585]">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#646464] transition-colors hover:text-[#007A1F]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-xs text-[#858585]">
            © {new Date().getFullYear()} Getvia, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-xs text-[#858585] hover:text-[#007A1F]">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="text-xs text-[#858585] hover:text-[#007A1F]">
              Terms of Service
            </a>
            <a
              href="#hero"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DDE5DE] bg-white text-[#646464] transition-colors hover:border-[#007A1F] hover:text-[#007A1F]"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUp,
  Check,
  Facebook,
  Instagram,
  Linkedin,
  X,
} from "lucide-react";

import logo from "../assets/logo.png";
import { supabase } from "../lib/supabase";

const FOOTER_COLUMNS = [
  {
    title: "Platform",
    links: [
      {
        label: "Business Discovery",
        href: "/platform",
      },
      {
        label: "Business Profiles",
        href: "/features",
      },
      {
        label: "Verified Businesses",
        href: "/verification",
      },
      {
        label: "List Your Business",
        href: "/list-your-business",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Help Center",
        href: "/help-center",
      },
      {
        label: "Support",
        href: "/support",
      },
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "FAQ",
        href: "/faq",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Careers",
        href: "/careers",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "Getvia on Facebook",
    href: "https://www.facebook.com/",
    icon: Facebook,
  },
  {
    label: "Getvia on Instagram",
    href: "https://www.instagram.com/getviaofficial?igsh=MWowcnkzMWhpaHkyaA==",
    icon: Instagram,
  },
  {
    label: "Getvia on LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
];

const focusRing =
  "rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007A1F] focus-visible:ring-offset-2";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  };

  const handleSubscribe = async (event) => {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({
          email: trimmedEmail,
          status: "active",
        });

      if (error) {
        if (error.code === "23505") {
          setStatus("duplicate");
          return;
        }

        console.error("Newsletter signup failed:", error);

        setStatus("error");
        setErrorMessage(
          "We couldn't subscribe you right now. Please try again.",
        );

        return;
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Newsletter signup failed:", error);

      setStatus("error");
      setErrorMessage(
        "We couldn't subscribe you right now. Please try again.",
      );
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (
      status === "error" ||
      status === "duplicate" ||
      status === "success"
    ) {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[#DCE5DD] bg-[#F3FBF4] text-[#141414]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-b border-[#DDE5DE] py-14 sm:py-16 lg:grid-cols-[1.4fr_2fr] lg:gap-20 lg:py-20">
          
          {/* Brand + Newsletter */}
          <div>
            <Link
              to="/"
              className={`inline-flex items-center gap-3 ${focusRing}`}
            >
              <img
                src={logo}
                alt="Getvia"
                className="h-9 w-9 object-contain"
              />

              <span className="font-body text-2xl font-semibold tracking-[-0.02em] text-[#141414]">
                Getvia
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#646464]">
              Discover trusted local businesses and professionals,
              while helping business owners build a stronger digital
              presence.
            </p>

            {/* Newsletter */}
            <div className="mt-7">
              <p className="text-sm font-semibold text-[#242C26]">
                Stay updated with Getvia
              </p>

              <p className="mt-1 text-xs leading-6 text-[#737D75]">
                Receive product updates, helpful guides, and platform
                news.
              </p>

              <form
                onSubmit={handleSubscribe}
                noValidate
                className="mt-4 flex max-w-md gap-2 rounded-2xl border border-[#D7E1D8] bg-white p-1.5 shadow-sm"
              >
                <label
                  htmlFor="newsletter-email"
                  className="sr-only"
                >
                  Email address
                </label>

                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                  aria-label="Email address"
                  className="min-w-0 flex-1 rounded-xl bg-transparent px-3 py-2.5 font-body text-sm text-[#141414] outline-none placeholder:text-[#929A94] focus:ring-2 focus:ring-[#007A1F]/20"
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="shrink-0 rounded-xl bg-[#007A1F] px-5 py-2.5 font-body text-sm font-semibold text-white transition hover:bg-[#006619] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting"
                    ? "Subscribing..."
                    : "Subscribe"}
                </button>
              </form>

              {/* Success */}
              {status === "success" && (
                <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[#007A1F]">
                  <Check size={14} />
                  You're subscribed. Welcome to Getvia.
                </p>
              )}

              {/* Already subscribed */}
              {status === "duplicate" && (
                <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[#646464]">
                  <Check size={14} />
                  This email is already subscribed to Getvia.
                </p>
              )}

              {/* Error */}
              {status === "error" && (
                <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-red-600">
                  <X size={14} />
                  {errorMessage}
                </p>
              )}
            </div>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#D7E1D8] bg-white text-[#747D76] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9CC6A4] hover:bg-[#F8FCF8] hover:text-[#007A1F] ${focusRing}`}
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#707A72]">
                  {column.title}
                </p>

                <ul className="mt-5 space-y-3.5">
                  {column.links.map((item) => (
                    <li key={`${column.title}-${item.label}`}>
                      <Link
                        to={item.href}
                        className={`text-sm text-[#59625B] transition hover:text-[#007A1F] ${focusRing}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs text-[#7B847D] sm:text-left">
            © {new Date().getFullYear()} Getvia. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-end">
            <Link
              to="/privacy-policy"
              className={`text-xs font-medium text-[#646D66] transition hover:text-[#007A1F] ${focusRing}`}
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-of-service"
              className={`text-xs font-medium text-[#646D66] transition hover:text-[#007A1F] ${focusRing}`}
            >
              Terms of Service
            </Link>

            <Link
              to="/cookie-policy"
              className={`text-xs font-medium text-[#646D66] transition hover:text-[#007A1F] ${focusRing}`}
            >
              Cookie Policy
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#D7E1D8] bg-white text-[#646D66] transition hover:border-[#007A1F] hover:text-[#007A1F] ${focusRing}`}
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

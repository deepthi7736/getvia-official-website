import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUp,
  Check,
  X,
} from "lucide-react";

import logo from "../assets/logo.png";
import { supabase } from "../lib/supabase";

const COLUMNS = [
  {
    title: "Products",
    links: [
      {
        label: "Business discovery",
        href: "/platform",
      },
      {
        label: "Business profiles",
        href: "/features",
      },
      {
        label: "Verified badge",
        href: "/verification",
      },
      {
        label: "Getvia for maps",
        href: "/technology",
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        label: "For restaurants",
        href: "/industries",
      },
      {
        label: "For healthcare",
        href: "/industries",
      },
      {
        label: "For retail",
        href: "/industries",
      },
      {
        label: "For services",
        href: "/industries",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Resources",
        href: "/resources",
      },
      {
        label: "Help center",
        href: "/help-center",
      },
      {
        label: "Case studies",
        href: "/case-studies",
      },
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "Support",
        href: "/support",
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
        label: "Partners",
        href: "/partners",
      },
      {
        label: "Press",
        href: "/press",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
];

const focusRing =
  "rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007A1F] focus-visible:ring-offset-2";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubscribe = async (event) => {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    const trimmedEmail = email.trim();
    const isValidEmail =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!isValidEmail) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email: trimmedEmail,
        status: "active",
      });

    if (error) {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[#DCE5DD] bg-[#F3FBF4] pt-20 text-[#141414]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-10 border-b border-[#DDE5DE] pb-16 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link
              to="/"
              className={`inline-flex items-center gap-2.5 ${focusRing}`}
            >
              <img
                src={logo}
                alt="Getvia"
                className="h-8 w-8 object-contain"
              />
              <Link
  to="/"
  className={`inline-flex items-center gap-2.5 ${focusRing}`}
>
  <img
    src={logo}
    alt="Getvia"
    className="h-8 w-8 object-contain"
  />

  <span className="font-display text-2xl font-semibold text-[#141414]">
    Getvia
  </span>
</Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#646464]">
              The route to every trusted business near you.
              Verified listings, honest search, and growth tools
              for local business owners.
            </p>

            <form
              className="mt-6 flex max-w-xs gap-2 rounded-full border border-[#DDE5DE] bg-white p-1"
              onSubmit={handleSubscribe}
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>

              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);

                  if (
                    status !== "idle" &&
                    status !== "submitting"
                  ) {
                    setStatus("idle");
                  }
                }}
                placeholder="you@email.com"
                className="w-full rounded-full bg-transparent px-3 py-2 font-body text-sm text-[#141414] placeholder:text-[#858585] outline-none"
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="shrink-0 rounded-full bg-[#007A1F] px-4 py-2 font-body text-sm font-medium text-white transition-colors hover:bg-[#006619] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Joining..." : "Join"}
              </button>
            </form>

            {status === "success" && (
              <p className="mt-2 flex items-center gap-1 text-xs text-[#007A1F]">
                <Check size={13} />
                You&apos;re subscribed. Welcome aboard.
              </p>
            )}

            {status === "duplicate" && (
              <p className="mt-2 text-xs text-[#646464]">
                That email is already subscribed.
              </p>
            )}

            {status === "error" && (
              <p className="mt-2 flex items-center gap-1 text-xs text-red-600">
                <X size={13} />
                Please enter a valid email address.
              </p>
            )}

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Getvia on Facebook"
                className={`text-[#858585] transition-colors hover:text-[#007A1F] ${focusRing}`}
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Getvia on Instagram"
                className={`text-[#858585] transition-colors hover:text-[#007A1F] ${focusRing}`}
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Getvia on Twitter"
                className={`text-[#858585] transition-colors hover:text-[#007A1F] ${focusRing}`}
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Getvia on LinkedIn"
                className={`text-[#858585] transition-colors hover:text-[#007A1F] ${focusRing}`}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="font-mono text-xs uppercase tracking-wider text-[#858585]">
                {column.title}
              </p>

              <ul className="mt-4 space-y-3">
                {column.links.map((item) => (
                  <li key={`${column.title}-${item.label}`}>
                    <Link
                      to={item.href}
                      className={`text-sm text-[#646464] transition-colors hover:text-[#007A1F] ${focusRing}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs text-[#858585] sm:text-left">
            © {new Date().getFullYear()} Getvia. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-end">
            <Link
              to="/privacy-policy"
              className={`text-xs font-medium text-[#646464] transition-colors hover:text-[#007A1F] ${focusRing}`}
            >
              Privacy Policy
            </Link>

            <Link
  to="/terms-of-service"
  className={`text-xs font-medium text-[#646464] transition-colors hover:text-[#007A1F] ${focusRing}`}
>
  Terms of Service
</Link>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className={`flex h-8 w-8 items-center justify-center rounded-full border border-[#DDE5DE] bg-white text-[#646464] transition-colors hover:border-[#007A1F] hover:text-[#007A1F] ${focusRing}`}
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

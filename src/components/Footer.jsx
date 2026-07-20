import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import logo from "../assets/logo.png";

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
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-full bg-transparent px-3 py-2 font-body text-sm text-[#141414] placeholder:text-[#858585] outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#007A1F] px-4 py-2 font-body text-sm font-medium text-white transition-colors hover:bg-[#006619]"
              >
                Join
              </button>
            </form>

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

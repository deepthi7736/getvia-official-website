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
    <footer className="bg-[#14361F] pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-10 border-b border-white/10 pb-16 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Getvia" className="h-8 w-8" />
              <p className="font-display text-2xl font-semibold text-white">
                Getvia
              </p>
            </div>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-white/55">
              The route to every trusted business near you. Verified
              listings, honest search, and growth tools for local business
              owners.
            </p>

            <form
              className="mt-6 flex max-w-xs gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-full border border-white/15 bg-transparent px-4 py-2.5 font-body text-sm text-white placeholder:text-white/40 outline-none focus:border-[#8BC63F]"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#8BC63F] px-4 py-2.5 font-body text-sm font-medium text-[#14361F]"
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
                  className="text-white/50 transition-colors hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs uppercase tracking-wider text-white/40">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-white/70 transition-colors hover:text-white"
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
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} Getvia, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-xs text-white/40 hover:text-white/70">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-white/40 hover:text-white/70">
              Terms of Service
            </a>
            <a
              href="#hero"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:text-white"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

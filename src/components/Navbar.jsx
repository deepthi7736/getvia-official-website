import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#what-we-do", label: "What we do" },
  { href: "#industries", label: "Industries" },
  { href: "#platform", label: "For businesses" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-[#E1E5E1] bg-white/90 backdrop-blur-xl shadow-sm"
          : "border-transparent bg-white/60 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#hero" className="flex items-center gap-2.5">
          <img src={logo} alt="Getvia" className="h-8 w-8" />
          <span className="font-display text-xl font-semibold text-[#141414]">
            Getvia
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-[#5F625F] transition-colors hover:text-[#007A1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007A1F] focus-visible:ring-offset-2 rounded"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="rounded-full border border-[#CDD5CE] px-4 py-2 font-body text-sm text-[#141414] transition-colors hover:border-[#007A1F] hover:text-[#007A1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007A1F] focus-visible:ring-offset-2 rounded"
          >
            Log in
          </a>
          <Link
            to="/list-your-business"
            className="rounded-full bg-[#007A1F] px-4 py-2 font-body text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg"
          >
            List your business
          </Link>
        </div>

        <button
          className="text-[#141414] md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#E1E5E1] bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-[#5F625F]"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/list-your-business"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#007A1F] px-4 py-2 text-center font-body text-sm font-medium text-white"
            >
              List your business
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

import { useEffect, useState } from "react";
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#14361F]/95 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#hero" className="flex items-center gap-2.5">
          <img src={logo} alt="Getvia" className="h-8 w-8" />
          <span className="font-display text-xl font-semibold text-white">
            Getvia
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-white/80 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="rounded-full border border-white/25 px-4 py-2 font-body text-sm text-white transition-colors hover:border-white/50"
          >
            Log in
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[#8BC63F] px-4 py-2 font-body text-sm font-medium text-[#14361F] transition-transform hover:scale-[1.03]"
          >
            List your business
          </a>
        </div>

        <button
          className="text-white md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#14361F] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-white/85"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#8BC63F] px-4 py-2 text-center font-body text-sm font-medium text-[#14361F]"
            >
              List your business
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

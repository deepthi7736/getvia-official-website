import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigationLinks = [
  { label: "Product", href: "#product" },
  { label: "For Customers", href: "#customers" },
  { label: "For Business", href: "#business" },
  { label: "Professionals", href: "#professionals" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#DDE5DF] bg-white/90 py-3 shadow-sm backdrop-blur-xl"
          : "bg-white/80 py-4 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" aria-label="Getvia home">
          <img
            src="/getvia-logo.png"
            alt="Getvia"
            className="h-10 w-auto max-w-[160px] object-contain"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-[#667069] transition hover:text-[#176B49]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="#contact"
            className="text-sm font-bold text-[#17201C]"
          >
            Contact
          </a>

          <a
            href="https://getvia.in"
            className="inline-flex items-center gap-2 rounded-full bg-[#176B49] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0F5132]"
          >
            Explore Getvia
            <ArrowUpRight size={17} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[#DDE5DF] bg-white text-[#17201C] lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mx-auto mt-3 w-[calc(100%-28px)] max-w-7xl rounded-3xl border border-[#DDE5DF] bg-white p-5 shadow-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 font-semibold text-[#667069] hover:bg-[#F7F8F3] hover:text-[#176B49]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://getvia.in"
              className="mt-3 rounded-full bg-[#176B49] px-6 py-3 text-center font-bold text-white"
            >
              Explore Getvia
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

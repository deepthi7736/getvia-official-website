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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#DDDDDD] bg-white/95 py-3 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-white/90 py-4 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Getvia logo */}
        <a
          href="#home"
          aria-label="Go to Getvia home"
          className="flex items-center"
          onClick={closeMenu}
        >
          <img
            src="/getvia-logo.png"
            alt="Getvia"
            className="h-10 w-auto max-w-[170px] object-contain"
          />
        </a>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-[#6B6B6B] transition-colors duration-200 hover:text-[#006E12]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="#contact"
            className="text-sm font-bold text-[#161616] transition-colors duration-200 hover:text-[#006E12]"
          >
            Contact
          </a>

          <a
            href="https://getvia.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#006E12] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00530D] hover:shadow-md"
          >
            Explore Getvia
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[#DDDDDD] bg-white text-[#161616] shadow-sm transition hover:border-[#006E12] hover:text-[#006E12] lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mx-auto mt-3 w-[calc(100%-28px)] max-w-7xl rounded-3xl border border-[#DDDDDD] bg-white p-5 shadow-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-2">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 font-semibold text-[#6B6B6B] transition hover:bg-[#F4FBF5] hover:text-[#006E12]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 font-semibold text-[#161616] transition hover:bg-[#F4FBF5] hover:text-[#006E12]"
            >
              Contact
            </a>

            <a
              href="https://getvia.in"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#006E12] px-6 py-3 font-bold text-white transition hover:bg-[#00530D]"
            >
              Explore Getvia
              <ArrowUpRight size={17} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

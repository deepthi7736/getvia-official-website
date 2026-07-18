import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/getvia-full-Logo.png";

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
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[#E1E5E1] bg-white/95 shadow-[0_8px_30px_rgba(0,80,20,0.06)] backdrop-blur-xl"
          : "border-transparent bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[78px] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Complete Getvia logo */}
        <a
          href="#hero"
          aria-label="Go to Getvia home"
          className="flex shrink-0 items-center"
          onClick={handleLinkClick}
        >
          <img
            src={logo}
            alt="Getvia"
            className="h-10 w-auto max-w-[160px] object-contain sm:h-11 sm:max-w-[185px]"
          />
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex lg:gap-9"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-[#646464] transition-colors duration-200 hover:text-[#007A1F]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="rounded-full border border-[#CDD5CE] bg-white px-5 py-2.5 font-body text-sm font-semibold text-[#141414] transition-all duration-200 hover:border-[#007A1F] hover:text-[#007A1F]"
          >
            Log in
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#007A1F] px-5 py-2.5 font-body text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg"
          >
            List your business
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DDE3DE] bg-white text-[#141414] transition-colors hover:border-[#007A1F] hover:text-[#007A1F] md:hidden"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-[#E1E5E1] bg-white px-5 pb-6 pt-4 shadow-[0_16px_35px_rgba(0,80,20,0.08)] sm:px-8 md:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-7xl flex-col gap-1"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="rounded-xl px-4 py-3 font-body text-[15px] font-medium text-[#424642] transition-colors hover:bg-[#F3FBF4] hover:text-[#007A1F]"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-4 grid gap-3 border-t border-[#E8ECE8] pt-5">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="rounded-xl border border-[#CDD5CE] bg-white px-5 py-3 text-center font-body text-sm font-semibold text-[#141414] transition-colors hover:border-[#007A1F] hover:text-[#007A1F]"
              >
                Log in
              </a>

              <a
                href="#contact"
                onClick={handleLinkClick}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#007A1F] px-5 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-[#006619]"
              >
                List your business
                <ArrowUpRight size={16} strokeWidth={2.2} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
// Trigger Vercel rebuild

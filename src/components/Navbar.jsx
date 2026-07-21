import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

// type: "anchor" scrolls within the homepage; "route" navigates to a
// real page. Mixed intentionally — most content still lives on the
// homepage, but About/FAQ/Contact now have dedicated pages.
const LINKS = [
  { type: "anchor", href: "#what-we-do", label: "What we do" },
  { type: "anchor", href: "#industries", label: "Industries" },
  { type: "anchor", href: "#platform", label: "For businesses" },
  { type: "route", href: "/about", label: "About" },
  { type: "route", href: "/faq", label: "FAQ" },
  { type: "route", href: "/contact", label: "Contact" },
];

const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007A1F] focus-visible:ring-offset-2 rounded";

function NavLink({ item, onClick, className }) {
  if (item.type === "route") {
    return (
      <Link to={item.href} onClick={onClick} className={className}>
        {item.label}
      </Link>
    );
  }
  return (
    <a href={item.href} onClick={onClick} className={className}>
      {item.label}
    </a>
  );
}

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
        scrolled ? "border-[#E1E5E1] bg-white/90 backdrop-blur-xl shadow-sm" : "border-transparent bg-white/60 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Getvia" className="h-8 w-8" />
          <span className="font-display text-xl font-semibold text-[#141414]">Getvia</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.href}
              item={l}
              className={`font-body text-sm text-[#5F625F] transition-colors hover:text-[#007A1F] ${focusRing}`}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://getvia.in"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full border border-[#CDD5CE] px-4 py-2 font-body text-sm text-[#141414] transition-colors hover:border-[#007A1F] hover:text-[#007A1F] ${focusRing}`}
          >
            Explore Getvia
          </a>
          <Link
            to="/book-demo"
            className={`rounded-full px-4 py-2 font-body text-sm font-medium text-[#141414] transition-colors hover:text-[#007A1F] ${focusRing}`}
          >
            Book a demo
          </Link>
          <Link
            to="/list-your-business"
            className="rounded-full bg-[#007A1F] px-4 py-2 font-body text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg"
          >
            List your business
          </Link>
        </div>

        <button className="text-[#141414] md:hidden" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#E1E5E1] bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <NavLink key={l.href} item={l} onClick={() => setOpen(false)} className="font-body text-[#5F625F]" />
            ))}
            <a href="https://getvia.in" target="_blank" rel="noopener noreferrer" className="font-body text-[#5F625F]">
              Explore Getvia
            </a>
            <Link to="/book-demo" onClick={() => setOpen(false)} className="font-body text-[#5F625F]">
              Book a demo
            </Link>
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

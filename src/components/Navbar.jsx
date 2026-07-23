import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

// Simplified per premium redesign: fewer top-level items, mapped to real
// pages where they exist. "Solutions" and "Resources" will point to
// dedicated pages once built — for now they route to the closest live
// equivalent so nothing is a dead link.
const LINKS = [
  { type: "route", href: "/platform", label: "Platform" },
  { type: "anchor", href: "/#platform", label: "Solutions" },
  { type: "route", href: "/about", label: "About" },
  { type: "route", href: "/faq", label: "Resources" },
];

const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007A1F] focus-visible:ring-offset-2 rounded";

function NavLink({ item, onClick, className }) {
  if (item.type === "route") {
    return <Link to={item.href} onClick={onClick} className={className}>{item.label}</Link>;
  }
  return <a href={item.href} onClick={onClick} className={className}>{item.label}</a>;
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
        scrolled ? "border-[#E1E5E1] bg-white/80 backdrop-blur-xl shadow-sm" : "border-transparent bg-white/50 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Getvia" className="h-8 w-8" />
          <span className="font-display text-xl font-semibold text-[#141414]">Getvia</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <NavLink key={l.href} item={l} className={`font-body text-sm text-[#5F625F] transition-colors hover:text-[#007A1F] ${focusRing}`} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {/* Book a demo — premium outlined treatment with hover glow, per
              the redesign brief's explicit call for this CTA to stand out. */}
          <Link to="/book-demo" className="group relative">
            <span className="absolute inset-0 rounded-full bg-[#007A1F]/0 blur-md transition-all duration-300 group-hover:bg-[#007A1F]/20" />
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex items-center rounded-full border border-[#007A1F]/30 bg-white px-4 py-2 font-body text-sm font-medium text-[#007A1F] transition-colors group-hover:border-[#007A1F] ${focusRing}`}
            >
              Book a demo
            </motion.span>
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
            <Link to="/book-demo" onClick={() => setOpen(false)} className="font-body font-medium text-[#007A1F]">
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

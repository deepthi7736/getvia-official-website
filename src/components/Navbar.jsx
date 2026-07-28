import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../assets/logo.png";

const LINKS = [
  {
    type: "route",
    href: "/platform",
    label: "Platform",
  },
  {
    type: "route",
    href: "/solutions",
    label: "Solutions",
  },
  {
    type: "route",
    href: "/about",
    label: "About",
  },
  {
    type: "route",
    href: "/resources",
    label: "Resources",
  },
];

const focusRing =
  "rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007A1F] focus-visible:ring-offset-2";

function NavLink({
  item,
  onClick,
  className = "",
  activeClassName = "",
}) {
  const location = useLocation();

  const isActive =
    item.type === "route" &&
    location.pathname === item.href;

  if (item.type === "route") {
    return (
      <Link
        to={item.href}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
        className={`${className} ${
          isActive ? activeClassName : ""
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <a
      href={item.href}
      onClick={onClick}
      className={className}
    >
      {item.label}
    </a>
  );
}

export default function Navbar({ onBookDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  const handleBookDemo = () => {
    setOpen(false);
    onBookDemo?.();
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[#E1E5E1] bg-white/90 shadow-[0_8px_30px_rgba(15,45,20,0.06)] backdrop-blur-xl"
          : "border-transparent bg-white/70 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Go to Getvia homepage"
          className={`flex items-center gap-2.5 ${focusRing}`}
        >
          <img
            src={logo}
            alt="Getvia"
            className="h-8 w-8 object-contain"
          />

          <span className="font-display text-xl font-semibold tracking-[-0.02em] text-[#141414]">
            Getvia
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {LINKS.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              className={`relative py-2 font-body text-sm font-medium text-[#5F625F] transition-colors hover:text-[#007A1F] ${focusRing}`}
              activeClassName="text-[#007A1F]"
            />
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://getvia.in"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-body text-sm font-medium text-[#5F625F] transition-colors hover:text-[#007A1F] ${focusRing}`}
          >
            Explore Getvia
          </a>

          <button
            type="button"
            onClick={handleBookDemo}
            className="group relative"
          >
            <span className="absolute inset-0 rounded-full bg-[#007A1F]/0 blur-md transition-all duration-300 group-hover:bg-[#007A1F]/20" />

            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex items-center rounded-full border border-[#007A1F]/30 bg-white px-4 py-2 font-body text-sm font-semibold text-[#007A1F] transition-colors group-hover:border-[#007A1F] group-hover:bg-[#F5FBF6] ${focusRing}`}
            >
              Book a Demo
            </motion.span>
          </button>

          <Link
            to="/list-your-business"
            className={`rounded-full bg-[#007A1F] px-4 py-2 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#006619] hover:shadow-lg ${focusRing}`}
          >
            List Your Business
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={
            open ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() =>
            setOpen((current) => !current)
          }
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE5DE] bg-white text-[#141414] transition hover:border-[#007A1F] hover:text-[#007A1F] md:hidden ${focusRing}`}
        >
          {open ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-[#E1E5E1] bg-white md:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-8"
            >
              <div className="flex flex-col">
                {LINKS.map((item) => (
                  <NavLink
                    key={item.href}
                    item={item}
                    onClick={closeMenu}
                    className={`border-b border-[#EEF2EE] py-4 font-body text-base font-medium text-[#4E554F] transition-colors hover:text-[#007A1F] ${focusRing}`}
                    activeClassName="text-[#007A1F]"
                  />
                ))}
              </div>

              <a
                href="https://getvia.in"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className={`mt-4 rounded-xl px-1 py-3 font-body text-sm font-medium text-[#5F625F] transition-colors hover:text-[#007A1F] ${focusRing}`}
              >
                Explore Getvia
              </a>

              <div className="mt-4 grid gap-3">
                <button
                  type="button"
                  onClick={handleBookDemo}
                  className={`rounded-full border border-[#007A1F] px-5 py-3 text-center font-body text-sm font-semibold text-[#007A1F] transition hover:bg-[#F3FBF4] ${focusRing}`}
                >
                  Book a Demo
                </button>

                <Link
                  to="/list-your-business"
                  onClick={closeMenu}
                  className={`rounded-full bg-[#007A1F] px-5 py-3 text-center font-body text-sm font-semibold text-white transition hover:bg-[#006619] ${focusRing}`}
                >
                  List Your Business
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

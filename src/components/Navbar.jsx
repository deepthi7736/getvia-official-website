import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const MAIN_LINKS = [
  { type: "route", href: "/platform", label: "Platform" },
  { type: "route", href: "/how-it-works", label: "How it works" },
  { type: "route", href: "/industries", label: "Industries" },
  { type: "route", href: "/for-businesses", label: "For businesses" },
];

const RESOURCE_LINKS = [
  {
    href: "/resources",
    label: "Resources",
    description: "Guides, checklists, and useful templates",
  },
  {
    href: "/help-center",
    label: "Help Center",
    description: "Find answers to common questions",
  },
  {
    href: "/case-studies",
    label: "Case Studies",
    description: "Explore business discovery examples",
  },
  {
    href: "/blog",
    label: "Blog",
    description: "Read insights and platform updates",
  },
  {
    href: "/support",
    label: "Support",
    description: "Contact the Getvia support team",
  },
];

const COMPANY_LINKS = [
  {
    href: "/about",
    label: "About",
    description: "Learn more about Getvia",
  },
  {
    href: "/careers",
    label: "Careers",
    description: "Explore future opportunities",
  },
  {
    href: "/partners",
    label: "Partners",
    description: "Build opportunities with Getvia",
  },
  {
    href: "/press",
    label: "Press",
    description: "Media resources and company information",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Speak with the Getvia team",
  },
];

const focusRing =
  "rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007A1F] focus-visible:ring-offset-2";

function NavLink({ item, onClick, className }) {
  if (item.type === "anchor") {
    return (
      <a href={item.href} onClick={onClick} className={className}>
        {item.label}
      </a>
    );
  }

  return (
    <Link to={item.href} onClick={onClick} className={className}>
      {item.label}
    </Link>
  );
}

function DesktopDropdown({
  label,
  links,
  isOpen,
  onToggle,
  onClose,
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex items-center gap-1 font-body text-sm text-[#5F625F] transition-colors hover:text-[#007A1F] ${focusRing}`}
      >
        {label}
        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-full z-50 mt-5 w-[330px] -translate-x-1/2 rounded-2xl border border-[#E1E8E2] bg-white p-3 shadow-[0_24px_70px_rgba(20,58,29,0.14)]">
          {links.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className="block rounded-xl px-4 py-3 transition-colors hover:bg-[#F3F8F4]"
            >
              <span className="block font-body text-sm font-semibold text-[#172019]">
                {item.label}
              </span>

              <span className="mt-1 block font-body text-xs leading-5 text-[#737C75]">
                {item.description}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileSection({ title, links, onClose }) {
  return (
    <div>
      <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A938C]">
        {title}
      </p>

      <div className="flex flex-col gap-3">
        {links.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={onClose}
            className="font-body text-[#4F5851] transition-colors hover:text-[#007A1F]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((current) =>
      current === name ? null : name
    );
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[#E1E5E1] bg-white/90 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-white/75 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link
          to="/"
          onClick={() => {
            setMobileOpen(false);
            setOpenDropdown(null);
          }}
          className={`flex items-center gap-2.5 ${focusRing}`}
        >
          <img
            src={logo}
            alt="Getvia"
            className="h-8 w-8 object-contain"
          />

          <span className="font-display text-xl font-semibold text-[#141414]">
            Getvia
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary navigation"
        >
          {MAIN_LINKS.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              onClick={() => setOpenDropdown(null)}
              className={`font-body text-sm text-[#5F625F] transition-colors hover:text-[#007A1F] ${focusRing}`}
            />
          ))}

          <DesktopDropdown
            label="Resources"
            links={RESOURCE_LINKS}
            isOpen={openDropdown === "resources"}
            onToggle={() => toggleDropdown("resources")}
            onClose={() => setOpenDropdown(null)}
          />

          <DesktopDropdown
            label="Company"
            links={COMPANY_LINKS}
            isOpen={openDropdown === "company"}
            onToggle={() => toggleDropdown("company")}
            onClose={() => setOpenDropdown(null)}
          />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
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

        <button
          type="button"
          className={`text-[#141414] lg:hidden ${focusRing}`}
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-[#E1E5E1] bg-white px-5 py-6 sm:px-8 lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-7"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-4">
              {MAIN_LINKS.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  onClick={closeMobileMenu}
                  className="font-body text-[#4F5851] transition-colors hover:text-[#007A1F]"
                />
              ))}
            </div>

            <div className="h-px bg-[#E8ECE8]" />

            <MobileSection
              title="Resources"
              links={RESOURCE_LINKS}
              onClose={closeMobileMenu}
            />

            <div className="h-px bg-[#E8ECE8]" />

            <MobileSection
              title="Company"
              links={COMPANY_LINKS}
              onClose={closeMobileMenu}
            />

            <div className="h-px bg-[#E8ECE8]" />

            <div className="flex flex-col gap-3">
              <a
                href="https://getvia.in"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="rounded-full border border-[#CDD5CE] px-4 py-3 text-center font-body text-sm text-[#141414]"
              >
                Explore Getvia
              </a>

              <Link
                to="/book-demo"
                onClick={closeMobileMenu}
                className="rounded-full border border-[#CDD5CE] px-4 py-3 text-center font-body text-sm font-medium text-[#141414]"
              >
                Book a demo
              </Link>

              <Link
                to="/list-your-business"
                onClick={closeMobileMenu}
                className="rounded-full bg-[#007A1F] px-4 py-3 text-center font-body text-sm font-medium text-white"
              >
                List your business
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

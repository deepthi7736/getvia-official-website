import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import logo from "../assets/getvia-full-logo.png";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      "Business Discovery",
      "Business Profiles",
      "Professionals",
      "Verified Listings",
    ],
  },
  {
    title: "Solutions",
    links: [
      "For Businesses",
      "For Customers",
      "For Professionals",
      "Business Growth",
    ],
  },
  {
    title: "Company",
    links: [
      "About Getvia",
      "Our Vision",
      "Contact",
      "Privacy Policy",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#E4E8E4] bg-[#F3FBF4]">
      {/* Decorative Background */}

      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#DDF3E1]/80 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#B7F27D]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Company */}

          <div>
            <img
              src={logo}
              alt="Getvia"
              className="h-12 w-auto object-contain"
            />

            <p className="mt-6 max-w-md font-body text-[15px] leading-8 text-[#646464]">
              Getvia is a modern business discovery platform that helps
              customers discover trusted businesses while helping businesses
              build a stronger digital presence.
            </p>

            {/* Contact */}

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#007A1F]" />

                <span className="text-sm text-[#646464]">
                  support@getvia.in
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#007A1F]" />

                <span className="text-sm text-[#646464]">
                  +91 XXX XXX XXXX
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-[#007A1F]" />

                <span className="text-sm leading-6 text-[#646464]">
                  Kerala, India
                </span>
              </div>
            </div>

            {/* Social */}

            <div className="mt-8 flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9E4DA] bg-white text-[#007A1F] transition-all duration-300 hover:-translate-y-1 hover:border-[#007A1F] hover:bg-[#007A1F] hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-xl font-semibold text-[#141414]">
                {column.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-[15px] text-[#646464] transition-colors hover:text-[#007A1F]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}

        <div className="mt-20 rounded-[30px] bg-white p-8 shadow-[0_20px_55px_rgba(0,90,20,0.06)]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-3xl font-semibold text-[#141414]">
                Stay connected with Getvia
              </h3>

              <p className="mt-3 max-w-xl font-body text-[#646464]">
                Receive updates about new features, business insights, and
                platform improvements.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-lg gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-[#D9E3D9] px-5 py-3 outline-none transition-all focus:border-[#007A1F]"
              />

              <button
                className="rounded-xl bg-[#007A1F] px-7 py-3 font-semibold text-white transition hover:bg-[#006619]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col gap-5 border-t border-[#E4E8E4] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#7A7A7A]">
            © {new Date().getFullYear()} Getvia. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-[#646464] transition hover:text-[#007A1F]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-sm text-[#646464] transition hover:text-[#007A1F]"
            >
              Terms & Conditions
            </a>

            <a
              href="#hero"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#007A1F] text-white transition hover:bg-[#006619]"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

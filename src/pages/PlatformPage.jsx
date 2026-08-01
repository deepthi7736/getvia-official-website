import { Link } from "react-router-dom";
import {
  BadgeCheck,
  Images,
  MapPin,
  MessageCircle,
  PencilLine,
  BarChart3,
} from "lucide-react";

import professionalProfileImage from "../assets/professional-profile.png";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Build trust",
    description:
      "Present complete and verified information to help customers understand your business.",
  },
  {
    icon: Images,
    title: "Show your business",
    description:
      "Add images, services, offers, working hours, and useful profile details.",
  },
  {
    icon: MapPin,
    title: "Help customers reach you",
    description:
      "Add your location, directions, phone number, and contact options.",
  },
  {
    icon: MessageCircle,
    title: "Receive enquiries",
    description:
      "Make it easier for interested customers to call, message, or send an enquiry.",
  },
  {
    icon: PencilLine,
    title: "Keep information updated",
    description:
      "Update profile content, images, services, and business information.",
  },
  {
    icon: BarChart3,
    title: "Understand activity",
    description:
      "Use future dashboard insights to understand profile reach and customer interest.",
  },
];

export default function ForBusinessesPage({ onBookDemo }) {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-[#F7FBF7] px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
        <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#7CE629]/10 blur-3xl" />

        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#007A1F]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#007A1F]">
              For Businesses
            </p>

            <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#151A16] sm:text-5xl lg:text-6xl">
              Give your business a stronger digital presence.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5B645D]">
              Create a professional profile, present accurate information, and
              make it easier for potential customers to discover and contact
              your business.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/list-your-business"
                className="inline-flex items-center justify-center rounded-full bg-[#007A1F] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#006619]"
              >
                List your business
              </Link>

              <button
                type="button"
                onClick={onBookDemo}
                className="inline-flex items-center justify-center rounded-full border border-[#007A1F] bg-white px-6 py-3.5 text-sm font-semibold text-[#007A1F] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EAF7EC]"
              >
                Book a demo
              </button>
            </div>
          </div>

          {/* Image section */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-6 rounded-[36px] bg-[#7CE629]/15 blur-3xl" />

            <div className="relative w-full max-w-[720px] overflow-hidden rounded-[32px] shadow-[0_30px_90px_rgba(0,122,31,0.14)]">
              <img
                src={professionalProfileImage}
                alt="Getvia business profile dashboard"
                loading="eager"
                decoding="async"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#007A1F]">
              Business benefits
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-[#151A16] sm:text-4xl lg:text-5xl">
              Everything your business needs to get discovered.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#667068]">
              Build a complete business profile, showcase your services, and
              make it easier for customers to connect with you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group rounded-[26px] border border-[#E2EAE3] bg-white p-7 shadow-[0_16px_50px_rgba(20,60,30,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#BFD8C3] hover:shadow-[0_22px_60px_rgba(20,60,30,0.1)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F6EA] text-[#007A1F] transition duration-300 group-hover:bg-[#007A1F] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold text-[#151A16]">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-[#667068]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-[#F7FBF7] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[32px] bg-[#073F18] px-6 py-12 text-center text-white sm:px-10 sm:py-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2E9C48]/25 blur-3xl" />

            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#7CE629]/15 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#BDE6C5]">
                Start growing
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Turn your business profile into a powerful growth tool.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#D4E7D8]">
                Create your Getvia profile, showcase your services, and connect
                with customers who are actively looking for businesses like
                yours.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/list-your-business"
                  className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#073F18] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EAF7EC]"
                >
                  List your business
                </Link>

                <button
                  type="button"
                  onClick={onBookDemo}
                  className="rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

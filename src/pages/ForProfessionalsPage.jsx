import { Link } from "react-router-dom";
import {
  Briefcase,
  Images,
  BadgeCheck,
  MessageCircle,
  UserRoundCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Show your services",
    description:
      "Present the professional services you provide in a clear and structured way.",
  },
  {
    icon: Images,
    title: "Build a portfolio",
    description:
      "Add examples of your work, previous projects, and professional achievements.",
  },
  {
    icon: BadgeCheck,
    title: "Build credibility",
    description:
      "Add relevant qualifications, experience, and verification information.",
  },
  {
    icon: MessageCircle,
    title: "Receive enquiries",
    description:
      "Allow potential clients to contact you through useful enquiry options.",
  },
  {
    icon: UserRoundCheck,
    title: "Create your identity",
    description:
      "Develop a professional profile that communicates your expertise.",
  },
  {
    icon: Sparkles,
    title: "Improve visibility",
    description:
      "Become easier to discover within relevant professions and service categories.",
  },
];

export default function ForProfessionalsPage() {
  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
            alt="Professionals working together"
            className="h-[440px] w-full rounded-[32px] object-cover"
          />

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#007A1F]">
              For Professionals
            </p>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-[#151A16] sm:text-5xl lg:text-6xl">
              Present your expertise with a professional profile.
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#5B645D]">
              Getvia helps independent professionals communicate their
              services, experience, portfolio, and contact information in one
              trusted profile.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-[#007A1F] px-6 py-3 font-semibold text-white"
            >
              Contact Getvia
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FBF7] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-[26px] border border-[#E2EAE3] bg-white p-7"
            >
              <Icon className="text-[#007A1F]" size={25} />
              <h2 className="mt-5 font-display text-2xl font-semibold text-[#151A16]">
                {title}
              </h2>
              <p className="mt-3 leading-7 text-[#667068]">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

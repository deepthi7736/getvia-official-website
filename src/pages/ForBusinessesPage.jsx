import { Link } from "react-router-dom";
import {
  BadgeCheck,
  Images,
  MapPin,
  MessageCircle,
  PencilLine,
  BarChart3,
} from "lucide-react";

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

export default function ForBusinessesPage() {
  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="bg-[#F7FBF7] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#007A1F]">
              For Businesses
            </p>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-[#151A16] sm:text-5xl lg:text-6xl">
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
                className="rounded-full bg-[#007A1F] px-6 py-3 font-semibold text-white"
              >
                List your business
              </Link>

              <Link
                to="/book-demo"
                className="rounded-full border border-[#007A1F] px-6 py-3 font-semibold text-[#007A1F]"
              >
                Book a demo
              </Link>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80"
            alt="Business owner managing a customer-focused business"
            className="h-[440px] w-full rounded-[32px] object-cover"
          />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-[26px] border border-[#E2EAE3] p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F6EA] text-[#007A1F]">
                <Icon size={22} />
              </div>

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

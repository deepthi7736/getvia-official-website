import {
  Search,
  SlidersHorizontal,
  Phone,
  MapPin,
  BadgeCheck,
  Smartphone,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search",
    description:
      "Look for businesses, professionals, services, or categories.",
  },
  {
    icon: SlidersHorizontal,
    title: "Explore",
    description:
      "Review useful information, images, services, and available contact options.",
  },
  {
    icon: BadgeCheck,
    title: "Check trust details",
    description:
      "Review profile information and available verification indicators.",
  },
  {
    icon: Phone,
    title: "Contact",
    description:
      "Call, message, or submit an enquiry directly from the profile.",
  },
  {
    icon: MapPin,
    title: "Visit",
    description:
      "Use location details and directions to reach the business.",
  },
  {
    icon: Smartphone,
    title: "Use it anywhere",
    description:
      "Access the responsive platform from mobile, tablet, or desktop.",
  },
];

export default function CustomersPage() {
  return (
    <main className="min-h-screen bg-[#F7FBF7] pt-28">
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#007A1F]">
            For Customers
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight text-[#151A16] sm:text-5xl lg:text-6xl">
            Find useful businesses and professionals with greater clarity.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5B645D]">
            Getvia brings important profile details, contact options, images,
            services, and location information together in one place.
          </p>

          <img
            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1600&q=80"
            alt="Customer using a digital platform on a laptop"
            className="mt-12 h-[420px] w-full rounded-[32px] object-cover"
          />
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }) => (
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

import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  LockKeyhole,
  Gauge,
  MapPinned,
  Accessibility,
} from "lucide-react";

const foundations = [
  {
    icon: Cloud,
    title: "Cloud foundation",
    description:
      "A modern web architecture designed for reliable access across devices and locations.",
  },
  {
    icon: Database,
    title: "Structured platform data",
    description:
      "Business and professional information is organised for useful discovery and profile management.",
  },
  {
    icon: LockKeyhole,
    title: "Secure authentication",
    description:
      "Account and access controls are designed around responsible data handling practices.",
  },
  {
    icon: Gauge,
    title: "Performance focused",
    description:
      "Optimised assets, responsive layouts, and modern deployment support a fast experience.",
  },
  {
    icon: MapPinned,
    title: "Location services",
    description:
      "Location-aware discovery helps users connect with businesses and professionals more easily.",
  },
  {
    icon: Accessibility,
    title: "Accessible experience",
    description:
      "The interface is built with readable structure, keyboard access, and responsive behaviour.",
  },
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="bg-[#F7FBF7] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#007A1F]">
            Technology
          </p>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight text-[#151A16] sm:text-5xl lg:text-6xl">
            A thoughtful platform foundation built for trust and scale.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5B645D]">
            Getvia brings together responsive web technology, cloud
            infrastructure, structured information, secure access, and
            location-aware discovery.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {foundations.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[26px] border border-[#E3EAE4] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F6EA] text-[#007A1F]">
                  <Icon size={22} />
                </div>

                <h2 className="mt-6 font-display text-2xl font-semibold text-[#151A16]">
                  {item.title}
                </h2>

                <p className="mt-3 leading-7 text-[#667068]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

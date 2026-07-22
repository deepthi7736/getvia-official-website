import { useMemo, useState } from "react";
import { Search } from "lucide-react";

const industries = [
  {
    title: "Food and Dining",
    description: "Restaurants, cafés, bakeries, catering, and local food brands.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Shopping and Retail",
    description: "Retail stores, local shops, lifestyle products, and daily needs.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Beauty and Personal Care",
    description: "Salons, bridal services, skincare, grooming, and wellness.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Healthcare",
    description: "Clinics, diagnostics, specialists, pharmacies, and care services.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Education and Learning",
    description: "Schools, institutes, tutors, training centres, and academies.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Professionals",
    description: "Consultants, accountants, designers, marketers, and specialists.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Automobile and Transport",
    description: "Vehicle sales, repairs, rentals, logistics, and transport services.",
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Stays and Rentals",
    description: "Hotels, resorts, homestays, apartments, and rental services.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fitness and Training",
    description: "Gyms, trainers, yoga studios, sports, and wellness programmes.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function IndustriesPage() {
  const [query, setQuery] = useState("");

  const filteredIndustries = useMemo(() => {
    return industries.filter((industry) =>
      `${industry.title} ${industry.description}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-[#F7FBF7] pt-28">
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#007A1F]">
            Industries
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-[#151A16] sm:text-5xl lg:text-6xl">
                Discover businesses across everyday industries.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5B645D]">
                Explore local businesses, services, professionals, and
                organisations across a growing range of categories.
              </p>
            </div>

            <div className="relative w-full lg:max-w-sm">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#748078]"
                size={19}
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search industries"
                className="w-full rounded-full border border-[#D8E2DA] bg-white py-3 pl-12 pr-5 outline-none focus:border-[#007A1F]"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredIndustries.map((industry) => (
              <article
                key={industry.title}
                className="overflow-hidden rounded-[28px] border border-[#E1E9E2] bg-white shadow-sm"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <h2 className="font-display text-2xl font-semibold text-[#151A16]">
                    {industry.title}
                  </h2>

                  <p className="mt-3 leading-7 text-[#657067]">
                    {industry.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {filteredIndustries.length === 0 && (
            <div className="mt-14 rounded-3xl bg-white p-10 text-center">
              <h2 className="font-display text-2xl font-semibold text-[#151A16]">
                No industries found
              </h2>
              <p className="mt-3 text-[#667068]">
                Try searching with a different word.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

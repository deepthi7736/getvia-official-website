import { Link } from "react-router-dom";

const posts = [
  {
    slug: "how-local-businesses-build-digital-trust",
    title: "How local businesses can build stronger digital trust",
    description:
      "Practical ways to present accurate information, improve visibility, and make customer contact easier.",
    category: "Business Growth",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "why-complete-business-profiles-matter",
    title: "Why complete business profiles matter",
    description:
      "A complete profile helps customers understand what a business offers before making contact.",
    category: "Business Guides",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "making-local-discovery-more-useful",
    title: "Making local discovery more useful",
    description:
      "How better categories, location information, and structured profiles improve discovery.",
    category: "Local Discovery",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1524666041070-9d87656c25bb?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F7FBF7] pt-28">
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#007A1F]">
            Getvia Blog
          </p>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight text-[#151A16] sm:text-5xl lg:text-6xl">
            Ideas, guides, and product stories for better local discovery.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5B645D]">
            Explore practical articles for businesses, professionals, and
            customers using the Getvia platform.
          </p>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-[28px] border border-[#E1E9E2] bg-white"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#007A1F]">
                    {post.category}
                  </p>

                  <h2 className="mt-3 font-display text-2xl font-semibold text-[#151A16]">
                    {post.title}
                  </h2>

                  <p className="mt-3 leading-7 text-[#657067]">
                    {post.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-[#79817B]">{post.date}</span>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="font-semibold text-[#007A1F]"
                    >
                      Read article
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

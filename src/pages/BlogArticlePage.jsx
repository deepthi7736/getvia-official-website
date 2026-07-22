import { Link, useParams } from "react-router-dom";

const articles = {
  "how-local-businesses-build-digital-trust": {
    title: "How local businesses can build stronger digital trust",
    category: "Business Growth",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
    introduction:
      "Customers often decide whether to contact a business based on the quality and clarity of the information they find online.",
  },
  "why-complete-business-profiles-matter": {
    title: "Why complete business profiles matter",
    category: "Business Guides",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    introduction:
      "A complete profile helps customers understand a business before they make a call, send a message, or plan a visit.",
  },
  "making-local-discovery-more-useful": {
    title: "Making local discovery more useful",
    category: "Local Discovery",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1524666041070-9d87656c25bb?auto=format&fit=crop&w=1600&q=80",
    introduction:
      "Useful local discovery depends on clear categories, accurate location details, and structured profile information.",
  },
};

export default function BlogArticlePage() {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return (
      <main className="min-h-screen bg-white px-5 pt-40 text-center">
        <h1 className="font-display text-4xl font-semibold text-[#151A16]">
          Article not found
        </h1>
        <Link
          to="/blog"
          className="mt-6 inline-flex rounded-full bg-[#007A1F] px-6 py-3 font-semibold text-white"
        >
          Back to blog
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-28">
      <article className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link to="/blog" className="font-semibold text-[#007A1F]">
            ← Back to blog
          </Link>

          <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-[#007A1F]">
            {article.category}
          </p>

          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#151A16] sm:text-5xl lg:text-6xl">
            {article.title}
          </h1>

          <p className="mt-5 text-sm text-[#7A837C]">{article.date}</p>

          <img
            src={article.image}
            alt={article.title}
            className="mt-10 h-[420px] w-full rounded-[30px] object-cover"
          />

          <div className="prose prose-lg mt-12 max-w-none prose-headings:font-display prose-headings:text-[#151A16] prose-p:text-[#59635B]">
            <p>{article.introduction}</p>

            <h2>Accurate information builds confidence</h2>
            <p>
              Customers need practical information such as services, contact
              details, opening hours, images, and location before they can make
              an informed decision.
            </p>

            <h2>Complete profiles reduce uncertainty</h2>
            <p>
              A well-structured profile gives customers a clear understanding
              of what the business offers and how to contact it.
            </p>

            <h2>Consistency matters</h2>
            <p>
              Businesses should keep their phone number, address, working
              hours, images, and service information updated across their
              digital presence.
            </p>

            <h2>Conclusion</h2>
            <p>
              Digital trust is built through clarity, accuracy, consistency,
              and useful communication—not through unsupported claims.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}

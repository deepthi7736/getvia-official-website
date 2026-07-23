import { motion } from "framer-motion";
import {
  ArrowRight,
  Cookie,
  Database,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "what-are-cookies",
    title: "1. What are cookies?",
    content: [
      "Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand how visitors use the website, and provide a smoother browsing experience.",
      "Cookies may be placed directly by Getvia or by trusted third-party services used to support website functionality, analytics, performance, and security.",
    ],
  },
  {
    id: "how-we-use-cookies",
    title: "2. How Getvia uses cookies",
    content: [
      "Getvia may use cookies and similar technologies to keep the website working correctly, remember user preferences, understand website performance, protect the platform from misuse, and improve our services.",
      "We do not use cookies to access files stored on your device or to collect information unrelated to your use of the Getvia website.",
    ],
  },
  {
    id: "essential-cookies",
    title: "3. Essential cookies",
    content: [
      "Essential cookies are required for core website functions. They may support navigation, session management, security, form submissions, authentication, and fraud prevention.",
      "Because these cookies are necessary for the website to operate, they cannot usually be disabled through our cookie controls.",
    ],
  },
  {
    id: "analytics-cookies",
    title: "4. Analytics and performance cookies",
    content: [
      "Analytics cookies help us understand how visitors interact with Getvia. They may collect information such as pages visited, time spent on the website, device type, browser type, and general usage patterns.",
      "The information collected is generally aggregated and used to improve website performance, content, navigation, and user experience.",
    ],
  },
  {
    id: "preference-cookies",
    title: "5. Preference cookies",
    content: [
      "Preference cookies allow the website to remember choices you make, such as language, region, interface preferences, or previously selected options.",
      "These cookies help provide a more personalised and convenient browsing experience.",
    ],
  },
  {
    id: "third-party-cookies",
    title: "6. Third-party cookies",
    content: [
      "Some features on Getvia may rely on third-party services such as analytics providers, maps, embedded content, customer support tools, or social media platforms.",
      "These providers may place their own cookies and process information according to their respective privacy and cookie policies. Getvia does not directly control all third-party cookies.",
    ],
  },
  {
    id: "cookie-duration",
    title: "7. Cookie duration",
    content: [
      "Session cookies are temporary and are removed when you close your browser.",
      "Persistent cookies remain on your device for a defined period or until you manually delete them. The duration depends on the purpose of the cookie and the service that placed it.",
    ],
  },
  {
    id: "managing-cookies",
    title: "8. Managing your cookie choices",
    content: [
      "Most browsers allow you to view, block, or delete cookies through their privacy or security settings.",
      "Disabling certain cookies may affect website functionality, prevent some features from working correctly, or require you to re-enter preferences.",
    ],
  },
  {
    id: "other-technologies",
    title: "9. Similar technologies",
    content: [
      "Getvia may also use technologies such as local storage, pixels, tags, scripts, and device identifiers. These technologies can perform functions similar to cookies and help support analytics, security, and website functionality.",
    ],
  },
  {
    id: "policy-updates",
    title: "10. Updates to this Cookie Policy",
    content: [
      "We may update this Cookie Policy when our practices, technologies, services, or legal requirements change.",
      "Any revised version will be published on this page with an updated effective date.",
    ],
  },
  {
    id: "contact",
    title: "11. Contact us",
    content: [
      "For questions about this Cookie Policy or how Getvia uses cookies, please contact the Getvia team through our contact page.",
    ],
  },
];

const cards = [
  {
    icon: ShieldCheck,
    title: "Essential",
    description:
      "Required for security, navigation, forms, sessions, and core website functions.",
  },
  {
    icon: Database,
    title: "Analytics",
    description:
      "Helps us understand website usage and improve performance and content.",
  },
  {
    icon: Settings,
    title: "Preferences",
    description:
      "Remembers selected settings and provides a more convenient experience.",
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#141414]">
      <section className="relative overflow-hidden border-b border-[#DCE5DD] bg-[#F3FBF4] pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="absolute right-[-140px] top-10 h-[380px] w-[380px] rounded-full bg-[#DDF4E1] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#CCE4D1] bg-white px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-[#007A1F]">
              <Cookie size={15} />
              Legal
            </div>

            <h1 className="font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Cookie Policy
            </h1>

            <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-[#646464]">
              This policy explains how Getvia uses cookies and similar
              technologies when you visit or interact with our website.
            </p>

            <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-[#858585]">
              Effective date: July 23, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#E2E8E3] bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3 lg:px-12">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border border-[#DCE5DD] bg-[#FAFCFA] p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E7F6EA] text-[#007A1F]">
                  <Icon size={21} />
                </div>

                <h2 className="mt-5 font-display text-2xl font-semibold">
                  {card.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-[#646464]">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[280px_1fr] lg:px-12">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#858585]">
              Contents
            </p>

            <nav className="mt-5 space-y-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm text-[#646464] transition-colors hover:text-[#007A1F]"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="max-w-3xl">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5 }}
                className={`scroll-mt-28 ${
                  index !== sections.length - 1
                    ? "border-b border-[#E2E8E3] pb-10"
                    : ""
                } ${index !== 0 ? "pt-10" : ""}`}
              >
                <h2 className="font-display text-3xl font-semibold tracking-tight">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-body leading-8 text-[#5F655F]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#DCE5DD] bg-[#F3FBF4] py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#007A1F]">
              Need help?
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold">
              Have a cookie or privacy question?
            </h2>

            <p className="mt-3 text-[#646464]">
              Contact the Getvia team for assistance.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#007A1F] px-6 py-3 font-medium text-white transition-colors hover:bg-[#006619]"
          >
            Contact Getvia
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

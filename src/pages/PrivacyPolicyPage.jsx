import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Database,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information we collect",
    content: [
      {
        subtitle: "Information you provide",
        text:
          "We may collect information that you voluntarily provide when you create an account, list a business, create a professional profile, contact support, request a demonstration, submit an enquiry, join a mailing list, or communicate with Getvia.",
      },
      {
        subtitle: "Business and professional information",
        text:
          "This may include business names, professional names, categories, descriptions, addresses, map locations, operating hours, photographs, service details, qualifications, social links, email addresses, and phone numbers.",
      },
      {
        subtitle: "Account information",
        text:
          "When account features are available, we may collect identifiers such as your name, email address, phone number, account role, authentication information, and account preferences.",
      },
      {
        subtitle: "Technical information",
        text:
          "We may automatically receive limited technical information such as IP address, browser type, device information, operating system, referring page, visited pages, interaction data, and approximate location.",
      },
      {
        subtitle: "Communications",
        text:
          "We may retain enquiries, support requests, partnership proposals, feedback, and other messages you send to us.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "2. How we use your information",
    content: [
      {
        text:
          "We may use information to provide and improve the Getvia website and platform, create and manage profiles, process enquiries, review business information, support verification workflows, communicate with users, respond to support requests, prevent misuse, maintain security, and comply with applicable legal obligations.",
      },
      {
        text:
          "We may also use aggregated or de-identified information to understand platform performance, improve user experience, and develop new features.",
      },
    ],
  },
  {
    id: "public-information",
    title: "3. Public business and professional information",
    content: [
      {
        text:
          "Getvia is designed to help people discover businesses and professionals. Information submitted for a public profile may therefore be displayed publicly, including the profile name, description, location, contact information, images, services, categories, business hours, and social links.",
      },
      {
        text:
          "You should only submit information that you are authorised to publish. Do not submit confidential personal information, private identification documents, passwords, financial account details, or information belonging to another person without appropriate authority.",
      },
    ],
  },
  {
    id: "legal-basis-and-consent",
    title: "4. Consent and lawful processing",
    content: [
      {
        text:
          "Where required, we process personal information with your consent, to provide a service you requested, to perform platform-related operations, to comply with legal obligations, or for legitimate purposes permitted by applicable law.",
      },
      {
        text:
          "You may withdraw consent for optional processing by contacting us. Withdrawal does not affect processing that was completed before the withdrawal or processing that is otherwise legally permitted.",
      },
    ],
  },
  {
    id: "sharing",
    title: "5. When we may share information",
    content: [
      {
        text:
          "We do not sell personal information as a standalone product.",
      },
      {
        text:
          "We may share necessary information with service providers that support website hosting, cloud infrastructure, authentication, database services, analytics, email delivery, customer support, mapping, security, and payment processing.",
      },
      {
        text:
          "We may also disclose information when required by law, court order, regulatory authority, legal process, fraud investigation, security requirement, or to protect Getvia, its users, or the public.",
      },
      {
        text:
          "If Getvia is involved in a merger, acquisition, restructuring, financing, or transfer of assets, information may be transferred as part of that transaction subject to applicable safeguards.",
      },
    ],
  },
  {
    id: "third-party-services",
    title: "6. Third-party services and links",
    content: [
      {
        text:
          "Getvia may use or link to third-party services such as maps, social networks, payment providers, analytics tools, cloud hosting, and external business websites.",
      },
      {
        text:
          "Third-party services operate under their own terms and privacy policies. Getvia is not responsible for the privacy practices, availability, accuracy, or security of websites and services that we do not control.",
      },
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies and similar technologies",
    content: [
      {
        text:
          "We may use cookies, local storage, and similar technologies to operate the website, remember preferences, maintain sessions, understand usage, improve performance, and protect the platform.",
      },
      {
        text:
          "Where legally required, non-essential cookies should be used only after appropriate consent. More information will be available in the Getvia Cookie Policy.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "8. Data retention",
    content: [
      {
        text:
          "We retain information only for as long as reasonably necessary for the purposes described in this policy, including providing services, maintaining records, resolving disputes, preventing fraud, enforcing agreements, and complying with legal obligations.",
      },
      {
        text:
          "Retention periods may differ depending on the type of information, account status, legal requirements, security needs, and the reason the information was collected.",
      },
    ],
  },
  {
    id: "security",
    title: "9. Data security",
    content: [
      {
        text:
          "We aim to use reasonable technical and organisational safeguards to protect information against unauthorised access, alteration, disclosure, misuse, loss, or destruction.",
      },
      {
        text:
          "No website, database, internet transmission, or storage system can be guaranteed to be completely secure. You are responsible for protecting your login details and notifying us if you suspect unauthorised account activity.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "10. Your choices and rights",
    content: [
      {
        text:
          "Depending on applicable law and the nature of your relationship with Getvia, you may be able to request access to personal information, correction of inaccurate information, deletion of information, withdrawal of consent, account closure, or assistance with a privacy concern.",
      },
      {
        text:
          "We may need to verify your identity or authority before processing a request. Certain information may be retained where required for legal, regulatory, fraud-prevention, security, or dispute-resolution purposes.",
      },
    ],
  },
  {
    id: "children",
    title: "11. Children’s privacy",
    content: [
      {
        text:
          "Getvia is not intended for children to independently create business or professional accounts. Minors should use the platform only under the supervision and authority of a parent, guardian, educational institution, or authorised adult where permitted.",
      },
      {
        text:
          "Do not knowingly submit a child’s personal information without the consent and authority required by applicable law.",
      },
    ],
  },
  {
    id: "international-transfers",
    title: "12. Storage and international transfers",
    content: [
      {
        text:
          "Information may be processed or stored using service providers and infrastructure located in India or other jurisdictions. Where required, Getvia will apply appropriate contractual, technical, and organisational safeguards.",
      },
    ],
  },
  {
    id: "updates",
    title: "13. Changes to this Privacy Policy",
    content: [
      {
        text:
          "We may update this Privacy Policy to reflect changes in the platform, technology, business operations, or legal requirements.",
      },
      {
        text:
          "The latest version will be published on this page with an updated effective date. Material changes may also be communicated through the website, account notice, or email where appropriate.",
      },
    ],
  },
  {
    id: "contact",
    title: "14. Privacy and grievance contact",
    content: [
      {
        text:
          "For privacy questions, correction requests, deletion requests, consent withdrawal, or grievances, contact the official Getvia privacy or grievance representative using the details below.",
      },
    ],
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative overflow-hidden border-b border-[#E5ECE6] bg-[#F7FAF7] pb-16 pt-32 sm:pt-36 lg:pb-20 lg:pt-44">
        <div className="absolute -right-24 top-12 h-80 w-80 rounded-full bg-[#DDF5E1] blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#F2F7D9] blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto max-w-4xl text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#007A1F] transition hover:gap-3"
            >
              <ArrowLeft size={17} />
              Back to home
            </Link>

            <div className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full border border-[#CFE4D3] bg-white px-4 py-2 text-sm font-semibold text-[#007A1F]">
              <ShieldCheck size={16} />
              Legal and privacy
            </div>

            <h1 className="mt-6 font-['Fraunces'] text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#172019] sm:text-5xl lg:text-7xl">
              Privacy Policy
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#59635B] sm:text-lg">
              This policy explains how Getvia may collect, use, store,
              share, and protect information when you use our website,
              platform, profiles, forms, and related services.
            </p>

            <p className="mt-5 text-sm font-medium text-[#768078]">
              Effective date: 22 July 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#E8EEE9] bg-white py-8">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
          {[
            {
              icon: Database,
              title: "Transparent collection",
              text: "Understand what information may be collected.",
            },
            {
              icon: UserCheck,
              title: "User choices",
              text: "Request assistance with your information.",
            },
            {
              icon: LockKeyhole,
              title: "Security safeguards",
              text: "Reasonable protections for platform information.",
            },
            {
              icon: Mail,
              title: "Privacy contact",
              text: "Contact Getvia regarding privacy concerns.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E1E8E2] bg-[#FAFCFA] p-5"
              >
                <Icon size={20} className="text-[#007A1F]" />

                <h2 className="mt-3 text-sm font-bold text-[#172019]">
                  {item.title}
                </h2>

                <p className="mt-2 text-xs leading-6 text-[#6B756D]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-12">
          <aside className="h-fit lg:sticky lg:top-28">
            <div className="rounded-[24px] border border-[#E1E8E2] bg-[#FAFCFA] p-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#007A1F]">
                On this page
              </p>

              <nav className="mt-5 max-h-[60vh] space-y-2 overflow-y-auto pr-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-lg px-3 py-2 text-sm leading-6 text-[#667068] transition hover:bg-white hover:text-[#007A1F]"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="min-w-0">
            <div className="mb-8 rounded-[24px] border border-[#F0DFA7] bg-[#FFF9E8] p-5 text-sm leading-7 text-[#715A14]">
              <strong>Important:</strong> Replace all placeholder
              business and contact information before publishing this
              policy. The final document should reflect Getvia’s actual
              data collection, service providers, retention periods,
              payment process, account features, and legal entity.
            </div>

            <div className="space-y-12">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 border-b border-[#EBEFEC] pb-10 last:border-none"
                >
                  <h2 className="font-['Fraunces'] text-2xl font-semibold text-[#172019] sm:text-3xl">
                    {section.title}
                  </h2>

                  <div className="mt-5 space-y-6">
                    {section.content.map((item, index) => (
                      <div key={`${section.id}-${index}`}>
                        {item.subtitle && (
                          <h3 className="mb-2 text-base font-bold text-[#2B362E]">
                            {item.subtitle}
                          </h3>
                        )}

                        <p className="text-sm leading-8 text-[#626D64] sm:text-base">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {section.id === "contact" && (
                    <div className="mt-7 rounded-[22px] border border-[#DCE5DD] bg-[#F7FAF7] p-6">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#007A1F]">
                            Privacy contact
                          </p>

                          <p className="mt-2 font-semibold text-[#172019]">
                            Getvia Privacy Team
                          </p>

                          <p className="mt-1 text-sm text-[#667068]">
                            privacy@getvia.in
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#007A1F]">
                            Grievance contact
                          </p>

                          <p className="mt-2 font-semibold text-[#172019]">
                            Add official officer name
                          </p>

                          <p className="mt-1 text-sm text-[#667068]">
                            grievance@getvia.in
                          </p>
                        </div>
                      </div>

                      <p className="mt-5 text-xs leading-6 text-[#7A847C]">
                        Replace these email addresses, the grievance
                        officer’s name, registered company name, postal
                        address, and response procedure with verified
                        official information.
                      </p>
                    </div>
                  )}
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#F7FAF7] py-14">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center sm:px-8 md:flex-row md:text-left lg:px-12">
          <div>
            <h2 className="font-['Fraunces'] text-2xl font-semibold text-[#172019]">
              Have a privacy question?
            </h2>

            <p className="mt-2 text-sm leading-7 text-[#667068]">
              Contact the Getvia team for help with a privacy request.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#007A1F] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#00661A]"
          >
            Contact Getvia
          </Link>
        </div>
      </section>
    </main>
  );
}

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowLeft,
  BadgeCheck,
  FileText,
  Scale,
  ShieldCheck,
} from "lucide-react";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of these terms",
    paragraphs: [
      "These Terms of Service govern your access to and use of the Getvia website, platform, business listings, professional profiles, forms, tools, communications, and related services.",
      "By accessing or using Getvia, creating an account, submitting a business or professional profile, contacting us through the platform, or using any Getvia feature, you agree to these terms and our Privacy Policy.",
      "If you do not agree to these terms, you should not access or use Getvia.",
    ],
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    paragraphs: [
      "You must have the legal capacity and authority required to use Getvia and enter into these terms.",
      "If you use Getvia on behalf of a company, organisation, business, or professional practice, you confirm that you are authorised to act for that entity and bind it to these terms.",
      "Minors should use Getvia only under the supervision and authority of a parent, guardian, educational institution, or authorised adult where legally permitted.",
    ],
  },
  {
    id: "platform-role",
    title: "3. Getvia’s role",
    paragraphs: [
      "Getvia is a discovery and information platform designed to help users find and learn about businesses, professionals, services, and local opportunities.",
      "Unless expressly stated otherwise, Getvia does not own, operate, manage, employ, or directly provide the products or services offered by businesses and professionals listed on the platform.",
      "A listing, badge, profile, search result, recommendation, ranking, or verification indicator does not constitute a guarantee, endorsement, warranty, certification, or representation that a business or professional will meet every user’s requirements.",
      "Users are responsible for performing their own checks before purchasing, booking, visiting, hiring, paying, or entering into an agreement with a listed business or professional.",
    ],
  },
  {
    id: "accounts",
    title: "4. Accounts and registration",
    paragraphs: [
      "Some Getvia features may require an account. You agree to provide accurate, complete, and current information during registration and to keep that information updated.",
      "You are responsible for maintaining the confidentiality of your login credentials and for activities performed through your account.",
      "You must notify Getvia promptly if you believe your account has been accessed without authorisation or if your credentials have been compromised.",
      "Getvia may refuse registration, require additional verification, restrict access, or suspend an account where reasonably necessary to protect users, maintain security, prevent misuse, or comply with legal obligations.",
    ],
  },
  {
    id: "listings",
    title: "5. Business and professional listings",
    paragraphs: [
      "When submitting or managing a business or professional listing, you confirm that you are authorised to publish and manage the submitted information.",
      "Listing information must be accurate, lawful, current, and not misleading. This may include names, descriptions, addresses, contact information, operating hours, images, services, qualifications, prices, offers, social links, and map locations.",
      "You must not submit confidential information, passwords, payment credentials, private identification documents, or personal information that you are not authorised to publish.",
      "Getvia may edit formatting, categorisation, spelling, image presentation, or technical display without materially changing the meaning of submitted information.",
      "Getvia may reject, remove, hide, correct, restrict, or request evidence for listings that appear inaccurate, unlawful, duplicated, fraudulent, misleading, unsafe, outdated, or inconsistent with platform standards.",
    ],
  },
  {
    id: "verification",
    title: "6. Verification and badges",
    paragraphs: [
      "Getvia may offer verification reviews, badges, status labels, or other trust indicators.",
      "Verification may be based on documents, contact checks, business information, public records, platform activity, or other criteria selected by Getvia.",
      "Verification reflects the information reviewed at a particular time. It does not guarantee the future conduct, service quality, financial condition, licensing status, safety, legality, or reliability of a listed party.",
      "Getvia may grant, deny, modify, suspend, or remove a badge when information changes, evidence expires, a complaint is received, or platform requirements are not met.",
      "Users must not copy, manipulate, misuse, or falsely display a Getvia badge or verification status.",
    ],
  },
  {
    id: "acceptable-use",
    title: "7. Acceptable use",
    paragraphs: [
      "You agree to use Getvia only for lawful purposes and in a manner that does not harm the platform, its users, businesses, professionals, service providers, or the public.",
    ],
    bullets: [
      "Submit false, deceptive, fraudulent, impersonating, or misleading information.",
      "Create fake reviews, fabricated enquiries, fraudulent listings, or unauthorised profiles.",
      "Harass, threaten, abuse, discriminate against, exploit, or unlawfully target another person.",
      "Upload malware, harmful scripts, malicious files, or code intended to disrupt the platform.",
      "Attempt to bypass security, access controls, rate limits, verification systems, or account restrictions.",
      "Scrape, harvest, copy, extract, or commercially reuse platform information without written permission.",
      "Use automated tools, bots, or crawlers in a manner that places an unreasonable load on Getvia.",
      "Publish content that infringes intellectual property, privacy, publicity, confidentiality, or contractual rights.",
      "Promote illegal products, unlawful services, fraud, scams, dangerous conduct, or prohibited transactions.",
      "Misrepresent an affiliation, partnership, approval, endorsement, or relationship with Getvia.",
    ],
  },
  {
    id: "content",
    title: "8. User-submitted content",
    paragraphs: [
      "You retain ownership of content you lawfully submit to Getvia, subject to the permissions granted in these terms.",
      "By submitting content, you grant Getvia a non-exclusive, worldwide, royalty-free licence to host, store, reproduce, adapt, format, display, distribute, and use that content as reasonably necessary to operate, promote, improve, and provide the platform.",
      "This licence continues while the content remains on Getvia and for a reasonable period afterward for backups, legal records, dispute handling, fraud prevention, and technical operations.",
      "You confirm that you own the submitted content or have all permissions required to provide it to Getvia.",
      "Getvia may remove or restrict content that violates these terms, applicable law, third-party rights, or platform standards.",
    ],
  },
  {
    id: "reviews",
    title: "9. Reviews, feedback, and communications",
    paragraphs: [
      "Reviews, ratings, testimonials, feedback, and comments must reflect genuine experiences and must not be manipulated, purchased, exchanged, or submitted for an improper purpose.",
      "Businesses and professionals must not threaten, reward, pressure, or mislead users to obtain favourable reviews or remove legitimate criticism.",
      "Getvia may moderate or remove content that appears fraudulent, abusive, irrelevant, unlawful, defamatory, promotional, copied, or unrelated to a genuine experience.",
      "Getvia does not guarantee that every review or communication is accurate and is not responsible for opinions expressed by users.",
    ],
  },
  {
    id: "payments",
    title: "10. Paid plans, payments, and subscriptions",
    paragraphs: [
      "Some Getvia services may be offered under paid plans, subscriptions, promotional packages, or one-time fees.",
      "Prices, billing periods, included features, taxes, renewal conditions, and cancellation terms should be shown before payment or stated in the applicable order, proposal, invoice, or plan description.",
      "Payments may be processed by third-party payment providers. Their services may be governed by separate terms and privacy policies.",
      "You agree to provide accurate billing information and authorise the applicable charges associated with the service you select.",
      "Getvia may change future pricing, plan features, or billing arrangements by providing reasonable notice where required. Changes will not normally affect charges already completed unless required by law or agreed with the user.",
      "Refund eligibility is governed by the applicable Refund and Cancellation Policy, order terms, and mandatory consumer rights.",
    ],
  },
  {
    id: "third-party-services",
    title: "11. Third-party services and links",
    paragraphs: [
      "Getvia may contain links to external websites, maps, social networks, payment providers, communication services, or other third-party platforms.",
      "Third-party services are controlled by their respective providers and may be subject to separate terms, fees, privacy policies, and availability conditions.",
      "Getvia is not responsible for third-party content, transactions, representations, security, availability, or performance.",
      "Accessing or using a third-party service is at your discretion and risk.",
    ],
  },
  {
    id: "intellectual-property",
    title: "12. Getvia intellectual property",
    paragraphs: [
      "The Getvia name, logo, visual identity, website design, software, source code, platform structure, graphics, databases, text, trademarks, and other materials created or owned by Getvia are protected by applicable intellectual-property laws.",
      "Except for the limited right to use the platform in accordance with these terms, no ownership rights are transferred to you.",
      "You must not copy, modify, sell, license, reverse engineer, reproduce, distribute, create derivative works from, or commercially exploit Getvia materials without prior written permission.",
    ],
  },
  {
    id: "availability",
    title: "13. Platform availability and changes",
    paragraphs: [
      "Getvia aims to provide a reliable platform, but continuous or error-free availability cannot be guaranteed.",
      "The platform may be changed, updated, suspended, restricted, or temporarily unavailable because of maintenance, security, technical failures, service-provider issues, legal requirements, or circumstances outside Getvia’s reasonable control.",
      "Getvia may add, remove, modify, or discontinue features where reasonably necessary.",
    ],
  },
  {
    id: "suspension",
    title: "14. Suspension and termination",
    paragraphs: [
      "You may stop using Getvia at any time and may request account closure where account features are available.",
      "Getvia may suspend, restrict, or terminate access where a user violates these terms, creates risk, engages in fraud, fails to pay applicable fees, misuses verification, infringes rights, or acts unlawfully.",
      "Getvia may preserve information where reasonably necessary for legal compliance, fraud prevention, security, accounting, dispute resolution, or enforcement.",
      "Provisions that by their nature should continue after termination will remain effective, including intellectual-property rights, payment obligations, disclaimers, limitations of liability, and dispute provisions.",
    ],
  },
  {
    id: "disclaimers",
    title: "15. Disclaimers",
    paragraphs: [
      "Getvia is provided on an “as available” and “as is” basis to the extent permitted by applicable law.",
      "Getvia does not guarantee that listings, profiles, reviews, contact details, qualifications, prices, availability, services, or other third-party information will always be accurate, complete, current, safe, or suitable.",
      "Getvia is not responsible for agreements, communications, services, purchases, payments, appointments, visits, losses, injuries, disputes, or other interactions between users and listed businesses or professionals.",
      "Nothing in these terms excludes warranties, guarantees, remedies, or consumer rights that cannot lawfully be excluded.",
    ],
  },
  {
    id: "liability",
    title: "16. Limitation of liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, Getvia and its directors, employees, contractors, affiliates, and service providers will not be liable for indirect, incidental, special, exemplary, punitive, or consequential losses arising from use of the platform.",
      "This may include loss of profits, revenue, business opportunities, reputation, goodwill, information, or expected savings.",
      "Nothing in these terms limits liability where limitation is prohibited by law, including liability that cannot legally be excluded or restricted.",
      "Any monetary liability cap should be reviewed and inserted by Getvia’s legal adviser after confirming the actual company structure, paid services, risks, and insurance arrangements.",
    ],
  },
  {
    id: "indemnity",
    title: "17. Responsibility for claims",
    paragraphs: [
      "To the extent permitted by law, you agree to be responsible for claims, losses, damages, costs, or expenses arising from your unlawful use of Getvia, your submitted content, your infringement of third-party rights, your business activities, or your violation of these terms.",
      "This provision should be interpreted only to the extent enforceable under applicable law.",
    ],
  },
  {
    id: "complaints",
    title: "18. Complaints and grievances",
    paragraphs: [
      "Users may report inaccurate listings, impersonation, rights violations, abusive content, suspected fraud, privacy concerns, or other platform issues through Getvia’s official contact or grievance channel.",
      "A complaint should include sufficient information to identify the relevant profile, listing, content, transaction, or account.",
      "Getvia may request additional information before investigating or taking action.",
    ],
  },
  {
    id: "governing-law",
    title: "19. Governing law and disputes",
    paragraphs: [
      "These terms are intended to be governed by the laws of India, subject to mandatory rights and protections available under applicable law.",
      "Before initiating formal proceedings, users and Getvia should attempt to resolve disputes through good-faith communication.",
      "The specific courts, city, jurisdiction, arbitration clause, and dispute-resolution procedure must be completed after confirming Getvia’s registered legal entity and principal place of business.",
    ],
  },
  {
    id: "changes",
    title: "20. Changes to these terms",
    paragraphs: [
      "Getvia may update these terms to reflect changes in the platform, services, business operations, technology, or legal requirements.",
      "The updated terms will be published on this page with a revised effective date.",
      "Where appropriate, material changes may also be communicated through the website, account notice, or email.",
      "Continued use of Getvia after updated terms become effective constitutes acceptance where permitted by applicable law.",
    ],
  },
  {
    id: "contact",
    title: "21. Contact information",
    paragraphs: [
      "Questions about these terms, complaints, legal notices, or account concerns should be sent using Getvia’s verified official contact details.",
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

export default function TermsOfServicePage() {
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
              <Scale size={16} />
              Legal information
            </div>

            <h1 className="mt-6 font-['Fraunces'] text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#172019] sm:text-5xl lg:text-7xl">
              Terms of Service
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#59635B] sm:text-lg">
              These terms explain the rules and responsibilities that
              apply when you access or use Getvia.
            </p>

            <p className="mt-5 text-sm font-medium text-[#768078]">
              Effective date: 23 July 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#E8EEE9] bg-white py-8">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
          {[
            {
              icon: FileText,
              title: "Clear platform rules",
              text: "Understand the conditions that apply when using Getvia.",
            },
            {
              icon: BadgeCheck,
              title: "Listing responsibilities",
              text: "Business and professional information must be accurate.",
            },
            {
              icon: ShieldCheck,
              title: "Safe and lawful use",
              text: "Misuse, fraud, impersonation, and harmful activity are prohibited.",
            },
            {
              icon: AlertTriangle,
              title: "Independent decisions",
              text: "Users should verify providers before completing transactions.",
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
              <strong>Important:</strong> This is a general website
              template. Before official publication, replace all
              placeholder details and have the document reviewed based
              on Getvia&apos;s registered entity, actual services,
              payment structure, refund process, jurisdiction, and
              business operations.
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

                  <div className="mt-5 space-y-5">
                    {section.paragraphs?.map((paragraph, index) => (
                      <p
                        key={`${section.id}-paragraph-${index}`}
                        className="text-sm leading-8 text-[#626D64] sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets && (
                      <div>
                        <p className="mb-3 text-sm font-bold text-[#2B362E] sm:text-base">
                          You must not:
                        </p>

                        <ul className="space-y-3">
                          {section.bullets.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-7 text-[#626D64] sm:text-base"
                            >
                              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#007A1F]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {section.id === "contact" && (
                    <div className="mt-7 rounded-[22px] border border-[#DCE5DD] bg-[#F7FAF7] p-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#007A1F]">
                            General contact
                          </p>

                          <p className="mt-2 font-semibold text-[#172019]">
                            Getvia Support Team
                          </p>

                          <p className="mt-1 text-sm text-[#667068]">
                            support@getvia.in
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#007A1F]">
                            Legal and grievance contact
                          </p>

                          <p className="mt-2 font-semibold text-[#172019]">
                            Add official representative name
                          </p>

                          <p className="mt-1 text-sm text-[#667068]">
                            grievance@getvia.in
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 border-t border-[#DCE5DD] pt-5">
                        <p className="text-sm font-semibold text-[#172019]">
                          Registered business details
                        </p>

                        <p className="mt-2 text-sm leading-7 text-[#667068]">
                          Add Getvia&apos;s official registered legal
                          entity name, registration details, postal
                          address, state, country, and applicable
                          jurisdiction.
                        </p>
                      </div>
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
              Have a question about these terms?
            </h2>

            <p className="mt-2 text-sm leading-7 text-[#667068]">
              Contact the Getvia team for clarification or assistance.
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

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeIndianRupee,
  CheckCircle2,
  Clock3,
  ReceiptText,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "scope",
    title: "1. Scope of this policy",
    content: [
      "This Refund and Cancellation Policy applies to eligible paid services, subscriptions, promotional packages, business listing plans, and other purchases made directly through Getvia.",
      "Different terms may apply where a service is provided under a separate written agreement, order form, promotional offer, or partner arrangement.",
    ],
  },
  {
    id: "subscriptions",
    title: "2. Subscription plans",
    content: [
      "Getvia may offer monthly, annual, or other recurring subscription plans. The applicable billing amount, billing period, included features, and renewal terms will be displayed before purchase.",
      "Subscription fees are generally charged in advance for the selected billing period.",
    ],
  },
  {
    id: "cancellations",
    title: "3. Cancelling a subscription",
    content: [
      "You may request cancellation of an eligible subscription before the next renewal date.",
      "Cancellation normally prevents future renewal charges. Unless otherwise stated, access to paid features may continue until the end of the current paid billing period.",
    ],
  },
  {
    id: "refund-eligibility",
    title: "4. Refund eligibility",
    content: [
      "Refund requests are reviewed individually and may be approved where a duplicate payment occurred, an incorrect amount was charged, a paid service was not activated because of a Getvia technical issue, or a refund is otherwise required by applicable law.",
      "Approval of a refund is not automatic and may depend on payment records, service usage, activation status, purchase date, and the reason for the request.",
    ],
  },
  {
    id: "non-refundable",
    title: "5. Non-refundable situations",
    content: [
      "Refunds may not be available for services already delivered, plans substantially used, completed promotional campaigns, verified listing services already processed, third-party charges, custom work, or requests submitted outside the eligible refund period.",
      "Refunds may also be refused where a service was suspended or terminated because of fraud, abuse, policy violations, unlawful activity, or inaccurate information supplied by the customer.",
    ],
  },
  {
    id: "refund-window",
    title: "6. Refund request period",
    content: [
      "Unless a different period is stated at the time of purchase, refund requests should be submitted within seven calendar days from the payment date.",
      "Submitting a request within this period does not guarantee approval. Each request remains subject to review.",
    ],
  },
  {
    id: "request-process",
    title: "7. How to request a refund",
    content: [
      "To request a refund, contact Getvia and provide your full name, registered email address, business name where applicable, payment date, transaction reference, purchased plan, and reason for the request.",
      "We may request additional information or supporting documents to verify the payment and assess eligibility.",
    ],
  },
  {
    id: "processing-time",
    title: "8. Processing time",
    content: [
      "Approved refunds will be initiated using the original payment method wherever possible.",
      "Although Getvia may process an approved refund promptly, the final credit may take additional business days depending on the bank, card issuer, payment gateway, or financial institution.",
    ],
  },
  {
    id: "failed-payments",
    title: "9. Failed or pending payments",
    content: [
      "A payment may appear pending, failed, or temporarily deducted because of payment gateway or banking delays.",
      "Where a failed transaction is automatically reversed, the time required for the amount to return is controlled by the relevant bank or payment provider.",
    ],
  },
  {
    id: "renewals",
    title: "10. Automatic renewals",
    content: [
      "Where automatic renewal is enabled, the applicable subscription fee may be charged at the beginning of each new billing period.",
      "Customers are responsible for cancelling before renewal where they do not wish to continue the plan.",
    ],
  },
  {
    id: "plan-changes",
    title: "11. Upgrades and downgrades",
    content: [
      "Plan upgrades may take effect immediately and may require payment of a price difference.",
      "Plan downgrades may take effect at the end of the current billing period unless otherwise stated. Unused differences are not automatically refundable.",
    ],
  },
  {
    id: "promotions",
    title: "12. Discounts and promotional offers",
    content: [
      "Discounted, promotional, trial, bundled, or limited-time purchases may have separate cancellation and refund conditions.",
      "Where special terms are displayed during purchase, those terms will apply in addition to this policy.",
    ],
  },
  {
    id: "third-party-services",
    title: "13. Third-party services",
    content: [
      "Payments made directly to third-party providers, advertisers, agencies, payment processors, or external service providers are governed by their own refund and cancellation policies.",
      "Getvia is not responsible for issuing refunds for payments that were not collected by Getvia.",
    ],
  },
  {
    id: "policy-changes",
    title: "14. Changes to this policy",
    content: [
      "Getvia may revise this Refund and Cancellation Policy to reflect changes in services, payment practices, business operations, or legal requirements.",
      "The updated policy will be published on this page with a revised effective date.",
    ],
  },
  {
    id: "contact",
    title: "15. Contact us",
    content: [
      "For cancellation, billing, payment, or refund assistance, contact Getvia through the official contact page.",
    ],
  },
];

const summaryCards = [
  {
    icon: Clock3,
    title: "Request promptly",
    description:
      "Submit eligible refund requests within seven calendar days unless different terms apply.",
  },
  {
    icon: ReceiptText,
    title: "Provide payment details",
    description:
      "Include your transaction reference, payment date, account email, and reason.",
  },
  {
    icon: ShieldCheck,
    title: "Reviewed individually",
    description:
      "Every request is assessed based on payment records, activation, and service usage.",
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#141414]">
      <section className="relative overflow-hidden border-b border-[#DCE5DD] bg-[#F3FBF4] pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="absolute right-[-140px] top-8 h-[400px] w-[400px] rounded-full bg-[#DCF3E0] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#CCE4D1] bg-white px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-[#007A1F]">
              <BadgeIndianRupee size={15} />
              Legal
            </div>

            <h1 className="font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Refund &amp; Cancellation Policy
            </h1>

            <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-[#646464]">
              This policy explains how Getvia handles subscription
              cancellations, refund requests, failed payments, and billing
              adjustments.
            </p>

            <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-[#858585]">
              Effective date: July 23, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#E2E8E3] py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3 lg:px-12">
          {summaryCards.map((card, index) => {
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

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:px-12">
          <div className="rounded-3xl border border-[#CFE6D4] bg-[#F2FBF4] p-7">
            <CheckCircle2 className="text-[#007A1F]" size={24} />

            <h2 className="mt-4 font-display text-2xl font-semibold">
              Refunds may be considered
            </h2>

            <p className="mt-3 leading-relaxed text-[#646464]">
              Examples include duplicate charges, incorrect amounts, eligible
              technical failures, or circumstances required by law.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E7DDDD] bg-[#FFF9F9] p-7">
            <XCircle className="text-red-600" size={24} />

            <h2 className="mt-4 font-display text-2xl font-semibold">
              Some payments are non-refundable
            </h2>

            <p className="mt-3 leading-relaxed text-[#646464]">
              This may include fully delivered services, substantially used
              plans, custom work, completed promotions, and third-party fees.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-8 md:pb-28">
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
              Billing support
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold">
              Need help with a payment?
            </h2>

            <p className="mt-3 text-[#646464]">
              Contact Getvia with your payment and transaction details.
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

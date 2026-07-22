import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Handshake,
  Network,
  Send,
  Sparkles,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22,
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const partnershipTypes = [
  {
    icon: Building2,
    title: "Business Partnerships",
    description:
      "Collaborate with Getvia to support local businesses, business communities, and industry networks.",
  },
  {
    icon: Network,
    title: "Technology Partnerships",
    description:
      "Explore integrations and technology collaborations that improve business discovery and platform experiences.",
  },
  {
    icon: Users,
    title: "Community Partnerships",
    description:
      "Work together on initiatives that help communities discover trusted businesses and professionals.",
  },
  {
    icon: Sparkles,
    title: "Strategic Partnerships",
    description:
      "Develop long-term collaborations aligned with Getvia's mission, audience, and platform goals.",
  },
];

const partnershipBenefits = [
  "Shared business growth opportunities",
  "Access to new customer communities",
  "Stronger digital visibility",
  "Collaborative campaigns and initiatives",
  "Technology and platform integration opportunities",
  "Long-term strategic relationships",
];

const initialForm = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  partnershipType: "Business Partnership",
  message: "",
};

export default function PartnersPage() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setIsSubmitted(false);

    await new Promise((resolve) => {
      setTimeout(resolve, 900);
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <main className="overflow-hidden bg-white">
      <section className="relative overflow-hidden border-b border-[#E8EEE9] bg-[#F7FAF7] pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
        <div className="absolute -right-20 top-12 h-80 w-80 rounded-full bg-[#DDF5E1] blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#F2F7D9] blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              variants={fadeUp}
              className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#CFE4D3] bg-white px-4 py-2 text-sm font-semibold text-[#007A1F]"
            >
              <Handshake size={16} />
              Partner with Getvia
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-['Fraunces'] text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#172019] sm:text-5xl lg:text-7xl"
            >
              Build stronger opportunities together
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#59635B] sm:text-lg"
            >
              We welcome partnerships with organizations, technology
              providers, communities, and teams that share our vision
              for better business discovery.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"
            >
              <a
                href="#partnership-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#007A1F] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#00661A]"
              >
                Start a conversation
                <ArrowRight size={17} />
              </a>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#C9D8CB] bg-white px-6 py-3.5 text-sm font-semibold text-[#243027] transition hover:border-[#9FC9A8] hover:text-[#007A1F]"
              >
                Learn about Getvia
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              Partnership opportunities
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-[#172019] sm:text-5xl">
              Different ways we can collaborate
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#667068]">
              We explore practical partnerships that create clear value
              for businesses, professionals, customers, and communities.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {partnershipTypes.map((partnership) => {
              const Icon = partnership.icon;

              return (
                <motion.article
                  key={partnership.title}
                  variants={fadeUp}
                  className="rounded-[28px] border border-[#E1E8E2] bg-white p-7 transition hover:-translate-y-1 hover:border-[#BAD6C0] hover:shadow-[0_20px_55px_rgba(20,58,29,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5EA] text-[#007A1F]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 font-['Fraunces'] text-2xl font-semibold text-[#172019]">
                    {partnership.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#667068]">
                    {partnership.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F7FAF7] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-12">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              Why partner with us
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-[#172019] sm:text-5xl">
              Create shared value through meaningful collaboration
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#626D64]">
              Every partnership should solve a real problem, improve an
              experience, or create a useful opportunity for the people
              we serve.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2"
          >
            {partnershipBenefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-2xl border border-[#DFE7E0] bg-white p-5"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-[#007A1F]"
                />

                <span className="font-semibold leading-7 text-[#2D3831]">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="partnership-form"
        className="scroll-mt-28 py-20 sm:py-24"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
              Partnership enquiry
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-[#172019] sm:text-5xl">
              Tell us how you would like to work together
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#626D64]">
              Share a short overview of your organization, partnership
              idea, and the value you believe the collaboration could
              create.
            </p>

            <div className="mt-8 rounded-[24px] bg-[#0D3418] p-6 text-white">
              <h3 className="text-lg font-bold">
                A useful partnership request includes
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#D4DFD6]">
                <li>• Your organization and area of work</li>
                <li>• The type of partnership you are proposing</li>
                <li>• The audience or problem it would support</li>
                <li>• The expected value for both parties</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="rounded-[30px] border border-[#E0E8E1] bg-white p-6 shadow-[0_24px_70px_rgba(20,58,29,0.09)] sm:p-8"
          >
            {isSubmitted ? (
              <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E7F5E9] text-[#007A1F]">
                  <CheckCircle2 size={30} />
                </div>

                <h2 className="mt-6 font-['Fraunces'] text-3xl font-semibold text-[#172019]">
                  Enquiry received
                </h2>

                <p className="mt-4 max-w-md leading-7 text-[#667068]">
                  Your partnership enquiry has been recorded in this
                  temporary front-end form.
                </p>

                <p className="mt-3 max-w-md text-sm leading-7 text-[#7A847C]">
                  Connect this form to Supabase or another backend
                  before using it for real submissions.
                </p>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 rounded-xl bg-[#007A1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#00661A]"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="partner-name"
                      className="mb-2 block text-sm font-semibold text-[#253029]"
                    >
                      Full name
                    </label>

                    <input
                      id="partner-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-[#DCE5DD] px-4 py-3.5 text-sm text-[#172019] outline-none transition placeholder:text-[#9AA29C] focus:border-[#007A1F] focus:ring-2 focus:ring-[#DDF1E1]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="partner-organization"
                      className="mb-2 block text-sm font-semibold text-[#253029]"
                    >
                      Organization
                    </label>

                    <input
                      id="partner-organization"
                      name="organization"
                      type="text"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Organization name"
                      className="w-full rounded-xl border border-[#DCE5DD] px-4 py-3.5 text-sm text-[#172019] outline-none transition placeholder:text-[#9AA29C] focus:border-[#007A1F] focus:ring-2 focus:ring-[#DDF1E1]"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="partner-email"
                      className="mb-2 block text-sm font-semibold text-[#253029]"
                    >
                      Email address
                    </label>

                    <input
                      id="partner-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-[#DCE5DD] px-4 py-3.5 text-sm text-[#172019] outline-none transition placeholder:text-[#9AA29C] focus:border-[#007A1F] focus:ring-2 focus:ring-[#DDF1E1]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="partner-phone"
                      className="mb-2 block text-sm font-semibold text-[#253029]"
                    >
                      Phone number
                    </label>

                    <input
                      id="partner-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-[#DCE5DD] px-4 py-3.5 text-sm text-[#172019] outline-none transition placeholder:text-[#9AA29C] focus:border-[#007A1F] focus:ring-2 focus:ring-[#DDF1E1]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="partnership-type"
                    className="mb-2 block text-sm font-semibold text-[#253029]"
                  >
                    Partnership type
                  </label>

                  <select
                    id="partnership-type"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#DCE5DD] bg-white px-4 py-3.5 text-sm text-[#172019] outline-none transition focus:border-[#007A1F] focus:ring-2 focus:ring-[#DDF1E1]"
                  >
                    <option>Business Partnership</option>
                    <option>Technology Partnership</option>
                    <option>Community Partnership</option>
                    <option>Strategic Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="partner-message"
                    className="mb-2 block text-sm font-semibold text-[#253029]"
                  >
                    Partnership proposal
                  </label>

                  <textarea
                    id="partner-message"
                    name="message"
                    required
                    rows="8"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your organization, partnership idea, and expected value"
                    className="w-full resize-none rounded-xl border border-[#DCE5DD] px-4 py-3.5 text-sm leading-7 text-[#172019] outline-none transition placeholder:text-[#9AA29C] focus:border-[#007A1F] focus:ring-2 focus:ring-[#DDF1E1]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#007A1F] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#00661A] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending enquiry
                    </>
                  ) : (
                    <>
                      Send partnership enquiry
                      <Send size={17} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-6 text-[#7A847C]">
                  This is currently a temporary front-end form and does
                  not store submissions.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Mail,
  MessageSquare,
  Phone,
  Send,
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

const initialForm = {
  name: "",
  email: "",
  phone: "",
  category: "General Support",
  subject: "",
  message: "",
};

export default function SupportPage() {
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
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#F1F7D9] blur-3xl" />

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
              <HelpCircle size={16} />
              Getvia Support
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-['Fraunces'] text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#172019] sm:text-5xl lg:text-7xl"
            >
              We’re here to help
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#59635B] sm:text-lg"
            >
              Tell us what you need help with and the Getvia support
              team will review your request.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
                Contact support
              </p>

              <h2 className="mt-4 font-['Fraunces'] text-3xl font-semibold tracking-[-0.02em] text-[#172019] sm:text-5xl">
                Get the right help for your issue
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#626D64]">
                Use the support form for account questions, business
                profile issues, verification, billing, or technical
                problems.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="mt-10 grid gap-5"
            >
              {[
                {
                  icon: MessageSquare,
                  title: "General support",
                  description:
                    "Questions about using Getvia, profiles, and platform features.",
                },
                {
                  icon: CheckCircle2,
                  title: "Verification assistance",
                  description:
                    "Help with pending, rejected, or incomplete verification.",
                },
                {
                  icon: Mail,
                  title: "Email support",
                  description:
                    "Use the form to send a detailed support request.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="rounded-[24px] border border-[#E1E8E2] bg-[#FAFCFA] p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F5EA] text-[#007A1F]">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-[#172019]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#667068]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 rounded-[24px] bg-[#0D3418] p-6 text-white"
            >
              <h3 className="text-lg font-bold">Before contacting us</h3>

              <p className="mt-3 text-sm leading-7 text-[#D4DFD6]">
                Check the Help Center first. You may find an immediate
                answer to common questions.
              </p>

              <Link
                to="/help-center"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:gap-3"
              >
                Visit Help Center
                <ArrowRight size={16} />
              </Link>
            </motion.div>
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
                  Request received
                </h2>

                <p className="mt-4 max-w-md leading-7 text-[#667068]">
                  Your support request has been recorded in this
                  temporary form interface.
                </p>

                <p className="mt-3 max-w-md text-sm leading-7 text-[#7A847C]">
                  Connect this form to Supabase, email, or another
                  backend before using it for real customer requests.
                </p>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 rounded-xl bg-[#007A1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#00661A]"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#007A1F]">
                    Support form
                  </p>

                  <h2 className="mt-3 font-['Fraunces'] text-3xl font-semibold text-[#172019]">
                    Tell us about your issue
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[#667068]">
                    Complete all required fields so the issue can be
                    understood clearly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="support-name"
                        className="mb-2 block text-sm font-semibold text-[#253029]"
                      >
                        Full name
                      </label>

                      <input
                        id="support-name"
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
                        htmlFor="support-email"
                        className="mb-2 block text-sm font-semibold text-[#253029]"
                      >
                        Email address
                      </label>

                      <input
                        id="support-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-[#DCE5DD] px-4 py-3.5 text-sm text-[#172019] outline-none transition placeholder:text-[#9AA29C] focus:border-[#007A1F] focus:ring-2 focus:ring-[#DDF1E1]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="support-phone"
                        className="mb-2 block text-sm font-semibold text-[#253029]"
                      >
                        Phone number
                      </label>

                      <div className="relative">
                        <Phone
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#89928B]"
                        />

                        <input
                          id="support-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter phone number"
                          className="w-full rounded-xl border border-[#DCE5DD] py-3.5 pl-11 pr-4 text-sm text-[#172019] outline-none transition placeholder:text-[#9AA29C] focus:border-[#007A1F] focus:ring-2 focus:ring-[#DDF1E1]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="support-category"
                        className="mb-2 block text-sm font-semibold text-[#253029]"
                      >
                        Support category
                      </label>

                      <select
                        id="support-category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#DCE5DD] bg-white px-4 py-3.5 text-sm text-[#172019] outline-none transition focus:border-[#007A1F] focus:ring-2 focus:ring-[#DDF1E1]"
                      >
                        <option>General Support</option>
                        <option>Business Profile</option>
                        <option>Professional Profile</option>
                        <option>Verification</option>
                        <option>Plans and Billing</option>
                        <option>Technical Issue</option>
                        <option>Privacy and Security</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="support-subject"
                      className="mb-2 block text-sm font-semibold text-[#253029]"
                    >
                      Subject
                    </label>

                    <input
                      id="support-subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Briefly describe your issue"
                      className="w-full rounded-xl border border-[#DCE5DD] px-4 py-3.5 text-sm text-[#172019] outline-none transition placeholder:text-[#9AA29C] focus:border-[#007A1F] focus:ring-2 focus:ring-[#DDF1E1]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="support-message"
                      className="mb-2 block text-sm font-semibold text-[#253029]"
                    >
                      Message
                    </label>

                    <textarea
                      id="support-message"
                      name="message"
                      required
                      rows="7"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Explain what happened, what you expected, and any error message you saw"
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
                        Sending request
                      </>
                    ) : (
                      <>
                        Send support request
                        <Send size={17} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs leading-6 text-[#7A847C]">
                    This form currently uses a temporary front-end
                    submission. Connect it to your backend before
                    publishing it as an active support channel.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

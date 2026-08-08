import { motion } from "framer-motion";
import PageHero from "../components/layout/PageHero";

const WORKFLOWS = [
  {
    tag: "Customers",
    color: "#007A1F",
    steps: [
      "Search",
      "Explore",
      "Compare",
      "Contact",
      "Visit or enquire",
    ],
  },
  {
    tag: "Businesses",
    color: "#006619",
    steps: [
      "Register",
      "Submit details",
      "Create profile",
      "Verify information",
      "Publish",
      "Receive enquiries",
      "Manage profile",
    ],
  },
  {
    tag: "Professionals",
    color: "#25A43A",
    steps: [
      "Create profile",
      "Add services",
      "Upload portfolio",
      "Add contact info",
      "Receive enquiries",
    ],
  },
];

function WorkflowBlock({ workflow, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="rounded-3xl border border-[#E1E5E1] bg-white p-6 shadow-[0_16px_50px_rgba(20,60,30,0.05)] sm:p-8 lg:p-10"
    >
      <span
        className="inline-flex rounded-full px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-white"
        style={{
          backgroundColor: workflow.color,
        }}
      >
        {workflow.tag}
      </span>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {workflow.steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-2 rounded-xl border border-[#DDE5DE] bg-[#F3FBF4] px-4 py-2.5">
              <span className="font-mono text-xs text-[#858585]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-sm font-medium text-[#141414]">
                {step}
              </span>
            </div>

            {index < workflow.steps.length - 1 && (
              <span
                aria-hidden="true"
                className="text-[#B8C3BA]"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="How it works"
        title="From discovery to connection, made simple."
        description="See how customers, businesses, and professionals use Getvia to discover, connect, and grow."
      />

      <section className="bg-[#F3FBF4] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl space-y-8 px-6 lg:px-12">
          {WORKFLOWS.map((workflow, index) => (
            <WorkflowBlock
              key={workflow.tag}
              workflow={workflow}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

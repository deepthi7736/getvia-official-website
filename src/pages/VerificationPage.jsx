import {
  BadgeCheck,
  FileCheck2,
  PhoneCall,
  MapPinCheck,
  ShieldCheck,
  Flag,
} from "lucide-react";

const steps = [
  {
    icon: FileCheck2,
    title: "Information review",
    description:
      "Submitted business or professional information can be reviewed for completeness and consistency.",
  },
  {
    icon: PhoneCall,
    title: "Contact review",
    description:
      "Phone, email, and other contact details may be checked when verification is required.",
  },
  {
    icon: MapPinCheck,
    title: "Location accuracy",
    description:
      "Business location information can be reviewed to improve profile usefulness.",
  },
  {
    icon: BadgeCheck,
    title: "Verification indicator",
    description:
      "Eligible profiles may receive a visible verification indicator after review.",
  },
  {
    icon: Flag,
    title: "User reporting",
    description:
      "Users should be able to report incorrect, outdated, or misleading information.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible moderation",
    description:
      "Profile quality and trust are supported through review and moderation practices.",
  },
];

export default function VerificationPage() {
  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="bg-[#073D1A] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/70">
            Verification and Trust
          </p>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Better information creates more confident connections.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Getvia aims to improve the quality and usefulness of profile
            information through structured review and responsible moderation.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-[26px] border border-[#E2EAE3] p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F6EA] text-[#007A1F]">
                <Icon size={22} />
              </div>
              <h2 className="mt-5 font-display text-2xl font-semibold text-[#151A16]">
                {title}
              </h2>
              <p className="mt-3 leading-7 text-[#667068]">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

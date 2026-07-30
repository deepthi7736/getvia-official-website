import { ArrowRight } from "lucide-react";

import discoverImage from "../assets/discover.png";
import exploreImage from "../assets/explore.png";
import connectImage from "../assets/connect.png";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    body:
      "Search by what you need and find verified local businesses and professionals near you.",
    img: discoverImage,
    alt: "Customer discovering trusted local businesses through Getvia",
  },
  {
    number: "02",
    title: "Explore",
    body:
      "Compare services, photos, reviews, ratings, locations, and verified business details in one place.",
    img: exploreImage,
    alt: "Customer exploring business profiles, services, reviews, and verified information on Getvia",
  },
  {
    number: "03",
    title: "Connect",
    body:
      "Call, message, get directions, or send an enquiry directly to the right business or professional.",
    img: connectImage,
    alt: "Customer connecting directly with a trusted local business through Getvia",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="bg-[#F3FBF4] py-12 md:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-white px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#007A1F]">
            How it works
          </span>

          <h2 className="mt-4 font-body text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#141414] lg:text-5xl">
            Three steps. No guesswork.
          </h2>

          <p className="mt-4 max-w-xl text-base leading-8 text-[#646464]">
            Discover the right business, explore everything you need to know,
            and connect directly without unnecessary steps.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="group flex h-full flex-col rounded-3xl border border-[#DDE5DE] bg-white p-6 shadow-[0_16px_50px_rgba(20,60,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C5DCC9] hover:shadow-[0_22px_60px_rgba(0,122,31,0.1)] md:p-8">
                <div className="overflow-hidden rounded-2xl bg-[#F7FAF7]">
                  <img
                    src={step.img}
                    alt={step.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <span className="mt-5 block font-mono text-xs tracking-wider text-[#858585]">
                    STEP {step.number}
                  </span>

                  <h3 className="mt-2 font-body text-2xl font-semibold tracking-[-0.02em] text-[#141414]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#646464]">
                    {step.body}
                  </p>
                </div>
              </div>

              {index < STEPS.length - 1 && (
                <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DDE5DE] bg-white text-[#007A1F] shadow-sm">
                    <ArrowRight size={16} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Hero from "../components/Hero";
import About from "../components/About";
import WhatWeDo from "../components/WhatWeDo";
import Features from "../components/Features";
import Ecosystem from "../components/Ecosystem";
import PlatformBusiness from "../components/PlatformBusiness";
import Technology from "../components/Technology";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import SectionDivider from "../components/SectionDivider";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider from="tint" to="white" />
      <About />
      <SectionDivider from="white" to="tint" />
      <WhatWeDo />
      <SectionDivider from="tint" to="white" />
      <Features />
      <Ecosystem />
      <PlatformBusiness />
      <SectionDivider from="white" to="tint" />
      <Technology />
      <SectionDivider from="tint" to="white" />
      <Testimonials />
      <SectionDivider from="white" to="tint" />
      <FAQ />
      <SectionDivider from="tint" to="white" />
      <Contact />
    </main>
  );
}

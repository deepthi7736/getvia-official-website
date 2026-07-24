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

export default function Home({ onBookDemo }) {
  return (
    <main>
      <Hero onBookDemo={onBookDemo} />
      <About />
      <WhatWeDo />
      <Features />
      <Ecosystem />
      <PlatformBusiness />
      <Technology />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}

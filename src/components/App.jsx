import ScrollProgress from "./ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import Features from "./components/Features";
import Ecosystem from "./components/Ecosystem";
import PlatformBusiness from "./components/PlatformBusiness";
import Technology from "./components/Technology";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Features />
        <Ecosystem />
        <PlatformBusiness />
        <Technology />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

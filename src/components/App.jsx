import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import WhatWeDo from "./WhatWeDo";
import Ecosystem from "./Ecosystem";
import Features from "./Features";
import Technology from "./Technology";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";

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
        <Technology />
        <Stats />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

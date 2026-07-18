import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MissionValues from "./components/MissionValues";
import WhatWeDo from "./components/WhatWeDo";
import Features from "./components/Features";
import Ecosystem from "./components/Ecosystem";
import PlatformBusiness from "./components/PlatformBusiness";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Technology from "./components/Technology";
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
        <MissionValues />
        <WhatWeDo />
        <Features />
        <Ecosystem />
        <PlatformBusiness />
        <Stats />
        <Testimonials />
        <Technology />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

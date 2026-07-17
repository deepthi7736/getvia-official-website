import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Ecosystem from "./components/Ecosystem";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Ecosystem />
        <Features />
      </main>

      <Footer />
    </>
  );
}

export default App;

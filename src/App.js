import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column bg-light bg-gradient"
      id="Hero"
    >
      <Navbar />
      <Hero />
      <hr class="my-5" id="About" />
      <main className="mt-5">
        <div className="container">
          <About />
          <hr class="my-5" id="Projects" />
          <Projects />
          <hr class="my-5" />
          <CTA />
          <hr class="my-5" />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;

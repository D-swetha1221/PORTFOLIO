import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Internships from "./Components/Internships";
import Certifications from "./Components/Certifications";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="scroll-smooth bg-black text-white font-sans text-base leading-relaxed">
      <Navbar />

      <main className="pt-4">
        <section id="home" className="mb-0">
          <Hero />
        </section>

        <section id="about" className="mb-0">
          <About />
        </section>

        <section id="skills" className="mb-4 -mt-40 ">
          <Skills />
        </section>

        <section id="projects" className="mb-2 -mt-20 ">
          <Projects />
        </section>

        <section id="internships" className="mb-2">
          <Internships />
        </section>

        <section id="certifications" className="mb-24">
          <Certifications />
        </section>

        <section id="contact" className="mb-0">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;

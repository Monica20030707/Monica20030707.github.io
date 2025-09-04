import Navbar from "./layout/Navbar";
import { Hero } from "./layout/Hero";
import { About } from "./layout/About";
import { Skills } from "./layout/Skills";
import { Projects } from "./layout/Projects";
import { Contact } from "./layout/Contact";
import Footer from './layout/Footer';

import './assets/styles/App.css';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
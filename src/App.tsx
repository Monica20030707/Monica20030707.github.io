import { Navbar } from "./layout/Navbar";
import { Hero } from "./layout/Hero";
import { About } from "./layout/About";
import { Skills } from "./layout/Skills";
import { Work } from "./layout/Work";
import { Contact } from "./layout/Contact";

import "./assets/styles/App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-sans">
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

        <section id="work">
          <Work />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

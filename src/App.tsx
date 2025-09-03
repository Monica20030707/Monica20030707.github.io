import Navigation from "./layout/Navigation";
import { Hero } from "./layout/Hero";
import { About } from "./layout/About";
import { Skills } from "./layout/Skills";
import { Projects } from "./layout/Projects";
import { Contact } from "./layout/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
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
      <footer className="bg-[#150016] border-t border-[#522C5D] py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 Sarah Chen. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
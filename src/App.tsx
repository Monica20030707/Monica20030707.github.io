import { Navbar } from "./layout/Navbar";
import { Hero } from "./layout/Hero";
import { About } from "./layout/About";
import { Skills } from "./layout/Skills";
import { Projects } from "./layout/Projects";
import { Contact } from "./layout/Contact";

import './assets/styles/App.css';

export default function App() {
  return (
    <div className="min-h-screen font-montserrat relative overflow-hidden">
      {/* Dynamic Background with Multiple Gradient Layers */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-darkMaroon via-deepPurple via-plum to-wine opacity-90" />
        
        {/* Animated gradient waves */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-transparent to-deep-purple/60 transform -skew-y-12 origin-top-left animate-pulse" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-black/70 via-transparent to-wine/40 transform skew-y-12 origin-bottom-right animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Radial gradient in center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-radial from-beige/5 via-transparent to-transparent animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blush/10 to-beige/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-wine/15 to-plum/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-deepPurple/20 to-darkMaroon/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Fixed Navigation */}
      <div className="relative z-50">
        <Navbar />
      </div>
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>
        
        {/* About Section */}
        <section id="about">
          <About />
        </section>
        
        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>
        
        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>
        
        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
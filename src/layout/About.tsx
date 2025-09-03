import { useScrollAnimation } from "../utils/useScrollAnimation";
import { useState, useEffect } from "react";

export function About() {
  const { scrollY, isVisible, elementRef } = useScrollAnimation();
  const [counters, setCounters] = useState({ projects: 0, years: 0, clients: 0 });

  // Animated counter effect when visible
  useEffect(() => {
    if (isVisible) {
      const animateCounter = (target: number, key: 'projects' | 'years' | 'clients', duration: number = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 16);
      };

      // Staggered counter animations
      setTimeout(() => animateCounter(50, 'projects'), 300);
      setTimeout(() => animateCounter(5, 'years'), 600);
      setTimeout(() => animateCounter(20, 'clients'), 900);
    }
  }, [isVisible]);

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-20 bg-gradient-to-b from-[#845162] to-[#150016] relative overflow-hidden"
    >
      {/* Enhanced background with scroll-based parallax */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`
        }}
      >
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#E3B6B1] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FFE3DC] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced header with scroll animation */}
          <div
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 800) * 0.1)}px)`,
              opacity: Math.max(0.3, 1 - Math.max(0, scrollY - 800) * 0.002)
            }}
          >
            <h2 
              className="text-4xl lg:text-5xl font-bold text-white mb-8 animate-fade-in"
              style={{ animationDelay: isVisible ? '0.2s' : '0s' }}
            >
              About Me
            </h2>
            <div 
              className="w-24 h-1 bg-gradient-to-r from-[#E3B6B1] to-[#FFE3DC] mx-auto mb-12 animate-scale-in"
              style={{ animationDelay: isVisible ? '0.4s' : '0s' }}
            />
          </div>
          
          {/* Enhanced content with staggered animations */}
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p 
              className="animate-fade-in hover:text-white transition-colors duration-300"
              style={{ animationDelay: isVisible ? '0.6s' : '0s' }}
            >
              I'm a passionate full stack developer with 5+ years of experience building 
              scalable web applications. My journey started with a curiosity about how 
              websites work, and it has evolved into a love for creating digital experiences 
              that make a difference.
            </p>
            <p 
              className="animate-fade-in hover:text-white transition-colors duration-300"
              style={{ animationDelay: isVisible ? '0.8s' : '0s' }}
            >
              I specialize in modern JavaScript frameworks, cloud technologies, and 
              database design. When I'm not coding, you'll find me exploring new 
              technologies, contributing to open source projects, or mentoring aspiring 
              developers in my community.
            </p>
            <p 
              className="animate-fade-in hover:text-white transition-colors duration-300"
              style={{ animationDelay: isVisible ? '1s' : '0s' }}
            >
              I believe in writing clean, maintainable code and creating applications 
              that are not only functional but also delightful to use. Let's build 
              something amazing together!
            </p>
          </div>
          
          {/* Enhanced animated stats */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 1200) * 0.05)}px)`
            }}
          >
            <div 
              className="text-center group cursor-pointer animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: isVisible ? '1.2s' : '0s' }}
            >
              <div className="relative">
                <div className="text-4xl font-bold text-[#E3B6B1] mb-2 group-hover:text-[#FFE3DC] transition-colors">
                  {counters.projects}+
                </div>
                <div className="absolute inset-0 bg-[#E3B6B1] opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-opacity" />
              </div>
              <div className="text-gray-300 group-hover:text-white transition-colors">Projects Completed</div>
            </div>
            
            <div 
              className="text-center group cursor-pointer animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: isVisible ? '1.4s' : '0s' }}
            >
              <div className="relative">
                <div className="text-4xl font-bold text-[#E3B6B1] mb-2 group-hover:text-[#FFE3DC] transition-colors">
                  {counters.years}+
                </div>
                <div className="absolute inset-0 bg-[#E3B6B1] opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-opacity" />
              </div>
              <div className="text-gray-300 group-hover:text-white transition-colors">Years Experience</div>
            </div>
            
            <div 
              className="text-center group cursor-pointer animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: isVisible ? '1.6s' : '0s' }}
            >
              <div className="relative">
                <div className="text-4xl font-bold text-[#E3B6B1] mb-2 group-hover:text-[#FFE3DC] transition-colors">
                  {counters.clients}+
                </div>
                <div className="absolute inset-0 bg-[#E3B6B1] opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-opacity" />
              </div>
              <div className="text-gray-300 group-hover:text-white transition-colors">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
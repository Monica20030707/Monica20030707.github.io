import { Button } from "../components/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { useScrollAnimation, useParallax } from "../utils/useScrollAnimation";
import { useEffect, useState } from "react";

export function Hero() {
  const { scrollY, isVisible, elementRef } = useScrollAnimation();
  const parallaxOffset = useParallax(0.3);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCTAClick = (action: string) => {
    if (action === 'work') {
      const projectsSection = document.querySelector('#projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action === 'contact') {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Enhanced gradient background with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#150016] via-[#29104A] via-[#522C5D] to-[#845162]"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs with mouse interaction */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-[#E3B6B1] opacity-10 rounded-full blur-xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 10}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-[#FFE3DC] opacity-15 rounded-full blur-xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * 15}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#522C5D] opacity-20 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * -20}px)`,
            transition: 'transform 0.7s ease-out',
            animationDelay: '2s'
          }}
        />
      </div>
      
      {/* Content with enhanced animations */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Text content with staggered animations */}
        <div 
          className="flex-1 text-white space-y-6 sm:space-y-8 lg:pr-12 text-center lg:text-left"
          style={{
            transform: `translateY(${Math.max(0, scrollY * 0.1)}px)`,
            opacity: Math.max(0.3, 1 - scrollY * 0.001)
          }}
        >
          <div className="space-y-3 sm:space-y-4">
            <div 
              className="inline-block animate-fade-in"
              style={{
                animationDelay: isVisible ? '0.2s' : '0s'
              }}
            >
              <span className="bg-gradient-to-r from-[#E3B6B1] to-[#FFE3DC] bg-clip-text text-transparent font-medium text-lg sm:text-xl">
                Hello, I'm
              </span>
            </div>
            <h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight animate-slide-up"
              style={{
                animationDelay: isVisible ? '0.4s' : '0s'
              }}
            >
              Sarah Chen
            </h1>
            <h2 
              className="text-xl sm:text-2xl lg:text-3xl text-[#E3B6B1] font-medium animate-slide-up"
              style={{
                animationDelay: isVisible ? '0.6s' : '0s'
              }}
            >
              Full Stack Developer
            </h2>
          </div>
          
          <p 
            className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0 animate-fade-in"
            style={{
              animationDelay: isVisible ? '0.8s' : '0s'
            }}
          >
            I create beautiful, functional web applications using modern technologies. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
          
          {/* CTA Buttons with enhanced animations */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
            style={{
              animationDelay: isVisible ? '1s' : '0s'
            }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#E3B6B1] to-[#FFE3DC] text-[#150016] hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E3B6B1]/25"
              onClick={() => handleCTAClick('work')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#E3B6B1] text-[#E3B6B1] hover:bg-[#E3B6B1] hover:text-[#150016] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E3B6B1]/25"
              onClick={() => handleCTAClick('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links with staggered hover effects */}
          <div 
            className="flex space-x-6 pt-6 sm:pt-8 justify-center lg:justify-start animate-fade-in"
            style={{
              animationDelay: isVisible ? '1.2s' : '0s'
            }}
          >
            {[
              { href: "https://github.com", icon: Github, label: "GitHub Profile" },
              { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn Profile" },
              { href: "mailto:sarah.chen @email.com", icon: Mail, label: "Email Contact" }
            ].map((social, index) => (
              <a 
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className="text-[#E3B6B1] hover:text-[#FFE3DC] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label={social.label}
                style={{
                  animationDelay: `${1.4 + index * 0.1}s`
                }}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
        
        {/* Profile image with enhanced effects */}
        <div 
          className="flex-1 lg:flex lg:justify-center mt-8 sm:mt-12 lg:mt-0"
          style={{
            transform: `translateY(${scrollY * 0.05}px) translateX(${mousePosition.x * 5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <div className="relative group">
            <div 
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#E3B6B1] shadow-2xl mx-auto transition-all duration-500 group-hover:scale-105 group-hover:shadow-[#E3B6B1]/50 animate-float"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1712174766230-cb7304feaafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NTIxODA5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sarah Chen - Full Stack Developer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Enhanced gradient glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E3B6B1] to-[#FFE3DC] opacity-20 blur-xl -z-10 group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Animated ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-[#E3B6B1] opacity-0 group-hover:opacity-60 animate-ping -z-5" />
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-[#E3B6B1] animate-bounce hover:scale-110 transition-transform cursor-pointer"
        style={{
          opacity: Math.max(0, 1 - scrollY * 0.005)
        }}
      >
        <button 
          onClick={() => {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          aria-label="Scroll to About section"
          className="p-2 rounded-full hover:bg-[#E3B6B1]/10 transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
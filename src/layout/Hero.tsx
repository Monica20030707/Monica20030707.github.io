import { Button } from "../components/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { useScrollAnimation } from "../utils/useScrollAnimation";
import { useEffect, useState } from "react";

/**
 * Hero Section Component
 * 
 * Features:
 * - Full screen hero with gradient background using custom color palette
 * - Profile image without rag effect (clean circular border)
 * - Mouse interaction effects for floating elements
 * - Smooth scroll animations
 * - Custom fonts: content in Montserrat, name could be in Tinos
 * - Parallax and scroll-based effects
 * - Social media links with hover animations
 */
export function Hero() {
  const { scrollY, isVisible, elementRef } = useScrollAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement for interactive background elements
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

  // Handle CTA button clicks with smooth scrolling
  const handleCTAClick = (action: string) => {
    if (action === 'work') {
      const projectsSection = document.querySelector('#work');
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
      {/* Subtle overlay for hero section */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-deepPurple/30"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      
      {/* Interactive floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-blush opacity-10 rounded-full blur-xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 10}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-beige opacity-15 rounded-full blur-xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * 15}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-wine opacity-20 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * -20}px)`,
            transition: 'transform 0.7s ease-out',
            animationDelay: '2s'
          }}
        />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Text content */}
        <div 
          className="flex-1 text-beige space-y-6 sm:space-y-8 lg:pr-12 text-center lg:text-left"
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
              <span className="bg-gradient-to-r from-blush to-beige bg-clip-text text-transparent font-medium text-lg sm:text-xl font-montserrat">
                Hello <span role="img" aria-label="waving hand">&#x1F44B;</span>, I'm
              </span>
            </div>
            <h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight animate-slide-up font-tinos"
              style={{
                animationDelay: isVisible ? '0.4s' : '0s'
              }}
            >
              Monica Nguyen
            </h1>
            <h2 
              className="text-xl sm:text-2xl lg:text-3xl text-blush font-medium animate-slide-up font-montserrat"
              style={{
                animationDelay: isVisible ? '0.6s' : '0s'
              }}
            >
              Associate Full Stack Engineer
            </h2>
            <div 
              className="flex items-center justify-center lg:justify-start gap-2 text-beige/70 animate-fade-in font-montserrat"
              style={{
                animationDelay: isVisible ? '0.7s' : '0s'
              }}
            >
              <span role="img" aria-label="location pin">&#x1F4CD;</span>
              <span className="text-base sm:text-lg">Seattle, Washington</span>
            </div>
          </div>
          
          <p 
            className="text-lg sm:text-xl text-beige/80 max-w-2xl leading-relaxed mx-auto lg:mx-0 animate-fade-in font-montserrat"
            style={{
              animationDelay: isVisible ? '0.8s' : '0s'
            }}
          >
            I create beautiful, functional web applications using modern technologies. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
            style={{
              animationDelay: isVisible ? '1s' : '0s'
            }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blush to-beige text-darkMaroon hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blush/25 font-montserrat"
              onClick={() => handleCTAClick('work')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blush text-blush hover:bg-blush hover:text-darkMaroon transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blush/25 font-montserrat"
              onClick={() => handleCTAClick('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div 
            className="flex space-x-6 pt-6 sm:pt-8 justify-center lg:justify-start animate-fade-in"
            style={{
              animationDelay: isVisible ? '1.2s' : '0s'
            }}
          >
            {[
              { href: "https://github.com/Monica20030707", icon: Github, label: "GitHub Profile" },
              { href: "https://www.linkedin.com/in/thuy-nguyen-46505121b/", icon: Linkedin, label: "LinkedIn Profile" },
              { href: "mailto:thuybohr@gmail.com", icon: Mail, label: "Email Contact" }
            ].map((social, index) => (
              <a 
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className="text-blush hover:text-beige transition-all duration-300 hover:scale-110 hover:-translate-y-1"
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
        
        {/* Profile image - Clean circular design without rag effect */}
        <div 
          className="flex-1 lg:flex lg:justify-center mt-8 sm:mt-12 lg:mt-0"
          style={{
            transform: `translateY(${scrollY * 0.05}px) translateX(${mousePosition.x * 5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <div className="relative group">
            {/* Clean circular profile image */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blush shadow-2xl mx-auto transition-all duration-500 group-hover:scale-105 group-hover:shadow-blush/50 animate-float">
              <ImageWithFallback 
                src="/monica_avatar.png"
                alt="Monica Nguyen - Software Engineering Student"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blush to-beige opacity-20 blur-xl -z-10 group-hover:opacity-40 transition-opacity duration-500" />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-blush animate-bounce hover:scale-110 transition-transform cursor-pointer"
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
          className="p-2 rounded-full hover:bg-blush/10 transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
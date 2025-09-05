import { Code, Coffee } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { useScrollAnimation } from "../utils/useScrollAnimation";
import { useEffect, useState } from "react";

export function Skills() {
  const { scrollY, isVisible, elementRef } = useScrollAnimation();
  const [animationSpeed, setAnimationSpeed] = useState(1);

  // Dynamic animation speed based on scroll position
  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (inView) {
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setAnimationSpeed(0.3 + scrollProgress * 0.7); // Vary speed from 0.3x to 1x based on visibility
      }
    }
  }, [scrollY, elementRef]);

  // Technology data with names and brand colors
  const frontendTechs = [
    { name: "React", color: "#61DAFB", symbol: <Code /> },
    { name: "TypeScript", color: "#3178C6", symbol: <Code /> },
    { name: "Next.js", color: "#FFFFFF", symbol: <Code /> },
    { name: "Vue.js", color: "#4FC08D", symbol: <Code /> },
    { name: "Tailwind", color: "#06B6D4", symbol: <Code /> },
    { name: "SCSS", color: "#CF649A", symbol: <Code /> },
    { name: "JavaScript", color: "#F7DF1E", symbol: <Code /> },
    { name: "HTML5", color: "#E34F26", symbol: <Code /> },
    { name: "CSS3", color: "#1572B6", symbol: <Code /> },
    { name: "Motion", color: "#FF0055", symbol: <Code /> }
  ];
  
  const backendTechs = [
    { name: "Node.js", color: "#68A063", symbol: <Code /> },
    { name: "Express", color: "#FFFFFF", symbol: <Code /> },
    { name: "Python", color: "#306998", symbol: <Code /> },
    { name: "Django", color: "#092E20", symbol: <Code /> },
    { name: "PostgreSQL", color: "#336791", symbol: <Code /> },
    { name: "MongoDB", color: "#47A248", symbol: <Code /> },
    { name: "Redis", color: "#D82C20", symbol: <Code /> },
    { name: "GraphQL", color: "#E10098", symbol: <Code /> },
    { name: "REST API", color: "#FF6B35", symbol: <Code /> },
    { name: "Prisma", color: "#FFFFFF", symbol: <Code /> }
  ];
  
  const toolsTechs = [
    { name: "Git", color: "#F05032", symbol: <Code /> },
    { name: "Docker", color: "#2496ED", symbol: <Code /> },
    { name: "AWS", color: "#FF9900", symbol: <Code /> },
    { name: "Vercel", color: "#FFFFFF", symbol: <Code /> },
    { name: "Figma", color: "#F24E1E", symbol: <Code /> },
    { name: "VS Code", color: "#007ACC", symbol: <Code /> },
    { name: "Postman", color: "#FF6C37", symbol: <Code /> },
    { name: "Jest", color: "#C21325", symbol: <Code /> },
    { name: "Cypress", color: "#04C38E", symbol: <Code /> },
    { name: "Webpack", color: "#8DD6F9", symbol: <Code /> }
  ];

  // Duplicate arrays for seamless scrolling
  const duplicatedFrontend = [...frontendTechs, ...frontendTechs];
  const duplicatedBackend = [...backendTechs, ...backendTechs];
  const duplicatedTools = [...toolsTechs, ...toolsTechs];

  const TechIcon = ({ tech, index, delay = 0 }: {
    tech: { name: string; color: string; symbol: React.ReactNode },
    index: number,
    delay?: number 
  }) => (
    <div 
      key={`${tech.name}-${index}`}
      className="flex-shrink-0 mx-3 sm:mx-4 group cursor-pointer animate-fade-in"
      style={{
        animationDelay: isVisible ? `${delay}s` : '0s'
      }}
    >
      <div className="relative">
        {/* Icon container with enhanced hover effects */}
        <div 
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl backdrop-blur-sm hover:-translate-y-2"
          style={{ 
            backgroundColor: tech.name === "Next.js" || tech.name === "Express" || tech.name === "Prisma" || tech.name === "Vercel" 
              ? `${tech.color}10` 
              : `${tech.color}20`,
            border: `2px solid ${tech.color}60`,
            boxShadow: `0 0 20px ${tech.color}20`
          }}
        >
          {/* Tech icon/symbol */}
          <div 
            className="text-sm sm:text-xl lg:text-2xl font-bold transition-all duration-300 group-hover:scale-110"
            style={{ 
              color: tech.name === "Next.js" || tech.name === "Express" || tech.name === "Prisma" || tech.name === "Vercel" 
                ? "#E3B6B1" 
                : tech.color 
            }}
          >
            {tech.symbol}
          </div>
        </div>
        
        {/* Tech name label on hover */}
        <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 group-hover:-translate-y-2">
          <span className="text-xs text-[#E3B6B1] font-medium bg-[#150016] px-2 sm:px-3 py-1 rounded-full whitespace-nowrap border border-[#522C5D] shadow-lg">
            {tech.name}
          </span>
        </div>
        
        {/* Enhanced animated glow effect on hover */}
        <div 
          className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-40 transition-all duration-500 blur-xl -z-10 animate-pulse"
          style={{ backgroundColor: tech.color }}
        />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
          <div 
            className="absolute top-2 right-2 w-1 h-1 rounded-full animate-ping"
            style={{ backgroundColor: tech.color }}
          />
          <div 
            className="absolute bottom-3 left-3 w-1 h-1 rounded-full animate-ping"
            style={{ backgroundColor: tech.color, animationDelay: "0.5s" }}
          />
          <div 
            className="absolute top-3 left-2 w-0.5 h-0.5 rounded-full animate-ping"
            style={{ backgroundColor: tech.color, animationDelay: "1s" }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-16 sm:py-20 bg-gradient-to-b from-[#150016] to-[#29104A] overflow-hidden relative"
    >
      {/* Enhanced background decoration with scroll-based movement */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#E3B6B1] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#845162] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#522C5D] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced header with scroll animations */}
          <div 
            className="text-center mb-12 sm:mb-16 animate-fade-in"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 500) * 0.1)}px)`,
              animationDelay: isVisible ? '0.2s' : '0s'
            }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <p 
              className="text-center text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base animate-fade-in"
              style={{ animationDelay: isVisible ? '0.4s' : '0s' }}
            >
              Hover over any technology to pause the carousel • Scroll speed affects animation
            </p>
            <div 
              className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#E3B6B1] to-[#FFE3DC] mx-auto animate-scale-in"
              style={{ animationDelay: isVisible ? '0.6s' : '0s' }}
            />
          </div>
          
          <div className="space-y-12 sm:space-y-16">
            {/* Frontend Row - Rolling Right with dynamic speed */}
            <div className="relative">
              <h3 
                className="text-lg sm:text-xl font-semibold text-[#E3B6B1] mb-6 sm:mb-8 text-center animate-slide-in-left"
                style={{ animationDelay: isVisible ? '0.8s' : '0s' }}
              >
                Frontend
              </h3>
              <div className="relative overflow-hidden py-2 sm:py-4">
                {/* Enhanced gradient overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#150016] via-[#150016] to-transparent pointer-events-none z-30" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#29104A] via-[#29104A] to-transparent pointer-events-none z-30" />
                <div 
                  className="flex animate-scroll-right"
                  style={{
                    animationDuration: `${30 / animationSpeed}s`,
                    width: "fit-content"
                  }}
                >
                  {duplicatedFrontend.map((tech, index) => (
                    <TechIcon key={`frontend-${tech.name}-${index}`} tech={tech} index={index} delay={1 + index * 0.05} />
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Row - Rolling Left with dynamic speed */}
            <div className="relative">
              <h3 
                className="text-lg sm:text-xl font-semibold text-[#E3B6B1] mb-6 sm:mb-8 text-center animate-slide-in-right"
                style={{ animationDelay: isVisible ? '1.2s' : '0s' }}
              >
                Backend
              </h3>
              <div className="relative overflow-hidden py-2 sm:py-4">
                {/* Enhanced gradient overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#150016] via-[#150016] to-transparent pointer-events-none z-30" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#29104A] via-[#29104A] to-transparent pointer-events-none z-30" />
                <div 
                  className="flex animate-scroll-left"
                  style={{
                    animationDuration: `${25 / animationSpeed}s`,
                    animationPlayState: 'running'
                  }}
                >
                  {duplicatedBackend.map((tech, index) => (
                    <TechIcon key={`backend-${index}`} tech={tech} index={index} delay={1.4 + index * 0.05} />
                  ))}
                </div>
              </div>
            </div>

            {/* Tools Row - Rolling Right (Slower) with dynamic speed */}
            <div className="relative">
              <h3 
                className="text-lg sm:text-xl font-semibold text-[#E3B6B1] mb-6 sm:mb-8 text-center animate-slide-in-left"
                style={{ animationDelay: isVisible ? '1.6s' : '0s' }}
              >
                Tools & Other
              </h3>
              <div className="relative overflow-hidden py-2 sm:py-4">
                {/* Enhanced gradient overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#150016] via-[#150016] to-transparent pointer-events-none z-30" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#29104A] via-[#29104A] to-transparent pointer-events-none z-30" />
                <div 
                  className="flex animate-scroll-right-slow"
                  style={{
                    animationDuration: `${40 / animationSpeed}s`,
                    animationPlayState: 'running'
                  }}
                >
                  {duplicatedTools.map((tech, index) => (
                    <TechIcon key={`tools-${index}`} tech={tech} index={index} delay={1.8 + index * 0.05} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
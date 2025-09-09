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
    { name: "React", color: "#61DAFB", logo: "react" },
    { name: "TypeScript", color: "#3178C6", logo: "typescript" },
    { name: "Next.js", color: "#FFFFFF", logo: "nextjs" },
    { name: "Vue.js", color: "#4FC08D", logo: "vue" },
    { name: "Tailwind", color: "#06B6D4", logo: "tailwindcss" },
    { name: "JavaScript", color: "#F7DF1E", logo: "javascript" },
    { name: "Node.js", color: "#68A063", logo: "nodejs" },
    { name: "Redux", color: "#764ABC", logo: "redux" },
    { name: "Amplify", color: "#FF9900", logo: "aws-amplify" },
    { name: "HTML5", color: "#E34F26", logo: "/image/HTML_icon.png", isLocal: true },
    { name: "CSS3", color: "#1572B6", logo: "/image/CSS_icon.png", isLocal: true }
  ];
  
  const backendTechs = [
    { name: "Node.js", color: "#68A063", logo: "nodejs" },
    { name: "Express", color: "#FFFFFF", logo: "express" },
    { name: "Python", color: "#306998", logo: "python" },
    { name: "Django", color: "#092E20", logo: "django" },
    { name: "Go", color: "#00ADD8", logo: "go" },
    { name: "MySQL", color: "#4479A1", logo: "mysql" },
    { name: "PostgreSQL", color: "#336791", logo: "postgresql" },
    { name: "MongoDB", color: "#47A248", logo: "mongodb" },
    { name: "Redis", color: "#D82C20", logo: "redis" },
    { name: "GraphQL", color: "#E10098", logo: "graphql" },
    //{ name: "Prisma", color: "#FFFFFF", logo: "prisma" }
  ];
  
  const toolsTechs = [
    { name: "Git", color: "#F05032", logo: "git" },
    { name: "Docker", color: "#2496ED", logo: "docker" },
    { name: "AWS", color: "#FF9900", logo: "aws" },
    { name: "Electron", color: "#47848F", logo: "electron" },
    { name: "Kotlin", color: "#7F52FF", logo: "kotlin" },
    { name: "Unreal Engine", color: "#FFFFFF", logo: "unrealengine" },
    //{ name: "Vercel", color: "#FFFFFF", logo: "vercel" },
    { name: "Figma", color: "#F24E1E", logo: "figma" },
    { name: "VS Code", color: "#007ACC", logo: "/image/vsCode_icon.png", isLocal: true },
    { name: "Postman", color: "#FF6C37", logo: "postman" },
    { name: "Jest", color: "#C21325", logo: "jest" },
    //{ name: "Cypress", color: "#04C38E", logo: "cypress" },
    //{ name: "Webpack", color: "#8DD6F9", logo: "webpack" }
  ];

  // Duplicate arrays for seamless scrolling
  const duplicatedFrontend = [...frontendTechs, ...frontendTechs];
  const duplicatedBackend = [...backendTechs, ...backendTechs];
  const duplicatedTools = [...toolsTechs, ...toolsTechs];

  const TechIcon = ({ tech, index, delay = 0 }: { 
    tech: { name: string; color: string; logo: string; isLocal?: boolean }, 
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
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl backdrop-blur-md hover:-translate-y-2"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: `2px solid ${tech.color}60`,
            boxShadow: `0 0 20px ${tech.color}20`
          }}
        >
          {/* Tech icon/symbol */}
          <img src={tech.isLocal ? tech.logo : `https://raw.githubusercontent.com/gilbarbara/logos/main/logos/${tech.logo}.svg`} alt={tech.name} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-beige mb-4 font-montserrat">
              Skills & Technologies
            </h2>
            <p 
              className="text-center text-beige/80 mb-6 sm:mb-8 text-sm sm:text-base animate-fade-in font-montserrat"
              style={{ animationDelay: isVisible ? '0.4s' : '0s' }}
            >
              Here are some of the technologies I've worked with:
            </p>
            <div 
              className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blush to-beige mx-auto animate-scale-in"
              style={{ animationDelay: isVisible ? '0.6s' : '0s' }}
            />
          </div>
          
          <div className="space-y-12 sm:space-y-16">
            {/* Frontend Row - Rolling Right with dynamic speed */}
            <div className="relative">
              <h3 
                className="text-lg sm:text-xl font-semibold text-blush mb-6 sm:mb-8 text-center animate-slide-in-left font-montserrat"
                style={{ animationDelay: isVisible ? '0.8s' : '0s' }}
              >
                Frontend
              </h3>
              <div className="relative overflow-hidden py-2 sm:py-4">
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#150016] to-transparent pointer-events-none z-30" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#150016] to-transparent pointer-events-none z-30" />
                <div 
                  className="flex animate-scroll-right transition-all duration-500"
                  style={{
                    animationDuration: `${30 / animationSpeed}s`,
                    animationPlayState: isVisible ? 'running' : 'paused',
                    filter: `blur(${isVisible ? '0px' : '2px'})`,
                    opacity: isVisible ? 1 : 0.7
                  }}
                >
                  {duplicatedFrontend.map((tech, index) => (
                    <TechIcon key={`frontend-${index}`} tech={tech} index={index} delay={1 + index * 0.05} />
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Row - Rolling Left with dynamic speed */}
            <div className="relative">
              <h3 
                className="text-lg sm:text-xl font-semibold text-blush mb-6 sm:mb-8 text-center animate-slide-in-right font-montserrat"
                style={{ animationDelay: isVisible ? '1.2s' : '0s' }}
              >
                Backend
              </h3>
              <div className="relative overflow-hidden py-2 sm:py-4">
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#150016] to-transparent pointer-events-none z-30" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#150016] to-transparent pointer-events-none z-30" />
                <div 
                  className="flex animate-scroll-left transition-all duration-500"
                  style={{
                    animationDuration: `${25 / animationSpeed}s`,
                    animationPlayState: isVisible ? 'running' : 'paused',
                    filter: `blur(${isVisible ? '0px' : '2px'})`,
                    opacity: isVisible ? 1 : 0.7
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
                className="text-lg sm:text-xl font-semibold text-blush mb-6 sm:mb-8 text-center animate-slide-in-left font-montserrat"
                style={{ animationDelay: isVisible ? '1.6s' : '0s' }}
              >
                Tools & Other
              </h3>
              <div className="relative overflow-hidden py-2 sm:py-4">
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#150016] to-transparent pointer-events-none z-30" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#150016] to-transparent pointer-events-none z-30" />
                <div 
                  className="flex animate-scroll-right-slow transition-all duration-500"
                  style={{
                    animationDuration: `${40 / animationSpeed}s`,
                    animationPlayState: isVisible ? 'running' : 'paused',
                    filter: `blur(${isVisible ? '0px' : '2px'})`,
                    opacity: isVisible ? 1 : 0.7
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
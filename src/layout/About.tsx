import { useScrollAnimation } from "../utils/useScrollAnimation";

/**
 * About Section Component
 * 
 * Features:
 * - Gradient background transitioning from Hero section
 * - Scroll-based animations for content reveal
 * - Uses custom color palette (wine to dark-maroon gradient)
 * - Montserrat font for consistency
 */
export function About() {
  const { scrollY, isVisible, elementRef } = useScrollAnimation();

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-20 bg-gradient-to-b from-wine to-deepPurple relative overflow-hidden"
    >
      {/* Background decoration elements with parallax */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`
        }}
      >
        <div className="absolute top-10 right-10 w-72 h-72 bg-blush rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-beige rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <div
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 800) * 0.1)}px)`,
              opacity: Math.max(0.3, 1 - Math.max(0, scrollY - 800) * 0.002)
            }}
          >
            <h2 
              className="text-4xl lg:text-5xl font-bold text-beige mb-8 animate-fade-in font-montserrat"
              style={{ animationDelay: isVisible ? '0.2s' : '0s' }}
            >
              About Me
            </h2>
            <div 
              className="w-24 h-1 bg-gradient-to-r from-blush to-beige mx-auto mb-12 animate-scale-in"
              style={{ animationDelay: isVisible ? '0.4s' : '0s' }}
            />
          </div>
          
          {/* Content - Monica's story */}
          <div className="space-y-6 text-lg text-beige/80 leading-relaxed font-montserrat">
            <p 
              className="animate-fade-in hover:text-beige transition-colors duration-300"
              style={{ animationDelay: isVisible ? '0.6s' : '0s' }}
            >
              Hey, I'm Thuy! I'm a recent Computer Science grad who's excited about building things 
              that people actually enjoy using. Most of my work has been in full-stack web and mobile 
              development, where I get to take an idea and turn it into something real, whether it's a 
              polished app, a clean dashboard, or just a small feature that makes someone's day easier.
            </p>
            <p 
              className="animate-fade-in hover:text-beige transition-colors duration-300"
              style={{ animationDelay: isVisible ? '0.8s' : '0s' }}
            >
              During my internships, I wore a lot of hats: jumping between front-end, backend, and even data work. 
              That experience taught me to adapt quickly and stay curious, which I think is one of my biggest 
              strengths. I like the challenge of picking up new tools or frameworks on the fly and figuring 
              out how everything fits together.
            </p>
            <p 
              className="animate-fade-in hover:text-beige transition-colors duration-300"
              style={{ animationDelay: isVisible ? '1s' : '0s' }}
            >
              Outside of work, I love experimenting with game development. It's where I get to be playful
               with my coding, try wild ideas, and push myself to learn without worrying too much about 
               the “rules.” For me, building tech isn't just about solving problems, it's about creating experiences, 
               whether that's a tool that helps someone save time or a little game that brings a smile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
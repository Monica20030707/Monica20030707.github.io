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
              I'm a Software Engineering student deeply passionate about Machine Learning and Data Analytics. 
              I love the challenge of turning raw data into meaningful insights that people can understand and use. 
              One of my favorite projects was creating real-time stock graphs for a fintech app, making complex 
              financial data simple and interactive.
            </p>
            <p 
              className="animate-fade-in hover:text-beige transition-colors duration-300"
              style={{ animationDelay: isVisible ? '0.8s' : '0s' }}
            >
              While my studies have built a strong foundation in software development, I'm currently exploring 
              full-stack web and mobile development because I enjoy building tools that save time and make life easier. 
              I believe technology should empower people to focus on what truly matters.
            </p>
            <p 
              className="animate-fade-in hover:text-beige transition-colors duration-300"
              style={{ animationDelay: isVisible ? '1s' : '0s' }}
            >
              I'm driven by curiosity and a love for learning, whether it's diving into new machine learning concepts 
              or crafting user-friendly apps. For me, it's all about creating solutions that are both impactful and meaningful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
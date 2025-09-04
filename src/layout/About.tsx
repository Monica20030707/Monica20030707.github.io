import { useScrollAnimation } from "../utils/useScrollAnimation";
import { useState, useEffect } from "react";

export function About() {
  const { scrollY, isVisible, elementRef } = useScrollAnimation();

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
              I’m a Software Engineering student deeply passionate about Machine Learning and Data Analytics. I love the challenge of turning raw data into meaningful insights that people can understand and use. One of my favorite projects was creating real-time stock graphs for a fintech app, making complex financial data simple and interactive.
            </p>
            <p 
              className="animate-fade-in hover:text-white transition-colors duration-300"
              style={{ animationDelay: isVisible ? '0.8s' : '0s' }}
            >
              While my studies have built a strong foundation in software development, I’m currently exploring full-stack web and mobile development because I enjoy building tools that save time and make life easier. I believe technology should empower people to focus on what truly matters.
            </p>
            <p 
              className="animate-fade-in hover:text-white transition-colors duration-300"
              style={{ animationDelay: isVisible ? '1s' : '0s' }}
            >
              I’m driven by curiosity and a love for learning, whether it’s diving into new machine learning concepts or crafting user-friendly apps. For me, it’s all about creating solutions that are both impactful and meaningful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
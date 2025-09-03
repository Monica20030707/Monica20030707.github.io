import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/card";
import { Button } from "../components/button";
import { Badge } from "../components/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { useScrollAnimation } from "../utils/useScrollAnimation";

export function Projects() {
  const { scrollY, isVisible, elementRef } = useScrollAnimation();

  const projects = [
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard built with React and D3.js, featuring real-time data visualization and interactive charts.",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU1MjE4MTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
      liveUrl: "https://dashboard-demo.example.com",
      githubUrl: "https://github.com/sarahchen/analytics-dashboard"
    },
    {
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, transaction tracking, and budget management features.",
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1MTExOTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React Native", "Node.js", "Express", "MongoDB", "JWT"],
      liveUrl: "https://bankingapp-demo.example.com",
      githubUrl: "https://github.com/sarahchen/mobile-banking"
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with inventory management, payment processing, and order tracking capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc1NTE0Mzg0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Tailwind"],
      liveUrl: "https://ecommerce-demo.example.com",
      githubUrl: "https://github.com/sarahchen/ecommerce-platform"
    }
  ];

  const handleProjectAction = (url: string, action: string) => {
    if (action === 'demo') {
      // In a real app, these would be actual URLs
      console.log('Opening demo:', url);
      // window.open(url, '_blank', 'noopener,noreferrer');
    } else if (action === 'github') {
      console.log('Opening GitHub:', url);
      // window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-16 sm:py-20 bg-gradient-to-b from-[#29104A] to-[#522C5D] relative overflow-hidden"
    >
      {/* Enhanced background with scroll-based parallax */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.08}px)`
        }}
      >
        <div className="absolute top-32 left-16 w-64 h-64 bg-[#E3B6B1] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-[#FFE3DC] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#845162] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced header with scroll animation */}
          <div
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 1500) * 0.1)}px)`,
              opacity: Math.max(0.3, 1 - Math.max(0, scrollY - 1500) * 0.002)
            }}
          >
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-6 sm:mb-8 animate-fade-in"
              style={{ animationDelay: isVisible ? '0.2s' : '0s' }}
            >
              Featured Projects
            </h2>
            <div 
              className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#E3B6B1] to-[#FFE3DC] mx-auto mb-12 sm:mb-16 animate-scale-in"
              style={{ animationDelay: isVisible ? '0.4s' : '0s' }}
            />
          </div>
          
          {/* Enhanced project grid with staggered animations */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 2000) * 0.05)}px)`
            }}
          >
            {projects.map((project, index) => (
              <Card 
                key={`project-${index}`} 
                className="bg-gradient-to-b from-[#150016] to-[#29104A] border-[#845162] hover:border-[#E3B6B1] transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-[#E3B6B1]/20 animate-fade-in"
                style={{ animationDelay: isVisible ? `${0.6 + index * 0.2}s` : '0s' }}
              >
                <CardHeader className="p-0">
                  <div className="overflow-hidden rounded-t-lg relative">
                    <ImageWithFallback
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150016]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Floating action buttons on hover */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleProjectAction(project.liveUrl, 'demo')}
                          className="p-2 bg-[#E3B6B1]/90 rounded-full hover:bg-[#E3B6B1] transition-colors backdrop-blur-sm"
                          aria-label="View demo"
                        >
                          <ExternalLink size={14} className="text-[#150016]" />
                        </button>
                        <button
                          onClick={() => handleProjectAction(project.githubUrl, 'github')}
                          className="p-2 bg-[#E3B6B1]/90 rounded-full hover:bg-[#E3B6B1] transition-colors backdrop-blur-sm"
                          aria-label="View code"
                        >
                          <Github size={14} className="text-[#150016]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl text-white mb-2 sm:mb-3 group-hover:text-[#E3B6B1] transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base group-hover:text-gray-200 transition-colors">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={`${project.title}-tag-${tagIndex}`}
                        variant="outline"
                        className="bg-[#522C5D] border-[#845162] text-[#E3B6B1] text-xs hover:bg-[#E3B6B1] hover:text-[#150016] transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="p-4 sm:p-6 pt-0">
                  <div className="flex gap-3 w-full">
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-[#E3B6B1] to-[#FFE3DC] text-[#150016] hover:opacity-90 text-xs sm:text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg"
                      onClick={() => handleProjectAction(project.liveUrl, 'demo')}
                    >
                      <ExternalLink size={14} className="mr-1 sm:mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-[#E3B6B1] text-[#E3B6B1] hover:bg-[#E3B6B1] hover:text-[#150016] px-3 hover:scale-105 transition-all duration-300"
                      onClick={() => handleProjectAction(project.githubUrl, 'github')}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={14} />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Enhanced CTA button */}
          <div 
            className="text-center mt-10 sm:mt-12 animate-fade-in"
            style={{ animationDelay: isVisible ? '1.4s' : '0s' }}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#E3B6B1] text-[#E3B6B1] hover:bg-[#E3B6B1] hover:text-[#150016] hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#E3B6B1]/25"
              onClick={() => console.log('View all projects')}
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
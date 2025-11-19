import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/card";
import { Button } from "../components/button";
import { Badge } from "../components/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { useScrollAnimation } from "../utils/useScrollAnimation";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function Work() {
  const { scrollY, isVisible, elementRef } = useScrollAnimation();

  const projects: Project[] = [
    {
      title: "Frailty Tester",
      description: "An AI-powered health assessment tool built from scratch to help seniors evaluate balance and mobility at home. Using real-time pose detection, the app guides users through structured balance tests and delivers immediate, actionable feedback on their stability and wellness.",
      image: "/image/project_frailtyTester.jpg",
      tags: ["AWS Services"],
      liveUrl: "https://main.d22cx9qmwqrer1.amplifyapp.com/",
    },
    {
      title: "OrangeLeaf",
      description: "A smart LaTeX-to-PDF converter with automated GitHub integration. On every upload, the system not only compiles LaTeX files into clean PDFs but also updates README files seamlessly, streamlining document workflows for developers and researchers.",
      image: "/image/project_orangeLeaf.jpg",
      tags: ["Python"],
      githubUrl: "https://github.com/Monica20030707/OrangeLeaf"
    },
    {
      title: "Stock Tracking Dashboard",
      description: "Built an interactive stock monitoring dashboard using JPMorgan Chase's open-source library, Perspective. The system visualizes live financial data streams with clear, responsive charts, enabling traders to track market fluctuations in real time with intuitive insights.",
      image: "/image/project_stockDashboard.jpg",
      tags: ["Python", "Typescript"],
      githubUrl: "https://github.com/Monica20030707/tradingDashboard-UI"
    },
    {
      title: "Traffic Violation Tracker",
      description: "Developed an automated violation detection platform powered by AWS. Street camera feeds were processed via S3 for image storage, then matched against California DMV data to classify offenses and issue email ticket notices—all fully automated through regex-driven plate parsing and AWS EventBridge orchestration.",
      image: "/image/project_licenseReader.jpg",
      tags: ["AWS Services"],
      githubUrl: "https://github.com/Monica20030707/AWS_rekonigition-N-read-database"
    },
    {
      title: "Read Handwritten Dataset",
      description: "Built an Artificial Neural Network (ANN) completely from scratch to recognize digits (0-9) from the MNIST dataset. Implemented backpropagation manually, achieving over 90% accuracy while gaining a deep understanding of core machine learning principles.",
      image: "/image/project_MLdata.jpg",
      tags: ["Python", "Machine Learning"],
      githubUrl: "https://github.com/Monica20030707/Artificial-Neutral-Network_ML"
    },
    {
      title: "Reverse Polish Calculator",
      description: "A Java-based calculator built with ANTLR that interprets and evaluates Reverse Polish Notation expressions. Designed from the ground up to handle Unicode symbols, the program translates inputs from reverse order to standard notation before computing results with precision.",
      image: "/image/project_reversePcalculator.jpg",
      tags: ["Java","ANTLR"],
      githubUrl: "https://github.com/Monica20030707/reverse-Polish_calculator"
    }
  ];

  const handleProjectAction = (url: string, action: string) => {
    if (action === 'demo') {
      console.log('Opening demo:', url);
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (action === 'github') {
      console.log('Opening GitHub:', url);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-16 sm:py-20 bg-gradient-to-b from-deepPurple to-plum relative overflow-hidden"
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
          {/* Enhanced header with scroll animation - Fixed spacing */}
          <div
            className="mb-20 sm:mb-24"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 1500) * 0.1)}px)`,
              opacity: Math.max(0.3, 1 - Math.max(0, scrollY - 1500) * 0.002)
            }}
          >
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-beige text-center mb-6 sm:mb-8 animate-fade-in font-montserrat"
              style={{ animationDelay: isVisible ? '0.2s' : '0s' }}
            >
              Featured Projects
            </h2>
            <div 
              className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blush to-beige mx-auto animate-scale-in"
              style={{ animationDelay: isVisible ? '0.4s' : '0s' }}
            />
          </div>
          
          {/* Enhanced project grid with staggered animations - Fixed spacing to match header */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-24"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 2000) * 0.05)}px)`
            }}
          >
            {projects.map((project, index) => (
              <div 
                key={`project-wrapper-${index}`} 
                className="group/card h-full flex flex-col animate-fade-in"
                style={{ animationDelay: isVisible ? `${0.6 + index * 0.2}s` : '0s' }}
              >
                <Card 
                  key={`project-${index}`} 
                  className="bg-gradient-to-b from-[#150016] to-[#29104A] border-[#845162] group-hover/card:border-[#E3B6B1] transition-all duration-500 group group-hover/card:scale-105 group-hover/card:shadow-2xl group-hover/card:shadow-[#E3B6B1]/20 flex flex-col h-full"
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
                          {project.liveUrl && (
                            <button
                              onClick={() => project.liveUrl && handleProjectAction(project.liveUrl, 'demo')}
                              className="p-2 bg-[#E3B6B1]/90 rounded-full hover:bg-[#E3B6B1] transition-colors backdrop-blur-sm"
                              aria-label="View demo"
                            >
                              <ExternalLink size={14} className="text-[#150016]" />
                            </button>
                          )}
                          {project.githubUrl && (
                            <button
                              onClick={() => project.githubUrl && handleProjectAction(project.githubUrl, 'github')}
                              className="p-2 bg-[#E3B6B1]/90 rounded-full hover:bg-[#E3B6B1] transition-colors backdrop-blur-sm"
                              aria-label="View code"
                            >
                              <Github size={14} className="text-[#150016]" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4 sm:p-6 flex-grow">
                    <CardTitle className="text-lg sm:text-xl text-white mb-2 sm:mb-3 group-hover:text-[#E3B6B1] transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base group-hover:text-gray-200 transition-colors">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
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
                  
                  <CardFooter className="p-4 sm:p-6 mt-auto">
                    <div className="flex gap-3 w-full">
                      {/* Case 1: Both links exist */}
                      {project.githubUrl && project.liveUrl && (
                        <>
                          <Button 
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-[#E3B6B1] to-[#FFE3DC] text-[#150016] hover:opacity-90 text-xs sm:text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg"
                            onClick={() => project.githubUrl && handleProjectAction(project.githubUrl, 'github')}
                          >
                            <Github size={14} className="mr-1 sm:mr-2" />
                            GitHub
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-[#E3B6B1] text-[#E3B6B1] hover:bg-[#E3B6B1] hover:text-[#150016] px-3 hover:scale-105 transition-all duration-300"
                            onClick={() => project.liveUrl && handleProjectAction(project.liveUrl, 'demo')}
                            aria-label={`View ${project.title} live demo`}
                          >
                            <ExternalLink size={14} />
                          </Button>
                        </>
                      )}

                      {/* Case 2: Only GitHub link exists */}
                      {project.githubUrl && !project.liveUrl && (
                        <Button 
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-[#E3B6B1] to-[#FFE3DC] text-[#150016] hover:opacity-90 text-xs sm:text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg"
                          onClick={() => project.githubUrl && handleProjectAction(project.githubUrl, 'github')}
                        >
                          <Github size={14} className="mr-1 sm:mr-2" />
                          GitHub
                        </Button>
                      )}

                      {/* Case 3: Only Live Demo link exists */}
                      {!project.githubUrl && project.liveUrl && (
                        <Button 
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-[#E3B6B1] to-[#FFE3DC] text-[#150016] hover:opacity-90 text-xs sm:text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg"
                          onClick={() => project.liveUrl && handleProjectAction(project.liveUrl, 'demo')}
                        >
                          <ExternalLink size={14} className="mr-1 sm:mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Enhanced CTA button - Fixed spacing to move with grid */}
          <div 
            className="text-center animate-fade-in"
            style={{ 
              animationDelay: isVisible ? '1.4s' : '0s',
              transform: `translateY(${Math.max(0, (scrollY - 2000) * 0.05)}px)`
            }}
          >
  {/* <Button                                                                                       
     variant="outline"                                                                                          
    size="lg"                                                                                                  
    className="border-blush text-blush hover:bg-blush hover:text-darkMaroon hover:scale-105 transition-all     
                    /* <Button 
            variant="outline" 
            size="lg"
            className="border-blush text-blush hover:bg-blush hover:text-darkMaroon hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blush/25 font-montserrat"
            onClick={() => console.log('View all projects')}
          >
            View All Projects
          </Button> duration-300 hover:shadow-lg hover:shadow-blush/25 font-montserrat"                                          
    onClick={() => console.log('View all projects')}                                                           
   >
   View All Projects                                          
  </Button> */}      
          </div>
        </div>
      </div>
    </section>
  );
}
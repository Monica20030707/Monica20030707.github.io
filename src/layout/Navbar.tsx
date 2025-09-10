import { useState, useEffect } from "react";
import { Button } from "../components/button";
import { Menu, X } from "lucide-react";

/**
 * Navigation Component
 * 
**/

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll-based blur effect
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items for the right side - only Works, About Me, Contact
  const navItems = [
    { label: "About Me", href: "#about" },
    { label: "Works", href: "#work" },
    { label: "Contact", href: "#contact" }
  ];

  // Smooth scroll functionality
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/10 backdrop-blur-sm border-b border-wine' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name - Monica Nguyen in Tinos font - Bigger */}
          <div className="text-2xl lg:text-3xl font-tinos">
            <span className="text-beige hover:text-blush transition-colors cursor-pointer">
              Monica Nguyen
            </span>
          </div>
          
          {/* Desktop Navigation - Montserrat font - Bigger */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-lg text-beige hover:text-blush transition-colors font-montserrat"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button - Bigger */}
          <button
            className="md:hidden text-beige hover:text-blush transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Navigation - Bigger */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-darkMaroon/95 backdrop-blur-sm border-t border-wine">
            <div className="py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-lg text-beige hover:text-blush transition-colors font-montserrat px-6 py-3"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
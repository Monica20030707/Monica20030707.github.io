import { Button } from "../components/button";
import { Input } from "../components/input";
import { Textarea } from "../components/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

/**
 * Contact Section Component
 * 
 * Features:
 * - Dark gradient background from plum to dark-maroon
 * - Simple contact form with email and message box only
 * - Social media links (GitHub, LinkedIn, Behance as circular icons)
 * - Based on the provided design image
 * - Removed phone and location sections as requested
 * - Uses custom color palette and Montserrat font
 */
export function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, this would send the data to a backend
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ email: '', message: '' });
  };

  const handleSocialClick = (platform: string, url: string) => {
    console.log(`Opening ${platform}:`, url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-plum via-darkMaroon to-black relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blush/20 to-beige/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-wine/30 to-plum/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-beige/10 to-blush/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
                {/* Floating geometric shapes */}
        <div className="absolute top-32 right-1/4 w-16 h-16 border-2 border-blush/30 rotate-45 animate-float" />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-wine/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-32 w-8 h-8 bg-beige/30 transform rotate-45 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced layout with creative styling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            {/* Enhanced header section */}
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-beige mb-6 font-tinos animate-fade-in">
                Let's Connect
              </h2>
              <p className="text-beige/80 text-lg mb-2 font-montserrat animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                Ready to collaborate on something amazing?
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blush to-beige animate-scale-in" style={{ animationDelay: '0.5s' }} />
            </div>
            
            {/* Enhanced social links with hover effects */}
            <div className="space-y-6 animate-slide-in-left" style={{ animationDelay: '0.7s' }}>
              <p className="text-beige/60 font-montserrat">
                Find me on social platforms
              </p>
              <div className="flex space-x-6">
                <button 
                  onClick={() => handleSocialClick('GitHub', 'https://github.com/Monica20030707')}
                  className="group w-16 h-16 bg-gradient-to-r from-beige to-blush rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-beige/25"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} className="text-darkMaroon group-hover:scale-110 transition-transform" />
                </button>
                <button 
                  onClick={() => handleSocialClick('LinkedIn', 'https://www.linkedin.com/in/thuy-nguyen-46505121b/')}
                  className="group w-16 h-16 bg-gradient-to-r from-beige to-blush rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-beige/25"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} className="text-darkMaroon group-hover:scale-110 transition-transform" />
                </button>
                <button 
                  onClick={() => handleSocialClick('Handshake', 'https://app.joinhandshake.com/profiles/36910406')}
                  className="group w-16 h-16 bg-gradient-to-r from-beige to-blush rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-beige/25"
                  aria-label="Handshake Profile"
                >
                <img 
                  src="/image/handshake_icon.png"
                  alt="Handshake" 
                  className="w-6 h-7 group-hover:scale-110 transition-transform"
                />
                </button>
                <button 
                  onClick={() => handleSocialClick('Email', 'mailto:thuybohr@gmail.com')}
                  className="className=group w-16 h-16 bg-gradient-to-r from-beige to-blush rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-beige/25"
                  aria-label="Email Contact"
                >
                  <Mail size={24} className="text-darkMaroon group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
            
            {/* Direct contact info */}
            <div className="bg-gradient-to-r from-wine/20 to-plum/20 backdrop-blur-sm rounded-2xl p-6 border border-wine/30 animate-slide-in-left" style={{ animationDelay: '0.9s' }}>
              <h3 className="text-xl text-beige mb-3 font-montserrat">
                📧 Direct Contact
              </h3>
              <a 
                href="mailto:thuybohr@gmail.com" 
                className="text-blush hover:text-beige transition-colors font-montserrat text-lg underline decoration-blush/50 hover:decoration-beige/50"
              >
                thuybohr@gmail.com
              </a>
            </div>
          </div>

          {/* Enhanced contact form section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl sm:text-3xl font-bold text-beige mb-4 font-tinos">
                Send me a message
              </h3>
              <p className="text-beige/70 font-montserrat">
                I'd love to hear about your projects and ideas
              </p>
            </div>

            {/* Enhanced contact form with modern styling */}
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              <div className="space-y-1">
                <label className="text-beige/80 text-sm font-montserrat font-medium">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gradient-to-r from-darkMaroon/70 to-plum/50 backdrop-blur-sm border-2 border-wine/40 text-beige placeholder:text-beige/50 focus:border-blush focus:ring-2 focus:ring-blush/20 rounded-xl h-12 font-montserrat transition-all duration-300"
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-beige/80 text-sm font-montserrat font-medium">
                  Your Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project or just say hello..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-gradient-to-r from-darkMaroon/70 to-plum/50 backdrop-blur-sm border-2 border-wine/40 text-beige placeholder:text-beige/50 focus:border-blush focus:ring-2 focus:ring-blush/20 resize-none rounded-xl font-montserrat transition-all duration-300"
                />
              </div>

              <Button 
                type="submit"
                className="w-full h-14 bg-gradient-to-r from-blush to-beige text-darkMaroon hover:from-beige hover:to-blush font-montserrat font-semibold text-lg rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blush/30"
              >
                <Mail className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Enhanced footer */}
        <div className="mt-20 pt-8 border-t border-gradient-to-r from-wine/50 to-plum/30 text-center">
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <p className="text-beige/80 font-montserrat">
              Built with ❤️ using React & Tailwind CSS
            </p>
            <p className="text-beige/60 text-sm font-montserrat">
              © 2025 Monica Nguyen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
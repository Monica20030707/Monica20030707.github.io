import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { Alert } from "../components/alert";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const handleEmailClick = () => {
    try {
      window.location.href = "mailto:sarah.chen @email.com?subject=Let's work together!";
    } catch (error) {
      console.log('Email client not available');
    }
  };

  const handleSocialClick = (platform: string, url: string) => {
    try {
      console.log(`Opening ${platform}:`, url);
      // In a real app, these would open actual social media profiles
      // window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.log(`Error opening ${platform}:`, error);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#522C5D] to-[#150016]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-8">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E3B6B1] to-[#FFE3DC] mx-auto mb-16" />
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Whether you have a project in mind or just want to say hello, feel free to reach out!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <Card className="bg-gradient-to-b from-[#29104A] to-[#150016] border-[#845162] hover:border-[#E3B6B1] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#E3B6B1] to-[#FFE3DC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-[#150016]" size={20} />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-[#E3B6B1]">sarah.chen @email.com</p>
              </CardContent>
            </Card>
            
            {/* Phone */}
            <Card className="bg-gradient-to-b from-[#29104A] to-[#150016] border-[#845162] hover:border-[#E3B6B1] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#E3B6B1] to-[#FFE3DC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-[#150016]" size={20} />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-[#E3B6B1]">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            
            {/* Location */}
            <Card className="bg-gradient-to-b from-[#29104A] to-[#150016] border-[#845162] hover:border-[#E3B6B1] transition-colors md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#E3B6B1] to-[#FFE3DC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-[#150016]" size={20} />
                </div>
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-[#E3B6B1]">San Francisco, CA</p>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA and Social Links */}
          <div className="text-center space-y-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#E3B6B1] to-[#FFE3DC] text-[#150016] hover:opacity-90 transition-opacity px-8"
              onClick={handleEmailClick}
            >
              <Mail className="mr-2" size={20} />
              Send Me a Message
            </Button>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <button 
                onClick={() => handleSocialClick('GitHub', 'https://github.com/sarahchen')}
                className="w-12 h-12 bg-gradient-to-r from-[#29104A] to-[#522C5D] border border-[#845162] rounded-full flex items-center justify-center text-[#E3B6B1] hover:text-[#FFE3DC] hover:border-[#E3B6B1] transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </button>
              <button 
                onClick={() => handleSocialClick('LinkedIn', 'https://linkedin.com/in/sarahchen')}
                className="w-12 h-12 bg-gradient-to-r from-[#29104A] to-[#522C5D] border border-[#845162] rounded-full flex items-center justify-center text-[#E3B6B1] hover:text-[#FFE3DC] hover:border-[#E3B6B1] transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </button>
              <button 
                onClick={handleEmailClick}
                className="w-12 h-12 bg-gradient-to-r from-[#29104A] to-[#522C5D] border border-[#845162] rounded-full flex items-center justify-center text-[#E3B6B1] hover:text-[#FFE3DC] hover:border-[#E3B6B1] transition-all"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
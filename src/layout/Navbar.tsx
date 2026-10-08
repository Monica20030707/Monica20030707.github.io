import { useState } from "react";
import { Button } from "../components/button";
import { Menu, X } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 h-nav bg-canvas border-b border-hairline">
      <div className="page-column-wide h-full">
        <div className="flex h-full items-center justify-between gap-4">
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 text-body-sm font-medium text-ink"
            aria-label="Home"
          >
            <ImageWithFallback
              src="/dog_favicon.png"
              alt=""
              className="size-7 rounded-full object-cover"
            />
            <span className="hidden sm:inline">Monica Nguyen</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-body-sm font-medium text-ink"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              className="hidden sm:inline-flex"
              onClick={() => handleNavClick("#contact")}
            >
              Contact
            </Button>
            <button
              className="md:hidden text-ink p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-[56px] bg-canvas border-b border-hairline">
            <div className="page-column-wide py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-body-sm font-medium text-ink py-1"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="w-full sm:hidden"
                onClick={() => handleNavClick("#contact")}
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

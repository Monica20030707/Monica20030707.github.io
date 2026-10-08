import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../components/button";
import { Menu, X } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Work", to: "/work" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 h-nav bg-canvas border-b border-hairline">
      <div className="page-column-wide h-full">
        <div className="flex h-full items-center justify-between gap-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 text-body-sm font-medium text-ink"
            aria-label="Home"
          >
            <ImageWithFallback
              src="/dog_favicon.png"
              alt=""
              className="size-7 rounded-full object-cover"
            />
            <span className="hidden sm:inline">Monica Nguyen</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-body-sm font-medium text-ink ${
                    isActive ? "underline underline-offset-4" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:inline-flex">
              <Link to="/contact">Contact</Link>
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
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block w-full text-left text-body-sm font-medium text-ink py-1 ${
                      isActive ? "underline underline-offset-4" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button asChild className="w-full sm:hidden">
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

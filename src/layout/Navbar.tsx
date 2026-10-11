import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Folder,
  Code2,
  Smile,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";

const navItems = [
  { label: "Work", to: "/work", icon: Folder },
  { label: "Skills", to: "/skills", icon: Code2 },
  { label: "About", to: "/about", icon: Smile },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 pt-4">
      <div className="page-column-wide">
        <div className="flex items-center justify-center gap-2.5 sm:gap-3">
          <Link
            to="/"
            onClick={closeMenu}
            className="nav-avatar"
            aria-label="Home"
          >
            <ImageWithFallback
              src="/monica_avatar.png"
              alt="Monica Nguyen"
              className="size-full object-cover"
            />
          </Link>

          <div className="nav-pill hidden md:inline-flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav-pill-link ${isActive ? "nav-pill-link-active" : ""}`
                }
              >
                <item.icon size={14} strokeWidth={1.75} />
                {item.label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            className="nav-mail"
            aria-label="Contact"
            onClick={closeMenu}
          >
            <Mail size={18} strokeWidth={2} />
          </Link>

          <button
            type="button"
            className="nav-circle md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-3 rounded-2xl border border-hairline bg-canvas/95 p-2 shadow-sm backdrop-blur-md md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-pill-link w-full justify-start ${
                    isActive ? "nav-pill-link-active" : ""
                  }`
                }
              >
                <item.icon size={14} strokeWidth={1.75} />
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

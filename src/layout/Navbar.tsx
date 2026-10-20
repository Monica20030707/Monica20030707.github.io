import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Folder, Code2, Smile, Mail } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";

const navItems = [
  { label: "Work", to: "/work", icon: Folder },
  { label: "Skills", to: "/skills", icon: Code2 },
  { label: "About", to: "/about", icon: Smile },
];

export function Navbar() {
  const location = useLocation();
  const pillRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    ready: false,
  });

  const activeIndex = navItems.findIndex((item) => location.pathname === item.to);

  const updateIndicator = useCallback(() => {
    const pill = pillRef.current;
    const link = linkRefs.current[activeIndex];
    if (!pill || !link || activeIndex < 0) {
      setIndicator((prev) => ({ ...prev, ready: false }));
      return;
    }
    const pillRect = pill.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setIndicator({
      left: linkRect.left - pillRect.left,
      width: linkRect.width,
      ready: true,
    });
  }, [activeIndex]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator, location.pathname]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  return (
    <nav className="pointer-events-none sticky top-0 z-50 pt-4">
      <div className="page-column-wide">
        <div className="pointer-events-auto flex items-center justify-center gap-2 sm:gap-3">
          <Link to="/" className="nav-avatar" aria-label="Home">
            <ImageWithFallback
              src="/monica_avatar.png"
              alt="Monica Nguyen"
              className="size-full object-cover"
            />
          </Link>

          <div ref={pillRef} className="nav-pill">
            <span
              className="nav-pill-indicator"
              aria-hidden="true"
              style={{
                width: indicator.width,
                transform: `translateX(${indicator.left}px)`,
                opacity: indicator.ready ? 1 : 0,
              }}
            />
            {navItems.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                ref={(node) => {
                  linkRefs.current[index] = node;
                }}
                className={({ isActive }) =>
                  `nav-pill-link ${isActive ? "nav-pill-link-active" : ""}`
                }
              >
                <item.icon size={20} strokeWidth={2} />
                <span className="nav-pill-label">{item.label}</span>
              </NavLink>
            ))}
          </div>

          <Link to="/contact" className="nav-mail" aria-label="Contact">
            <Mail size={20} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

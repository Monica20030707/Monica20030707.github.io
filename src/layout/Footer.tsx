import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-hairline">
      <div className="page-column-wide py-8">
        <div className="flex flex-col gap-3 text-caption-sm text-body sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link to="/work" className="underline">
              Work
            </Link>
            <Link to="/about" className="underline">
              About
            </Link>
            <a
              href="https://github.com/Monica20030707"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub
            </a>
            <Link to="/contact" className="underline">
              Contact
            </Link>
          </div>
          <p>© 2026 Monica Nguyen</p>
        </div>
      </div>
    </footer>
  );
}

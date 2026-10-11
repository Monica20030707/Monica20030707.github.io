import { Link } from "react-router-dom";
import { Mail, FileText, Linkedin } from "lucide-react";
import { ContactPager } from "./ContactPager";

export function ConnectFooter() {
  const name = "Monica Nguyen";

  return (
    <footer className="connect-footer relative z-0 overflow-hidden bg-black text-white">
      <div className="mx-auto w-full max-w-5xl px-6 pt-14 sm:px-10 sm:pt-16 md:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mt-5 text-[13px] leading-relaxed text-white/90 sm:text-sm">
              Let&apos;s connect.
              <br />
              I&apos;m always down for a chat.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:thuybohr@gmail.com"
              aria-label="Email"
              className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:size-12"
            >
              <Mail size={18} strokeWidth={1.75} />
            </a>
            <Link
              to="/contact"
              aria-label="Contact"
              className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:size-12"
            >
              <FileText size={18} strokeWidth={1.75} />
            </Link>
            <a
              href="https://www.linkedin.com/in/thuy-nguyen-46505121b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:size-12"
            >
              <Linkedin size={18} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-14 flex min-h-[300px] items-center py-6 sm:mt-16 sm:min-h-[340px] sm:py-8 md:mt-20 md:min-h-[380px]">
        <div
          className="connect-footer-marquee absolute inset-0 flex items-center"
          aria-label={name}
        >
          <div className="connect-footer-marquee-track">
            <span className="connect-footer-name">{name}</span>
            <span className="connect-footer-name" aria-hidden="true">
              {name}
            </span>
            <span className="connect-footer-name" aria-hidden="true">
              {name}
            </span>
            <span className="connect-footer-name" aria-hidden="true">
              {name}
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full justify-center px-6">
          <ContactPager />
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-5xl flex-col gap-2 px-6 pb-8 text-[12px] text-white/45 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:pb-10 md:px-12">
        <p>© 2026 Monica Nguyen</p>
        <p>Built with love</p>
      </div>
    </footer>
  );
}

import { FileText, Mail } from "lucide-react";
import { ContactPager } from "./ContactPager";
import { SITE } from "../data/site";

const iconClass =
  "flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:size-12";

export function ConnectFooter() {
  return (
    <footer className="relative z-0 overflow-hidden bg-black text-white">
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
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className={iconClass}
            >
              <Mail size={18} strokeWidth={1.75} />
            </a>
            <a
              href={SITE.cv}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
              className={iconClass}
            >
              <FileText size={18} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-14 flex min-h-[300px] items-center py-6 sm:mt-16 sm:min-h-[340px] sm:py-8 md:mt-20 md:min-h-[380px]">
        <div
          className="connect-footer-marquee absolute inset-0 flex items-center"
          aria-label={SITE.name}
        >
          <div className="connect-footer-marquee-track">
            <span className="connect-footer-name">{SITE.name}</span>
            <span className="connect-footer-name" aria-hidden="true">
              {SITE.name}
            </span>
            <span className="connect-footer-name" aria-hidden="true">
              {SITE.name}
            </span>
            <span className="connect-footer-name" aria-hidden="true">
              {SITE.name}
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full justify-center px-6">
          <ContactPager />
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-5xl flex-col gap-2 px-6 pb-8 text-[12px] text-white/45 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:pb-10 md:px-12">
        <p>© 2026 {SITE.name}</p>
        <p>Built with love</p>
      </div>
    </footer>
  );
}

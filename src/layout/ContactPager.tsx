import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";
import { SITE } from "../data/site";

function formatTime(date: Date) {
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

export function ContactPager() {
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const tick = () => setTime(formatTime(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="contact-pager">
      <div className="contact-pager-shell">
        <div className="contact-pager-screen">
          <div className="flex items-center justify-between font-mono text-[11px] text-black/80 sm:text-xs">
            <span>2G</span>
            <span>{time}</span>
          </div>

          <div className="mt-8 flex flex-1 flex-col items-center justify-center text-center sm:mt-10">
            <p className="contact-pager-caption">Contact me via email</p>
            <a
              href={`mailto:${SITE.email}`}
              className="contact-pager-email mt-2 block"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <p className="mt-4 text-[13px] italic tracking-wide text-white/70 sm:mt-5 sm:text-[14px]">
          MN Communications
        </p>

        <div className="contact-pager-actions">
          <div className="contact-pager-actions-left">
            <div className="contact-pager-speaker" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="contact-pager-icon"
            >
              <Github size={18} strokeWidth={1.75} />
            </a>

            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="contact-pager-icon"
            >
              <Linkedin size={18} strokeWidth={1.75} />
            </a>
          </div>

          <a
            href={`mailto:${SITE.email}`}
            className="contact-pager-btn contact-pager-btn-primary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

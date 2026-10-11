import { useEffect, useState } from "react";
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

        <div className="mt-5 flex items-center gap-2.5 sm:mt-6 sm:gap-3">
          <div className="contact-pager-speaker" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pager-btn contact-pager-btn-secondary"
          >
            LinkedIn
          </a>

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

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Signal, BatteryFull } from "lucide-react";

const EMAIL = "thuybohr@gmail.com";

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
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.08em] text-black/70 sm:text-xs">
              <Signal size={12} strokeWidth={2.5} className="opacity-80" />
              <span>2G</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-black/70 sm:text-xs">
              <span>{time}</span>
              <BatteryFull size={13} strokeWidth={2.25} className="opacity-80" />
            </div>
          </div>

          <div className="mt-7 flex flex-1 flex-col items-center justify-center text-center sm:mt-8">
            <p className="contact-pager-caption">Contact me via email</p>
            <a
              href={`mailto:${EMAIL}`}
              className="contact-pager-email mt-2 block"
            >
              {EMAIL}
            </a>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-black/45 sm:text-[11px]">
              inbox open · seattle
            </p>
          </div>

          <div className="mt-5 flex items-end justify-between gap-3">
            <div className="contact-pager-bars" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <span className="font-mono text-[10px] text-black/50 sm:text-[11px]">
              MSG 01/01
            </span>
          </div>
        </div>

        <p className="mt-4 text-[13px] italic tracking-wide text-white/75 sm:mt-5 sm:text-[14px]">
          MN Communications
        </p>

        <div className="mt-5 flex items-center gap-2.5 sm:mt-6 sm:gap-3">
          <div className="contact-pager-speaker" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <Link
            to="/"
            aria-label="Close"
            className="contact-pager-btn contact-pager-btn-mute"
          >
            <X size={15} strokeWidth={2.5} />
          </Link>

          <a
            href="https://www.linkedin.com/in/thuy-nguyen-46505121b/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pager-btn contact-pager-btn-secondary"
          >
            LinkedIn
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="contact-pager-btn contact-pager-btn-primary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

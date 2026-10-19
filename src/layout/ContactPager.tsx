import { useEffect, useState } from "react";
import { Github } from "lucide-react";
import { SITE } from "../data/site";

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
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
        <div className="contact-pager-well">
          <div className="contact-pager-screen">
            <div className="contact-pager-status">
              <span>2G</span>
              <span>{time}</span>
            </div>

            <div className="contact-pager-message">
              <p className="contact-pager-caption">Contact me via email</p>
              <a href={`mailto:${SITE.email}`} className="contact-pager-email">
                {SITE.email}
              </a>
            </div>
          </div>

          <p className="contact-pager-brand">Monica 1XXX</p>
        </div>

        <div className="contact-pager-actions">
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
            className="contact-pager-key"
          >
            <Github size={16} strokeWidth={1.75} />
          </a>

          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-pager-pill"
          >
            LinkedIn
          </a>

          <a href={`mailto:${SITE.email}`} className="contact-pager-cta">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

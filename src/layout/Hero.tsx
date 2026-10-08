import { Button } from "../components/button";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { useState } from "react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "thuybohr@gmail.com";

  const handleCTAClick = (target: string) => {
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="section-pad">
      <div className="page-column flex flex-col items-center text-center">
        <ImageWithFallback
          src="/monica_avatar.png"
          alt="Monica Nguyen"
          className="mb-8 size-24 rounded-full object-cover border border-hairline"
        />

        <h1 className="display-xl text-ink max-w-xl">
          Associate Full Stack Engineer building things people enjoy using
        </h1>

        <p className="mt-4 text-body-sm text-body max-w-md">
          Seattle, Washington · Computer Science grad focused on clean code and clear UX
        </p>

        <div className="mt-8 w-full max-w-lg">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="install-snippet w-full justify-between text-left"
            aria-label="Copy email address"
          >
            <span className="truncate">mailto:{email}</span>
            {copied ? (
              <Check size={16} className="shrink-0 text-charcoal" />
            ) : (
              <Copy size={16} className="shrink-0 text-mute" />
            )}
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button onClick={() => handleCTAClick("#work")}>View my work</Button>
          <Button variant="secondary" onClick={() => handleCTAClick("#contact")}>
            Get in touch
          </Button>
        </div>

        <div className="mt-10 flex items-center gap-6">
          {[
            {
              href: "https://github.com/Monica20030707",
              icon: Github,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/thuy-nguyen-46505121b/",
              icon: Linkedin,
              label: "LinkedIn",
            },
            {
              href: `mailto:${email}`,
              icon: Mail,
              label: "Email",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                social.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="text-charcoal"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

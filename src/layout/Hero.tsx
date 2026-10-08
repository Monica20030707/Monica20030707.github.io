import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { InkField } from "../components/InkField";
import { SiteFooter } from "./Footer";

const chapters = [
  {
    to: "/about",
    index: "01",
    label: "About",
    text: "A CS grad who likes turning ideas into things people enjoy.",
  },
  {
    to: "/skills",
    index: "02",
    label: "Skills",
    text: "Frontend, backend, and the tools I reach for when shipping.",
  },
  {
    to: "/work",
    index: "03",
    label: "Work",
    text: "Health tools, documents, data, and a few experiments.",
  },
];

export function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "thuybohr@gmail.com";

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
    <section className="relative flex min-h-[calc(100dvh-56px)] flex-col overflow-hidden">
      <InkField />

      <div className="page-enter relative z-10 flex flex-1 flex-col">
        <div className="flex flex-1 items-center">
          <div className="page-column flex w-full flex-col items-center py-16 text-center">
            <ImageWithFallback
              src="/monica_avatar.png"
              alt="Monica Nguyen"
              className="mb-6 size-20 rounded-full border border-hairline object-cover"
            />

            <h1 className="display-hero text-ink">Monica Nguyen</h1>
            <p className="mt-3 text-body-md text-charcoal">
              Associate Full Stack Engineer
            </p>
            <p className="mt-1 max-w-md text-body-sm text-body">
              Seattle, Washington · building things people enjoy using
            </p>

            <div className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-3">
              {chapters.map((chapter) => (
                <Link
                  key={chapter.to}
                  to={chapter.to}
                  className="group bg-canvas/75 px-5 py-5 text-left backdrop-blur-sm transition-colors hover:bg-canvas"
                >
                  <span className="font-mono text-caption-sm text-mute transition-colors group-hover:text-ink">
                    {chapter.index}
                  </span>
                  <span className="mt-2 block font-display text-heading-md text-ink">
                    {chapter.label}
                  </span>
                  <span className="mt-1 block text-body-sm text-body">
                    {chapter.text}
                  </span>
                </Link>
              ))}
            </div>

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

            <div className="mt-8 flex items-center gap-6">
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
        </div>
        <SiteFooter />
      </div>
    </section>
  );
}

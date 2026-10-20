import { Button } from "../components/button";
import { Input } from "../components/input";
import { Textarea } from "../components/textarea";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { SITE } from "../data/site";

export function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio contact");
    const body = encodeURIComponent(
      `From: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setFormData({ email: "", message: "" });
  };

  return (
    <section className="contact-page">
      <div className="contact-page-inner">
        <div className="contact-page-intro">
          <h1 className="display-hero text-balance text-ink">
            Let&apos;s{" "}
            <em className="italic">connect</em>
          </h1>
          <p className="contact-page-lede">
            Ready to collaborate on something useful? Send a note, or find me on
            the usual platforms.
          </p>

          <p className="contact-page-email-line">
            Email me at{" "}
            <a href={`mailto:${SITE.email}`} className="contact-page-email">
              {SITE.email}
            </a>
          </p>

          <div className="contact-page-social">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-page-chip"
            >
              <Github size={16} strokeWidth={1.75} />
              GitHub
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-page-chip"
            >
              <Linkedin size={16} strokeWidth={1.75} />
              LinkedIn
            </a>
            <a
              href={SITE.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-page-chip"
            >
              <FileText size={16} strokeWidth={1.75} />
              CV
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-page-form">
          <div className="contact-page-field">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="contact-page-input"
            />
          </div>

          <div className="contact-page-field">
            <label htmlFor="message">Message</label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or just say hello..."
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="contact-page-textarea"
            />
          </div>

          <Button type="submit" className="contact-page-submit">
            <Mail size={16} strokeWidth={1.75} />
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
}

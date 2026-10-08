import { Button } from "../components/button";
import { Input } from "../components/input";
import { Textarea } from "../components/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

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
    window.location.href = `mailto:thuybohr@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ email: "", message: "" });
  };

  return (
    <section className="section-pad">
      <div className="page-column">
        <div className="rounded-lg bg-surface-dark text-on-dark px-8 py-6 mb-section-sm md:mb-10">
          <h2 className="heading-lg mb-2">Let&apos;s connect</h2>
          <p className="text-body-sm text-white/70">
            Ready to collaborate on something useful? Send a note.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-body-md text-body">
              Find me on social platforms, or email directly at{" "}
              <a
                href="mailto:thuybohr@gmail.com"
                className="text-ink underline"
              >
                thuybohr@gmail.com
              </a>
              .
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/Monica20030707"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-pill items-center gap-2 rounded-full border border-hairline-strong px-4 text-button-md text-ink"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/thuy-nguyen-46505121b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-pill items-center gap-2 rounded-full border border-hairline-strong px-4 text-button-md text-ink"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-body-sm font-medium text-ink"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-10 rounded-full border-hairline bg-canvas px-4 text-body-md text-ink placeholder:text-mute focus-visible:border-ink focus-visible:ring-focus-ring"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-body-sm font-medium text-ink"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or just say hello..."
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="rounded-lg border-hairline bg-canvas px-4 py-3 text-body-md text-ink placeholder:text-mute focus-visible:border-ink focus-visible:ring-focus-ring resize-none"
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              <Mail size={16} />
              Send message
            </Button>
          </form>
        </div>

      </div>
    </section>
  );
}

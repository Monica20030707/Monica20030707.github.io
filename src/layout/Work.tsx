import { Button } from "../components/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Frailty Tester",
    description:
      "An AI-powered health assessment tool that helps seniors evaluate balance and mobility at home with real-time pose detection and actionable feedback.",
    tags: ["AWS Services"],
    liveUrl: "https://main.d22cx9qmwqrer1.amplifyapp.com/",
    featured: true,
  },
  {
    title: "OrangeLeaf",
    description:
      "A smart LaTeX-to-PDF converter with automated GitHub integration that compiles documents and updates README files on every upload.",
    tags: ["Python"],
    githubUrl: "https://github.com/Monica20030707/OrangeLeaf",
  },
  {
    title: "Stock Tracking Dashboard",
    description:
      "Interactive stock monitoring dashboard using Perspective to visualize live financial data streams with clear, responsive charts.",
    tags: ["Python", "TypeScript"],
    githubUrl: "https://github.com/Monica20030707/tradingDashboard-UI",
  },
  {
    title: "Traffic Violation Tracker",
    description:
      "Automated violation detection on AWS: street camera feeds via S3, matched against DMV data, with EventBridge orchestration.",
    tags: ["AWS Services"],
    githubUrl:
      "https://github.com/Monica20030707/AWS_rekonigition-N-read-database",
  },
  {
    title: "Read Handwritten Dataset",
    description:
      "ANN built from scratch for MNIST digit recognition with manual backpropagation, reaching over 90% accuracy.",
    tags: ["Python", "Machine Learning"],
    githubUrl: "https://github.com/Monica20030707/Artificial-Neutral-Network_ML",
  },
  {
    title: "Reverse Polish Calculator",
    description:
      "Java calculator with ANTLR that evaluates Reverse Polish Notation, including Unicode symbol handling.",
    tags: ["Java", "ANTLR"],
    githubUrl: "https://github.com/Monica20030707/reverse-Polish_calculator",
  },
];

export function Work() {
  return (
    <section className="section-pad">
      <div className="page-column-wide">
        <h2 className="heading-lg text-ink text-center mb-3">
          Featured projects
        </h2>
        <p className="text-body-sm text-body text-center mb-10 max-w-content mx-auto">
          A few builds that show how I ship full-stack product.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => {
            const isDark = project.featured;
            return (
              <article
                key={project.title}
                className={`flex flex-col rounded-lg border p-8 ${
                  isDark
                    ? "bg-surface-dark border-surface-dark text-on-dark"
                    : "bg-canvas border-hairline text-ink"
                }`}
              >
                <h3
                  className={`heading-md mb-2 ${
                    isDark ? "text-on-dark" : "text-ink"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-body-sm mb-4 flex-grow ${
                    isDark ? "text-white/70" : "text-body"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`command-tag ${
                        isDark ? "bg-white/10 text-on-dark" : ""
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  {project.githubUrl && (
                    <Button
                      variant={isDark ? "dark" : "default"}
                      size="sm"
                      className="flex-1"
                      onClick={() =>
                        window.open(
                          project.githubUrl,
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                    >
                      <Github size={14} />
                      GitHub
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant={isDark ? "dark" : project.githubUrl ? "secondary" : "default"}
                      size="sm"
                      className={project.githubUrl ? "" : "flex-1"}
                      onClick={() =>
                        window.open(
                          project.liveUrl,
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                      aria-label={`Open ${project.title} demo`}
                    >
                      <ExternalLink size={14} />
                      {!project.githubUrl && "Live demo"}
                    </Button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

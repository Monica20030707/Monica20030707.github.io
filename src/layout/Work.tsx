import { FloppyDisk } from "./FloppyDisk";
import { PROJECTS } from "../data/projects";

export function Work() {
  const loop = [...PROJECTS, ...PROJECTS];

  return (
    <section className="flex min-h-[calc(100dvh-72px)] flex-col bg-canvas pb-10 pt-10 md:pb-14 md:pt-14">
      <div className="page-column">
        <p className="mb-3 text-center font-mono text-caption-sm text-mute">
          03
        </p>
        <h1 className="heading-lg text-center text-ink">Featured projects</h1>
        <p className="mx-auto mt-3 max-w-content text-center text-body-sm text-body">
          A collection of projects I&apos;ve{" "}
          <strong className="font-medium text-ink">designed</strong> and{" "}
          <strong className="font-medium text-ink">developed</strong>, combining
          creativity, functionality, and seamless user experience.
        </p>
      </div>

      <div
        className="floppy-carousel mt-auto pt-12 sm:pt-14"
        aria-label="Project carousel"
      >
        <div className="floppy-carousel-track">
          {loop.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="floppy-carousel-item"
            >
              <FloppyDisk project={project} index={index % PROJECTS.length} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

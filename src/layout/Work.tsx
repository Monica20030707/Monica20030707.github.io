import { FloppyDisk } from "./FloppyDisk";
import { PROJECTS } from "../data/projects";

export function Work() {
  const loop = [...PROJECTS, ...PROJECTS];

  return (
    <section className="flex min-h-[calc(100dvh-72px)] flex-col bg-canvas">
      <div className="mx-auto flex w-full max-w-wide flex-1 flex-col justify-end px-6 pb-8 pt-16 sm:pb-10 sm:pt-20 md:px-10 lg:pb-12">
        <div className="max-w-[18rem] sm:max-w-xl lg:max-w-2xl">
          <h1 className="display-hero text-balance text-left text-ink">
            I think everyone should try building something nobody{" "}
            <em className="italic">asked</em> them to build.
          </h1>
          <p className="mt-5 max-w-sm text-left text-body-md leading-relaxed text-body sm:mt-6 sm:max-w-md">
            Some of these projects are just school homework, but they gave me
            either ideas or something to learn for my next project. So always
            try to make something that sounds{" "}
            <strong className="font-medium text-ink">fun</strong> to you.
          </p>
        </div>
      </div>

      <div
        className="floppy-shelf"
        aria-label="Project carousel"
      >
        <div className="floppy-carousel">
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
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { FloppyDisk } from "./FloppyDisk";
import { PROJECTS } from "../data/projects";

export function Work() {
  const loop = [...PROJECTS, ...PROJECTS];
  const [flippedKey, setFlippedKey] = useState<string | null>(null);

  useEffect(() => {
    if (!flippedKey) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFlippedKey(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [flippedKey]);

  return (
    <section className="flex min-h-[calc(100dvh-72px)] flex-col bg-canvas">
      <div className="mx-auto flex w-full max-w-wide flex-1 flex-col justify-end px-6 pb-8 pt-16 sm:pb-10 sm:pt-20 md:px-10 lg:pb-12">
        <div className="work-intro max-w-[18rem] sm:max-w-xl lg:max-w-2xl">
          <h1 className="display-hero text-balance text-left text-ink">
            I think everyone should try building{" "}
            <em className="italic">something</em>{" "}
            <em className="work-ask italic">nobody</em> asked them to build.
          </h1>
          <div className="work-lede">
            <p>
              Some of my projects started as{" "}
              <span className="work-mark work-mark-green">school assignments</span>
              , and others came from{" "}
              <span className="work-mark work-mark-pink">little ideas</span> I
              just wanted to try! Each one taught me something new that I got to
              bring into my next project.
            </p>
            <p>
              As I am still in my early-career, I&apos;m still figuring out what
              I know and what I can learn by building. Projects are a{" "}
              <span className="work-mark work-mark-yellow">fun</span> way to try
              things out, hit a few bumps, and learn as I go! You don&apos;t
              need a perfect plan or someone to ask you first. A little{" "}
              <em className="work-hand">curiosity</em> and a place to start is
              enough!
            </p>
          </div>
        </div>
      </div>

      <div
        className={`floppy-shelf${flippedKey ? " is-paused" : ""}`}
        aria-label="Project carousel"
      >
        <div className="floppy-carousel">
          <div className="floppy-carousel-track">
            {loop.map((project, index) => {
              const key = `${project.title}-${index}`;
              return (
                <div key={key} className="floppy-carousel-item">
                  <FloppyDisk
                    project={project}
                    index={index % PROJECTS.length}
                    flipped={flippedKey === key}
                    onFlip={() =>
                      setFlippedKey((current) =>
                        current === key ? null : key
                      )
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

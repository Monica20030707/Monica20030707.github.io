import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import type { FloppyProject } from "../data/projects";

type Props = {
  project: FloppyProject;
  index: number;
};

const MAX_TILT = 6;

export function FloppyDisk({ project, index }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });
  const label = project.shortTitle ?? project.title;

  const onPointerMove = (e: PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    // Cursor side tips backward into the page.
    setTilt({
      x: Math.round((0.5 - py) * MAX_TILT * 10) / 10,
      y: Math.round((px - 0.5) * MAX_TILT * 10) / 10,
      active: true,
    });
  };

  const onPointerLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  return (
    <a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`floppy-disk${tilt.active ? " floppy-disk-tilting" : ""}`}
      style={
        {
          backgroundColor: project.color,
          animationDelay: `${index * 40}ms`,
          "--tilt-x": `${tilt.x}deg`,
          "--tilt-y": `${tilt.y}deg`,
        } as CSSProperties
      }
      aria-label={`${project.title}. ${project.description}`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="floppy-shutter" aria-hidden="true">
        <div className="floppy-shutter-plate">
          <span className="floppy-shutter-slot" />
          <span className="floppy-shutter-slot floppy-shutter-slot-sm" />
        </div>
        <div className="floppy-shutter-ridge" />
      </div>

      <div className="floppy-label">
        <ImageWithFallback
          src={project.image}
          alt=""
          className="floppy-label-art"
          draggable={false}
        />
        <div className="floppy-label-overlay">
          {project.tag && (
            <span className="floppy-label-tag">{project.tag}</span>
          )}
          <p className="floppy-label-title">{label}</p>
        </div>
      </div>

      <div className="floppy-footer">
        <span className="floppy-footer-key">TITLE</span>
        <span className="floppy-footer-name">{label}</span>
        <span className="floppy-tab" aria-hidden="true" />
      </div>
    </a>
  );
}

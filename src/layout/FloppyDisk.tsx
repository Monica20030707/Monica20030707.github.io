import { ImageWithFallback } from "../components/ImageWithFallback";
import type { FloppyProject } from "../data/projects";

type Props = {
  project: FloppyProject;
  index: number;
};

export function FloppyDisk({ project, index }: Props) {
  const label = project.shortTitle ?? project.title;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="floppy-disk"
      style={{ backgroundColor: project.color, animationDelay: `${index * 40}ms` }}
      aria-label={`${project.title}. ${project.description}`}
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

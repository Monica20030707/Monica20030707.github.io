import {
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { ImageWithFallback } from "../components/ImageWithFallback";
import type { FloppyProject } from "../data/projects";
import shapeSrc from "../assets/floppy-disk/Shape.png";
import steelSrc from "../assets/floppy-disk/Steel.png";
import darkInsideSrc from "../assets/floppy-disk/Dark-Inside.png";
import noiseSrc from "../assets/floppy-disk/noise.png";

type Props = {
  project: FloppyProject;
  index: number;
  flipped?: boolean;
  onFlip?: () => void;
};

const MAX_TILT = 5;

/*
 * Geometry on the 380x400 art board (same size as Shape.png):
 *   - Dark-Inside (bay + magnetic window)  269x123 @ (37, 1)
 *   - Steel shutter                        205x126 @ (88, -2) closed, (37, -2) open
 *   - Label                                300x226 @ (40, 174)
 *   - Molded arrow                          16x27  @ (10, 25)
 *   - Molded square / write-protect hole    16x16  @ (10, 360) / (354, 360)
 * Everything below is expressed as a percentage of that board so it scales.
 */
function FloppyShell({
  children,
  showMetal = true,
}: {
  children: ReactNode;
  showMetal?: boolean;
}) {
  return (
    <>
      <span className="floppy-body" aria-hidden="true" />
      <span className="floppy-noise" aria-hidden="true" />
      <span className="floppy-noise floppy-noise-deep" aria-hidden="true" />
      <span className="floppy-shade" aria-hidden="true" />
      {showMetal && (
        <>
          <img
            src={darkInsideSrc}
            alt=""
            draggable={false}
            className="floppy-bay"
            aria-hidden="true"
          />
          <span className="floppy-index-hole" aria-hidden="true" />
          <img
            src={steelSrc}
            alt=""
            draggable={false}
            className="floppy-steel"
            aria-hidden="true"
          />
          <svg
            className="floppy-arrow"
            viewBox="0 0 16 27"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M8 1 L15 15 H11.5 V26 H4.5 V15 H1 Z" />
          </svg>
          <span className="floppy-notch floppy-notch-left" aria-hidden="true" />
          <span
            className="floppy-notch floppy-notch-right"
            aria-hidden="true"
          />
        </>
      )}
      {children}
    </>
  );
}

function FloppyBackContent({ project }: { project: FloppyProject }) {
  return (
    <div className="floppy-back-surface">
      <div className="floppy-back-top">
        {project.tag && <span className="floppy-back-tag">{project.tag}</span>}
        <p className="floppy-back-title">{project.title}</p>
        <p className="floppy-back-copy">{project.description}</p>
      </div>

      {project.stack && project.stack.length > 0 && (
        <div className="floppy-back-stack">
          <span className="floppy-back-kicker">Tech stack</span>
          <div className="floppy-back-chips">
            {project.stack.map((item) => (
              <span key={item} className="floppy-back-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.details && project.details.length > 0 && (
        <ul className="floppy-back-details">
          {project.details.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      )}

      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="floppy-back-link"
        onClick={(e) => e.stopPropagation()}
      >
        Open project
      </a>
    </div>
  );
}

export function FloppyDisk({ project, index, flipped = false, onFlip }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });
  const label = project.shortTitle ?? project.title;

  const shellStyle = {
    animationDelay: `${index * 40}ms`,
    "--floppy-color": project.color,
    "--floppy-shape": `url(${shapeSrc})`,
    "--floppy-noise": `url(${noiseSrc})`,
  } as CSSProperties;

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (flipped) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: Math.round((0.5 - py) * MAX_TILT * 10) / 10,
      y: Math.round((px - 0.5) * MAX_TILT * 10) / 10,
      active: true,
    });
  };

  const onPointerLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onFlip?.();
  };

  const modal =
    flipped &&
    createPortal(
      <>
        <button
          type="button"
          className="floppy-backdrop"
          aria-label="Close project details"
          onClick={() => onFlip?.()}
        />
        <div
          className="floppy-disk-modal"
          style={shellStyle}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title}. ${project.description}`}
          onClick={(e) => e.stopPropagation()}
        >
          <FloppyShell showMetal={false}>
            <FloppyBackContent project={project} />
          </FloppyShell>
        </div>
      </>,
      document.body
    );

  return (
    <div className="floppy-disk-slot">
      <div
        ref={ref}
        role="button"
        tabIndex={0}
        className={[
          "floppy-disk",
          tilt.active ? "floppy-disk-tilting" : "",
          flipped ? "is-opening" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={
          {
            ...shellStyle,
            "--tilt-x": `${tilt.x}deg`,
            "--tilt-y": `${tilt.y}deg`,
          } as CSSProperties
        }
        aria-label={`${project.title}. Click to read about this project.`}
        aria-pressed={flipped}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onFlip?.();
          }
        }}
      >
        <FloppyShell>
          <div className="floppy-label">
            <div className="floppy-label-art-wrap">
              <ImageWithFallback
                src={project.image}
                alt=""
                className="floppy-label-art"
                draggable={false}
              />
              {project.tag && (
                <span className="floppy-label-tag">{project.tag}</span>
              )}
            </div>
            <div className="floppy-footer">
              <span className="floppy-footer-key">Title</span>
              <span className="floppy-footer-name">{label}</span>
              <span className="floppy-footer-rule" aria-hidden="true" />
            </div>
          </div>
        </FloppyShell>
      </div>
      {modal}
    </div>
  );
}

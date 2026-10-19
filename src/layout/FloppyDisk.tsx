import {
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight } from "lucide-react";
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

/* Dark window inside Dark-Inside.png on the 380x400 board, with the shutter open. */
const WINDOW = { x: 171, y: 21, w: 40, h: 90 };
const BOARD = { w: 380, h: 400 };
const POP_MS = 520;
const POP_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

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
  const meta = [
    project.client ? { label: "Client", value: project.client } : null,
    project.service ? { label: "Service", value: project.service } : null,
    project.year ? { label: "Year", value: project.year } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="floppy-back-surface">
      <div className="floppy-back-info">
        <h2 className="floppy-back-title">{project.title}</h2>
        <p className="floppy-back-copy">{project.description}</p>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="floppy-back-link"
          onClick={(e) => e.stopPropagation()}
        >
          View Project
          <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
        </a>

        {meta.length > 0 && (
          <dl className="floppy-back-meta">
            {meta.map((item) => (
              <div key={item.label} className="floppy-back-meta-item">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <figure className="floppy-back-frame">
        <ImageWithFallback
          src={project.image}
          alt=""
          className="floppy-back-frame-art"
          draggable={false}
        />
      </figure>
    </div>
  );
}

export function FloppyDisk({ project, index, flipped = false, onFlip }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const originRef = useRef<DOMRect | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });
  const label = project.shortTitle ?? project.title;

  const toggle = () => {
    const el = ref.current;
    if (!flipped && el) {
      const r = el.getBoundingClientRect();
      originRef.current = new DOMRect(
        r.left + (r.width * WINDOW.x) / BOARD.w,
        r.top + (r.height * WINDOW.y) / BOARD.h,
        (r.width * WINDOW.w) / BOARD.w,
        (r.height * WINDOW.h) / BOARD.h
      );
    }
    onFlip?.();
  };

  /* Grow the card out of the disk's dark window. */
  useLayoutEffect(() => {
    const modal = modalRef.current;
    const from = originRef.current;
    if (!flipped || !modal || !from) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const to = modal.getBoundingClientRect();
    const dx = from.left + from.width / 2 - (to.left + to.width / 2);
    const dy = from.top + from.height / 2 - (to.top + to.height / 2);
    const sx = from.width / to.width;
    const sy = from.height / to.height;

    modal.style.animation = "none";
    const pop = modal.animate(
      [
        {
          transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
          backgroundColor: "#2b2b2b",
        },
        {
          transform: "translate(-50%, -50%)",
          backgroundColor: "#0c0c0c",
        },
      ],
      { duration: POP_MS, easing: POP_EASE }
    );

    const gloss = modal.querySelector<HTMLElement>(".floppy-modal-gloss");
    const glossFade = gloss?.animate(
      [{ opacity: 1 }, { opacity: 0.8, offset: 0.35 }, { opacity: 0 }],
      { duration: POP_MS, easing: "ease-out", fill: "forwards" }
    );

    const surface = modal.querySelector<HTMLElement>(".floppy-back-surface");
    const reveal = surface?.animate(
      [{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }],
      { duration: POP_MS, easing: "ease-out" }
    );

    return () => {
      pop.cancel();
      glossFade?.cancel();
      reveal?.cancel();
    };
  }, [flipped]);

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
    toggle();
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
          ref={modalRef}
          className="floppy-disk-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title}. ${project.description}`}
          onClick={(e) => e.stopPropagation()}
        >
          <span className="floppy-modal-gloss" aria-hidden="true" />
          <FloppyBackContent project={project} />
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
            toggle();
          }
        }}
      >
        <FloppyShell>
          <span className="floppy-label-ridge" aria-hidden="true" />
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

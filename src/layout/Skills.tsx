import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { SKILL_NOTES } from "../data/skills";
import { SkillNoteCard } from "../components/SkillNoteCard";
import { clamp } from "../utils/clamp";

/** Extra board past the visible frame on each side (fraction of the viewport). */
const BOARD_OVERFLOW = 0.09;

export function Skills() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const panStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(
    null
  );
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [panning, setPanning] = useState(false);

  const maxPan = () => {
    const viewport = viewportRef.current;
    if (!viewport) return { x: 0, y: 0 };
    const { width, height } = viewport.getBoundingClientRect();
    return {
      x: width * BOARD_OVERFLOW,
      y: height * BOARD_OVERFLOW,
    };
  };

  const onBoardPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    e.preventDefault();
    panStart.current = {
      x: e.clientX,
      y: e.clientY,
      ox: pan.x,
      oy: pan.y,
    };
    setPanning(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onBoardPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!panStart.current) return;
    const limit = maxPan();
    setPan({
      x: clamp(
        panStart.current.ox + (e.clientX - panStart.current.x),
        -limit.x,
        limit.x
      ),
      y: clamp(
        panStart.current.oy + (e.clientY - panStart.current.y),
        -limit.y,
        limit.y
      ),
    });
  };

  const onBoardPointerUp = () => {
    panStart.current = null;
    setPanning(false);
  };

  const boardSize = `${(1 + BOARD_OVERFLOW * 2) * 100}%`;
  const boardOrigin = `${-BOARD_OVERFLOW * 100}%`;

  return (
    <section className="page-enter fixed inset-0 z-0 overflow-hidden bg-[#fafafa]">
      <div
        ref={viewportRef}
        className={`absolute inset-0 touch-none ${
          panning ? "cursor-grabbing" : "cursor-grab"
        }`}
        onPointerDown={onBoardPointerDown}
        onPointerMove={onBoardPointerMove}
        onPointerUp={onBoardPointerUp}
        onPointerCancel={onBoardPointerUp}
      >
        <div
          className="absolute bg-[#fafafa] [background-image:radial-gradient(#d4d4d4_1.1px,transparent_1.1px)] [background-size:28px_28px] will-change-transform"
          style={{
            width: boardSize,
            height: boardSize,
            left: boardOrigin,
            top: boardOrigin,
            transform: `translate3d(${pan.x}px, ${pan.y}px, 0)`,
          }}
          aria-label="Skills board"
        >
          {SKILL_NOTES.map((note) => (
            <SkillNoteCard
              key={note.label}
              note={note}
              left={note.left}
              top={note.top}
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[min(92vw,280px)] -translate-x-1/2 -translate-y-1/2 max-sm:top-[22%] max-sm:w-[min(92vw,240px)]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full max-sm:h-[260px] max-sm:w-[260px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(250,250,250,0.98) 0%, rgba(250,250,250,0.92) 38%, rgba(250,250,250,0.55) 62%, transparent 78%)",
          }}
        />
        <div className="relative flex flex-col items-center text-center">
          <h1 className="mt-4 font-display text-[42px] leading-none text-ink sm:text-[52px]">
            Skills
          </h1>
          <p className="mt-4 text-[14px] leading-[1.45] text-body sm:text-[15px]">
            Tools I reach for
            <br />
            when shipping
            <br />
            product &amp; side
            <br />
            projects
          </p>
        </div>
      </div>
    </section>
  );
}

import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { SKILL_NOTES } from "../data/skills";
import { SkillNoteCard } from "../components/SkillNoteCard";
import { usePercentDrag } from "../hooks/usePercentDrag";

export function Skills() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const panStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(
    null
  );
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [panning, setPanning] = useState(false);

  const initial = Object.fromEntries(
    SKILL_NOTES.map((n) => [n.label, { left: n.left, top: n.top }])
  );
  const { positions, dragging, onPointerDown, onPointerMove, onPointerUp } =
    usePercentDrag({ canvasRef, initial, pad: false });

  const onBoardPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 || dragging) return;
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
    if (!panStart.current || dragging) return;
    setPan({
      x: panStart.current.ox + (e.clientX - panStart.current.x),
      y: panStart.current.oy + (e.clientY - panStart.current.y),
    });
  };

  const onBoardPointerUp = () => {
    panStart.current = null;
    setPanning(false);
  };

  return (
    <section className="page-enter fixed inset-0 z-0 overflow-hidden bg-[#fafafa]">
      <div
        className={`absolute inset-0 touch-none ${
          dragging || panning ? "cursor-grabbing" : "cursor-grab"
        }`}
        onPointerDown={onBoardPointerDown}
        onPointerMove={onBoardPointerMove}
        onPointerUp={onBoardPointerUp}
        onPointerCancel={onBoardPointerUp}
      >
        {/* Infinite tiled dots — shift with pan, no edge */}
        <div
          className="absolute inset-0 z-0 bg-[#fafafa] [background-image:radial-gradient(circle,#d4d4d4_0.65px,transparent_1.35px)] [background-size:36px_36px]"
          style={{ backgroundPosition: `${pan.x}px ${pan.y}px` }}
          aria-hidden="true"
        />

        {/* Fixed center copy — above dots, below notes */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[min(92vw,280px)] -translate-x-1/2 -translate-y-1/2 max-sm:top-[22%] max-sm:w-[min(92vw,240px)]">
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

        {/* Stickers — drag individually; empty space pans the board */}
        <div
          ref={canvasRef}
          className="absolute inset-0 z-20 will-change-transform"
          style={{ transform: `translate3d(${pan.x}px, ${pan.y}px, 0)` }}
          aria-label="Skills board"
        >
          {SKILL_NOTES.map((note) => {
            const pos = positions[note.label] ?? {
              left: note.left,
              top: note.top,
            };
            return (
              <SkillNoteCard
                key={note.label}
                note={note}
                left={pos.left}
                top={pos.top}
                dragging={dragging === note.label}
                onPointerDown={(e) => onPointerDown(e, note.label)}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

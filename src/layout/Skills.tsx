import { useRef } from "react";
import { ImageIcon } from "lucide-react";
import { SKILL_NOTES } from "../data/skills";
import { SkillNoteCard } from "../components/SkillNoteCard";
import { usePercentDrag } from "../hooks/usePercentDrag";

export function Skills() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const initial = Object.fromEntries(
    SKILL_NOTES.map((n) => [n.label, { left: n.left, top: n.top }])
  );
  const { positions, dragging, onPointerDown, onPointerMove, onPointerUp } =
    usePercentDrag({ canvasRef, initial });

  return (
    <section className="relative min-h-[calc(100dvh-72px)] overflow-hidden bg-[#fafafa] [background-image:radial-gradient(#d4d4d4_1.1px,transparent_1.1px)] [background-size:22px_22px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[min(92vw,280px)] -translate-x-1/2 -translate-y-1/2 max-sm:top-[18%] max-sm:w-[min(92vw,240px)]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full max-sm:h-[260px] max-sm:w-[260px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(250,250,250,0.98) 0%, rgba(250,250,250,0.92) 38%, rgba(250,250,250,0.55) 62%, transparent 78%)",
          }}
        />
        <div className="relative flex flex-col items-center text-center">
          <ImageIcon
            size={28}
            strokeWidth={1.5}
            className="text-mute"
            aria-hidden="true"
          />
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

      <div
        ref={canvasRef}
        className="relative z-0 mx-auto h-[min(920px,calc(100dvh-72px))] min-h-[680px] w-full max-w-6xl touch-none max-sm:h-[780px] max-sm:min-h-[780px]"
        aria-label="Draggable skills board"
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
    </section>
  );
}

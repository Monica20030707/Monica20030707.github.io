import type { CSSProperties, PointerEventHandler } from "react";
import type { SkillNote } from "../data/skills";
import { cn } from "../utils/utils";

const sizeClass = {
  sm: "skill-note-sm",
  md: "skill-note-md",
  lg: "skill-note-lg",
} as const;

type Props = {
  note: SkillNote;
  left: number;
  top: number;
  dragging?: boolean;
  onPointerDown: PointerEventHandler<HTMLElement>;
  onPointerMove: PointerEventHandler<HTMLElement>;
  onPointerUp: PointerEventHandler<HTMLElement>;
};

export function SkillNoteCard({
  note,
  left,
  top,
  dragging,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: Props) {
  return (
    <article
      className={cn(
        "skill-note",
        sizeClass[note.size ?? "md"],
        dragging && "skill-note-dragging"
      )}
      style={
        {
          backgroundColor: note.color,
          "--note-rotate": `${note.rotate}deg`,
          left: `${left}%`,
          top: `${top}%`,
        } as CSSProperties
      }
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <span className="skill-note-group">{note.group}</span>
      <p className="skill-note-label">{note.label}</p>
    </article>
  );
}

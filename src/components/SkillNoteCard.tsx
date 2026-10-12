import type { CSSProperties } from "react";
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
};

export function SkillNoteCard({ note, left, top }: Props) {
  return (
    <article
      className={cn("skill-note", sizeClass[note.size ?? "md"])}
      style={
        {
          backgroundColor: note.color,
          "--note-rotate": `${note.rotate}deg`,
          left: `${left}%`,
          top: `${top}%`,
        } as CSSProperties
      }
    >
      <span className="skill-note-group">{note.group}</span>
      <p className="skill-note-label">{note.label}</p>
    </article>
  );
}

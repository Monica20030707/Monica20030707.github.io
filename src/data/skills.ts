export type SkillNote = {
  label: string;
  group: "Frontend" | "Backend" | "Tools";
  color: string;
  rotate: number;
  size?: "sm" | "md" | "lg";
  left: number;
  top: number;
};

export const SKILL_NOTES: SkillNote[] = [
  { label: "React", group: "Frontend", color: "#fff4a8", rotate: -8, size: "lg", left: 8, top: 10 },
  { label: "TypeScript", group: "Frontend", color: "#d7ecff", rotate: 5, size: "md", left: 78, top: 8 },
  { label: "Next.js", group: "Frontend", color: "#ffe0ef", rotate: -3, size: "sm", left: 18, top: 22 },
  { label: "Vue.js", group: "Frontend", color: "#e2f7c8", rotate: 9, size: "md", left: 88, top: 24 },
  { label: "Tailwind", group: "Frontend", color: "#fff4a8", rotate: -11, size: "sm", left: 6, top: 40 },
  { label: "JavaScript", group: "Frontend", color: "#ffe8c8", rotate: 4, size: "md", left: 70, top: 16 },
  { label: "Redux", group: "Frontend", color: "#e8ddff", rotate: -6, size: "sm", left: 30, top: 78 },
  { label: "HTML5", group: "Frontend", color: "#ffd9c8", rotate: 7, size: "sm", left: 82, top: 72 },
  { label: "CSS3", group: "Frontend", color: "#d7ecff", rotate: -4, size: "sm", left: 12, top: 82 },
  { label: "Node.js", group: "Backend", color: "#e2f7c8", rotate: 6, size: "lg", left: 84, top: 44 },
  { label: "Express", group: "Backend", color: "#fff4a8", rotate: -7, size: "md", left: 10, top: 60 },
  { label: "Python", group: "Backend", color: "#d7ecff", rotate: 3, size: "lg", left: 66, top: 84 },
  { label: "Django", group: "Backend", color: "#ffe0ef", rotate: -9, size: "md", left: 28, top: 8 },
  { label: "Go", group: "Backend", color: "#e8ddff", rotate: 10, size: "sm", left: 92, top: 56 },
  { label: "MySQL", group: "Backend", color: "#ffe8c8", rotate: -5, size: "sm", left: 22, top: 48 },
  { label: "PostgreSQL", group: "Backend", color: "#d7ecff", rotate: 4, size: "md", left: 14, top: 28 },
  { label: "MongoDB", group: "Backend", color: "#e2f7c8", rotate: -8, size: "sm", left: 74, top: 64 },
  { label: "Redis", group: "Backend", color: "#ffd9c8", rotate: 6, size: "sm", left: 90, top: 86 },
  { label: "GraphQL", group: "Backend", color: "#ffe0ef", rotate: -2, size: "md", left: 68, top: 32 },
  { label: "Git", group: "Tools", color: "#fff4a8", rotate: 3, size: "md", left: 26, top: 66 },
  { label: "Docker", group: "Tools", color: "#d7ecff", rotate: -10, size: "md", left: 78, top: 88 },
  { label: "AWS", group: "Tools", color: "#ffe8c8", rotate: 7, size: "lg", left: 34, top: 20 },
  { label: "Electron", group: "Tools", color: "#e8ddff", rotate: -4, size: "sm", left: 4, top: 20 },
  { label: "Kotlin", group: "Tools", color: "#e2f7c8", rotate: 8, size: "sm", left: 94, top: 14 },
  { label: "Unreal Engine", group: "Tools", color: "#ffd9c8", rotate: -6, size: "md", left: 8, top: 90 },
  { label: "Figma", group: "Tools", color: "#ffe0ef", rotate: 2, size: "sm", left: 56, top: 90 },
  { label: "VS Code", group: "Tools", color: "#d7ecff", rotate: -3, size: "sm", left: 20, top: 36 },
  { label: "Postman", group: "Tools", color: "#fff4a8", rotate: 5, size: "sm", left: 86, top: 36 },
  { label: "Jest", group: "Tools", color: "#e2f7c8", rotate: -7, size: "sm", left: 40, top: 88 },
];

import {
  Globe2,
  Move,
  GitBranch,
  CornerDownRight,
  Smile,
  Pencil,
  Hash,
  PaintBucket,
  Sparkles,
  Lock,
  Clock,
  MousePointer2,
  Link2,
  type LucideIcon,
} from "lucide-react";

export type StickerKind = "pill" | "dot";

export type StickerBlueprint = {
  id: string;
  kind: StickerKind;
  label?: string;
  color: string;
  icon: LucideIcon;
  spawnX: number;
  spawnY: number;
};

export const STICKERS: StickerBlueprint[] = [
  { id: "dns", kind: "pill", label: "It's always DNS", color: "var(--tag-pink)", icon: Globe2, spawnX: 0.12, spawnY: 0.06 },
  { id: "pixels", kind: "pill", label: "nudging pixels", color: "var(--tag-blue)", icon: Move, spawnX: 0.32, spawnY: 0.02 },
  { id: "merge", kind: "pill", label: "building pipelines", color: "var(--tag-white)", icon: GitBranch, spawnX: 0.52, spawnY: 0.08 },
  { id: "rabbit", kind: "pill", label: "Down the rabbit hole", color: "var(--tag-green)", icon: CornerDownRight, spawnX: 0.72, spawnY: 0.04 },
  { id: "users", kind: "pill", label: "Fix bugs", color: "var(--tag-yellow)", icon: Smile, spawnX: 0.2, spawnY: 0.12 },
  { id: "machine", kind: "pill", label: "Writing tests-ish", color: "var(--tag-purple)", icon: Pencil, spawnX: 0.42, spawnY: 0.1 },
  { id: "shipit", kind: "pill", label: "Ship it", color: "var(--tag-teal)", icon: Hash, spawnX: 0.62, spawnY: 0.14 },
  { id: "gray", kind: "pill", label: "centering divs", color: "var(--tag-orange)", icon: PaintBucket, spawnX: 0.82, spawnY: 0.09 },
  { id: "spark", kind: "dot", color: "var(--tag-yellow)", icon: Sparkles, spawnX: 0.26, spawnY: 0.05 },
  { id: "link", kind: "dot", color: "var(--tag-orange)", icon: Link2, spawnX: 0.5, spawnY: 0.03 },
  { id: "lock", kind: "dot", color: "var(--tag-purple)", icon: Lock, spawnX: 0.7, spawnY: 0.11 },
  { id: "clock", kind: "dot", color: "var(--tag-blue)", icon: Clock, spawnX: 0.88, spawnY: 0.06 },
  { id: "cursor", kind: "dot", color: "var(--tag-white)", icon: MousePointer2, spawnX: 0.38, spawnY: 0.13 },
];

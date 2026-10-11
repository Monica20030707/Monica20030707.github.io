import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import Matter from "matter-js";
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

type Kind = "pill" | "dot";

type Blueprint = {
  id: string;
  kind: Kind;
  label?: string;
  color: string;
  icon: LucideIcon;
  spawnX: number;
  spawnY: number;
};

const BLUEPRINTS: Blueprint[] = [
  {
    id: "thinking",
    kind: "pill",
    label: "Thinking systems",
    color: "var(--tag-pink)",
    icon: Globe2,
    spawnX: 0.12,
    spawnY: 0.1,
  },
  {
    id: "rectangles",
    kind: "pill",
    label: "Moving rectangles",
    color: "var(--tag-blue)",
    icon: Move,
    spawnX: 0.32,
    spawnY: 0.05,
  },
  {
    id: "pipelines",
    kind: "pill",
    label: "Building pipelines",
    color: "var(--tag-white)",
    icon: GitBranch,
    spawnX: 0.52,
    spawnY: 0.12,
  },
  {
    id: "corners",
    kind: "pill",
    label: "Rounding corners",
    color: "var(--tag-green)",
    icon: CornerDownRight,
    spawnX: 0.72,
    spawnY: 0.06,
  },
  {
    id: "ux",
    kind: "pill",
    label: "Improving UX",
    color: "var(--tag-yellow)",
    icon: Smile,
    spawnX: 0.18,
    spawnY: 0.28,
  },
  {
    id: "testing",
    kind: "pill",
    label: "Testing",
    color: "var(--tag-purple)",
    icon: Pencil,
    spawnX: 0.42,
    spawnY: 0.22,
  },
  {
    id: "reframing",
    kind: "pill",
    label: "Reframing problems",
    color: "var(--tag-teal)",
    icon: Hash,
    spawnX: 0.62,
    spawnY: 0.3,
  },
  {
    id: "pop",
    kind: "pill",
    label: "Making it pop",
    color: "var(--tag-orange)",
    icon: PaintBucket,
    spawnX: 0.82,
    spawnY: 0.2,
  },
  {
    id: "spark",
    kind: "dot",
    color: "var(--tag-yellow)",
    icon: Sparkles,
    spawnX: 0.24,
    spawnY: 0.4,
  },
  {
    id: "link",
    kind: "dot",
    color: "var(--tag-orange)",
    icon: Link2,
    spawnX: 0.5,
    spawnY: 0.38,
  },
  {
    id: "lock",
    kind: "dot",
    color: "var(--tag-purple)",
    icon: Lock,
    spawnX: 0.7,
    spawnY: 0.42,
  },
  {
    id: "clock",
    kind: "dot",
    color: "var(--tag-blue)",
    icon: Clock,
    spawnX: 0.88,
    spawnY: 0.34,
  },
  {
    id: "cursor",
    kind: "dot",
    color: "var(--tag-white)",
    icon: MousePointer2,
    spawnX: 0.38,
    spawnY: 0.44,
  },
];

const WALL = 80;
const THROW_SCALE = 0.018;
const MAX_THROW = 28;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function estimateSize(kind: Kind, label?: string) {
  if (kind === "dot") return { w: 44, h: 44 };
  const w = Math.min(260, 68 + (label?.length ?? 8) * 8.2);
  return { w, h: 44 };
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function StickerPile() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const bodiesRef = useRef<Map<string, Matter.Body>>(new Map());
  const wallIdsRef = useRef<number[]>([]);
  const nodeRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const sizeRef = useRef({ w: 0, h: 0 });
  const reducedRef = useRef(false);
  const draggingIdRef = useRef<string | null>(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const lastPointerRef = useRef({ x: 0, y: 0, t: 0 });
  const throwRef = useRef({ vx: 0, vy: 0 });
  const readySizesRef = useRef(false);

  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    reducedRef.current = prefersReducedMotion();
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => {
      reducedRef.current = motionQuery.matches;
      const engine = engineRef.current;
      if (!engine) return;
      engine.gravity.y = reducedRef.current ? 0 : 1.1;
    };
    motionQuery.addEventListener("change", onMotion);

    const engine = Matter.Engine.create({
      gravity: { x: 0, y: reducedRef.current ? 0 : 1.1, scale: 0.001 },
    });
    engineRef.current = engine;

    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    const paint = () => {
      for (const [id, body] of bodiesRef.current) {
        const node = nodeRefs.current.get(id);
        if (!node) continue;
        const isDragging = id === draggingIdRef.current;
        const angle = (body.angle * 180) / Math.PI;
        const bw = (body as Matter.Body & { plugin: { w: number; h: number } })
          .plugin.w;
        const bh = (body as Matter.Body & { plugin: { w: number; h: number } })
          .plugin.h;

        node.style.transform = `translate3d(${body.position.x - bw / 2}px, ${body.position.y - bh / 2}px, 0) rotate(${angle}deg) scale(${isDragging ? 1.06 : 1})`;
        node.style.zIndex = isDragging
          ? "40"
          : String(10 + Math.floor(body.position.y / 12));
      }
    };

    const clearWalls = () => {
      const walls = engine.world.bodies.filter((b) =>
        wallIdsRef.current.includes(b.id)
      );
      Matter.World.remove(engine.world, walls);
      wallIdsRef.current = [];
    };

    const buildWalls = (width: number, height: number) => {
      clearWalls();
      const opts = {
        isStatic: true,
        friction: 0.9,
        restitution: 0.2,
        label: "wall",
      };
      const floor = Matter.Bodies.rectangle(
        width / 2,
        height + WALL / 2,
        width + WALL * 2,
        WALL,
        opts
      );
      const ceiling = Matter.Bodies.rectangle(
        width / 2,
        -WALL / 2,
        width + WALL * 2,
        WALL,
        opts
      );
      const left = Matter.Bodies.rectangle(
        -WALL / 2,
        height / 2,
        WALL,
        height + WALL * 2,
        opts
      );
      const right = Matter.Bodies.rectangle(
        width + WALL / 2,
        height / 2,
        WALL,
        height + WALL * 2,
        opts
      );
      const walls = [floor, ceiling, left, right];
      wallIdsRef.current = walls.map((w) => w.id);
      Matter.World.add(engine.world, walls);
    };

    const clearStickers = () => {
      const stickers = [...bodiesRef.current.values()];
      Matter.World.remove(engine.world, stickers);
      bodiesRef.current.clear();
    };

    const spawnStickers = (width: number, height: number) => {
      clearStickers();

      for (const bp of BLUEPRINTS) {
        const node = nodeRefs.current.get(bp.id);
        let w = estimateSize(bp.kind, bp.label).w;
        let h = estimateSize(bp.kind, bp.label).h;
        if (node) {
          const rect = node.getBoundingClientRect();
          if (rect.width > 0) w = rect.width;
          if (rect.height > 0) h = rect.height;
        }

        const x = clamp(bp.spawnX * width, w / 2 + 8, width - w / 2 - 8);
        const y = reducedRef.current
          ? height - h / 2 - 10
          : clamp(bp.spawnY * height, h / 2 + 8, height * 0.55);
        const angle = reducedRef.current
          ? 0
          : ((Math.random() - 0.5) * 40 * Math.PI) / 180;

        let body: Matter.Body;
        if (bp.kind === "dot") {
          body = Matter.Bodies.circle(x, y, w / 2, {
            label: bp.id,
            restitution: 0.55,
            friction: 0.35,
            frictionAir: 0.02,
            density: 0.0018,
            angle,
          });
        } else {
          body = Matter.Bodies.rectangle(x, y, w, h, {
            label: bp.id,
            chamfer: { radius: Math.min(h / 2, 22) },
            restitution: 0.45,
            friction: 0.45,
            frictionAir: 0.025,
            density: 0.0022,
            angle,
          });
        }

        (body as Matter.Body & { plugin: { w: number; h: number } }).plugin = {
          w,
          h,
        };

        if (reducedRef.current) {
          Matter.Body.setStatic(body, true);
        } else {
          Matter.Body.setVelocity(body, {
            x: (Math.random() - 0.5) * 2,
            y: Math.random() * 1.5,
          });
          Matter.Body.setAngularVelocity(
            body,
            (Math.random() - 0.5) * 0.08
          );
        }

        bodiesRef.current.set(bp.id, body);
        Matter.World.add(engine.world, body);
      }

      paint();
      setReady(true);
      readySizesRef.current = true;
    };

    const layout = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      if (width < 2 || height < 2) return;

      const prev = sizeRef.current;
      sizeRef.current = { w: width, h: height };
      buildWalls(width, height);

      if (!readySizesRef.current || bodiesRef.current.size === 0) {
        // Wait a frame so buttons have layout for measuring
        requestAnimationFrame(() => spawnStickers(width, height));
        return;
      }

      // Soft resize: keep stickers, clamp inside
      if (
        Math.abs(prev.w - width) > 1 ||
        Math.abs(prev.h - height) > 1
      ) {
        for (const body of bodiesRef.current.values()) {
          const bw = (body as Matter.Body & { plugin: { w: number; h: number } })
            .plugin.w;
          const bh = (body as Matter.Body & { plugin: { w: number; h: number } })
            .plugin.h;
          Matter.Body.setPosition(body, {
            x: clamp(body.position.x, bw / 2 + 4, width - bw / 2 - 4),
            y: clamp(body.position.y, bh / 2 + 4, height - bh / 2 - 4),
          });
        }
      }
    };

    layout();
    const observer = new ResizeObserver(layout);
    observer.observe(canvas);

    Matter.Events.on(engine, "afterUpdate", paint);

    const onVisibility = () => {
      if (!runnerRef.current) return;
      if (document.visibilityState === "hidden") {
        Matter.Runner.stop(runnerRef.current);
      } else {
        Matter.Runner.run(runnerRef.current, engine);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      motionQuery.removeEventListener("change", onMotion);
      observer.disconnect();
      Matter.Events.off(engine, "afterUpdate", paint);
      if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
      Matter.Engine.clear(engine);
      engineRef.current = null;
      runnerRef.current = null;
      bodiesRef.current.clear();
    };
  }, []);

  const onPointerDown = (
    e: ReactPointerEvent<HTMLButtonElement>,
    id: string
  ) => {
    const canvas = canvasRef.current;
    const body = bodiesRef.current.get(id);
    if (!canvas || !body || reducedRef.current) return;

    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    dragOffsetRef.current = {
      x: mx - body.position.x,
      y: my - body.position.y,
    };

    Matter.Body.setStatic(body, true);
    Matter.Body.setVelocity(body, { x: 0, y: 0 });
    Matter.Body.setAngularVelocity(body, 0);

    draggingIdRef.current = id;
    setDraggingId(id);
    lastPointerRef.current = {
      x: e.clientX,
      y: e.clientY,
      t: performance.now(),
    };
    throwRef.current = { vx: 0, vy: 0 };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLButtonElement>) => {
    const id = draggingIdRef.current;
    const canvas = canvasRef.current;
    const body = id ? bodiesRef.current.get(id) : null;
    if (!id || !canvas || !body) return;

    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const bw = (body as Matter.Body & { plugin: { w: number; h: number } })
      .plugin.w;
    const bh = (body as Matter.Body & { plugin: { w: number; h: number } })
      .plugin.h;

    Matter.Body.setPosition(body, {
      x: clamp(mx - dragOffsetRef.current.x, bw / 2, rect.width - bw / 2),
      y: clamp(my - dragOffsetRef.current.y, bh / 2, rect.height - bh / 2),
    });

    const now = performance.now();
    const dt = Math.max(0.008, (now - lastPointerRef.current.t) / 1000);
    throwRef.current = {
      vx: (e.clientX - lastPointerRef.current.x) / dt,
      vy: (e.clientY - lastPointerRef.current.y) / dt,
    };
    lastPointerRef.current = { x: e.clientX, y: e.clientY, t: now };
  };

  const onPointerUp = () => {
    const id = draggingIdRef.current;
    if (!id) return;

    const body = bodiesRef.current.get(id);
    if (body) {
      Matter.Body.setStatic(body, false);
      const vx = clamp(throwRef.current.vx * THROW_SCALE, -MAX_THROW, MAX_THROW);
      const vy = clamp(throwRef.current.vy * THROW_SCALE, -MAX_THROW, MAX_THROW);
      Matter.Body.setVelocity(body, { x: vx, y: vy });
      Matter.Body.setAngularVelocity(
        body,
        clamp(vx * 0.01, -0.35, 0.35)
      );
      Matter.Sleeping.set(body, false);
    }

    draggingIdRef.current = null;
    setDraggingId(null);
  };

  return (
    <div
      ref={canvasRef}
      className="sticker-canvas relative h-60 w-full touch-none overflow-hidden sm:h-72 md:h-80"
      role="application"
      aria-label="Draggable sticker canvas with physics. Grab stickers and throw them into each other."
    >
      {BLUEPRINTS.map((bp) => {
        const Icon = bp.icon;
        const isDragging = draggingId === bp.id;
        return (
          <button
            key={bp.id}
            type="button"
            ref={(node) => {
              if (node) nodeRefs.current.set(bp.id, node);
              else nodeRefs.current.delete(bp.id);
            }}
            className={
              bp.kind === "pill"
                ? `sticker sticker-physics ${isDragging ? "cursor-grabbing" : "cursor-grab"}`
                : `sticker-dot sticker-physics ${isDragging ? "cursor-grabbing" : "cursor-grab"}`
            }
            style={{
              backgroundColor: bp.color,
              opacity: ready ? 1 : 0,
            }}
            aria-label={bp.label ?? "Sticker"}
            onPointerDown={(e) => onPointerDown(e, bp.id)}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <Icon size={bp.kind === "dot" ? 16 : 15} strokeWidth={2} />
            {bp.label}
          </button>
        );
      })}
    </div>
  );
}

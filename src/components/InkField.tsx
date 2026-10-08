import { useEffect, useRef } from "react";

type Bloom = {
  ax: number;
  ay: number;
  radius: number;
  speed: number;
  phase: number;
  alpha: number;
};

type Stroke = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  speed: number;
  phase: number;
  wobble: number;
  width: number;
  alpha: number;
  arc: number;
};

const BLOOMS: Bloom[] = [
  { ax: 0.06, ay: 0.16, radius: 300, speed: 0.11, phase: 0.2, alpha: 0.11 },
  { ax: 0.94, ay: 0.1, radius: 250, speed: 0.08, phase: 1.5, alpha: 0.09 },
  { ax: 0.1, ay: 0.88, radius: 340, speed: 0.07, phase: 2.2, alpha: 0.1 },
  { ax: 0.9, ay: 0.8, radius: 270, speed: 0.1, phase: 3.4, alpha: 0.08 },
  { ax: 0.52, ay: 1.02, radius: 360, speed: 0.06, phase: 0.9, alpha: 0.07 },
];

const STROKES: Stroke[] = [
  {
    cx: 0.2,
    cy: 0.38,
    rx: 0.18,
    ry: 0.16,
    speed: 0.07,
    phase: 0.5,
    wobble: 26,
    width: 1.8,
    alpha: 0.18,
    arc: 1.25,
  },
  {
    cx: 0.82,
    cy: 0.62,
    rx: 0.16,
    ry: 0.18,
    speed: 0.055,
    phase: 2.4,
    wobble: 22,
    width: 1.5,
    alpha: 0.16,
    arc: 1.15,
  },
  {
    cx: 0.14,
    cy: 0.74,
    rx: 0.12,
    ry: 0.14,
    speed: 0.09,
    phase: 4.1,
    wobble: 18,
    width: 1.7,
    alpha: 0.17,
    arc: 1.4,
  },
];

const SPECKS: [number, number, number][] = [
  [0.17, 0.28, 2.1],
  [0.86, 0.34, 1.5],
  [0.76, 0.84, 2.6],
  [0.28, 0.78, 1.3],
  [0.62, 0.16, 1.2],
];

export function InkField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0, y: 0, active: false };
    const brush = { x: 0, y: 0, strength: 0 };
    let reduced = motion.matches;
    let frame = 0;
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointer = (event: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const inside =
        x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      pointer.active = inside;
      if (inside) {
        pointer.x = x;
        pointer.y = y;
      }
    };

    const drawBloom = (
      x: number,
      y: number,
      radius: number,
      alpha: number,
    ) => {
      const gradient = context.createRadialGradient(
        x,
        y,
        radius * 0.04,
        x,
        y,
        radius,
      );
      gradient.addColorStop(0, `rgba(9, 9, 9, ${alpha})`);
      gradient.addColorStop(0.4, `rgba(23, 23, 23, ${alpha * 0.42})`);
      gradient.addColorStop(1, "rgba(9, 9, 9, 0)");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    };

    const taperAt = (t: number) => Math.sin(t * Math.PI) * (1 - t * 0.28);

    const paintStroke = (
      points: { x: number; y: number; t: number }[],
      width: number,
      alpha: number,
    ) => {
      for (let i = 1; i < points.length; i += 1) {
        const taper = taperAt(points[i].t);
        context.beginPath();
        context.lineCap = "round";
        context.lineJoin = "round";
        context.strokeStyle = `rgba(9, 9, 9, ${alpha * taper})`;
        context.lineWidth = Math.max(0.3, width * taper);
        context.moveTo(points[i - 1].x, points[i - 1].y);
        context.lineTo(points[i].x, points[i].y);
        context.stroke();
      }
    };

    const stampBrush = (
      points: { x: number; y: number; t: number }[],
      radius: number,
      alpha: number,
    ) => {
      for (let i = 0; i < points.length; i += 2) {
        const point = points[i];
        const taper = taperAt(point.t);
        const mark = Math.max(0.4, radius * taper);
        context.beginPath();
        context.fillStyle = `rgba(9, 9, 9, ${alpha * (0.35 + taper)})`;
        context.ellipse(
          point.x,
          point.y,
          mark * 1.7,
          mark * 0.55,
          point.t * 3.2,
          0,
          Math.PI * 2,
        );
        context.fill();
      }
    };

    const ensoPoints = (width: number, height: number, time: number) => {
      const count = 96;
      const radius = Math.min(width, height) * 0.42;
      const cx = width * 0.5;
      const cy = height * 0.46;
      const gap = 0.95;
      const start = time * 0.045;
      const points: { x: number; y: number; t: number }[] = [];

      for (let i = 0; i <= count; i += 1) {
        const t = i / count;
        const angle = start + gap * 0.5 + t * (Math.PI * 2 - gap);
        const flutter = Math.sin(t * 5.5 + time * 0.28) * 12;
        const pressure = 0.9 + Math.sin(t * Math.PI) * 0.12;
        points.push({
          x: cx + Math.cos(angle) * (radius + flutter) * pressure,
          y: cy + Math.sin(angle) * (radius * 0.9 + flutter * 0.55),
          t,
        });
      }

      return points;
    };

    const sideStroke = (stroke: Stroke, width: number, height: number, time: number) => {
      const count = 64;
      const points: { x: number; y: number; t: number }[] = [];
      const start = time * stroke.speed + stroke.phase;

      for (let i = 0; i <= count; i += 1) {
        const t = i / count;
        const angle = start + t * Math.PI * stroke.arc;
        const flutter = Math.sin(t * 6.5 + time * 0.32 + stroke.phase) * stroke.wobble;
        const breathe = 1 + Math.sin(time * 0.18 + stroke.phase) * 0.035;
        points.push({
          x:
            stroke.cx * width +
            Math.cos(angle) * stroke.rx * Math.min(width, height) * breathe +
            flutter,
          y:
            stroke.cy * height +
            Math.sin(angle * 0.9) * stroke.ry * Math.min(width, height) * breathe +
            flutter * 0.4,
          t,
        });
      }

      return points;
    };

    const render = (now: number) => {
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      context.clearRect(0, 0, width, height);
      const time = reduced ? 2.4 : now * 0.001;

      for (const bloom of BLOOMS) {
        const x =
          (bloom.ax + Math.sin(time * bloom.speed + bloom.phase) * 0.03) * width;
        const y =
          (bloom.ay + Math.cos(time * bloom.speed * 0.8 + bloom.phase) * 0.025) *
          height;
        const radius =
          bloom.radius * (0.92 + Math.sin(time * 0.22 + bloom.phase) * 0.08);
        drawBloom(x, y, radius, bloom.alpha);
        drawBloom(
          x + Math.cos(time * 0.18 + bloom.phase) * 36,
          y + Math.sin(time * 0.15 + bloom.phase) * 24,
          radius * 0.58,
          bloom.alpha * 0.5,
        );
      }

      const ring = ensoPoints(width, height, time);
      paintStroke(ring, 10, 0.05);
      paintStroke(ring, 2.8, 0.2);
      stampBrush(ring, 3.1, 0.16);

      for (const stroke of STROKES) {
        const points = sideStroke(stroke, width, height, time);
        paintStroke(points, stroke.width * 3.2, stroke.alpha * 0.25);
        paintStroke(points, stroke.width, stroke.alpha);
      }

      context.fillStyle = "rgba(9, 9, 9, 0.2)";
      for (const [x, y, radius] of SPECKS) {
        const driftX = Math.sin(time * 0.2 + x * 10) * 6;
        const driftY = Math.cos(time * 0.16 + y * 8) * 5;
        context.beginPath();
        context.arc(x * width + driftX, y * height + driftY, radius, 0, Math.PI * 2);
        context.fill();
      }

      const goal = pointer.active ? 1 : 0;
      brush.strength += (goal - brush.strength) * (reduced ? 1 : 0.06);
      if (pointer.active) {
        brush.x += (pointer.x - brush.x) * (reduced ? 1 : 0.08);
        brush.y += (pointer.y - brush.y) * (reduced ? 1 : 0.08);
      }
      if (brush.strength > 0.01) {
        drawBloom(brush.x, brush.y, 150, 0.07 * brush.strength);
      }

      if (!reduced && visible) {
        frame = requestAnimationFrame(render);
      }
    };

    const onMotion = () => {
      reduced = motion.matches;
      cancelAnimationFrame(frame);
      if (!reduced && visible) frame = requestAnimationFrame(render);
      else render(0);
    };

    const onVisibility = () => {
      visible = document.visibilityState === "visible";
      cancelAnimationFrame(frame);
      if (!reduced && visible) frame = requestAnimationFrame(render);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(parent);
    window.addEventListener("pointermove", onPointer);
    motion.addEventListener("change", onMotion);
    document.addEventListener("visibilitychange", onVisibility);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointer);
      motion.removeEventListener("change", onMotion);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="ink-grain absolute inset-0" />
      <div className="absolute left-1/2 top-[46%] h-[520px] w-[min(760px,88vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-canvas/60 blur-3xl" />
    </div>
  );
}

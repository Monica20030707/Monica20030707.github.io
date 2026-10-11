import {
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type RefObject,
} from "react";
import { clamp } from "../utils/clamp";

export type PercentPos = { left: number; top: number };

type Options = {
  canvasRef: RefObject<HTMLElement | null>;
  initial: Record<string, PercentPos>;
  pad?: number;
};

export function usePercentDrag({ canvasRef, initial, pad = 4 }: Options) {
  const dragOffset = useRef({ x: 0, y: 0 });
  const [positions, setPositions] = useState(initial);
  const [dragging, setDragging] = useState<string | null>(null);

  const onPointerDown = (
    e: ReactPointerEvent<HTMLElement>,
    id: string
  ) => {
    const canvas = canvasRef.current;
    const pos = positions[id];
    if (!canvas || !pos) return;

    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left - (pos.left / 100) * rect.width,
      y: e.clientY - rect.top - (pos.top / 100) * rect.height,
    };
    setDragging(id);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLElement>) => {
    if (!dragging || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const left = clamp(
      ((e.clientX - rect.left - dragOffset.current.x) / rect.width) * 100,
      pad,
      100 - pad
    );
    const top = clamp(
      ((e.clientY - rect.top - dragOffset.current.y) / rect.height) * 100,
      pad,
      100 - pad
    );
    setPositions((prev) => ({ ...prev, [dragging]: { left, top } }));
  };

  const onPointerUp = () => setDragging(null);

  return {
    positions,
    dragging,
    onPointerDown,
    onPointerMove,
    onPointerUp,
  };
}

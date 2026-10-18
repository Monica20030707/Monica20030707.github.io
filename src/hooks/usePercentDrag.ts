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
  /** Edge padding in percent. Set false for free placement with no border. */
  pad?: number | false;
};

export function usePercentDrag({
  canvasRef,
  initial,
  pad = 4,
}: Options) {
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
    e.stopPropagation();
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
    e.stopPropagation();
    const rect = canvasRef.current.getBoundingClientRect();
    let left =
      ((e.clientX - rect.left - dragOffset.current.x) / rect.width) * 100;
    let top =
      ((e.clientY - rect.top - dragOffset.current.y) / rect.height) * 100;

    if (pad !== false) {
      left = clamp(left, pad, 100 - pad);
      top = clamp(top, pad, 100 - pad);
    }

    setPositions((prev) => ({ ...prev, [dragging]: { left, top } }));
  };

  const onPointerUp = (e?: ReactPointerEvent<HTMLElement>) => {
    e?.stopPropagation();
    setDragging(null);
  };

  return {
    positions,
    dragging,
    onPointerDown,
    onPointerMove,
    onPointerUp,
  };
}

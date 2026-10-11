import { useRef } from "react";
import { STICKERS } from "../data/stickers";
import { useStickerPhysics } from "../hooks/useStickerPhysics";

export function StickerPile({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const { ready, draggingId, onPointerDown, onPointerMove, onPointerUp } =
    useStickerPhysics({ canvasRef, nodeRefs });

  return (
    <div
      ref={canvasRef}
      className={`sticker-canvas relative w-full touch-none overflow-hidden ${className || "h-72 sm:h-80 md:h-96"}`}
      role="application"
      aria-label="Draggable sticker canvas with physics. Grab stickers and throw them into each other."
    >
      {STICKERS.map((bp) => {
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
            <Icon size={bp.kind === "dot" ? 18 : 17} strokeWidth={2} />
            {bp.label}
          </button>
        );
      })}
    </div>
  );
}

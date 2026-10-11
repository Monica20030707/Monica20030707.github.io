import type { CSSProperties } from "react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { PHOTO_CARDS } from "../data/photos";

export function PhotoPile() {
  return (
    <div
      className="relative mx-auto flex h-[220px] w-full items-center justify-center overflow-visible sm:h-[260px] md:h-[300px]"
      aria-label="Photo deck"
    >
      <div className="photo-deck-stage relative h-[1px] w-[1px]">
        {PHOTO_CARDS.map((card) => {
          const style = {
            width: card.w,
            height: card.h,
            zIndex: card.z,
            "--deck-x": `${card.offsetX}px`,
            "--deck-y": `${card.offsetY}px`,
            "--deck-r": `${card.rotate}deg`,
          } as CSSProperties;

          return (
            <figure key={card.id} className="photo-deck-card" style={style}>
              {card.tag && (
                <span
                  className="photo-card-tag"
                  style={{ backgroundColor: card.tagColor ?? "#fff" }}
                >
                  {card.tag}
                </span>
              )}
              <ImageWithFallback
                src={card.src}
                alt={card.alt}
                className="size-full object-cover"
                draggable={false}
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
}

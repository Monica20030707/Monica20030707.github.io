import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { PHOTO_CARDS } from "../data/photos";

export function PhotoPile() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [spread, setSpread] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setSpread(true);
      return;
    }

    const stage = stageRef.current;
    if (!stage) return;

    let spreadTimer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        // Hold as a stacked deck briefly, then fan out.
        spreadTimer = window.setTimeout(() => setSpread(true), 420);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(stage);
    return () => {
      observer.disconnect();
      if (spreadTimer !== undefined) window.clearTimeout(spreadTimer);
    };
  }, []);

  return (
    <div
      className="relative mx-auto flex h-[260px] w-full items-center justify-center overflow-visible sm:h-[300px] md:h-[340px]"
      aria-label="Photo deck"
    >
      <div
        ref={stageRef}
        className={`photo-deck-stage relative h-[1px] w-[1px]${
          spread ? " is-spread" : ""
        }`}
      >
        {PHOTO_CARDS.map((card, index) => {
          const style = {
            width: card.w,
            height: card.h,
            "--deck-z": card.z,
            "--deck-x": `${card.offsetX}px`,
            "--deck-y": `${card.offsetY}px`,
            "--deck-r": `${card.rotate}deg`,
            "--deck-i": index,
            "--deck-stack-r": `${(index - (PHOTO_CARDS.length - 1) / 2) * 2.2}deg`,
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

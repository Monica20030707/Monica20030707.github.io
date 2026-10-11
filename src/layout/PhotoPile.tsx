import type { CSSProperties } from "react";
import { ImageWithFallback } from "../components/ImageWithFallback";

type Card = {
  id: string;
  src: string;
  alt: string;
  tag?: string;
  tagColor?: string;
  rotate: number;
  offsetX: number;
  offsetY: number;
  z: number;
  w: number;
  h: number;
};

const CARDS: Card[] = [
  {
    id: "license",
    src: "/image/project_licenseReader.jpg",
    alt: "License reader project",
    rotate: -14,
    offsetX: -210,
    offsetY: 18,
    z: 1,
    w: 118,
    h: 156,
  },
  {
    id: "frailty",
    src: "/image/project_frailtyTester.jpg",
    alt: "Frailty Tester project",
    tag: "health tech",
    tagColor: "var(--tag-pink)",
    rotate: -8,
    offsetX: -140,
    offsetY: 4,
    z: 2,
    w: 122,
    h: 162,
  },
  {
    id: "profile",
    src: "/monica_profile.jpeg",
    alt: "Monica",
    tag: "that's me",
    tagColor: "var(--tag-yellow)",
    rotate: -3,
    offsetX: -60,
    offsetY: -6,
    z: 4,
    w: 128,
    h: 170,
  },
  {
    id: "avatar",
    src: "/monica_avatar.png",
    alt: "Monica avatar",
    rotate: 2,
    offsetX: 20,
    offsetY: -2,
    z: 5,
    w: 116,
    h: 154,
  },
  {
    id: "orange",
    src: "/image/project_orangeLeaf.jpg",
    alt: "OrangeLeaf project",
    tag: "fav build",
    tagColor: "#ffffff",
    rotate: 7,
    offsetX: 100,
    offsetY: 6,
    z: 3,
    w: 124,
    h: 164,
  },
  {
    id: "stock",
    src: "/image/project_stockDashboard.jpg",
    alt: "Stock dashboard project",
    rotate: 12,
    offsetX: 175,
    offsetY: 16,
    z: 2,
    w: 118,
    h: 156,
  },
  {
    id: "ml",
    src: "/image/project_MLdata.jpg",
    alt: "ML project",
    rotate: 16,
    offsetX: 245,
    offsetY: 28,
    z: 1,
    w: 112,
    h: 148,
  },
];

export function PhotoPile() {
  return (
    <div
      className="photo-deck relative mx-auto flex h-[220px] w-full items-center justify-center overflow-visible sm:h-[260px] md:h-[300px]"
      aria-label="Photo deck"
    >
      <div className="photo-deck-stage relative h-[1px] w-[1px]">
        {CARDS.map((card) => {
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

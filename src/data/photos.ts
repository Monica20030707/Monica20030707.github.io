export type PhotoCard = {
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

export const PHOTO_CARDS: PhotoCard[] = [
  {
    id: "dinosaur",
    src: "/image/personal-events/dinosaur.jpg",
    alt: "Dinosaur exhibit",
    rotate: -18,
    offsetX: -320,
    offsetY: 36,
    z: 1,
    w: 124,
    h: 164,
  },
  {
    id: "museum",
    src: "/image/personal-events/museum.jpg",
    alt: "Museum visit",
    rotate: -14,
    offsetX: -230,
    offsetY: 22,
    z: 2,
    w: 132,
    h: 174,
  },
  {
    id: "food",
    src: "/image/personal-events/food.jpg",
    alt: "A favorite meal",
    tag: "fav meal",
    tagColor: "var(--tag-pink)",
    rotate: -8,
    offsetX: -130,
    offsetY: -16,
    z: 3,
    w: 136,
    h: 180,
  },
  {
    id: "me",
    src: "/image/personal-events/me.jpg",
    alt: "Monica",
    tag: "that's me",
    tagColor: "var(--tag-yellow)",
    rotate: -2,
    offsetX: -20,
    offsetY: 8,
    z: 5,
    w: 142,
    h: 188,
  },
  {
    id: "libby",
    src: "/image/personal-events/christmaslibby.jpg",
    alt: "Libby at Christmas",
    tag: "libby",
    tagColor: "#ffffff",
    rotate: 6,
    offsetX: 100,
    offsetY: -12,
    z: 4,
    w: 136,
    h: 180,
  },
  {
    id: "games",
    src: "/image/personal-events/retrogames.jpg",
    alt: "Retro games",
    rotate: 12,
    offsetX: 210,
    offsetY: 18,
    z: 2,
    w: 130,
    h: 172,
  },
  {
    id: "komo",
    src: "/image/personal-events/komonews.png",
    alt: "KOMO News",
    rotate: 16,
    offsetX: 310,
    offsetY: 34,
    z: 1,
    w: 124,
    h: 164,
  },
];

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
  { id: "license", src: "/image/project_licenseReader.jpg", alt: "License reader project", rotate: -14, offsetX: -270, offsetY: 28, z: 1, w: 132, h: 174 },
  { id: "frailty", src: "/image/project_frailtyTester.jpg", alt: "Frailty Tester project", tag: "health tech", tagColor: "var(--tag-pink)", rotate: -8, offsetX: -178, offsetY: -16, z: 2, w: 136, h: 180 },
  { id: "profile", src: "/monica_profile.jpeg", alt: "Monica", tag: "that's me", tagColor: "var(--tag-yellow)", rotate: -3, offsetX: -76, offsetY: 10, z: 4, w: 142, h: 188 },
  { id: "avatar", src: "/monica_avatar.png", alt: "Monica avatar", rotate: 2, offsetX: 30, offsetY: -20, z: 5, w: 130, h: 172 },
  { id: "orange", src: "/image/project_orangeLeaf.jpg", alt: "OrangeLeaf project", tag: "fav build", tagColor: "#ffffff", rotate: 7, offsetX: 128, offsetY: 18, z: 3, w: 138, h: 182 },
  { id: "stock", src: "/image/project_stockDashboard.jpg", alt: "Stock dashboard project", rotate: 12, offsetX: 222, offsetY: -12, z: 2, w: 132, h: 174 },
  { id: "ml", src: "/image/project_MLdata.jpg", alt: "ML project", rotate: 16, offsetX: 310, offsetY: 32, z: 1, w: 126, h: 166 },
];

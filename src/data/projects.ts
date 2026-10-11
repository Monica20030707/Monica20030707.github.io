export type FloppyProject = {
  title: string;
  shortTitle?: string;
  description: string;
  image: string;
  color: string;
  href: string;
  tag?: string;
};

export const PROJECTS: FloppyProject[] = [
  {
    title: "Frailty Tester",
    shortTitle: "Balance",
    description:
      "AI-powered health assessment for seniors with real-time pose detection.",
    image: "/image/project_frailtyTester.jpg",
    color: "#7ec8ff",
    href: "https://balance-tester-my-youth-span.vercel.app",
    tag: "Live",
  },
  {
    title: "OrangeLeaf",
    shortTitle: "OrangeLeaf",
    description: "LaTeX-to-PDF converter with automated GitHub README updates.",
    image: "/image/project_orangeLeaf.jpg",
    color: "#d4f06e",
    href: "https://github.com/Monica20030707/OrangeLeaf",
    tag: "Python",
  },
  {
    title: "Stock Tracking Dashboard",
    shortTitle: "Stocks",
    description: "Live financial dashboard with Perspective charts.",
    image: "/image/project_stockDashboard.jpg",
    color: "#ffb4d9",
    href: "https://github.com/Monica20030707/tradingDashboard-UI",
    tag: "TS",
  },
  {
    title: "Traffic Violation Tracker",
    shortTitle: "Traffic",
    description: "AWS pipeline matching street cameras to DMV records.",
    image: "/image/project_licenseReader.jpg",
    color: "#ffc48a",
    href: "https://github.com/Monica20030707/AWS_rekonigition-N-read-database",
    tag: "AWS",
  },
  {
    title: "Read Handwritten Dataset",
    shortTitle: "MNIST",
    description: "Neural net from scratch for digit recognition.",
    image: "/image/project_MLdata.jpg",
    color: "#c9b6ff",
    href: "https://github.com/Monica20030707/Artificial-Neutral-Network_ML",
    tag: "ML",
  },
  {
    title: "Reverse Polish Calculator",
    shortTitle: "RPN Calc",
    description: "Java + ANTLR calculator for Reverse Polish Notation.",
    image: "/image/project_reversePcalculator.jpg",
    color: "#7dddd3",
    href: "https://github.com/Monica20030707/reverse-Polish_calculator",
    tag: "Java",
  },
];

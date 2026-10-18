export type FloppyProject = {
  title: string;
  shortTitle?: string;
  description: string;
  /** Extra lines shown on the enlarged disk back. */
  details?: string[];
  /** Tech stack chips on the disk back. */
  stack?: string[];
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
    details: [
      "Built with pose estimation for balance and mobility checks.",
      "Focused on a calm UI that non-technical users can follow.",
    ],
    stack: ["React", "Pose detection", "Vercel"],
    image: "/image/project_frailtyTester.jpg",
    color: "#7ec8ff",
    href: "https://balance-tester-my-youth-span.vercel.app",
    tag: "Live",
  },
  {
    title: "OrangeLeaf",
    shortTitle: "OrangeLeaf",
    description: "LaTeX-to-PDF converter with automated GitHub README updates.",
    details: [
      "Automates document builds so write-ups stay in sync with the repo.",
      "Python tooling wired into a simple contributor workflow.",
    ],
    stack: ["Python", "LaTeX", "GitHub Actions"],
    image: "/image/project_orangeLeaf.jpg",
    color: "#d4f06e",
    href: "https://github.com/Monica20030707/OrangeLeaf",
    tag: "Python",
  },
  {
    title: "Stock Tracking Dashboard",
    shortTitle: "Stocks",
    description: "Live financial dashboard with Perspective charts.",
    details: [
      "Streams market data into interactive tables and charts.",
      "TypeScript UI tuned for scanning trends quickly.",
    ],
    stack: ["TypeScript", "Perspective", "React"],
    image: "/image/project_stockDashboard.jpg",
    color: "#ffb4d9",
    href: "https://github.com/Monica20030707/tradingDashboard-UI",
    tag: "TS",
  },
  {
    title: "Traffic Violation Tracker",
    shortTitle: "Traffic",
    description: "AWS pipeline matching street cameras to DMV records.",
    details: [
      "Uses recognition + database lookups across camera feeds.",
      "Designed as a pipeline you can extend with new sources.",
    ],
    stack: ["AWS", "Rekognition", "Database"],
    image: "/image/project_licenseReader.jpg",
    color: "#ffc48a",
    href: "https://github.com/Monica20030707/AWS_rekonigition-N-read-database",
    tag: "AWS",
  },
  {
    title: "Read Handwritten Dataset",
    shortTitle: "MNIST",
    description: "Neural net from scratch for digit recognition.",
    details: [
      "Implemented the network math without a high-level ML framework.",
      "Trained and evaluated on handwritten digit data.",
    ],
    stack: ["Python", "NumPy", "ML"],
    image: "/image/project_MLdata.jpg",
    color: "#c9b6ff",
    href: "https://github.com/Monica20030707/Artificial-Neutral-Network_ML",
    tag: "ML",
  },
  {
    title: "Reverse Polish Calculator",
    shortTitle: "RPN Calc",
    description: "Java + ANTLR calculator for Reverse Polish Notation.",
    details: [
      "Parses expressions with ANTLR and evaluates them in Java.",
      "A small language-tooling project that still feels playful.",
    ],
    stack: ["Java", "ANTLR"],
    image: "/image/project_reversePcalculator.jpg",
    color: "#7dddd3",
    href: "https://github.com/Monica20030707/reverse-Polish_calculator",
    tag: "Java",
  },
];

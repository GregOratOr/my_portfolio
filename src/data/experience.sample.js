import { TimelineItem } from "./data_utils";

// =======================================
// 4. TIMELINE DATA (Experience & Education)
// =======================================
export const EDUCATION = [
  TimelineItem({
    logo: "https://logo.png",
    title: "Program Title",
    org: "College | Address",
    date: "start - end DATES",
    bullets: [
      "GPA: 3.9/4.0",
      "Coursework: ",
    ],
  }),
];

export const EXPERIENCE = [
  TimelineItem({
    logo: "https://company-logo.svg",
    title: "Position title",
    org: "Company",
    date: "Duration dates",
    bullets: [
      "Bullet 1",
      "Bullet 2...",
      "Bullet n"
    ]
  }),
];

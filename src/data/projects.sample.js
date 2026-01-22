import { TECHNOLOGIES } from "./techs";

// =======================================
//     THE PROJECTS LIBRARY (Independent Collection)
// =======================================
export const PROJECTS = [
  {
    title: "Sample Project",
    date: "January 2025 - Current",
    // Array of images for slideshow
    images: [
      "https://ui-avatars.com/api/?name=Img+1&background=6366f1&color=f55&size=400",
      "https://ui-avatars.com/api/?name=Img+2&background=4f46e5&color=5f5&size=400",
      "https://ui-avatars.com/api/?name=Img+3&background=4338ca&color=55f&size=400",
    ],
    link: "https://github.com/yourusername/project",
    bullets: [
      "Bullet 1",
      "Bullet 2...",
      "Bullet n"
    ],
    // Use actual Tech Objects here
    tech: [
      TECHNOLOGIES.TECH
    ]
  },
];

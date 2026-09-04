/** Section anchors, shared by the page composition and the nav's scroll-spy. */
export const NAV_SECTIONS = [
  { id: "top", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export type NavSectionId = (typeof NAV_SECTIONS)[number]["id"];

/** "Sarthak Bapte" -> "SB" */
export function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

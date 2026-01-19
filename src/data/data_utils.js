// ----------------------------------------------------------------------------------------- //
// Data Object Declaration & Definition
// ----------------------------------------------------------------------------------------- //
// =======================================
// 1. THE "TECH UNIT" GENERATOR
// =======================================
// This ensures every technology has the exact same structure.
export const Tech = ({ icon, label, accent, hover, tag = null }) => ({
    icon,         // JSX SVG
    label,        // String name
    accent,       // Tailwind text color class (e.g., "text-yellow-400")
    hover,        // Tailwind border color class (e.g., "hover:border-yellow-500/50")
    tag           // Optional Object: { label, bg, text }
});

// Helper: Common Tags
export const TAGS = {
    EXPLORING: { label: "Exploring", bg: "bg-emerald-600/30", text: "text-emerald-300" },
    NEW: { label: "New", bg: "bg-lime-500/30", text: "text-lime-300" },
    CORE: { label: "Core", bg: "bg-amber-600/30", text: "text-amber-300" },
    EXPERT: { label: "Expert", bg: "bg-fuchsia-500/30", text: "text-fuchsia-300" },
};

export const addTag = (tech, value) => ({
    ...tech,
    tag: value
});

// =======================================
// 3. TIMELINE DATA (Experience & Education)
// =======================================
export const TimelineItem = ({ logo, title, org, date, bullets, tags = [] }) => ({
    logo,   // URL string or JSX Icon
    title,  // Job Title or Degree
    org,    // Company or School Name
    date,   // String duration
    bullets, // Array of strings
    tags    // Optional tech stack used
});
import TechIcon from "@/lib/tech/TechIcon";
import { getTech, type TechId } from "@/lib/tech/registry";
import { accentClasses } from "@/lib/theme/accents";
import type { SkillLevel } from "@/content/schema";

export const SKILL_LEVEL_LABELS: Record<SkillLevel, string> = {
  expert: "Expert",
  core: "Core",
  new: "New",
  exploring: "Exploring",
};

interface TechChipProps {
  id: TechId;
  level?: SkillLevel;
  /** Compact variant for dense lists like project cards. */
  size?: "sm" | "md";
}

/**
 * The one way a technology is displayed anywhere on the site. Colours come
 * from the accent token in the registry, never from a class string in content.
 */
export default function TechChip({ id, level, size = "md" }: TechChipProps) {
  const tech = getTech(id);
  const accent = accentClasses(tech.accent);
  const compact = size === "sm";

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-md border font-medium",
        compact ? "px-1.5 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs",
        accent.surface,
        accent.border,
        accent.text,
      ].join(" ")}
    >
      <TechIcon id={id} className={compact ? "h-3 w-3" : "h-3.5 w-3.5"} />
      <span>{tech.label}</span>
      {level ? (
        <span className="ml-0.5 font-mono text-[9px] uppercase tracking-wider opacity-70">
          {SKILL_LEVEL_LABELS[level]}
        </span>
      ) : null}
    </span>
  );
}

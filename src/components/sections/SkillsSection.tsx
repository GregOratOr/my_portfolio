import Section from "@/components/ui/Section";
import TechIcon from "@/lib/tech/TechIcon";
import TechChip, { SKILL_LEVEL_LABELS } from "@/components/ui/TechChip";
import { RichText } from "@/lib/richtext";
import { getTech, groupTechByCategory, type TechId } from "@/lib/tech/registry";
import { accentClasses } from "@/lib/theme/accents";
import type { Skills } from "@/content/schema";

interface SkillsSectionProps {
  skills: Skills;
}

/**
 * Every skill is visible at once, grouped by category. The old paginated
 * carousel hid exactly what a reader is scanning for.
 */
export default function SkillsSection({ skills }: SkillsSectionProps) {
  const levelById = new Map(skills.skills.map((skill) => [skill.id, skill.level]));
  const groups = groupTechByCategory(skills.skills.map((skill) => skill.id));

  return (
    <Section id="skills" eyebrow="Skills" title={skills.title} tinted>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
        <div className="min-w-0">
          {skills.desc.length > 0 ? (
            <RichText
              paragraphs={skills.desc}
              className="mb-10 max-w-2xl"
              paragraphClassName="text-base leading-relaxed text-muted"
            />
          ) : null}

          <div className="space-y-8">
            {groups.map((group) => (
              <div key={group.category}>
                <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.ids.map((id) => (
                    <li key={id}>
                      <TechChip id={id} level={levelById.get(id)} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {skills.learning.length > 0 ? <LearningPanel ids={skills.learning} /> : null}
      </div>
    </Section>
  );
}

function LearningPanel({ ids }: { ids: readonly TechId[] }) {
  return (
    <aside className="h-fit rounded-xl border border-line bg-surface p-5 shadow-card">
      <div className="mb-4 flex items-center gap-2">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          Currently exploring
        </h3>
      </div>

      <ul className="space-y-2">
        {ids.map((id) => {
          const tech = getTech(id);
          const accent = accentClasses(tech.accent);

          return (
            <li
              key={id}
              className="group flex items-center gap-3 rounded-lg border border-line bg-surface-2 px-3 py-2 transition hover:border-accent/50"
            >
              <span className={`flex h-7 w-7 items-center justify-center rounded-md ${accent.surface} ${accent.text}`}>
                <TechIcon id={id} className="h-4 w-4" />
              </span>
              <span className="text-sm text-fg">{tech.label}</span>
              <span className="ml-auto font-mono text-[9px] uppercase tracking-wider text-muted">
                {SKILL_LEVEL_LABELS.exploring}
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

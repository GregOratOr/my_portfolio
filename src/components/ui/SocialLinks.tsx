import type { Contact } from "@/content/schema";
import { SOCIAL_ICONS } from "@/lib/icons/social";

interface SocialIconProps {
  contact: Contact;
  className?: string;
}

/** A single 24x24 glyph for a contact channel. */
export function SocialIcon({ contact, className = "h-5 w-5" }: SocialIconProps) {
  const glyph = SOCIAL_ICONS[contact.channel];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...(glyph.stroked
        ? { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const }
        : { fill: "currentColor" })}
    >
      <path d={glyph.path} />
    </svg>
  );
}

interface SocialLinksProps {
  contacts: readonly Contact[];
  className?: string;
}

/** The row of square icon buttons used in the hero and the contact section. */
export default function SocialLinks({ contacts, className = "" }: SocialLinksProps) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {contacts.map((contact) => {
        const label = contact.label ?? SOCIAL_ICONS[contact.channel].label;
        const external = contact.href.startsWith("http");

        return (
          <li key={`${contact.channel}-${contact.href}`}>
            <a
              href={contact.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={label}
              title={label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-muted transition hover:border-accent hover:text-accent"
            >
              <SocialIcon contact={contact} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

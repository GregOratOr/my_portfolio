import Section from "@/components/ui/Section";
import SocialLinks, { SocialIcon } from "@/components/ui/SocialLinks";
import { SOCIAL_ICONS } from "@/lib/icons/social";
import type { Contact } from "@/content/schema";

interface ContactSectionProps {
  primaryContact?: Contact;
  socials: readonly Contact[];
  availability?: string;
}

export default function ContactSection({
  primaryContact,
  socials,
  availability,
}: ContactSectionProps) {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk"
      lede={availability ?? "My inbox is always open."}
    >
      <div className="flex flex-col gap-6 rounded-xl border border-line bg-surface p-6 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="min-w-0">
          {primaryContact ? (
            <>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {primaryContact.label ?? SOCIAL_ICONS[primaryContact.channel].label}
              </p>
              <p className="mt-1 truncate text-lg text-fg">
                {primaryContact.value ?? primaryContact.href}
              </p>
            </>
          ) : (
            <p className="text-lg text-fg">Reach me on any of these channels.</p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {primaryContact ? (
            <a
              href={primaryContact.href}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
            >
              <SocialIcon contact={primaryContact} className="h-4 w-4" />
              Say hello
            </a>
          ) : null}
          <SocialLinks contacts={socials} />
        </div>
      </div>
    </Section>
  );
}

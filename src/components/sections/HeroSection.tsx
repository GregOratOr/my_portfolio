import Image from "next/image";
import SocialLinks from "@/components/ui/SocialLinks";
import { RichText } from "@/lib/richtext";
import { initialsOf } from "@/lib/navigation";
import type { Contact, Profile } from "@/content/schema";

interface HeroSectionProps {
  profile: Profile;
  socials: readonly Contact[];
  primaryContact?: Contact;
}

/**
 * Above the fold: who, what, where, and an at-a-glance band of facts. Sized to
 * its content rather than the viewport, so the next section is always visible.
 */
export default function HeroSection({ profile, socials, primaryContact }: HeroSectionProps) {
  return (
    <section id="top" className="scroll-mt-24 bg-bg pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-12">
          <Portrait name={profile.name} avatarUrl={profile.avatarUrl} />

          <div className="animate-rise min-w-0 flex-1">
            {profile.availability ? (
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {profile.availability}
              </p>
            ) : null}

            <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              {profile.name}
              <span className="waving-hand ml-3 cursor-default" aria-hidden="true">
                &#128075;
              </span>
            </h1>

            <p className="mt-2 text-lg text-accent sm:text-xl">{profile.role}</p>

            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {profile.location}
            </p>

            <RichText
              paragraphs={profile.intro}
              className="mt-6 max-w-2xl"
              paragraphClassName="text-base leading-relaxed text-muted sm:text-lg"
            />

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {profile.resumeUrl ? (
                <a
                  href={profile.resumeUrl}
                  download={`${profile.name.replace(/\s+/g, "_")}_CV.pdf`}
                  className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
                >
                  Download CV
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition group-hover:translate-y-0.5"
                    aria-hidden="true"
                  >
                    <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 20h16" />
                  </svg>
                </a>
              ) : null}

              {primaryContact ? (
                <a
                  href={primaryContact.href}
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-2.5 text-sm font-medium text-fg transition hover:border-accent hover:text-accent"
                >
                  Get in touch
                </a>
              ) : null}

              <SocialLinks contacts={socials} className="sm:ml-2" />
            </div>
          </div>
        </div>

        {profile.highlights.length > 0 ? (
          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {profile.highlights.map((highlight) => (
              <div key={highlight.label} className="bg-surface px-5 py-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {highlight.label}
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-fg">{highlight.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}

function Portrait({ name, avatarUrl }: { name: string; avatarUrl?: string }) {
  if (!avatarUrl) {
    return (
      <div
        aria-hidden="true"
        className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface-2 font-mono text-3xl font-semibold text-accent sm:h-36 sm:w-36"
      >
        {initialsOf(name)}
      </div>
    );
  }

  return (
    <Image
      src={avatarUrl}
      alt={name}
      width={144}
      height={144}
      priority
      className="h-28 w-28 shrink-0 rounded-2xl border border-line object-cover sm:h-36 sm:w-36"
    />
  );
}

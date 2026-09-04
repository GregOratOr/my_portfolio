import { getTech, techIconPath, type TechId } from "@/lib/tech/registry";

interface TechIconProps {
  id: TechId;
  /** Sizing/colour utilities. Mono icons inherit the current text colour. */
  className?: string;
}

/**
 * Renders a tech icon from `public/icons/tech/`.
 *
 * Mono icons are painted through a CSS mask so they pick up `currentColor`;
 * brand icons keep their own colours and render as an image.
 */
export default function TechIcon({ id, className = "h-6 w-6" }: TechIconProps) {
  const tech = getTech(id);
  const src = techIconPath(id);

  if (tech.mono) {
    return (
      <span
        aria-hidden="true"
        className={`inline-block bg-current ${className}`}
        style={{
          maskImage: `url(${src})`,
          WebkitMaskImage: `url(${src})`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskSize: "contain",
          WebkitMaskSize: "contain",
        }}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static SVG asset; the optimizer has nothing to do here
    <img src={src} alt="" aria-hidden="true" className={`inline-block object-contain ${className}`} />
  );
}

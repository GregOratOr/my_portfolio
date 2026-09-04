interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  return (
    <footer className="border-t border-line bg-bg py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-6 text-xs text-muted sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {name}
        </p>
        <p className="font-mono">Built with Next.js, TypeScript &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}

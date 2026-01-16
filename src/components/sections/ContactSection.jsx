import { CONTACTS } from "@/data/portfolio";

export default function ContactSection() {
  
  // 1. Find the Email object for the big primary button
  const emailContact = CONTACTS.find((c) => c.key === "email");

  // 2. Filter out the email so we don't repeat it in the social icons row
  const socialLinks = CONTACTS.filter((c) => c.key !== "email");

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-black to-slate-900 p-10 text-center">

      {/* MAIN CALL TO ACTION */}
      <div className="max-w-3xl space-y-8">
        <h2 className="text-5xl font-bold text-white tracking-tight">
          Ready to <span className="text-indigo-500">collaborate?</span>
        </h2>

        <p className="text-slate-400 text-lg md:text-xl">
          I am currently looking for opportunities in AI Research and Full Stack Development.
          Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">

          {/* A. BIG EMAIL BUTTON (Uses the extracted email object) */}
          {emailContact && (
            <a
              href={emailContact.href}
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 hover:scale-105 transition shadow-lg shadow-indigo-500/25"
            >
              {emailContact.label || "Say Hello"} 👋
            </a>
          )}

          {/* B. SOCIAL ICONS ROW (Loops through the rest) */}
          <div className="flex gap-4">
            {socialLinks.map((contact) => (
              <a
                key={contact.key}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.label}
                className="w-11 h-11 flex items-center justify-center bg-slate-800 text-slate-400 rounded-lg border border-slate-700 hover:text-white hover:border-indigo-500 hover:bg-slate-700 hover:-translate-y-1 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  {/* Since your data has <path> as JSX, we render it directly */}
                  {contact.icon}
                </svg>
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-10 text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Built with Next.js & Tailwind.</p>
      </div>

    </section>
  );
}
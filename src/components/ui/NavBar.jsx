// src/components/ui/Navbar.jsx

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO / NAME */}
                <a href="#home" className="text-xl font-bold text-white tracking-tight hover:text-indigo-300 transition">
                    S.
                    <span className="text-indigo-500">
                        B
                    </span>
                </a>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex space-x-8">
                    <NavLink href="#tech-stack" label="My Arsenal"/>
                    <NavLink href="#experience" label="Experience"/>
                    <NavLink href="#projects" label="Projects" />
                    <NavLink href="#contact" label="Contact" />
                </div>

                {/* MOBILE MENU BUTTON (Placeholder) */}
                <button className="md:hidden text-slate-300 hover:text-white">
                    ☰
                </button>

            </div>
        </nav>
    );
}

// Small helper component for links to keep code clean
function NavLink({ href, label }) {
    return (
        <a
            href={href}
            className="text-sm font-medium text-slate-300 hover:text-white transition hover:underline underline-offset-4 decoration-indigo-500"
        >
            {label}
        </a>
    );
}
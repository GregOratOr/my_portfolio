const INTRO = "Specializing in Multi-Agent Reinforcement Learning and building scalable backend systems. Currently exploring the modern web stack.";
const NAME = "Sarthak Bapte"
const TITLE = "Python Developer & AI Researcher"

// src/components/ui/ProfileCard.jsx
export default function ProfileCard({name=NAME, title=TITLE, intro=INTRO}){
    return(
        /* 2. THE CARD (The Component) */
        /* bg-white: White background. */
        /* w-full max-w-md: Full width, but never wider than "medium" (approx 450px). */
        /* rounded-xl: Extra large rounded corners. */
        /* shadow-2xl: A nice heavy drop shadow. */
        /* overflow-hidden: Clips content that spills out. */
        <div className="bg-white w-full max-w-md rounded-xl shadow-2xl overflow-hidden">

            {/* 3. THE TOP BANNER (Design Element) */}
            {/* h-32: Height of 32 units. */}
            {/* bg-gradient-to-r: Creates a gradient from left to right. */}
            <div className="h-32 bg-gradient-to-r from-slate-900 via-white-800 to-purple-900"></div>

            {/* 4. THE CONTENT WRAPPER */}
            <div className="px-8 pb-8">

            {/* 5. THE PROFILE CIRCLE */}
            {/* -mt-16: Negative margin! Pulls the circle UP overlapping the banner. */}
            {/* border-4 border-white: Thick white border to separate it from the banner. */}
            <div className="relative -mt-16 w-32 h-32 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center text-4xl">
                {/* Placeholder Emoji as Avatar */}
                🧑‍💻
            </div>

            {/* 6. THE TEXT */}
            <div className="mt-4">
                <h1 className="text-2xl font-bold text-slate-800">
                {name}
                </h1>
                <p className="text-sm font-semibold text-indigo-600">
                {title}
                </p>
                <p className="mt-4 text-slate-600">
                {intro}
                </p>
            </div>

            {/* 7. THE BUTTONS */}
            <div className="mt-6 flex gap-4">
                <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                Contact Me
                </button>
                <button className="flex-1 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-200 transition">
                View Projects
                </button>
            </div>

            </div>
        </div>
    );
}
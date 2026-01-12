// src/components/ui/ProjectCard.jsx

// 1. Define the "arguments" (props) inside these braces
export default function ProjectCard({ title, description, tags }) {
    return (
        // Card Container
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300">

            {/* Visual Header (Colored Bar for now, Image later) */}
            <div className="h-4 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {title}
                </h3>

                <p className="text-slate-600 text-sm mb-4">
                    {description}
                </p>

                {/* 4. Tags Section */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags && tags.map((tag, index) => (
                        <span key={index} className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-xl">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
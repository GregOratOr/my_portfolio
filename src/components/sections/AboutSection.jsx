// src/components/sections/AboutSection.jsx

export default function AboutSection({ skills }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 snap-start p-10">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: THE STORY */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">
            About <span className="text-indigo-500">Me</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            I am an AI Researcher and Developer with a passion for building intelligent systems. 
            My work focuses on Multi-Agent Reinforcement Learning (MARL), where I explore how autonomous agents can cooperate to solve complex tasks.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            Beyond AI, I am a full-stack developer who loves building modern web interfaces. 
            I believe the best AI tools need beautiful, accessible frontends to be truly useful.
          </p>
        </div>

        {/* RIGHT: THE TECH STACK */}
        <div className="space-y-8">
          {skills.map((group, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-white mb-4 border-l-4 border-indigo-500 pl-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-slate-800 text-indigo-300 rounded-lg text-sm font-medium border border-slate-700 hover:border-indigo-500 hover:text-white transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
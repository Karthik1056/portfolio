import { useEffect, useRef } from 'react'

const skillGroups = [
  { cat: 'Languages',          skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { cat: 'Frontend',           skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { cat: 'Backend',            skills: ['Node.js', 'Express', 'REST APIs', 'JWT Auth', 'FastAPI'] },
  { cat: 'Databases',          skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 'Firebase'] },
  { cat: 'AI & Tooling',       skills: ['Groq LLM', 'Tavily', 'GraphRAG', 'LangChain', 'Prompt Eng.'] },
  { cat: 'DevOps & Tools',     skills: ['Git', 'GitHub', 'Railway', 'Vercel', 'Linux', 'Postman'] },
  { cat: 'CS Fundamentals',    skills: ['DSA', 'OOP', 'DBMS', 'OS', 'Networking', 'System Design'] },
]

const process = [
  { num: '01', word: 'Learn'  },
  { num: '02', word: 'Build'  },
  { num: '03', word: 'Ship'   },
  { num: '04', word: 'Repeat' },
]

export default function Skills() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 border-t border-white/[0.08]" ref={ref}>
      <div className="max-w-7xl mx-auto">

        <div className="reveal mb-12 sm:mb-16">
          <span className="section-label">03 — Skills</span>
          <h2 className="section-heading">What I <em>work with.</em></h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/[0.06]">
          {skillGroups.map((g, i) => (
            <div key={g.cat}
              className="reveal bg-navy-950 p-6 sm:p-8 group hover:bg-blue-500/5 transition-all duration-300 relative overflow-hidden"
              style={{ transitionDelay: `${i * 0.08}s` }}>
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
              <h3 className="font-display font-bold text-[10px] tracking-[3px] uppercase text-blue-400 mb-4 sm:mb-5">{g.cat}</h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map(s => (
                  <span key={s} className="text-[11px] sm:text-[12px] text-white/50 border border-white/[0.08] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full
                    font-light group-hover:text-white/80 group-hover:border-white/20 transition-all duration-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process strip */}
        <div className="reveal mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 border border-white/[0.08]" style={{ transitionDelay: '0.3s' }}>
          {process.map((p, i) => (
            <div key={p.word}
              className={`p-6 sm:p-10 flex flex-col gap-2 sm:gap-3 group hover:bg-blue-500/5 transition-all duration-300
                ${i < process.length - 1 ? 'border-r border-white/[0.08]' : ''}
                ${i === 1 || i === 3 ? 'lg:border-r' : ''}
                ${i === 1 ? 'border-r-0 lg:border-r' : ''}`}>
              <span className="font-display text-[10px] sm:text-[11px] tracking-[2px] text-blue-400">{p.num}</span>
              <span className="font-display font-extrabold text-white tracking-tight leading-none"
                style={{ fontSize: 'clamp(22px,3.5vw,52px)', letterSpacing: '-2px' }}>
                {p.word}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

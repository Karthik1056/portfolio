import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: '01',
    title: 'Letters & Ladders',
    subtitle: 'Word Game · Full Stack',
    desc: 'An interactive learning app for dyslexic students based on the state syllabus that simplifies textbook content and provides dictionary and text-to-speech support to improve understanding. It also includes interactive activities to make learning easier and more engaging. ',
    tech: ['React Native', 'FireBase', 'Flask', 'Qwen'],
    href: 'https://github.com/Karthik1056/Letters-And-Ladder',
    color: '#60a5fa',
  },
  {
    id: '02',
    title: 'GraphRAG Data Intelligence',
    subtitle: 'AI · Data Engineering',
    desc: 'Knowledge graph-powered Retrieval Augmented Generation system built for Infosys Data Sturdy. Enables intelligent querying over structured datasets using graph relationships and LLM reasoning.',
    tech: ['Python', 'GraphRAG', 'LLM', 'Neo4j', 'FastAPI'],
    href: 'https://github.com/Karthik1056/Data_Sturdy_Infosys_Graph_RAG',
    color: '#818cf8',
  },
  {
    id: '03',
    title: 'Analytics Platform',
    subtitle: 'Data · Backend',
    desc: 'Core data analytics and processing platform developed under Infosys mentorship. Handles large-scale data ingestion, transformation pipelines, and structured reporting for enterprise use cases.',
    tech: ['Python', 'Pandas', 'SQL', 'REST API', 'Data Pipeline'],
    href: 'https://github.com/Karthik1056/Data-Sturdy',
    color: '#34d399',
  },
  {
    id: '04',
    title: 'BlogForge',
    subtitle: 'Full Stack · CMS',
    desc: 'A full-featured blog content management system with rich-text editing, category management, SEO-friendly slug generation, and an admin dashboard for creating and publishing posts.',
    tech: ['React', 'Node.js', 'Appwrite', 'Appwirte Auth',],
    href: 'https://github.com/Karthik1056/BlogForge',
    color: '#f472b6',
  },
  {
    id: '05',
    title: 'Daily Job Notifier',
    subtitle: 'Automation · AI',
    desc: 'Automated job search bot that scans LinkedIn, Naukri & Wellfound daily using Tavily AI search. Groq LLM scores each role against a resume profile and sends a personalised HTML digest email every evening.',
    tech: ['Python', 'Groq AI', 'Tavily', 'SMTP', 'Railway', 'Schedule'],
    href: 'https://github.com/Karthik1056/Job-Notifier',
    color: '#fbbf24',
  },
  {
    id: '06',
    title: 'Next MIS',
    subtitle: 'Full Stack · Management System',
    desc: 'A next-generation Management Information System built with Next.js. Features dashboards, data tables, role-based access, and real-time updates for institutional data management.',
    tech: ['Next.js', 'React', 'Tailwind', 'MSSql', 'Prisma'],
    href: 'https://github.com/Karthik1056/next_mis',
    color: '#22d3ee',
  },
  {
    id: '07',
    title: 'StudySync',
    subtitle: 'EdTech · Productivity',
    desc: 'A collaborative study platform where students can sync study schedules, share resources, and track learning progress together. Built for college students who want accountability and structured study sessions.',
    tech: ['HTML', 'CSS', 'Javascript',],
    href: 'https://github.com/Karthik1056/StudySync',
    color: '#a78bfa',
  },
  {
    id: '08',
    title: 'Stray Savers',
    subtitle: 'Social Impact · Full Stack',
    desc: 'A community-driven platform to report, rescue, and adopt stray animals. Features real-time location mapping of reported strays, volunteer coordination, and an adoption matching system.',
    tech: ['Angular', 'Typescript', 'Google Maps',],
    href: 'https://github.com/Karthik1056/Stray-Savers',
    color: '#fb923c',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.07 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 border-t border-white/[0.08]" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div>
            <span className="section-label">02 — Projects</span>
            <h2 className="section-heading">Selected <em>Work.</em></h2>
          </div>
          <a href="https://github.com/Karthik1056" target="_blank" rel="noreferrer"
            className="font-display font-bold text-[11px] sm:text-[12px] tracking-widest uppercase text-white/50
              border-b border-white/10 pb-0.5 hover:text-blue-400 hover:border-blue-400 transition-all w-fit">
            All Repos on GitHub ↗
          </a>
        </div>

        {/* Project rows */}
        <div className="flex flex-col">
          {projects.map((p, i) => (
            <div key={p.id}
              className="reveal group relative grid grid-cols-1 gap-4 sm:gap-6
                py-6 sm:py-8 transition-all duration-400 cursor-pointer"
              style={{
                transitionDelay: `${i * 0.06}s`,
                '--col': p.color,
                paddingLeft: hovered === i ? '20px' : '0px',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}>

              {/* Top: number + title + subtitle */}
              <div className="flex items-start gap-3 sm:gap-5">
                <span className="font-display text-[10px] sm:text-[11px] tracking-[2px] text-white/30 flex-shrink-0 pt-1
                  group-hover:text-blue-400 transition-colors duration-300">{p.id}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-[16px] sm:text-[18px] text-white tracking-tight
                    group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {p.title}
                  </h3>
                  <span className="text-[10px] sm:text-[11px] tracking-[1.5px] uppercase text-white/40">{p.subtitle}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/50 text-[13px] sm:text-[14px] font-light leading-[1.75] pl-0 sm:pl-9">{p.desc}</p>

              {/* Bottom: tech + link */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pl-0 sm:pl-9">
                <div className="flex flex-wrap gap-2">
                  {p.tech.slice(0, 3).map(t => (
                    <span key={t}
                      className="text-[9px] sm:text-[10px] tracking-[1px] uppercase text-white/40 border border-white/[0.08]
                        px-2.5 sm:px-3 py-1 rounded-full group-hover:border-blue-400/40 group-hover:text-blue-300/70 transition-all duration-300">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={p.href} target="_blank" rel="noreferrer"
                  className="ml-auto font-display font-bold text-[10px] sm:text-[11px] tracking-widest uppercase
                    px-4 sm:px-5 py-2 sm:py-2.5 border border-white/[0.08] rounded-full text-white/60
                    group-hover:border-blue-400 group-hover:text-blue-400 group-hover:bg-blue-400/5
                    transition-all duration-300"
                  onClick={e => e.stopPropagation()}>
                  View ↗
                </a>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]
                group-hover:bg-blue-400/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

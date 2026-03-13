import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 border-t border-white/[0.08]" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start max-w-7xl mx-auto">

        {/* Left */}
        <div className="reveal">
          <span className="section-label">01 — About</span>
          <h2 className="section-heading">
            Building things<br />that <em>matter.</em>
          </h2>
        </div>

        {/* Right */}
        <div className="reveal space-y-4 sm:space-y-5" style={{ transitionDelay: '0.1s' }}>
          <p className="text-white/60 font-light text-sm sm:text-base leading-[1.85]">
            I'm a 2026 Computer Science graduate from Bengaluru, India. I'm passionate
            about writing clean, efficient code that solves real-world problems — from
            backend APIs to full-stack web apps and algorithmic C++ solutions.
          </p>
          <p className="text-white/60 font-light text-sm sm:text-base leading-[1.85]">
            When I'm not coding, I'm grinding LeetCode, building side projects, or
            exploring new stacks. I believe the best way to learn is to build — and
            I have 17 repos to show for it.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/[0.08]">
            {[
              { num: '17', label: 'GitHub Repos' },
              { num: '93',  label: 'LeetCode Grind' },
              { num: '0→1', label: 'Ready to Build' },
            ].map(s => (
              <div key={s.label} className="reveal" style={{ transitionDelay: '0.2s' }}>
                <span className="font-display font-extrabold text-white tracking-tight block mb-1"
                  style={{ fontSize: 'clamp(24px,3.5vw,48px)', letterSpacing: '-2px' }}>
                  {s.num}
                </span>
                <span className="text-[9px] sm:text-[11px] tracking-[1.5px] uppercase text-white/40">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-5 sm:gap-7 flex-wrap pt-4 sm:pt-6 reveal" style={{ transitionDelay: '0.25s' }}>
            {[
              { label: 'GitHub',   href: 'https://github.com/Karthik1056' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karthik-s-adiga-668566228' },
              { label: 'LeetCode', href: 'https://leetcode.com/Karthikadiga/' },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                className="font-display font-semibold text-[12px] tracking-widest uppercase text-white/60
                  border-b border-white/10 pb-0.5 hover:text-blue-400 hover:border-blue-400 transition-all duration-300">
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

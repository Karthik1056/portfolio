import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const copy = () => {
    navigator.clipboard.writeText('karthikadiga79@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative px-6 sm:px-10 lg:px-14 py-20 sm:py-28 border-t border-white/[0.08] overflow-hidden" ref={ref}>
      {/* Glow */}
      <div className="glow-blob w-[600px] h-[600px] bg-blue-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="reveal mb-10 sm:mb-14">
          <span className="section-label">04 — Contact</span>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] gap-10 sm:gap-12 xl:gap-16 items-start">
          {/* Big heading */}
          <h2
            className="reveal min-w-0 max-w-[9ch] xl:max-w-[8.5ch] font-display font-extrabold leading-[0.9] tracking-tight text-white"
            style={{ fontSize: 'clamp(40px, 6vw, 92px)', letterSpacing: '-0.05em' }}
          >
            Let's build<br />something<br /><em className="not-italic text-blue-400">together.</em>
          </h2>

          {/* Right */}
          <div className="reveal min-w-0 space-y-6 sm:space-y-8" style={{ transitionDelay: '0.12s' }}>
            <p className="text-white/60 font-light text-sm sm:text-base leading-[1.85] max-w-md">
              I'm actively seeking my first role as a Software Engineer, Full Stack Developer,
              or Backend Developer. If you're hiring or know someone who is — let's talk!
            </p>

            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <a href="mailto:karthikadiga79@gmail.com" className="btn-blue">Send Email ↗</a>
              <button onClick={copy} className="btn-outline">
                {copied ? '✓ Copied!' : 'Copy Email'}
              </button>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: 'GitHub',   href: 'https://github.com/Karthik1056' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karthik-s-adiga-668566228' },
                { label: 'LeetCode', href: 'https://leetcode.com/Karthikadiga/' },
                { label: 'Resume',   href: 'https://drive.google.com/file/d/1IPpEp5jMExktN5N7Qx9gUgbzIlD908Y-/view' },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                  className="flex items-center justify-between p-4 border border-white/[0.08] rounded-xl
                    text-white/60 hover:border-blue-400/50 hover:text-blue-400 hover:bg-blue-400/5 transition-all duration-300 group">
                  <span className="font-display font-bold text-[12px] tracking-widest uppercase">{l.label}</span>
                  <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

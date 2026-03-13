import { useEffect, useRef } from 'react'

const words = ['SOFTWARE', 'DEVELOPER', '&', 'BUILDER']

export default function Hero() {
  const wordsRef = useRef(null)
  const subRef   = useRef(null)

  useEffect(() => {
    wordsRef.current?.querySelectorAll('.hero-word').forEach((el, i) => {
      el.style.transitionDelay = `${0.05 + i * 0.09}s`
      requestAnimationFrame(() => el.classList.add('visible'))
    })
    setTimeout(() => subRef.current?.classList.add('visible'), 650)
  }, [])

  return (
    <section id="hero" className="grain relative min-h-screen flex items-center px-6 sm:px-10 lg:px-14 overflow-hidden bg-navy-950">

      {/* Glow blobs */}
      <div className="glow-blob w-[700px] h-[700px] bg-blue-500/15 -top-32 -left-32" />
      <div className="glow-blob w-[400px] h-[400px] bg-blue-400/10 bottom-0 right-0" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#60a5fa 1px,transparent 1px),linear-gradient(90deg,#60a5fa 1px,transparent 1px)',
                 backgroundSize: '80px 80px' }} />

      <div className="relative z-10 pt-20 pb-24 max-w-5xl">

        {/* Status pill */}
        <div className="reveal opacity-0 translate-y-4 flex items-center gap-3 mb-10 w-fit px-4 py-2
          border border-blue-400/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse2" />
          <span className="text-[11px] tracking-[2.5px] uppercase text-blue-300 font-display font-semibold">
            Open to Opportunities · Bengaluru
          </span>
        </div>

        {/* Big title */}
        <h1 ref={wordsRef}
          className="font-display font-extrabold uppercase leading-[0.88] tracking-tight mb-8 sm:mb-12 flex flex-wrap gap-x-[0.2em] gap-y-2"
          style={{ fontSize: 'clamp(40px, 10vw, 136px)' }}>
          {words.map((w, i) => (
            <span key={i}
              className="hero-word reveal opacity-0 translate-y-16 inline-block transition-all duration-700"
              style={{ color: w === '&' ? '#60a5fa' : 'white', fontStyle: w === '&' ? 'italic' : 'normal', fontWeight: w === '&' ? 400 : 800 }}>
              {w}
            </span>
          ))}
        </h1>

        {/* Subline */}
        <div ref={subRef} className="reveal opacity-0 translate-y-6 flex flex-col gap-6 transition-all duration-700">
          <p className="max-w-md text-white/60 font-body font-light text-sm sm:text-base leading-relaxed">
            Hi, I'm <span className="text-white font-medium">Karthik S Adiga</span> — crafting
            clean, scalable software. Skilled in Full Stack, Backend &amp; C++ development.
            Ready to build from day one.
          </p>
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            <a href="#projects" className="btn-blue">View Work ↓</a>
            <a href="https://github.com/Karthik1056" target="_blank" rel="noreferrer" className="btn-outline">GitHub ↗</a>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="animate-float absolute top-[36%] right-[10%] hidden lg:flex items-center gap-2
        px-4 py-2 border border-white/10 rounded-full bg-navy-900/60 backdrop-blur-sm text-[11px] tracking-widest uppercase text-white/50 shadow-lg">
        17 Repos
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 sm:left-10 lg:left-14 hidden sm:flex items-center gap-4 text-[10px] tracking-[3px] uppercase text-white/30">
        <span>SCROLL</span>
        <div className="w-14 h-px bg-white/10 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-full h-full bg-blue-400 animate-lineMove" />
        </div>
      </div>

      {/* Big bg text */}
      <div className="absolute bottom-[-50px] right-[-10px] font-display font-extrabold text-white/[0.02] pointer-events-none select-none tracking-[-10px]"
        style={{ fontSize: 'clamp(160px, 24vw, 340px)' }}>KSA</div>
    </section>
  )
}

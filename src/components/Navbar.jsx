import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'About',    href: '#about'    },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills',   href: '#skills'   },
    { label: 'Contact',  href: '#contact'  },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-14 transition-all duration-500
      ${scrolled ? 'py-3 sm:py-4 bg-navy-950/90 backdrop-blur-xl border-b border-white/[0.08]' : 'py-5 sm:py-7'}`}>

      <a href="#hero" className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white z-50">
        Karthik Adiga<span className="text-blue-400">.</span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-9">
        {links.map(l => (
          <a key={l.label} href={l.href}
            className="text-[13px] font-body text-white/60 tracking-wide hover:text-white transition-colors relative group">
            {l.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
        <a href="https://drive.google.com/file/d/1IPpEp5jMExktN5N7Qx9gUgbzIlD908Y-/view"
          target="_blank" rel="noreferrer"
          className="text-[12px] font-display font-bold tracking-widest uppercase px-5 py-2.5 border border-white/10 rounded-full text-white hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
          Resume ↗
        </a>
      </div>

      {/* Hamburger */}
      <button className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none z-50"
        onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
        <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center
          ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
        <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300
          ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center
          ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
      </button>

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 bg-navy-950 flex flex-col items-center justify-center gap-8 sm:gap-10 transition-opacity duration-400 z-40
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
            className="font-display font-bold text-3xl sm:text-4xl text-white hover:text-blue-400 transition-colors">
            {l.label}
          </a>
        ))}
        <a href="https://drive.google.com/file/d/1IPpEp5jMExktN5N7Qx9gUgbzIlD908Y-/view"
          target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}
          className="text-blue-400 font-display font-bold text-base sm:text-lg border border-blue-400/40 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full">
          Resume ↗
        </a>
      </div>
    </nav>
  )
}

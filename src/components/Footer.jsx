export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 lg:px-14 py-8 sm:py-10 border-t border-white/[0.08] bg-navy-950">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5">
        <div>
          <span className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
            Karthik Adiga<span className="text-blue-400">.</span>
          </span>
          <p className="text-[10px] sm:text-[11px] tracking-[2px] uppercase text-white/30 mt-1 font-display">
            Building from zero to one
          </p>
        </div>
        <span className="text-[11px] sm:text-[12px] text-white/30 order-last sm:order-none">© {new Date().getFullYear()} Bengaluru, India</span>
        <div className="flex gap-4 sm:gap-6">
          {[
            { label: 'GitHub',   href: 'https://github.com/Karthik1056' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karthik-s-adiga-668566228' },
            { label: 'Email',    href: 'mailto:karthikadiga79@gmail.com' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              className="text-[11px] sm:text-[12px] text-white/40 hover:text-blue-400 transition-colors tracking-wide">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

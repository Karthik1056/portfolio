const items = [
  'Software Engineer','✦','Full Stack Dev','✦',
  'Backend Dev','✦','C++ Developer','✦',
  'Problem Solver','✦','Open to Work','✦',
]

export default function Marquee() {
  return (
    <div className="border-y border-white/[0.08] overflow-hidden py-5 bg-navy-900/50">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i}
            className={item === '✦'
              ? 'text-blue-400 text-base mx-1 flex-shrink-0'
              : 'font-display font-semibold text-[12px] tracking-[2px] uppercase text-white/40 px-8 flex-shrink-0 hover:text-blue-300 transition-colors'}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

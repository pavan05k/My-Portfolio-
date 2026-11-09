import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
        <span className="h-px w-8 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-cyan)]" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="text-muted mt-4 leading-relaxed">{subtitle}</p>}
    </Reveal>
  )
}

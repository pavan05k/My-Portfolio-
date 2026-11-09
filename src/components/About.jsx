import { about } from '../data'
import Counter from './ui/Counter'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title={about.heading} />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-muted text-base leading-relaxed sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="glass group relative h-full overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1 hover:border-[var(--accent-violet)] sm:p-6">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--accent-violet)] opacity-10 blur-2xl transition group-hover:opacity-30" />
                  <div className="font-display gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
                    <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                  </div>
                  <p className="text-muted mt-2 text-sm leading-snug">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

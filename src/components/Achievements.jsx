import { Award, CalendarCheck, Trophy, Users } from 'lucide-react'
import { achievements } from '../data'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const icons = [Trophy, Users, Award, CalendarCheck]

export default function Achievements() {
  const [top, ...rest] = achievements
  return (
    <section id="achievements" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Achievements" title="Hackathons & Events" />

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Featured */}
          <Reveal className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl p-px">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue)] via-[var(--accent-violet)] to-[var(--accent-cyan)] opacity-70" />
              <div className="relative flex flex-col gap-6 rounded-[calc(1.5rem-1px)] bg-[var(--bg)] p-6 sm:flex-row sm:items-center sm:p-10">
                <div className="btn-primary grid h-20 w-20 shrink-0 place-items-center rounded-2xl">
                  <Trophy size={38} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-cyan)]">
                    Featured · {top.year}
                  </p>
                  <h3 className="font-display mt-1 text-2xl font-semibold sm:text-3xl">{top.title}</h3>
                  <p className="text-muted mt-2 max-w-2xl leading-relaxed">{top.text}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {rest.map((a, i) => {
            const Icon = icons[i + 1] || Award
            return (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="glass group h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-violet)]">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[var(--accent-violet)]/15 text-[var(--accent-violet)] transition group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{a.title}</h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">{a.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

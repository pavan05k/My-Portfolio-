import { Megaphone } from 'lucide-react'
import { leadership } from '../data'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Leadership() {
  return (
    <section id="leadership" className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Leadership" title="Leadership & Community" />

        <ol className="relative ml-4 space-y-8 border-l border-theme sm:ml-6">
          {leadership.map((l) => (
            <li key={l.org} className="relative pl-8 sm:pl-12">
              <span className="btn-primary absolute -left-[19px] top-1 grid h-9 w-9 place-items-center rounded-full ring-4 ring-[var(--bg)]">
                <Megaphone size={16} />
              </span>
              <Reveal>
                <div className="glass max-w-3xl rounded-2xl p-6 transition hover:border-[var(--accent-violet)] sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-cyan)]">
                    {l.period}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-semibold">
                    {l.org} <span className="text-muted font-normal">– {l.role}</span>
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {l.points.map((p) => (
                      <li key={p} className="text-muted flex gap-2.5 text-sm leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-violet)]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

import { GraduationCap } from 'lucide-react'
import { education } from '../data'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Education() {
  return (
    <section id="education" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Education" title="Academic Background" />

        <ol className="relative ml-4 border-l border-theme sm:ml-6">
          {education.map((e) => (
            <li key={e.school} className="relative pb-2 pl-8 sm:pl-12">
              <span className="btn-primary absolute -left-[19px] top-1 grid h-9 w-9 place-items-center rounded-full ring-4 ring-[var(--bg)]">
                <GraduationCap size={17} />
              </span>
              <Reveal>
                <div className="glass max-w-3xl rounded-2xl p-6 transition hover:border-[var(--accent-blue)] sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-cyan)]">
                    {e.period}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-semibold sm:text-2xl">{e.school}</h3>
                  <p className="text-muted mt-2">{e.degree}</p>
                  <span className="gradient-text font-display mt-4 inline-block text-lg font-semibold">
                    {e.detail}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

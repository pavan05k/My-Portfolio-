import { BadgeCheck, ExternalLink } from 'lucide-react'
import { certifications } from '../data'
import LinkButton from './ui/LinkButton'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Certifications" title="Courses & Certificates" />

        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="glass flex h-full flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-cyan)]">
                <BadgeCheck className="text-[var(--accent-cyan)]" size={26} />
                <p className="text-muted mt-4 text-xs font-semibold uppercase tracking-widest">
                  {c.issuer}
                </p>
                <h3 className="font-display mt-1 text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="text-muted mt-1 text-sm">{c.meta}</p>
                <LinkButton
                  href={c.link}
                  icon={<ExternalLink size={14} />}
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-[var(--accent-cyan)] transition hover:gap-3"
                >
                  View certificate
                </LinkButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

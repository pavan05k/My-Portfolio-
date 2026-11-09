import { ExternalLink, Check } from 'lucide-react'
import { projects } from '../data'
import ProjectMock from './ProjectMock'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Tilt from './ui/Tilt'
import LinkButton from './ui/LinkButton'
import { GithubIcon } from './ui/SocialIcons'

function ProjectCard({ p, index }) {
  const flip = index % 2 === 1
  return (
    <Reveal>
      <Tilt max={3} className="rounded-3xl">
        <article className="glass relative overflow-hidden rounded-3xl p-5 sm:p-8">
          <div
            className="pointer-events-none absolute -top-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
            style={{
              background: p.accent[0],
              [flip ? 'left' : 'right']: '-4rem',
            }}
            aria-hidden="true"
          />

          <div
            className={`relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
              flip ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            <ProjectMock type={p.mock} accent={p.accent} image={p.image} title={p.title} />

            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-cyan)]">
                  {p.category.join(' · ')}
                </span>
                <span className="text-muted text-xs">• {p.period}</span>
              </div>

              <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                {p.title}
              </h3>
              <p className="text-muted mt-3 leading-relaxed">{p.description}</p>

              <ul className="mt-5 grid gap-2 sm:grid-cols-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check size={15} className="mt-0.5 shrink-0 text-[var(--accent-cyan)]" />
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
                {p.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-theme bg-[var(--bg-elev)]/60 px-3 py-1 text-xs font-medium"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <LinkButton
                  href={p.github}
                  icon={<GithubIcon size={16} />}
                  className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5"
                >
                  GitHub
                </LinkButton>
                <LinkButton
                  href={p.demo}
                  icon={<ExternalLink size={16} />}
                  className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5"
                >
                  Live Demo
                </LinkButton>
              </div>
            </div>
          </div>
        </article>
      </Tilt>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div
        className="drift pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-[var(--accent-violet)] opacity-10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          subtitle="Full-stack and AI projects built end to end — from APIs and databases to real-time computer vision."
        />
        <div className="space-y-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

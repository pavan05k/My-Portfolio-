import { Mail } from 'lucide-react'
import { links, navItems, profile } from '../data'
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons'
import LinkButton from './ui/LinkButton'

export default function Footer() {
  const go = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <footer className="relative border-t border-theme px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-semibold">
            {profile.name}
            <span className="gradient-text">.</span>
          </p>
          <p className="text-muted mt-1 text-sm">Full-Stack Developer · MERN · AI/ML</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={go(n.id)}
              className="text-muted text-sm transition hover:text-[var(--text)]"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass text-muted grid h-10 w-10 place-items-center rounded-full transition hover:-translate-y-0.5 hover:text-[var(--text)]"
          >
            <GithubIcon size={17} />
          </a>
          <LinkButton
            href={links.linkedin}
            aria-label="LinkedIn"
            className="glass text-muted grid h-10 w-10 place-items-center rounded-full transition hover:-translate-y-0.5 hover:text-[var(--text)]"
          >
            <LinkedinIcon size={17} />
          </LinkButton>
          <a
            href={links.email}
            aria-label="Email"
            className="glass text-muted grid h-10 w-10 place-items-center rounded-full transition hover:-translate-y-0.5 hover:text-[var(--text)]"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
      <p className="text-muted mt-10 text-center text-xs">
        © {new Date().getFullYear()} {profile.name}. Designed &amp; built with React, Tailwind CSS and
        Framer Motion.
      </p>
    </footer>
  )
}

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, Download, Mail, Send } from 'lucide-react'
import { links, profile } from '../data'
import useTyping from '../hooks/useTyping'
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons'
import LinkButton from './ui/LinkButton'
import TechIcon from './ui/TechIcon'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const orbit = [
  { icon: 'react', angle: 0 },
  { icon: 'nodejs', angle: 72 },
  { icon: 'python', angle: 144 },
  { icon: 'mongodb', angle: 216 },
  { icon: 'fastapi', angle: 288 },
]

function HeroVisual() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 })
  const sy = useSpring(my, { stiffness: 60, damping: 18 })
  const rx = useTransform(sy, [-1, 1], [8, -8])
  const ry = useTransform(sx, [-1, 1], [-10, 10])

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1)
    my.set(((e.clientY - r.top) / r.height) * 2 - 1)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto aspect-square w-full max-w-[460px]"
      style={{ perspective: 1100 }}
      aria-hidden="true"
    >
      {/* glow */}
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-[var(--accent-blue)] via-[var(--accent-violet)] to-[var(--accent-cyan)] opacity-30 blur-3xl" />

      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        className="absolute inset-0"
      >
        {/* rings */}
        <div className="spin-slow absolute inset-[4%] rounded-full border border-dashed border-[var(--accent-violet)]/40" />
        <div className="spin-slow-rev absolute inset-[18%] rounded-full border border-[var(--accent-cyan)]/30" />
        <div className="absolute inset-[32%] rounded-full border border-[var(--accent-blue)]/40" />

        {/* orbiting tech badges */}
        <div className="spin-slow absolute inset-[4%]">
          {orbit.map((o) => (
            <div
              key={o.icon}
              className="absolute inset-0"
              style={{ transform: `rotate(${o.angle}deg)` }}
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <div style={{ transform: `rotate(${-o.angle}deg)` }}>
                  <div className="counter-spin glass grid h-10 w-10 place-items-center rounded-xl shadow-lg sm:h-11 sm:w-11">
                    <TechIcon name={o.icon} size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* core card */}
        <div className="float-slow absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2">
          <div
            className="glass overflow-hidden rounded-2xl shadow-2xl shadow-violet-500/10"
            style={{ transform: 'translateZ(40px)' }}
          >
            <div className="flex items-center gap-1.5 border-b border-theme px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              <span className="text-muted ml-2 font-mono text-[10px]">pavan.config.js</span>
            </div>
            <pre className="overflow-hidden p-3 font-mono text-[10.5px] leading-relaxed sm:text-[11.5px]">
              <span className="text-[var(--accent-violet)]">const</span>{' '}
              <span className="text-[var(--accent-cyan)]">dev</span> = {'{'}
              {'\n'}  name: <span className="text-emerald-400">"Pavan"</span>,
              {'\n'}  stack: [<span className="text-emerald-400">"MERN"</span>,
              {'\n'}          <span className="text-emerald-400">"AI/ML"</span>],
              {'\n'}  building: <span className="text-emerald-400">"things"</span>
              {'\n'}
              {'}'}
            </pre>
          </div>
        </div>

        {/* floating chips */}
        <div
          className="glass float-slow absolute right-[2%] top-[22%] rounded-xl px-3 py-2 font-mono text-[11px] shadow-lg"
          style={{ animationDelay: '-2s', transform: 'translateZ(70px)' }}
        >
          <span className="text-emerald-400">●</span> 8 REST APIs
        </div>
        <div
          className="glass float-slow absolute bottom-[20%] left-[0%] rounded-xl px-3 py-2 font-mono text-[11px] shadow-lg"
          style={{ animationDelay: '-4s', transform: 'translateZ(60px)' }}
        >
          <span className="text-[var(--accent-cyan)]">◆</span> pose → feedback
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const typed = useTyping(profile.roles)

  const goto = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-medium sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Open to Software Engineering Opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="gradient-text">{profile.name}.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-display mt-5 min-h-[2rem] text-xl font-medium sm:text-2xl"
            aria-label={profile.title}
          >
            <span aria-hidden="true">
              {typed}
              <span className="caret text-[var(--accent-cyan)]">|</span>
            </span>
          </motion.p>

          <motion.p variants={item} className="text-muted mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={goto('projects')}
              className="btn-primary group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5"
            >
              Explore My Work
              <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
            </a>
            <a
              href={links.resume}
              download
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-[var(--accent-violet)]"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              onClick={goto('contact')}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted transition hover:text-[var(--text)]"
            >
              <Send size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="glass text-muted grid h-11 w-11 place-items-center rounded-full transition hover:-translate-y-0.5 hover:text-[var(--text)]"
            >
              <GithubIcon size={19} />
            </a>
            <LinkButton
              href={links.linkedin}
              aria-label="LinkedIn profile"
              className="glass text-muted grid h-11 w-11 place-items-center rounded-full transition hover:-translate-y-0.5 hover:text-[var(--text)]"
            >
              <LinkedinIcon size={19} />
            </LinkButton>
            <a
              href={links.email}
              aria-label="Send an email"
              className="glass text-muted grid h-11 w-11 place-items-center rounded-full transition hover:-translate-y-0.5 hover:text-[var(--text)]"
            >
              <Mail size={19} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      <a
        href="#about"
        onClick={goto('about')}
        aria-label="Scroll to About"
        className="text-muted absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={20} />
        </motion.div>
      </a>
    </section>
  )
}

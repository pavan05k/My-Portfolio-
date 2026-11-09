import { motion } from 'framer-motion'
import { skills } from '../data'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import TechIcon from './ui/TechIcon'

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          subtitle="The languages, frameworks and tools I use to build full-stack and AI-powered products."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, gi) => (
            <Reveal key={group.title} delay={(gi % 3) * 0.08}>
              <div className="glass group h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-blue)]">
                <h3 className="font-display mb-5 flex items-center gap-2 text-lg font-semibold">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-violet)]" />
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((s) => (
                    <motion.li
                      key={s.name}
                      whileHover={{ y: -3, scale: 1.04 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                      className="flex items-center gap-2.5 rounded-xl border border-theme bg-[var(--bg-elev)]/60 px-3.5 py-2.5 text-sm"
                    >
                      <TechIcon name={s.icon} size={18} />
                      {s.name}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

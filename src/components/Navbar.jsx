import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { links, navItems, profile } from '../data'
import useActiveSection from '../hooks/useActiveSection'

const ids = navItems.map((n) => n.id)

export default function Navbar({ theme, toggleTheme }) {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 ${
          scrolled ? 'glass mx-3 rounded-2xl py-2 shadow-lg shadow-black/10 sm:mx-auto' : ''
        }`}
      >
        <a
          href="#home"
          onClick={go('home')}
          className="font-display flex items-center gap-2 text-lg font-semibold"
          aria-label={`${profile.name} – home`}
        >
          <span className="btn-primary grid h-9 w-9 place-items-center rounded-xl text-sm font-bold">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <li key={n.id} className="relative">
              <a
                href={`#${n.id}`}
                onClick={go(n.id)}
                aria-current={active === n.id ? 'true' : undefined}
                className={`relative block rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active === n.id ? 'text-[var(--text)]' : 'text-muted hover:text-[var(--text)]'
                }`}
              >
                {active === n.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="glass absolute inset-0 -z-10 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="glass grid h-9 w-9 place-items-center rounded-full transition hover:scale-105"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href={links.resume}
            download
            className="btn-primary hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 sm:inline-flex"
          >
            <Download size={15} /> Resume
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="glass grid h-9 w-9 place-items-center rounded-full lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="glass mx-3 mt-2 rounded-2xl p-3 shadow-xl lg:hidden"
            style={{ background: 'color-mix(in srgb, var(--bg) 88%, transparent)' }}
          >
            <ul className="flex flex-col">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={go(n.id)}
                    className={`block rounded-xl px-4 py-3 text-sm ${
                      active === n.id
                        ? 'bg-[var(--glass)] font-medium text-[var(--text)]'
                        : 'text-muted'
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={links.resume}
                  download
                  className="btn-primary flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium"
                >
                  <Download size={15} /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

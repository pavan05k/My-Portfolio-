import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import useTheme from './hooks/useTheme'
import Background from './components/Background'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  const { theme, toggle } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>

      <a
        href="#about"
        className="sr-only z-[300] rounded-lg bg-[var(--bg-elev)] px-4 py-2 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Background />
      <Cursor />
      <Navbar theme={theme} toggleTheme={toggle} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Certifications />
        <Leadership />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

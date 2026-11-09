import { motion, useScroll, useSpring } from 'framer-motion'

/** Fixed ambient gradients + noise + scroll progress bar. */
export default function Background() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX, transformOrigin: '0 50%' }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-gradient-to-r from-[var(--accent-blue)] via-[var(--accent-violet)] to-[var(--accent-cyan)]"
      />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="drift absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[var(--accent-blue)] opacity-[0.13] blur-[120px]" />
        <div className="drift-2 absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-[var(--accent-violet)] opacity-[0.13] blur-[120px]" />
        <div className="drift absolute bottom-[-12rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-[var(--accent-cyan)] opacity-[0.08] blur-[120px]" />
      </div>
      <div className="noise" aria-hidden="true" />
    </>
  )
}

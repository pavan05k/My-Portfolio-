import { motion } from 'framer-motion'
import { profile } from '../data'

/** Short branded preloader that doubles as the page-transition-in. */
export default function Loader() {
  return (
    <motion.div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[200] grid place-items-center bg-[var(--bg)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="btn-primary font-display mx-auto grid h-16 w-16 place-items-center rounded-2xl text-2xl font-bold"
        >
          {profile.initials}
        </motion.div>
        <div className="mx-auto mt-6 h-0.5 w-32 overflow-hidden rounded-full bg-[var(--border)]">
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-cyan)]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  )
}

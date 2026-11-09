import { useEffect, useState } from 'react'

// Sections that belong under a different nav item.
const ALIAS = { certifications: 'achievements', leadership: 'achievements' }

export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const all = [...ids, ...Object.keys(ALIAS)]
    const els = all.map((id) => document.getElementById(id)).filter(Boolean)

    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35
      let current = ids[0]
      for (const el of els) {
        if (el.offsetTop <= y) current = ALIAS[el.id] || el.id
      }
      // Bottom of page → last item
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = ids[ids.length - 1]
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}

import { PLACEHOLDER } from '../../data'

/**
 * Anchor that handles PLACEHOLDER links gracefully: it looks muted, shows a
 * tooltip, and doesn't navigate anywhere until you add a real URL in data.js.
 */
export default function LinkButton({ href, children, className = '', icon, ...rest }) {
  const missing = !href || href === PLACEHOLDER
  const external = !missing && /^https?:/.test(href)

  return (
    <a
      href={missing ? undefined : href}
      aria-disabled={missing || undefined}
      title={missing ? 'Link not added yet – edit src/data.js' : undefined}
      onClick={missing ? (e) => e.preventDefault() : undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${className} ${missing ? 'opacity-50 hover:opacity-70' : ''}`}
      {...rest}
    >
      {icon}
      {children}
    </a>
  )
}

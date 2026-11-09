import {
  siOpenjdk,
  siPython,
  siJavascript,
  siReact,
  siNodedotjs,
  siExpress,
  siFastapi,
  siMongodb,
  siSqlite,
  siOpencv,
  siGit,
  siGithub,
} from 'simple-icons'
import { Binary, Bot, Code2, MessageSquareText, Network, PersonStanding, Volume2 } from 'lucide-react'

const BRAND = {
  java: siOpenjdk,
  python: siPython,
  javascript: siJavascript,
  react: siReact,
  nodejs: siNodedotjs,
  express: siExpress,
  fastapi: siFastapi,
  mongodb: siMongodb,
  sqlite: siSqlite,
  opencv: siOpencv,
  git: siGit,
  github: siGithub,
}

// No official brand glyph available → neutral lucide icons with a signature colour.
const GENERIC = {
  rest: { Icon: Network, color: '#22d3ee' },
  mediapipe: { Icon: PersonStanding, color: '#38bdf8' },
  nlp: { Icon: MessageSquareText, color: '#a78bfa' },
  ast: { Icon: Binary, color: '#34d399' },
  llm: { Icon: Bot, color: '#f472b6' },
  tts: { Icon: Volume2, color: '#fbbf24' },
  vscode: { Icon: Code2, color: '#3b82f6' },
}

// Very dark brand colours vanish on a dark background → use theme text colour instead.
function safeColor(hex) {
  const n = parseInt(hex, 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return lum < 0.3 ? 'var(--text)' : `#${hex}`
}

export default function TechIcon({ name, size = 22 }) {
  const brand = BRAND[name]
  if (brand) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
        style={{ fill: safeColor(brand.hex) }}
      >
        <path d={brand.path} />
      </svg>
    )
  }
  const g = GENERIC[name]
  if (g) return <g.Icon size={size} style={{ color: g.color }} aria-hidden="true" />
  return <Code2 size={size} aria-hidden="true" />
}

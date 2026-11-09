/**
 * Abstract "browser window" preview used until you add a real screenshot
 * (set `image` on the project in src/data.js). Purely decorative – contains
 * no made-up data or metrics.
 */
function Bar({ w, c = 'bg-white/10', h = 'h-2' }) {
  return <div className={`${h} ${c} rounded-full`} style={{ width: w }} />
}

function TravelMock({ a }) {
  return (
    <div className="grid h-full grid-cols-3 gap-2 p-3">
      <div className="col-span-3 flex items-center gap-2">
        <div className="h-6 flex-1 rounded-lg bg-white/10" />
        <div className="h-6 w-16 rounded-lg" style={{ background: a[0] }} />
      </div>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="rounded-lg bg-white/[0.06] p-1.5">
          <div
            className="mb-1.5 h-12 rounded-md"
            style={{
              background: `linear-gradient(135deg, ${a[i % 2]}55, ${a[(i + 1) % 2]}22)`,
            }}
          />
          <Bar w="70%" />
          <div className="mt-1">
            <Bar w="40%" c="bg-white/5" />
          </div>
        </div>
      ))}
    </div>
  )
}

function PoseMock({ a }) {
  return (
    <div className="relative grid h-full place-items-center p-3">
      <svg viewBox="0 0 200 140" className="h-full w-full">
        <g stroke={a[1]} strokeWidth="3" strokeLinecap="round" fill="none">
          <path d="M100 30 L100 70" />
          <path d="M100 42 L72 58 L60 84" />
          <path d="M100 42 L128 54 L142 36" />
          <path d="M100 70 L82 100 L78 128" />
          <path d="M100 70 L118 98 L130 126" />
        </g>
        <g fill={a[0]}>
          <circle cx="100" cy="22" r="9" />
          {[
            [100, 42],
            [72, 58],
            [60, 84],
            [128, 54],
            [142, 36],
            [100, 70],
            [82, 100],
            [78, 128],
            [118, 98],
            [130, 126],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="4.5" />
          ))}
        </g>
        <path d="M72 58 A 16 16 0 0 1 86 48" stroke={a[0]} strokeWidth="2" fill="none" />
      </svg>
      <div className="absolute bottom-3 left-3 right-3 flex gap-2">
        <div className="glass flex-1 rounded-md px-2 py-1">
          <Bar w="60%" />
        </div>
        <div className="glass rounded-md px-2 py-1">
          <Bar w="22px" c="bg-white/20" />
        </div>
      </div>
    </div>
  )
}

function ScoreMock({ a }) {
  const steps = ['Claim', 'Evidence', 'Analysis', 'Score', 'Credential']
  return (
    <div className="flex h-full flex-col justify-between gap-3 p-3">
      <div className="flex items-center gap-4">
        <svg viewBox="0 0 80 80" className="h-20 w-20 shrink-0">
          <circle cx="40" cy="40" r="32" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
          <circle
            cx="40"
            cy="40"
            r="32"
            stroke={a[0]}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="150 201"
            transform="rotate(-90 40 40)"
          />
        </svg>
        <div className="flex-1 space-y-2">
          <Bar w="80%" h="h-2.5" />
          <Bar w="55%" />
          <Bar w="65%" />
        </div>
      </div>
      <div className="flex items-center gap-1">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-1">
            <div
              className="grid h-5 w-5 shrink-0 place-items-center rounded-full text-[9px] font-semibold text-black"
              style={{ background: a[i % 2] }}
            >
              {i + 1}
            </div>
            {i < steps.length - 1 && <div className="h-px flex-1 bg-white/15" />}
          </div>
        ))}
      </div>
    </div>
  )
}

const MOCKS = { travel: TravelMock, pose: PoseMock, score: ScoreMock }

export default function ProjectMock({ type, accent, image, title }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0d0d12] shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
        <div className="ml-3 h-4 flex-1 rounded bg-white/[0.06]" />
      </div>
      <div className="relative aspect-[16/10]">
        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          (() => {
            const M = MOCKS[type] || TravelMock
            return (
              <>
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `radial-gradient(circle at 20% 0%, ${accent[0]}33, transparent 55%), radial-gradient(circle at 100% 100%, ${accent[1]}33, transparent 55%)`,
                  }}
                />
                <M a={accent} />
                <span className="absolute bottom-1.5 right-2 rounded bg-black/50 px-1.5 py-0.5 font-mono text-[9px] text-white/40">
                  preview
                </span>
              </>
            )
          })()
        )}
      </div>
    </div>
  )
}

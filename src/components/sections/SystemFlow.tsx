import { Check, Database, GitBranch, MessageSquare, ShieldCheck, Wrench } from 'lucide-react'
import { useEffect, useState } from 'react'
import { systemNodes, systemStages } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const icons = { message: MessageSquare, branch: GitBranch, database: Database, wrench: Wrench, shield: ShieldCheck, check: Check }

export function SystemFlow() {
  const [stage, setStage] = useState(0)
  const [paused, setPaused] = useState(false)

  // Walk through the stages on a timer until the visitor takes over.
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setStage((s) => (s + 1) % systemStages.length), 3200)
    return () => clearInterval(id)
  }, [paused])

  const activeNodes = systemStages[stage].nodes

  return (
    <section id="system" className="section bg-sky-tint">
      <div className="wrap">
        <SectionHeading
          eyebrow="System architecture"
          title="Signal in. Reasoned step. Checked action."
          lede="Most of the systems I build follow the same shape. Select a stage to see which parts of the pipeline it uses."
        />

        <div
          className="mt-16 grid gap-4 md:grid-cols-3 lg:mt-24 lg:gap-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {systemStages.map((s, i) => {
            const on = i === stage
            return (
              <Reveal key={s.key} delay={i * 0.08} className="h-full">
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    setStage(i)
                    setPaused(true)
                  }}
                  onMouseEnter={() => setStage(i)}
                  onFocus={() => {
                    setStage(i)
                    setPaused(true)
                  }}
                  className={`flex h-full w-full flex-col rounded-[18px] border p-7 text-left transition-all duration-500 sm:p-10 ${
                    on
                      ? 'card-shadow -translate-y-1 border-ink/10 bg-surface'
                      : 'border-ink/10 bg-transparent opacity-55 hover:opacity-90'
                  }`}
                >
                  <span className="flex items-center justify-between font-mono text-[11px] font-semibold text-sky">
                    {s.tag}
                    <span className="text-ink/40">0{i + 1}</span>
                  </span>
                  <span className="h-card mt-12 block">{s.title}</span>
                  <span className="mt-5 block text-[14px] font-light leading-relaxed text-muted">{s.body}</span>
                </button>
              </Reveal>
            )
          })}
        </div>

        {/* Pipeline diagram */}
        <Reveal delay={0.1}>
          <div className="relative mt-14 lg:mt-20" role="img" aria-label="Pipeline: input, router, context, tools, review, outcome">
            <div aria-hidden className="absolute bottom-6 left-[27px] top-6 w-px bg-ink/25 lg:hidden">
              <span className="absolute -left-[3px] size-[7px] rounded-full bg-signal [animation:flow-y_4s_linear_infinite]" />
            </div>
            <div aria-hidden className="absolute left-[8%] right-[8%] top-[27px] hidden h-px bg-ink/25 lg:block">
              <span className="absolute -top-[3px] size-[7px] rounded-full bg-signal [animation:flow-x_5s_linear_infinite]" />
            </div>

            <ol className="relative grid gap-3 lg:grid-cols-6 lg:gap-4">
              {systemNodes.map((n, i) => {
                const Icon = icons[n.icon as keyof typeof icons]
                const on = activeNodes.includes(i)
                return (
                  <li key={n.label} className="flex items-center gap-4 lg:flex-col lg:gap-3 lg:text-center">
                    <span
                      className={`grid size-[54px] shrink-0 place-items-center rounded-[14px] border transition-all duration-500 ${
                        on ? 'scale-110 border-ink bg-ink text-lime' : 'border-ink/20 bg-sky-tint text-ink/60'
                      }`}
                    >
                      <Icon size={21} strokeWidth={1.7} />
                    </span>
                    <span>
                      <span className={`block text-[17px] font-bold tracking-[-0.02em] transition-opacity duration-500 ${on ? '' : 'opacity-55'}`}>
                        {n.label}
                      </span>
                      <span className="block font-mono text-[11px] text-muted">{n.sub}</span>
                    </span>
                  </li>
                )
              })}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

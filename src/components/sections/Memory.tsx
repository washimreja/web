import { AnimatePresence, motion } from 'framer-motion'
import { RotateCcw, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { memoryFacts, type MemoryScope } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const scopes: ('All' | MemoryScope)[] = ['All', 'Projects', 'Preferences', 'Stack']

export function Memory() {
  const [scope, setScope] = useState<(typeof scopes)[number]>('All')
  const [removed, setRemoved] = useState<number[]>([])

  const stored = memoryFacts.filter((f) => !removed.includes(f.id))
  const visible = stored.filter((f) => scope === 'All' || f.scope === scope)

  return (
    <section id="memory" className="section bg-surface">
      <div className="wrap split">
        <SectionHeading
          eyebrow="Personal AI memory"
          title="Memory you can read, edit and delete."
          lede="Unease comes from the gap between what a system knows and what you think it knows. I design memory as a plain list of scoped facts that the owner can inspect."
        >
          <p className="lede mt-5">Stored facts should be deliberately dull: closer to a résumé than a diary.</p>
        </SectionHeading>

        <Reveal>
          <div className="mx-auto max-w-[640px]">
            <div className="card-shadow rounded-[22px] bg-ink p-2.5 text-surface">
              <div className="flex items-center justify-between px-4 pb-3 pt-2.5 font-mono text-[11px]">
                <span className="font-semibold">What the assistant remembers</span>
                <span className="flex items-center gap-2 text-surface/60">
                  <span className="size-1.5 rounded-full bg-lime [animation:blink_1.8s_ease-in-out_infinite]" />
                  interactive demo
                </span>
              </div>

              <div className="rounded-[14px] bg-surface text-ink">
                <div className="flex flex-wrap items-center gap-1.5 border-b border-rule px-4 py-3.5" role="group" aria-label="Filter by scope">
                  {scopes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      aria-pressed={scope === s}
                      onClick={() => setScope(s)}
                      className={`rounded-full border px-3.5 py-1.5 text-[12px] font-semibold transition-colors ${
                        scope === s ? 'border-ink bg-ink text-surface' : 'border-rule text-muted hover:border-ink hover:text-ink'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                  <span className="ml-auto font-mono text-[11px] text-muted" aria-live="polite">
                    {stored.length} stored
                  </span>
                </div>

                <ul className="min-h-[120px]">
                  <AnimatePresence initial={false}>
                    {visible.map((f) => (
                      <motion.li
                        key={f.id}
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                        className="overflow-hidden border-b border-rule last:border-0"
                      >
                        <div className="group flex items-start gap-4 px-5 py-6 sm:px-8">
                          <div className="min-w-0 flex-1">
                            <p className="text-[clamp(1.15rem,2vw,1.6rem)] font-bold leading-[1.02] tracking-[-0.04em]">{f.fact}</p>
                            <p className="mt-2 text-[13px] font-light text-muted">{f.source}</p>
                            <p className="mt-4 flex flex-wrap gap-1.5">
                              {[`Scope: ${f.scope}`, ...f.chips].map((chip) => (
                                <span key={chip} className="rounded-full border border-rule px-2.5 py-1 font-mono text-[10px] text-muted">
                                  {chip}
                                </span>
                              ))}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setRemoved((r) => [...r, f.id])}
                            aria-label={`Forget: ${f.fact}`}
                            className="grid size-10 shrink-0 place-items-center rounded-full border border-rule text-muted transition-colors hover:border-coral hover:bg-coral-tint hover:text-coral"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                  {visible.length === 0 && (
                    <li className="px-8 py-12 text-center text-[14px] font-light text-muted">
                      Nothing stored in this scope.
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="font-mono text-[11px] text-surface/60">Forget a fact to remove it everywhere.</span>
                <button
                  type="button"
                  onClick={() => {
                    setRemoved([])
                    setScope('All')
                  }}
                  disabled={removed.length === 0 && scope === 'All'}
                  className="inline-flex items-center gap-2 rounded-full border border-surface/25 px-3.5 py-1.5 text-[12px] font-semibold transition-colors hover:bg-surface hover:text-ink disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-surface"
                >
                  <RotateCcw size={13} /> Reset demo
                </button>
              </div>
            </div>

            <p className="mt-8 text-[13px] font-light leading-relaxed text-muted">
              Example data, shown to illustrate the pattern: every fact has a source, a scope and a delete button.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

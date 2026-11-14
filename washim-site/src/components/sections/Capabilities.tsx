import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useState } from 'react'
import { capabilities, capabilityPrinciples } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Capabilities() {
  const [active, setActive] = useState(0)
  const current = capabilities[active]

  // Shown beside the heading on desktop and directly under the cards on small screens.
  const detail = (className: string) => (
            <div className={`rounded-[18px] border border-ink/10 bg-canvas p-6 ${className}`} aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="font-mono text-[11px] font-semibold text-signal">
                    {String(active + 1).padStart(2, '0')} / {current.tag}
                  </p>
                  <p className="mt-3 text-[20px] font-bold tracking-[-0.03em]">{current.title}</p>
                  <ul className="mt-4 grid gap-2.5">
                    {current.detail.map((d) => (
                      <li key={d} className="flex gap-2.5 text-[14px] font-light leading-snug text-muted">
                        <Check size={16} className="mt-0.5 shrink-0 text-mint" /> {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
  )

  return (
    <section id="capabilities" className="section bg-surface">
      <div className="wrap split">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="AI capabilities"
            title="AI that does the work, not just the talking."
            lede="A useful system is more than a model behind a text box. I build the parts around it: tools, retrieval, checks and an interface worth using."
          />

          <Reveal delay={0.1}>
            <ul className="mt-12 max-w-[460px] border-b border-rule">
              {capabilityPrinciples.map((p) => (
                <li key={p} className="rule-row py-3.5 text-[14px] font-semibold">
                  {p}
                </li>
              ))}
            </ul>

            {detail('mt-8 hidden max-w-[460px] lg:block')}
          </Reveal>
        </div>

        <Reveal>
          <div
            role="group"
            aria-label="Capabilities. Select a card to see what it includes."
            className="grid grid-cols-6 gap-2 rounded-[22px] bg-ink p-2 sm:p-3 lg:grid-cols-12"
          >
            {capabilities.map((c, i) => {
              const selected = i === active
              return (
                <button
                  key={c.key}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-[14px] p-5 text-left transition-[transform,box-shadow] duration-300 hover:-translate-y-1 sm:p-6 ${
                    c.tint
                  } ${c.span} ${c.tall ? 'min-h-[230px] sm:min-h-[320px]' : 'min-h-[220px] sm:min-h-[290px]'} ${
                    selected ? 'shadow-[inset_0_0_0_2px_var(--color-lime)]' : ''
                  }`}
                >
                  <span
                    aria-hidden
                    className="absolute -right-10 -top-10 size-40 rounded-full bg-white/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className={`relative font-mono text-[11px] font-semibold ${c.tagColor}`}>{c.tag}</span>
                  <span className="relative mt-10 block">
                    <span className={`block font-bold leading-[0.95] tracking-[-0.05em] ${c.tall ? 'text-[clamp(1.6rem,2.6vw,2.2rem)]' : 'text-[clamp(1.35rem,1.9vw,1.7rem)]'}`}>
                      {c.title}
                    </span>
                    <span className="mt-3 block text-[13px] font-light leading-snug opacity-70">{c.blurb}</span>
                  </span>
                </button>
              )
            })}
          </div>
          {detail('mt-3 lg:hidden')}
        </Reveal>
      </div>
    </section>
  )
}

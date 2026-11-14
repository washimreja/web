import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState, type KeyboardEvent } from 'react'
import { useCases } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -60 }),
}

export function UseCases() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1])
  const total = useCases.length
  const go = (step: number) => setState(([i]) => [(i + step + total) % total, step])
  const slide = useCases[index]

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') go(1)
    if (e.key === 'ArrowLeft') go(-1)
  }

  return (
    <section id="work" className="section">
      <div className="wrap split">
        <SectionHeading
          eyebrow="Use cases"
          title="One engineer, from prototype to production."
          lede="Four situations I am usually brought into, and what changes afterwards."
        />

        <Reveal>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Use cases"
            tabIndex={0}
            onKeyDown={onKey}
            className="mx-auto max-w-[620px] rounded-[26px]"
          >
            <div className="relative min-h-[470px] sm:min-h-[500px]">
              <AnimatePresence mode="wait" custom={dir} initial={false}>
                <motion.article
                  key={index}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.38, ease: [0.2, 0.7, 0.2, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -70) go(1)
                    else if (info.offset.x > 70) go(-1)
                  }}
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${total}`}
                  className={`card-shadow absolute inset-0 flex cursor-grab flex-col rounded-[22px] border border-ink/10 p-7 active:cursor-grabbing sm:p-14 ${slide.tint}`}
                >
                  <p className="font-mono text-[11px] font-semibold text-ink/60">{slide.tag}</p>
                  <blockquote className="mt-9 text-[clamp(1.75rem,3.3vw,2.6rem)] font-bold leading-[0.98] tracking-[-0.05em]">
                    “{slide.quote}”
                  </blockquote>
                  <p className="mt-6 text-[15px] font-light leading-relaxed text-ink/70">{slide.body}</p>
                  <p className="mt-auto pt-8 text-[14px] font-bold">{slide.outcome}</p>
                </motion.article>
              </AnimatePresence>
            </div>

            <div className="mt-5 flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Choose a use case">
                {useCases.map((u, i) => (
                  <button
                    key={u.tag}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={u.tag}
                    onClick={() => setState([i, i >= index ? 1 : -1])}
                    className="grid h-8 place-items-center px-1"
                  >
                    <span
                      className={`block h-[7px] rounded-full transition-all duration-300 ${
                        i === index ? 'w-7 bg-ink' : 'w-[7px] bg-ink/25 hover:bg-ink/50'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                {[
                  { step: -1, label: 'Previous use case', Icon: ArrowLeft },
                  { step: 1, label: 'Next use case', Icon: ArrowRight },
                ].map(({ step, label, Icon }) => (
                  <button
                    key={label}
                    type="button"
                    aria-label={label}
                    onClick={() => go(step)}
                    className="grid size-11 place-items-center rounded-[10px] border border-ink transition-colors hover:bg-ink hover:text-surface"
                  >
                    <Icon size={17} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

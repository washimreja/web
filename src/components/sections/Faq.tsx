import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { faqs } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section !pt-[clamp(56px,7vw,110px)]">
      <div className="wrap split">
        <div className="lg:sticky lg:top-28">
          <SectionHeading eyebrow="FAQ" title="The short answers." lede="What people usually ask before we start." />
        </div>

        <Reveal>
          <ul className="border-b border-rule">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <li key={item.q} className="rule-row">
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="text-[clamp(1.25rem,2vw,1.65rem)] font-bold leading-tight tracking-[-0.035em]">{item.q}</span>
                      <span
                        className={`grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen ? 'rotate-45 border-ink bg-ink text-lime' : 'border-rule text-ink group-hover:border-ink'
                        }`}
                      >
                        <Plus size={18} />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-a-${i}`}
                        role="region"
                        aria-labelledby={`faq-q-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[640px] pb-7 pr-12 text-[16px] font-light leading-relaxed text-muted">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

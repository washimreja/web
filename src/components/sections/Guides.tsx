import { BookOpen } from 'lucide-react'
import { useState } from 'react'
import { guides } from '../../data/content'
import { useContact } from '../../context/ContactContext'
import { Modal } from '../ui/Modal'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Guides() {
  const [open, setOpen] = useState<number | null>(null)
  const [last, setLast] = useState(0)
  const { openContact } = useContact()
  const guide = guides[open ?? last]

  return (
    <section id="guides" className="section !py-[clamp(56px,7vw,110px)]">
      <div className="wrap split">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Guides"
            title="Start with a guide."
            lede="Short, practical notes on the questions I am asked most. Each one opens right here."
          />
        </div>

        <Reveal>
          <ul className="border-b border-rule">
            {guides.map((g, i) => (
              <li key={g.title} className="rule-row">
                <button
                  type="button"
                  onClick={() => {
                    setLast(i)
                    setOpen(i)
                  }}
                  className="group flex w-full items-center gap-6 py-5 text-left transition-[padding] duration-300 hover:pl-3"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-[clamp(1.25rem,2vw,1.65rem)] font-bold leading-tight tracking-[-0.035em]">{g.title}</span>
                    <span className="mt-1.5 block text-[15px] font-light text-muted">{g.summary}</span>
                  </span>
                  <span className="hidden shrink-0 items-center gap-2 rounded-full border border-rule px-3.5 py-2 font-mono text-[11px] text-muted transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-surface sm:inline-flex">
                    <BookOpen size={14} /> {g.steps.length} steps
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Modal open={open !== null} onClose={() => setOpen(null)} eyebrow="Guide" title={guide.title}>
        <p className="lede !text-[15px]">{guide.summary}</p>
        <ol className="mt-6">
          {guide.steps.map((step, i) => (
            <li key={step} className="rule-row flex gap-5 py-4">
              <span className="pt-0.5 font-mono text-[12px] font-bold text-signal">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-[15px] leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              setOpen(null)
              openContact()
            }}
          >
            Discuss this for your project
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => setOpen(null)}>
            Close
          </button>
        </div>
      </Modal>
    </section>
  )
}

import { ArrowUpRight } from 'lucide-react'
import { services } from '../../data/content'
import { useContact } from '../../context/ContactContext'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  const { openContact } = useContact()
  return (
    <section id="services" className="section !pb-[clamp(56px,7vw,110px)]">
      <div className="wrap split">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="What I build"
            title="Bring the problem. I’ll ship the system."
            lede="Each of these is work I take on directly. Select one to start a brief about it."
          />
        </div>

        <Reveal>
          <ul className="border-b border-rule">
            {services.map((s) => (
              <li key={s.title} className="rule-row">
                <button
                  type="button"
                  onClick={() => openContact(s.title)}
                  className="group flex w-full items-center gap-6 py-5 text-left transition-[padding] duration-300 hover:pl-3"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-[clamp(1.25rem,2vw,1.65rem)] font-bold leading-tight tracking-[-0.035em]">{s.title}</span>
                    <span className="mt-1.5 block text-[15px] font-light text-muted">{s.body}</span>
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-rule text-muted transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-lime">
                    <ArrowUpRight size={17} />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

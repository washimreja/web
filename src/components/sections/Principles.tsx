import { ShieldCheck, ShieldX } from 'lucide-react'
import { trustPair, trustRules } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Principles() {
  return (
    <section id="principles" className="section bg-amber-tint">
      <div className="wrap split">
        <SectionHeading
          eyebrow="Trust, security and privacy"
          title="Your data stays yours. By design."
          lede="An AI system is only useful if restraint is part of how it is built, not a policy page added afterwards."
        />

        <div>
          <ol className="grid gap-5">
            {trustRules.map((rule, i) => (
              <li key={rule}>
                <Reveal delay={i * 0.07}>
                <div
                  className={`card-shadow flex items-center gap-6 rounded-[18px] border border-ink/5 bg-surface px-6 py-8 transition-transform duration-500 hover:rotate-0 hover:scale-[1.01] sm:px-8 sm:py-10 ${
                    i % 2 ? 'rotate-[0.9deg]' : '-rotate-[0.9deg]'
                  }`}
                >
                  <span className="font-mono text-[12px] font-bold text-amber">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-[clamp(1.2rem,2.2vw,1.85rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
                    {rule}
                  </p>
                </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={0.1}>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <figure className="rounded-[14px] bg-coral-tint p-6">
                <figcaption className="flex items-center gap-2 font-mono text-[11px] font-semibold text-coral">
                  <ShieldX size={15} /> Avoid
                </figcaption>
                <p className="mt-3 text-[17px] font-medium leading-snug tracking-[-0.02em]">{trustPair.avoid}</p>
              </figure>
              <figure className="rounded-[14px] bg-mint-tint p-6">
                <figcaption className="flex items-center gap-2 font-mono text-[11px] font-semibold text-mint">
                  <ShieldCheck size={15} /> Prefer
                </figcaption>
                <p className="mt-3 text-[17px] font-medium leading-snug tracking-[-0.02em]">{trustPair.prefer}</p>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

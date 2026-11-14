import { ArrowUpRight } from 'lucide-react'
import { useContact } from '../../context/ContactContext'
import { Reveal } from '../ui/Reveal'

export function FinalCta() {
  const { openContact } = useContact()
  return (
    <section className="relative overflow-hidden border-t border-rule bg-surface" aria-labelledby="cta-title">
      <div aria-hidden className="pointer-events-none absolute -bottom-52 left-1/2 size-[720px] -translate-x-1/2 rounded-full bg-lime/45 blur-[140px]" />
      <div className="wrap section relative text-center">
        <Reveal>
          <p className="eyebrow">Start with one problem</p>
          <h2 id="cta-title" className="h-display mx-auto mt-7 max-w-[980px] !text-[clamp(2.8rem,7.4vw,6.2rem)]">
            Have something that should exist?
          </h2>
          <p className="lede mx-auto mt-8 max-w-[520px]">
            Send a short brief. I’ll reply with a scope, the main risks and a first milestone you can try.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" onClick={() => openContact()} className="btn btn-dark w-full sm:w-auto">
              Start a project <ArrowUpRight size={17} />
            </button>
            <a href="#capabilities" className="btn btn-ghost w-full sm:w-auto">
              Review capabilities
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

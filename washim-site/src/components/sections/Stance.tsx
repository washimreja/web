import { stance } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Stance() {
  return (
    <section className="section bg-ink text-surface" aria-labelledby="stance-title">
      <div className="wrap split lg:!items-end">
        <div>
          <SectionHeading
            dark
            eyebrow="How I work"
            title={<span id="stance-title">Most of the work is deciding what not to build.</span>}
            lede="Every feature is something to test, secure and maintain. I would rather ship a small system that holds up than a large one that only works in the demo."
          />
          <Reveal delay={0.1}>
            <p className="mt-12 max-w-[460px] border-t border-surface/20 pt-8 text-[clamp(1.6rem,2.8vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.04em] text-lime">
              {stance.quote}
            </p>
          </Reveal>
        </div>

        <ul>
          {stance.points.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 0.08}>
                <div className="border-t border-surface/20 py-8">
                  <h3 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold leading-[1.05] tracking-[-0.045em]">{p.title}</h3>
                  <p className="mt-3 text-[15px] font-light text-surface/60">{p.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

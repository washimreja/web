import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Bot, LayoutDashboard, Workflow } from 'lucide-react'
import { focusAreas, heroCards } from '../../data/content'
import { useContact } from '../../context/ContactContext'

const icons = { bot: Bot, layout: LayoutDashboard, workflow: Workflow }
const ease = [0.2, 0.7, 0.2, 1] as const
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
})

export function Hero() {
  const { openContact } = useContact()
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background: soft colour fields + a faint engineering grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 size-[640px] rounded-full bg-mint-tint/70 blur-[120px]" />
        <div className="absolute -right-32 top-0 size-[560px] rounded-full bg-signal-tint/80 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: 'radial-gradient(rgb(14 16 19 / 0.14) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 70% 35%, #000 0%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 70% 35%, #000 0%, transparent 75%)',
          }}
        />
      </div>

      <div className="wrap relative grid gap-12 pb-14 pt-[132px] sm:pt-[168px] lg:min-h-[820px] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-10">
        <div>
          <motion.p {...rise(0.1)} className="eyebrow">
            Independent AI engineer · Software developer · India
          </motion.p>

          <motion.h1 {...rise(0.2)} className="h-display mt-7">
            Build what should{' '}
            <span className="whitespace-nowrap">
              <span
                aria-hidden
                className="mr-[0.14em] inline-flex h-[0.42em] w-[1.05em] translate-y-[-0.08em] items-center justify-end rounded-full border border-ink/15 bg-lime pr-[0.12em] align-middle shadow-[inset_0_-3px_8px_rgb(14_16_19/0.12)]"
              >
                <span className="size-[0.16em] rounded-full bg-ink [animation:blink_1.8s_ease-in-out_infinite]" />
              </span>
              exist.
            </span>
          </motion.h1>

          <div className="mt-9 max-w-[640px] lg:ml-[76px]">
            <motion.p
              {...rise(0.32)}
              className="text-[clamp(1.15rem,1.75vw,1.5rem)] font-light leading-[1.38] tracking-[-0.02em]"
            >
              I’m Washim Reja. I design and ship AI agents, full-stack software and the tooling around them, from a
              rough idea to something people actually use.
            </motion.p>

            <motion.p {...rise(0.4)} className="mt-7 border-l-2 border-signal pl-3.5 text-[14px] font-semibold text-muted">
              Clear scope. Honest limits. Working software.
            </motion.p>

            <motion.div {...rise(0.48)} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => openContact()} className="btn btn-dark">
                Start a project <ArrowUpRight size={17} />
              </button>
              <a href="#system" className="btn btn-lime">
                See how I build <ArrowDown size={17} />
              </a>
            </motion.div>

            <motion.p {...rise(0.54)} className="mt-4 text-[12px] text-muted">
              Based in India. Available for remote projects.
            </motion.p>
          </div>
        </div>

        {/* Floating outcome cards */}
        <div className="relative grid gap-4 sm:grid-cols-3 lg:block lg:min-h-[560px]">
          <motion.p
            {...rise(0.5)}
            className="hidden font-mono text-[11px] font-semibold text-signal lg:absolute lg:-top-2 lg:left-0 lg:block lg:-rotate-6"
          >
            from brief → to shipped
          </motion.p>
          {heroCards.map((card, i) => (
            <motion.article
              key={card.tag}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 + i * 0.14, ease }}
              className={`lg:absolute lg:w-[min(360px,86%)] ${card.pos}`}
              style={{ zIndex: i + 1 }}
            >
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 6 + i * 1.3, repeat: Infinity, ease: 'easeInOut' }}
                className={`card-shadow h-full rounded-[18px] border border-ink/10 p-6 transition-transform duration-300 hover:scale-[1.02] ${card.tint}`}
              >
                <p className="font-mono text-[11px] font-semibold text-ink/60">{card.tag}</p>
                <h2 className="mt-4 text-[22px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink/85">
                  {card.title}
                </h2>
                <p className="mt-4 text-[12.5px] font-light leading-snug text-ink/60">{card.note}</p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Focus strip */}
      <div className="wrap relative pb-10">
        <div className="border-t border-rule pt-6">
          <p className="eyebrow">What I focus on</p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {focusAreas.map((f) => {
              const Icon = icons[f.icon as keyof typeof icons]
              return (
                <li key={f.value} className="flex items-center gap-4">
                  <span className="grid h-[68px] w-[92px] shrink-0 place-items-center rounded-[14px] border border-ink/10 bg-surface shadow-[0_10px_24px_rgb(14_16_19/0.06)]">
                    <Icon size={26} strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className="block text-[13px] font-bold tracking-[0.02em]">{f.label}</span>
                    <span className="block text-[14px] font-light text-muted">{f.value}</span>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

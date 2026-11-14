import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, site } from '../config/site'
import { useContact } from '../context/ContactContext'
import { useActiveSection } from '../hooks/useActiveSection'

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      aria-label={`${site.name} — back to top`}
      className={`text-[28px] font-extrabold leading-none tracking-[-0.07em] ${light ? 'text-surface' : 'text-ink'}`}
    >
      {site.wordmark}
      <span className="text-signal">.</span>
    </a>
  )
}

export function Navbar() {
  const { openContact } = useContact()
  const active = useActiveSection(navLinks.map((l) => l.id))
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 900 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
      className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5"
    >
      <div
        className={`mx-auto max-w-[1340px] rounded-[16px] border border-rule/80 backdrop-blur-xl transition-[box-shadow,background-color] duration-300 ${open ? 'bg-canvas/[0.97]' : 'bg-canvas/80'} ${
          scrolled || open ? 'shadow-[0_18px_44px_rgb(14_16_19/0.12)]' : ''
        }`}
      >
        <div className="flex h-[62px] items-center justify-between gap-4 pl-5 pr-2.5">
          <Wordmark />

          <nav aria-label="Primary" className="hidden min-[900px]:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={active === link.id ? 'true' : undefined}
                    className={`relative block rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
                      active === link.id ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {active === link.id && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-ink/[0.07]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => openContact()}
              className="btn btn-dark !min-h-[42px] !rounded-[10px] !px-4 !text-[13px]"
            >
              Start a project <ArrowUpRight size={15} />
            </button>
            <button
              type="button"
              className="grid size-[42px] place-items-center rounded-[10px] border border-rule text-ink min-[900px]:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
              className="overflow-hidden min-[900px]:hidden"
            >
              <ul className="border-t border-rule/80 px-3 py-3">
                {[...navLinks, { id: 'faq', label: 'FAQ' }].map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.05 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        // Close first, then scroll: a collapsing menu would otherwise interrupt the smooth scroll.
                        e.preventDefault()
                        setOpen(false)
                        try {
                          history.replaceState(null, '', `#${link.id}`)
                        } catch {
                          /* sandboxed previews disallow history changes */
                        }
                        setTimeout(() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' }), 60)
                      }}
                      className="flex items-center justify-between rounded-xl px-3 py-3.5 text-[22px] font-bold tracking-[-0.04em] hover:bg-ink/[0.05]"
                    >
                      {link.label}
                      <span className="font-mono text-[11px] font-medium tracking-normal text-muted">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

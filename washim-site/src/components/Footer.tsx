import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { navLinks, site } from '../config/site'
import { useContact } from '../context/ContactContext'
import { Wordmark } from './Navbar'

export function Footer() {
  const { openContact } = useContact()
  const socials = site.socials.filter((s) => s.href)
  const cell = 'rounded-[14px] border border-surface/15 px-5 py-4 text-left transition-colors'

  return (
    <footer className="bg-ink text-surface">
      <div className="wrap pb-9 pt-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-24">
          <div>
            <Wordmark light />
            <p className="mt-5 max-w-[380px] text-[16px] font-light leading-relaxed text-surface/60">
              {site.name} is an independent AI engineer, software developer and technology creator based in {site.location}.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-lime">Get in touch</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <button type="button" onClick={() => openContact()} className={`${cell} group hover:border-lime ${site.email ? '' : 'sm:col-span-2'}`}>
                <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-surface/50">Projects</span>
                <span className="mt-1.5 flex items-center justify-between text-[18px] font-semibold tracking-[-0.02em]">
                  Send a brief
                  <ArrowUpRight size={17} className="text-surface/50 transition-colors group-hover:text-lime" />
                </span>
              </button>
              {site.email && (
                <a href={`mailto:${site.email}`} className={`${cell} hover:border-lime`}>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-surface/50">Email</span>
                  <span className="mt-1.5 block break-all text-[18px] font-semibold tracking-[-0.02em]">{site.email}</span>
                </a>
              )}
              <div className={cell}>
                <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-surface/50">Location</span>
                <span className="mt-1.5 block text-[18px] font-semibold tracking-[-0.02em]">{site.location} · Remote</span>
              </div>
              <div className={cell}>
                <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-surface/50">Role</span>
                <span className="mt-1.5 block text-[18px] font-semibold tracking-[-0.02em]">AI engineer and developer</span>
              </div>
            </div>

            {socials.length > 0 && (
              <>
                <p className="mt-9 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-lime">Follow</p>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-surface/15 px-4 py-2.5 text-[14px] font-semibold transition-colors hover:border-lime"
                      >
                        {s.label} <ArrowUpRight size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-surface/15 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] font-light text-surface/60">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-light text-surface/60">
              {[...navLinks, { id: 'memory', label: 'Memory' }, { id: 'services', label: 'Services' }, { id: 'faq', label: 'FAQ' }].map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="transition-colors hover:text-surface">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#top"
            className="inline-flex items-center gap-2 self-start rounded-full border border-surface/15 px-4 py-2 text-[13px] font-semibold transition-colors hover:border-lime md:self-auto"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}

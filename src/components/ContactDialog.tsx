import { Check, Copy, Mail } from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'
import { site } from '../config/site'
import { services } from '../data/content'
import { Modal } from './ui/Modal'

type Props = { open: boolean; topic: string; onClose: () => void }
type Brief = { name: string; topic: string; message: string }

const formatBrief = (b: Brief) =>
  `Project brief for ${site.name}\n\nFrom: ${b.name || 'Not given'}\nTopic: ${b.topic}\n\n${b.message}\n`

/**
 * INTEGRATION BOUNDARY — how a brief leaves the page.
 * There is no backend. With `site.email` set, the brief opens in the visitor's
 * email app; it can always be copied to the clipboard. Swap this function for a
 * fetch() to a form service or API to deliver messages directly.
 */
async function deliverBrief(brief: Brief, via: 'email' | 'copy') {
  const text = formatBrief(brief)
  if (via === 'email' && site.email) {
    const subject = encodeURIComponent(`Project brief: ${brief.topic}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(text)}`
    return 'Opening your email app…'
  }
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const area = document.createElement('textarea')
    area.value = text
    document.body.appendChild(area)
    area.select()
    document.execCommand('copy')
    area.remove()
  }
  return 'Brief copied to your clipboard.'
}

const field =
  'mt-2 w-full rounded-xl border border-rule bg-canvas/60 px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-ink'

export function ContactDialog({ open, topic, onClose }: Props) {
  const general = 'General enquiry'
  const [brief, setBrief] = useState<Brief>({ name: '', topic: general, message: '' })
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (open) {
      setBrief((b) => ({ ...b, topic: topic || b.topic || general }))
      setStatus('')
      setError('')
    }
  }, [open, topic])

  const send = async (via: 'email' | 'copy') => {
    if (brief.message.trim().length < 10) {
      setStatus('')
      setError('Please describe the project in a sentence or two.')
      return
    }
    setError('')
    setStatus(await deliverBrief(brief, via))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    void send(site.email ? 'email' : 'copy')
  }

  return (
    <Modal open={open} onClose={onClose} eyebrow="Start a project" title="Tell me what should exist.">
      <p className="lede !text-[15px]">
        A few lines are enough: the problem, who has it, and what done looks like.
        {!site.email && ' Copy the brief and send it through whichever channel we already share.'}
      </p>
      <form onSubmit={onSubmit} className="mt-6 grid gap-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-[13px] font-semibold">
            Your name
            <input
              data-autofocus
              className={field}
              value={brief.name}
              onChange={(e) => setBrief({ ...brief, name: e.target.value })}
              autoComplete="name"
              placeholder="Name or company"
            />
          </label>
          <label className="text-[13px] font-semibold">
            Topic
            <select className={field} value={brief.topic} onChange={(e) => setBrief({ ...brief, topic: e.target.value })}>
              <option>{general}</option>
              {services.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
            </select>
          </label>
        </div>
        <label className="text-[13px] font-semibold">
          The project
          <textarea
            className={`${field} min-h-[130px] resize-y`}
            value={brief.message}
            onChange={(e) => setBrief({ ...brief, message: e.target.value })}
            placeholder="What are you trying to build or fix?"
            aria-invalid={!!error}
            aria-describedby="brief-feedback"
            required
          />
        </label>
        <div className="flex flex-wrap items-center gap-3">
          {site.email && (
            <button type="submit" className="btn btn-dark">
              <Mail size={17} /> Open in email app
            </button>
          )}
          <button
            type={site.email ? 'button' : 'submit'}
            onClick={site.email ? () => void send('copy') : undefined}
            className={`btn ${site.email ? 'btn-ghost' : 'btn-dark'}`}
          >
            <Copy size={17} /> Copy brief
          </button>
        </div>
        <p id="brief-feedback" aria-live="polite" className="min-h-[22px] text-[14px] font-medium">
          {error && <span className="text-coral">{error}</span>}
          {status && (
            <span className="inline-flex items-center gap-2 text-mint">
              <Check size={16} /> {status}
            </span>
          )}
        </p>
      </form>
    </Modal>
  )
}

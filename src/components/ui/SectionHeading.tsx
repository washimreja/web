import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = { eyebrow: string; title: ReactNode; lede?: ReactNode; dark?: boolean; children?: ReactNode }

export function SectionHeading({ eyebrow, title, lede, dark, children }: Props) {
  return (
    <Reveal className="max-w-[560px]">
      <p className={`eyebrow ${dark ? '!text-lime' : ''}`}>{eyebrow}</p>
      <h2 className="h-section mt-6">{title}</h2>
      {lede && <p className={`lede mt-7 ${dark ? '!text-surface/65' : ''}`}>{lede}</p>}
      {children}
    </Reveal>
  )
}

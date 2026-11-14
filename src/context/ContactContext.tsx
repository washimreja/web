import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { ContactDialog } from '../components/ContactDialog'

type Ctx = { openContact: (topic?: string) => void }
const ContactContext = createContext<Ctx>({ openContact: () => {} })

export const useContact = () => useContext(ContactContext)

/** Owns the contact dialog so any button on the page can open it. */
export function ContactProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ open: boolean; topic: string }>({ open: false, topic: '' })
  const openContact = useCallback((topic = '') => setState({ open: true, topic }), [])
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), [])
  const value = useMemo(() => ({ openContact }), [openContact])
  return (
    <ContactContext.Provider value={value}>
      {children}
      <ContactDialog open={state.open} topic={state.topic} onClose={close} />
    </ContactContext.Provider>
  )
}

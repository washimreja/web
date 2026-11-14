import { MotionConfig } from 'framer-motion'
import { ContactProvider } from './context/ContactContext'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Capabilities } from './components/sections/Capabilities'
import { Faq } from './components/sections/Faq'
import { FinalCta } from './components/sections/FinalCta'
import { Guides } from './components/sections/Guides'
import { Hero } from './components/sections/Hero'
import { Memory } from './components/sections/Memory'
import { Principles } from './components/sections/Principles'
import { Services } from './components/sections/Services'
import { Stance } from './components/sections/Stance'
import { SystemFlow } from './components/sections/SystemFlow'
import { UseCases } from './components/sections/UseCases'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ContactProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-3 focus:text-surface"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <Capabilities />
          <UseCases />
          <Principles />
          <Memory />
          <SystemFlow />
          <Stance />
          <Services />
          <Guides />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
      </ContactProvider>
    </MotionConfig>
  )
}

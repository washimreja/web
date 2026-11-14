/**
 * Site identity and contact configuration.
 *
 * INTEGRATION BOUNDARY
 * Contact channels are intentionally left empty so nothing on the site points at
 * an address that does not exist. Fill these in and the UI picks them up:
 *  - `email`   → the contact dialog gains an "Open in email app" action and the
 *                footer shows an email card.
 *  - `socials` → each non-empty entry becomes a footer link.
 * To send messages through a backend or form service instead, replace
 * `deliverBrief` in `src/components/ContactDialog.tsx`.
 */
export const site = {
  name: 'Washim Reja',
  wordmark: 'washim',
  role: 'Independent AI Engineer, Software Developer and Technology Creator',
  location: 'India',
  email: '',
  socials: [
    { label: 'GitHub', href: '' },
    { label: 'LinkedIn', href: '' },
    { label: 'X', href: '' },
    { label: 'YouTube', href: '' },
  ],
}

export const navLinks = [
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'work', label: 'Use cases' },
  { id: 'principles', label: 'Trust' },
  { id: 'system', label: 'System' },
  { id: 'guides', label: 'Guides' },
]

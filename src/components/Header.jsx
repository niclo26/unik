import { useState } from 'react'
import logo from '../assets/logoUnik.png'

const NAV_LINKS = [
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Plans', href: '#plans' },
  { label: 'Projets à vendre', href: '#projets' },
  { label: 'Services', href: '#services' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#">
          <img src={logo} alt="Construction Unik inc." className="h-16 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-white/90 transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-sm bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-wider text-ink transition hover:bg-gold-light lg:inline-block"
        >
          Demander une soumission
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="mx-6 mb-4 rounded-md bg-ink/95 p-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-gold px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-ink"
            >
              Demander une soumission
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Her Story', href: '#story' },
  { label: 'What She Stands For', href: '#record' },
  { label: 'The Fight', href: '#fight' },
  { label: 'In the News', href: '#news' },
  { label: 'Voices', href: '#voices' },
  { label: 'Connect', href: '#connect' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-primary text-surface shadow-lg">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a
          href="/"
          className="font-display text-lg md:text-xl font-bold tracking-wide hover:text-accent transition-colors whitespace-nowrap"
        >
          Trantham <span className="text-accent font-normal">·</span> District 3
        </a>

        <ul className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 flex-shrink-0"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-0.5 bg-surface origin-center transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-surface transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-surface origin-center transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-surface/20 bg-primary">
          <ul className="px-6 py-4 space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-base font-medium uppercase tracking-wider py-3 border-b border-surface/10 last:border-0 hover:text-accent transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

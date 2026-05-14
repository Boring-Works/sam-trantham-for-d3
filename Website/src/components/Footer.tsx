const CURRENT_YEAR = new Date().getFullYear()

const SECTION_LINKS = [
  { label: 'Her Story', href: '#story' },
  { label: 'Where She Stands', href: '#record' },
  { label: 'The Fight', href: '#fight' },
  { label: 'Press', href: '#news' },
  { label: 'How to Vote', href: '#vote' },
  { label: 'Get Involved', href: '#connect' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-surface">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

        {/* Column 1: Candidate info */}
        <div>
          <h3 className="font-display text-xl mb-3 text-accent">Samantha Trantham</h3>
          <p className="opacity-85 text-sm leading-relaxed mb-4">
            Republican Candidate<br />
            Polk County Commission, District 3<br />
            Copper Basin, Tennessee
          </p>
          <p className="text-xs opacity-60 leading-relaxed">
            Two-term incumbent. Running for her third term in the{' '}
            <strong className="text-accent/90">Thursday, August 6, 2026 Republican Primary</strong>.
          </p>
        </div>

        {/* Column 2: Section links */}
        <nav aria-label="Footer navigation">
          <h3 className="font-display text-xl mb-3 text-accent">On This Page</h3>
          <ul className="space-y-2">
            {SECTION_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm opacity-70 hover:opacity-100 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3: Reach Samantha */}
        <div>
          <h3 className="font-display text-xl mb-3 text-accent">Reach Samantha</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:+17068516623"
                className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
              >
                (706) 851-6623
              </a>
            </li>
            <li>
              <a
                href="mailto:samanthatranthamd3commissioner@gmail.com"
                className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors break-all"
              >
                samanthatranthamd3commissioner<wbr />@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/samanthatranthamthirddistrictcountycommissioner/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
              >
                Facebook · Commissioner Page
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-surface/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs opacity-70 uppercase tracking-widest text-center md:text-left">
            Paid for by Samantha Trantham for Polk County Commission District 3
          </p>
          <p className="text-xs opacity-50">
            &copy; {CURRENT_YEAR} · Polk County, TN
          </p>
        </div>
      </div>
    </footer>
  )
}

const STATS = [
  { number: '2', label: 'Terms Elected', detail: '2018 and 2022. Both won.' },
  { number: '2 yrs', label: 'Fighting to Stop the Dumping', detail: 'Until TDEC confirmed it was over for good.' },
  { number: '9-0', label: 'Crypto Mining Regulation', detail: 'Passed before it became a problem here.' },
  { number: '250K+', label: 'Annual Visitors Protected', detail: 'The Ocoee and Hiwassee. The Basin\'s livelihood.' },
]

const OUTLETS = [
  'NewsChannel 9',
  'WDEF News 12',
  'Fox Chattanooga',
  'Chattanoogan.com',
]

export function CommunityVoices() {
  return (
    <section id="voices" className="bg-primary text-surface px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-display mb-4 text-center text-accent">
          The Record Speaks for Itself
        </h2>
        <p className="text-center opacity-70 mb-16 text-lg max-w-2xl mx-auto">
          Two terms. Dozens of commission meetings. A two-year environmental fight that reached the U.S. Senate floor. These are the numbers.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              data-animate
              className="border border-accent/30 p-6 text-center"
            >
              <p className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                {stat.number}
              </p>
              <p className="text-sm font-bold uppercase tracking-wide mb-2">{stat.label}</p>
              <p className="text-xs opacity-60 leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Senator Hagerty acknowledgment */}
        <div className="max-w-3xl mx-auto mb-14">
          <blockquote className="border-l-4 border-accent pl-6 py-2">
            <p className="text-xl md:text-2xl font-display italic opacity-90 mb-3">
              "Tracking it closely."
            </p>
            <footer className="text-sm font-bold text-accent uppercase tracking-wide">
              U.S. Senator Bill Hagerty, on the Copper Basin biosolids fight &bull; June 2023
            </footer>
          </blockquote>
        </div>

        {/* Press recognition */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest opacity-50 mb-4">
            Covered and Verified By
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {OUTLETS.map((outlet) => (
              <span
                key={outlet}
                className="text-lg font-display font-bold opacity-60"
              >
                {outlet}
              </span>
            ))}
          </div>
          <p className="text-xs opacity-40 mt-4">
            Cleveland State Community College Alumna Spotlight, February 2026
          </p>
        </div>

      </div>
    </section>
  )
}

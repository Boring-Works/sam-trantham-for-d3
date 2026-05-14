const STATS = [
  { number: '2', label: 'Terms Elected', detail: '2018 and 2022. Both won outright.' },
  { number: '2yr', label: 'Fight to Stop the Dumping', detail: 'Until TDEC confirmed it was over for good.' },
  { number: '9–0', label: 'Crypto Mining Vote', detail: 'Passed unanimously, before it became a problem here.' },
  { number: '250K', label: 'Annual River Visitors Protected', detail: 'The Ocoee and Hiwassee. The Basin\'s livelihood.' },
]

const OUTLETS = [
  { name: 'NewsChannel 9', short: 'WTVC' },
  { name: 'WDEF News 12', short: 'WDEF' },
  { name: 'Fox Chattanooga', short: 'FOX' },
  { name: 'Chattanoogan.com', short: 'CHA' },
]

export function CommunityVoices() {
  return (
    <section id="voices" className="bg-primary text-surface px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">

        <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] text-center mb-3">
          By the Numbers
        </p>
        <h2 className="text-4xl md:text-5xl font-display mb-4 text-center text-accent">
          The Record Speaks for Itself
        </h2>
        <p className="text-center opacity-70 mb-16 text-lg max-w-2xl mx-auto">
          Two terms. Dozens of commission meetings. A two-year environmental fight that reached the U.S. Senate floor.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              data-animate
              data-delay={String(i + 1)}
              className="border-t-2 border-accent pt-6"
            >
              <p className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-accent leading-none mb-3 tracking-tight">
                {stat.number}
              </p>
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-xs opacity-60 leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Hagerty acknowledgment — biggest validator we have */}
        <div data-animate className="max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-accent text-center mb-4 opacity-80">
            What People Watching the Fight Said
          </p>
          <blockquote className="border-l-4 border-accent pl-6 py-2">
            <p className="text-2xl md:text-3xl font-display italic opacity-95 mb-3 leading-snug">
              "Tracking it closely."
            </p>
            <footer className="text-sm font-bold text-accent uppercase tracking-wide">
              U.S. Senator Bill Hagerty
            </footer>
            <p className="text-xs opacity-70 mt-1">
              On the Copper Basin biosolids fight · June 2023
            </p>
          </blockquote>
        </div>

        {/* Press recognition */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-50 mb-6">
            Covered and Verified By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-3xl mx-auto">
            {OUTLETS.map((outlet) => (
              <div
                key={outlet.name}
                className="flex items-center gap-3 border border-surface/20 px-4 py-3"
              >
                <span className="font-display font-bold text-accent text-sm tracking-wider">
                  {outlet.short}
                </span>
                <span className="text-xs uppercase tracking-wider opacity-70">
                  {outlet.name}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs opacity-40 mt-6">
            Plus: Cleveland State Community College Alumna Spotlight · February 2026
          </p>
        </div>

        {/* Neighbor voices scaffold — for real local endorsements as they come in */}
        <div data-animate className="border-t border-surface/15 pt-12 max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
            From the Basin
          </p>
          <p className="text-lg md:text-xl font-display italic opacity-80 leading-snug">
            Neighbor endorsements from Copperhill, Ducktown, Turtletown, and Reliance will appear here as the campaign collects them. If you want to add your voice,{' '}
            <a href="#connect" className="text-accent not-italic font-bold hover:underline">
              tell Samantha
            </a>.
          </p>
        </div>

      </div>
    </section>
  )
}

const BELIEFS = [
  {
    title: 'The East Side Gets Its Share',
    body: 'She believes the Copper Basin deserves the same attention the west side of the county gets. Every road. Every service. Every dollar.',
    proof: 'Pushed for east-side infrastructure investment alongside the Industrial and Economic Development Board.',
  },
  {
    title: 'A Voice in Nashville',
    body: 'When government agencies in Nashville make decisions that affect this community, someone from this community has to be in the room pushing back.',
    proof: 'Stood up to TDEC over the biosolids dumping. Made the case loud enough that a U.S. Senator started tracking it.',
  },
  {
    title: 'Children and Seniors First',
    body: 'Children\'s safety comes before politics. The rivers and mountains are worth protecting. Seniors deserve better than being forgotten.',
    proof: 'Introduced the resolution to move the Boys and Girls Club off the EPA Superfund site. Volunteered at Pruitt Healthcare.',
  },
  {
    title: 'Show Up Every Time',
    body: 'If you\'re going to hold this office, you\'d better show up. Not just at election time. Every meeting. Every time.',
    proof: 'Two terms. Every commission meeting. Town halls, ribbon cuttings, swearing-ins, fire department openings.',
  },
] as const

export function StandsFor() {
  return (
    <section id="record" className="bg-primary text-surface px-6 py-20 md:py-32">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] text-center mb-3">
          Where She Stands
        </p>
        <h2 className="text-4xl md:text-5xl font-display mb-14 text-center text-accent">Four Things She Won't Back Down From</h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          {BELIEFS.map((b, i) => (
            <div key={b.title} data-animate data-delay={String(i + 1)}>
              <div className="text-accent font-display text-2xl leading-none mb-3 opacity-60">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-2xl font-display mb-3">{b.title}</h3>
              <p className="text-lg opacity-90 leading-relaxed mb-4">
                {b.body}
              </p>
              <p className="text-sm text-accent uppercase tracking-wide font-bold border-l-2 border-accent/40 pl-3">
                Track record: <span className="font-normal normal-case tracking-normal opacity-90">{b.proof}</span>
              </p>
            </div>
          ))}
        </div>

        <div data-animate className="mt-16 pt-10 border-t border-surface/20 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-display mb-4 text-accent">Straight Talk, Always</h3>
          <p className="text-lg opacity-90 leading-relaxed mb-6">
            She believes in being straightforward and transparent, because the people of the Copper Basin deserve to know exactly where their commissioner stands.
          </p>
          <blockquote className="text-xl md:text-2xl font-display italic text-accent">
            "I think I keep getting elected because I am so straightforward and transparent."
          </blockquote>
        </div>
      </div>
    </section>
  )
}

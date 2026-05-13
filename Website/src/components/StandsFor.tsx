
export function StandsFor() {
  return (
    <section id="record" className="bg-primary text-surface px-6 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display mb-12 text-center text-accent">What Samantha Believes</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div data-animate data-delay="1">
            <h3 className="text-2xl font-display mb-4">The East Side Gets Its Share</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              She believes the Copper Basin deserves the same attention the west side of the county gets. Every road. Every service. Every dollar.
            </p>
          </div>

          <div data-animate data-delay="2">
            <h3 className="text-2xl font-display mb-4">A Voice in Nashville</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              She believes that when government agencies in Nashville make decisions that affect this community, someone from this community needs to be in the room pushing back.
            </p>
          </div>

          <div data-animate data-delay="3">
            <h3 className="text-2xl font-display mb-4">Children and Seniors First</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              She believes children's safety comes before politics, that the rivers and mountains are worth protecting, and that seniors deserve better than being forgotten.
            </p>
          </div>

          <div data-animate data-delay="4">
            <h3 className="text-2xl font-display mb-4">Show Up Every Time</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              She believes that if you're going to hold this office, you'd better show up. Not just at election time. Every meeting. Every time.
            </p>
          </div>
        </div>

        <blockquote data-animate className="mt-16 text-center max-w-2xl mx-auto text-xl md:text-2xl font-display italic text-accent">
          "I think I keep getting elected because I am so straightforward and transparent."
        </blockquote>
      </div>
    </section>
  )
}

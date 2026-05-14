const THIRD_TERM_PROMISES = [
  {
    label: 'Infrastructure',
    title: 'The East Side Gets Real Investment',
    body: 'Roads, bridges, emergency services, and public facilities in the Basin that match what the west side already has. No more "we\'ll get to it next budget cycle."',
  },
  {
    label: 'Economy',
    title: 'Protect the Tourism Economy',
    body: 'The Ocoee, the Hiwassee, the scenic train, and the outfitters and small businesses that depend on them. Tourism is the Basin\'s livelihood. It stays that way.',
  },
  {
    label: 'Next Generation',
    title: 'Give Young Families a Reason to Stay',
    body: 'Keep bringing economic development and good jobs to the Basin. Our young people shouldn\'t have to drive to Chattanooga just to make a living.',
  },
]

export function WhyRunning() {
  return (
    <section id="closing" className="bg-primary text-surface px-6 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">

        <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">
          The Third Term
        </p>
        <h2 className="text-4xl md:text-5xl font-display mb-10 leading-tight">
          There's More Work to Do.
        </h2>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed opacity-90 mb-12 max-w-3xl">
          <p>
            The Copper Basin sits on the other side of a mountain gorge from the county seat. When decisions get made in Benton, we feel it last and get the least. If we don't have a commissioner who shows up and speaks up, we get forgotten. That's just how it is.
          </p>
          <p>
            I've spent two terms making sure that doesn't happen. Here's what I'm asking for a third term to finish.
          </p>
        </div>

        {/* Three promise cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {THIRD_TERM_PROMISES.map((p, i) => (
            <div
              key={p.label}
              data-animate
              data-delay={String(i + 1)}
              className="border border-accent/30 p-6 bg-primary/40"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
                Priority {String(i + 1).padStart(2, '0')} · {p.label}
              </p>
              <h3 className="text-xl md:text-2xl font-display mb-3 leading-tight">
                {p.title}
              </h3>
              <p className="text-sm md:text-base opacity-85 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* First-person close */}
        <div className="max-w-3xl border-l-4 border-accent pl-6 md:pl-8 space-y-5 text-lg md:text-xl font-display italic leading-relaxed opacity-95">
          <p>
            I think I keep getting elected because I am so straightforward and transparent. I'm not going to change that.
          </p>
          <p className="font-bold text-accent not-italic font-body text-lg md:text-xl">
            This job is personal to me. The Copper Basin is my home. I'm asking for your vote so I can keep fighting for it.
          </p>
        </div>

        {/* Action row */}
        <div className="mt-12 flex flex-col sm:flex-row gap-3 max-w-2xl">
          <a
            href="#yard-sign"
            className="flex-1 bg-accent text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity text-center"
          >
            Stand With Samantha — Request a Yard Sign
          </a>
          <a
            href="#vote"
            className="flex-1 border-2 border-accent text-accent px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-colors text-center"
          >
            How to Vote
          </a>
        </div>

      </div>
    </section>
  )
}

type Testimonial = {
  quote: string
  name: string
  location: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Samantha actually answers when you call her. I had a question about a road issue near my property and she called me back the same day. That's not something you expect from an elected official.",
    name: 'Basin Resident',
    location: 'Copperhill, TN',
  },
  {
    quote:
      "She stood up at those commission meetings and fought when nobody else would. The biosolids fight was hard and it lasted two years. She never backed down.",
    name: 'Basin Resident',
    location: 'McCaysville area',
  },
  {
    quote:
      "I've watched Samantha at community events for years. She's not just showing up for votes. She genuinely cares about this place and the people in it.",
    name: 'Copper Basin Neighbor',
    location: 'Polk County, TN',
  },
]

export function CommunityVoices() {
  return (
    <section id="voices" className="bg-primary text-surface px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display mb-4 text-center text-accent">
          What the Basin Is Saying
        </h2>
        <p className="text-center opacity-70 mb-14 text-lg max-w-xl mx-auto">
          Real neighbors. Real feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name + t.location}
              data-animate
              className="bg-surface text-text p-8 flex flex-col shadow-lg"
            >
              <blockquote className="flex-grow mb-6">
                <span className="text-accent/30 text-5xl font-display leading-none block mb-2 select-none">"</span>
                <p className="text-lg leading-relaxed font-display italic text-primary">{t.quote}</p>
              </blockquote>
              <figcaption>
                <p className="font-bold text-accent text-sm uppercase tracking-wide">{t.name}</p>
                <p className="text-sm text-muted">{t.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        {/* TODO: Replace anonymous placeholders with named supporters (written permission required) */}
      </div>
    </section>
  )
}

type Accomplishment = {
  date: string
  title: string
  body: string
  quote?: string
  outcome: string
}

const ACCOMPLISHMENTS: Accomplishment[] = [
  {
    date: 'Jun 2024',
    title: 'Protected the Basin\'s Children',
    body: 'After the biosolids fight, officials proposed relocating the Boys and Girls Club to a site next to Copperhill Industries, within the EPA Copper Basin Mining District Superfund site. The buildings had asbestos and lead paint. Samantha looked at the EPA data herself and introduced a resolution to find a safer location.',
    quote: '"There are plenty of alternatives that do not have any of these factors, which should be automatically disqualifying."',
    outcome: 'Resolution introduced. Alternative sites considered.',
  },
  {
    date: '2023',
    title: 'Brought Jobs and Scholarships to the Basin',
    body: 'Samantha was there for the Copperhill Quarry grand opening alongside State Representative Dan Howell and Hedrick Industries CEO Joe Lordi. New jobs. Construction materials for local contractors. She works with the Industrial and Economic Development Board because the east side of this county shouldn\'t have to beg for investment.',
    outcome: '$2,500 scholarship for Copper Basin High School students.',
  },
  {
    date: 'Jun 2020',
    title: 'Protected the Basin\'s Rivers',
    body: 'Samantha voted with the full commission to demand the Tennessee Wildlife Resources Agency fix overcrowding and safety problems at Patty Bridge on the Hiwassee River. The Ocoee and Hiwassee draw over 250,000 visitors a year. The Ocoee is the most rafted river in America.',
    outcome: 'River access protected. Tourism economy defended.',
  },
  {
    date: 'May 2025',
    title: 'Got Ahead of the Next Threat',
    body: 'Samantha brought a crypto mining regulation resolution to the commission floor in May 2025. Across rural Tennessee in 2025, crypto mining operations were moving into small communities, bringing industrial noise and massive power consumption. Samantha saw what was happening and got ahead of it before it reached the Basin.',
    quote: '"The lesson from the biosolids fight: don\'t wait for the problem to show up. Stop it before it starts."',
    outcome: 'Passed 9–0.',
  },
]

export function WhatElse() {
  return (
    <section id="record-detail" className="bg-primary text-surface px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] text-center mb-3">
          Beyond the Biosolids Fight
        </p>
        <h2 className="text-4xl md:text-5xl font-display mb-14 text-center text-accent">Every Meeting. Every Issue. Every Time.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACCOMPLISHMENTS.map((a, i) => (
            <article
              key={a.title}
              data-animate
              data-delay={String(i + 1)}
              className="bg-surface text-text border-l-4 border-accent p-7 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center self-start text-xs font-bold uppercase tracking-widest bg-primary text-surface px-3 py-1 mb-4">
                {a.date}
              </div>
              <h3 className="text-xl font-display mb-3 text-primary leading-tight">{a.title}</h3>
              <p className="text-sm leading-relaxed mb-4 flex-grow">{a.body}</p>
              {a.quote && (
                <blockquote className="border-l-2 border-accent pl-3 py-1 mb-4 font-display italic text-sm text-primary">
                  {a.quote}
                </blockquote>
              )}
              <p className="text-xs font-bold uppercase tracking-wider text-accent border-t border-primary/10 pt-3 mt-auto">
                Result: <span className="font-normal normal-case tracking-normal text-text opacity-80">{a.outcome}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

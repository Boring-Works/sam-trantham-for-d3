type Accomplishment = {
  date: string
  title: string
  body: string
  quote?: string
  outcome: string
  matters: string
}

const ACCOMPLISHMENTS: Accomplishment[] = [
  {
    date: 'Jun 2024',
    title: 'Protected the Basin\'s Children',
    body: 'After the biosolids fight, officials proposed relocating the Boys and Girls Club to a 16-acre site next to Copperhill Industries — inside the EPA Copper Basin Mining District Superfund site. The buildings had asbestos and lead paint. Samantha looked at the EPA data herself and introduced a resolution to find a safer location.',
    quote: '"There are plenty of alternatives that do not have any of these factors, which should be automatically disqualifying."',
    outcome: 'Resolution introduced. Alternative sites considered.',
    matters: 'The kids in this program will get a building that isn\'t sitting on contaminated ground.',
  },
  {
    date: '2024–2025',
    title: 'Brought Fiber to the Basin',
    body: 'Samantha worked with the Industrial and Economic Development Board on the application that brought ETC Communications a $2 million Last Mile grant. The grant funds 82 miles of fiber serving 161 previously unserved Polk County locations.',
    outcome: 'Real broadband for homes and businesses that were stuck on satellite.',
    matters: 'Working from home, telehealth, online school, and small businesses on the east side of the county finally get the internet the west side has had for years.',
  },
  {
    date: '2023',
    title: 'Jobs and Scholarships from the Quarry',
    body: 'Samantha was there for the Copperhill Quarry grand opening alongside State Representative Dan Howell and Hedrick Industries CEO Joe Lordi. New jobs. Construction materials for local contractors.',
    outcome: '$2,500 scholarship for Copper Basin High School students. Local hiring priority.',
    matters: 'Young people from the Basin have one more reason to stay home instead of moving to Chattanooga.',
  },
  {
    date: 'Jun 2020',
    title: 'Protected the Basin\'s Rivers',
    body: 'Samantha voted with the full commission to demand the Tennessee Wildlife Resources Agency fix overcrowding and safety problems at Patty Bridge on the Hiwassee River. The Ocoee and Hiwassee draw over 250,000 visitors a year. The Ocoee is the most rafted river in America.',
    outcome: 'River access protected. Tourism economy defended.',
    matters: 'The outfitters, restaurants, motels, and gas stations that depend on river traffic stay in business.',
  },
  {
    date: 'May 2025',
    title: 'Got Ahead of the Next Threat',
    body: 'Samantha brought a crypto mining regulation resolution to the commission floor in May 2025. Across rural Tennessee that year, crypto mining operations were moving into small communities, bringing industrial noise and massive power consumption. Samantha saw what was happening and got ahead of it before it reached the Basin.',
    quote: '"The lesson from the biosolids fight: don\'t wait for the problem to show up. Stop it before it starts."',
    outcome: 'Passed 9–0.',
    matters: 'No 24/7 industrial hum across the ridge. No utility bills going up to feed data centers.',
  },
  {
    date: '2018–present',
    title: 'Showed Up for Seniors',
    body: 'Two and a half years working at Pruitt Healthcare caring for Basin seniors. Cleaned out and reorganized the Copper Basin Senior Center office to make room for more activities. Donated to the Copper Basin Baptist Association Office and Crisis Center. Attended the Senior Center\'s renovated facility open house.',
    quote: '"I had a whole building full of grandparents, and I loved every one of them."',
    outcome: 'A commissioner the senior community actually knows by name.',
    matters: '22% of Polk County is 65 and over. They built this place. They deserve someone showing up for them.',
  },
]

export function WhatElse() {
  return (
    <section id="record-detail" className="bg-primary text-surface px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] text-center mb-3">
          Beyond the Biosolids Fight
        </p>
        <h2 className="text-4xl md:text-5xl font-display mb-14 text-center text-accent">
          Every Meeting. Every Issue. Every Time.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACCOMPLISHMENTS.map((a, i) => (
            <article
              key={a.title}
              data-animate
              data-delay={String(Math.min(i + 1, 4))}
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
              <p className="text-xs font-bold uppercase tracking-wider text-accent border-t border-primary/10 pt-3 mb-2">
                Result: <span className="font-normal normal-case tracking-normal text-text opacity-80">{a.outcome}</span>
              </p>
              <p className="text-xs leading-snug text-primary/80 italic">
                <span className="not-italic font-bold text-primary">Why it matters:</span> {a.matters}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

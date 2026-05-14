const TIMELINE = [
  {
    date: 'Aug 2022',
    title: 'Trucks Arrive',
    body: 'Treated sewage waste from Chattanooga and Cobb County, GA starts dumping in the Copper Basin. PFAS detected.',
  },
  {
    date: 'Apr 2023',
    title: 'Resolution Passes',
    body: 'Polk County commissioners pass a resolution banning the dumping. Nashville agencies say it doesn\'t count.',
  },
  {
    date: 'Jun 2023',
    title: 'Town Hall + Hagerty',
    body: 'Two-state town hall. U.S. Senator Bill Hagerty says publicly he\'s "tracking it closely."',
  },
  {
    date: 'Apr 2024',
    title: 'It Stops. For Good.',
    body: 'TDEC confirms the dumping has ended. Final delivery: March 25, 2024.',
  },
]

export function TheFight() {
  return (
    <section id="fight" className="bg-surface text-text px-6 py-20 md:py-32 relative">
      <div className="absolute left-0 top-0 bottom-0 w-4 md:w-8 bg-accent" aria-hidden="true" />

      <div className="max-w-4xl mx-auto pl-8 md:pl-16">
        <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">
          Two-Year Fight · Won
        </p>
        <h2 className="text-4xl md:text-5xl font-display mb-4 text-primary">She Fought for Two Years. She Won.</h2>
        <p className="text-lg opacity-80 mb-12 max-w-2xl">
          The biosolids fight is the clearest answer to "what does she actually do?" Here's how it played out.
        </p>

        {/* Visual timeline */}
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 border-y border-primary/10 py-8">
          {TIMELINE.map((step, i) => (
            <li key={step.date} data-animate data-delay={String(i + 1)} className="relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="block w-3 h-3 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  {step.date}
                </span>
              </div>
              <h3 className="font-display text-lg text-primary mb-2 leading-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            In 2022, companies started trucking treated sewage waste into the Copper Basin from Chattanooga and Cobb County, Georgia. The material contained PFAS, the "forever chemicals" linked to cancer. The smell hit local businesses and drove away tourists. The scenic train from Blue Ridge brings visitors right into Copperhill, and people were saying "It smells really bad here" and "Does it always smell like this around here?" Those complaints were cited directly in the county resolution. In a community where tourism is the biggest part of the economy, this was an economic attack as much as an environmental one.
          </p>

          <p>
            Samantha and her fellow commissioners passed a resolution banning the dumping. Government agencies in Nashville told them the resolution didn't count. They'd approved the project as a "pilot program" without even requiring a permit. When commissioners asked where the waste was coming from, they were told to file an open records request.
          </p>

          <p>
            The trucks kept coming. Police bodycam footage from McCaysville, Georgia showed drivers using back roads to avoid detection, overloading a bridge rated for 25 tons with trucks weighing over 67,000 pounds, and leaking waste out the back. Drivers told officers their bosses instructed them not to go through town.
          </p>

          <p>
            Samantha didn't stop. She confirmed to NewsChannel 9 that Georgia and Tennessee regulators were both investigating. She helped organize a town hall in June 2023 that brought together officials from two states. She went back to every commission meeting. She kept talking to every reporter who would listen. She kept demanding transparency from agencies that didn't want to give it.
          </p>

          <p>
            The issue got big enough that U.S. Senator Bill Hagerty said publicly he was "tracking it closely." A Bradley County commissioner came to the town hall because the concern was spreading to neighboring counties and their water supply.
          </p>

          <p>
            By April 2024, it was over. TDEC confirmed the dumping had stopped permanently. The last delivery was March 25, 2024. TDEC had found pH level violations in the biosolids.
          </p>

          <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 text-xl font-display text-primary italic">
            "The biosolids application has wreaked havoc on our businesses, schools, and community. I look forward to the day TDEC confirms that it will no longer be an issue for the community I proudly represent."
          </blockquote>

          <p className="font-bold text-xl">
            That day came. Because she didn't quit.
          </p>

          {/* Why this matters — connects the fight to voter's daily life */}
          <div className="mt-12 bg-primary/5 border-l-4 border-accent p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
              Why This Matters for Your Family
            </p>
            <p className="text-base md:text-lg leading-relaxed text-primary">
              PFAS doesn't break down. It gets into groundwater, livestock, and the food your grandkids eat. The biosolids the state approved for the Copper Basin contained the "forever chemicals" linked to cancer. If Samantha had taken "no" for an answer, those trucks would still be coming. The fact that they're not — that's a direct result of someone in this office who refused to quit.
            </p>
          </div>

          <div className="mt-12 pt-6 border-t border-muted/20">
            <details className="group">
              <summary className="text-xs text-muted cursor-pointer select-none hover:text-accent transition-colors uppercase tracking-wide">
                Source references
              </summary>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                NewsChannel 9 (WTVC): May 24, 2023; May 25/26, 2023 (bodycam); June 11, 2023 (town hall); June 29, 2023 (TDEC meeting); April 30, 2024 (stoppage confirmed). Fox Chattanooga (April 2024). WDEF (May 2023).
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}

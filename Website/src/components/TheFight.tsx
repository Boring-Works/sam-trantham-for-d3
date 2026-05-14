const TIMELINE = [
  {
    date: 'Aug 2022',
    title: 'Trucks Arrive',
    body: 'Treated sewage waste from Chattanooga and Cobb County, GA starts dumping at the Intertrade Holdings / Copperhill Industries site. PFAS detected. The smell hits schools and tourist businesses.',
  },
  {
    date: 'Apr 2023',
    title: 'Resolution Passes',
    body: 'Polk County commissioners pass a resolution banning the dumping. TDEC tells them it has "no power" over biosolids.',
  },
  {
    date: 'Jun 2023',
    title: 'Town Hall + Hagerty',
    body: 'Two-state town hall. U.S. Senator Bill Hagerty says publicly he\'s "tracking it closely." Cobb County, GA officials drive up to face Polk residents.',
  },
  {
    date: 'Apr 2024',
    title: 'Round One — Stopped',
    body: 'TDEC confirms the dumping has ended. Final delivery: March 25, 2024. TDEC cites pH violations.',
  },
  {
    date: 'Nov 2025',
    title: 'Round Two — They\'re Back',
    body: 'Biosolids dumping resumes at the same Copperhill site under a new TDEC classification. The smell returns. So does Samantha.',
    isCurrent: true,
  },
]

export function TheFight() {
  return (
    <section id="fight" className="bg-surface text-text px-6 py-20 md:py-32 relative">
      <div className="absolute left-0 top-0 bottom-0 w-4 md:w-8 bg-accent" aria-hidden="true" />

      <div className="max-w-4xl mx-auto pl-8 md:pl-16">
        <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">
          The Fight Isn't Over
        </p>
        <h2 className="text-4xl md:text-5xl font-display mb-4 text-primary leading-tight">
          She Fought for Two Years. She Won. Now They're Back.
        </h2>
        <p className="text-lg opacity-80 mb-12 max-w-2xl">
          The biosolids fight is the clearest answer to "what does she actually do?" Here's how round one played out — and what happened next.
        </p>

        {/* Visual timeline — 5 steps including the November 2025 restart */}
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16 border-y border-primary/10 py-8">
          {TIMELINE.map((step, i) => (
            <li
              key={step.date}
              data-animate
              data-delay={String(Math.min(i + 1, 4))}
              className={`relative ${step.isCurrent ? 'lg:col-span-1' : ''}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`block w-3 h-3 rounded-full ${step.isCurrent ? 'bg-primary animate-pulse' : 'bg-accent'}`}
                  aria-hidden="true"
                />
                <span className={`text-xs font-bold uppercase tracking-widest ${step.isCurrent ? 'text-primary' : 'text-accent'}`}>
                  {step.date}
                </span>
              </div>
              <h3 className="font-display text-base md:text-lg text-primary mb-2 leading-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            In 2022, companies started trucking treated sewage waste into the Copper Basin from Chattanooga and Cobb County, Georgia. The material contained PFAS, the "forever chemicals" linked to cancer. The smell hit local businesses and drove away tourists. The scenic train from Blue Ridge brings visitors right into Copperhill, and people were saying "It smells really bad here" and "Does it always smell like this around here?" Those complaints were cited directly in the county resolution. In a community where tourism is the biggest part of the economy, this was an economic attack as much as an environmental one.
          </p>

          <p>
            Samantha and her fellow commissioners passed a resolution banning the dumping. State agencies in Nashville told them the resolution didn't count. They'd approved the project as a "pilot program" without even requiring a permit. When commissioners asked where the waste was coming from, they were told to file an open records request.
          </p>

          <p>
            The trucks kept coming. Police bodycam footage from McCaysville, Georgia showed drivers using back roads to avoid detection, overloading a bridge rated for 25 tons with trucks weighing over 67,000 pounds, and leaking waste out the back. Drivers told officers their bosses instructed them not to go through town.
          </p>

          <p>
            Samantha didn't stop. She confirmed to NewsChannel 9 that Georgia and Tennessee regulators were both investigating. She helped organize a two-state town hall in June 2023. She went back to every commission meeting. She kept talking to every reporter who would listen. She kept demanding transparency from agencies that didn't want to give it.
          </p>

          <p>
            The issue got big enough that U.S. Senator Bill Hagerty said publicly he was "tracking it closely." A Bradley County commissioner came to the town hall because the concern was spreading to neighboring counties and their water supply.
          </p>

          <p>
            By April 2024, round one was over. TDEC confirmed the dumping had stopped. The last delivery was March 25, 2024. TDEC had found pH violations.
          </p>

          {/* Samantha's prophetic 2024 quote — what she said when the dumping "ended" */}
          <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 text-xl font-display text-primary italic">
            "Our community is awaiting transparency from TDEC and the company owner, Byron 'Buddy' Haynes, verifying the unequivocal and permanent stoppage of transportation and biosolids application on the Intertrade Holdings/Copperhill Industries site."
            <footer className="not-italic font-body text-sm text-accent uppercase tracking-wide mt-3 opacity-90">
              — Samantha Trantham, April 2024
            </footer>
          </blockquote>

          <p>
            She used the words "unequivocal" and "permanent" on purpose. She knew the agreement was fragile. She said so out loud, on the record.
          </p>

          <p className="font-bold text-xl text-primary">
            In late November 2025, the dumping resumed.
          </p>

          <p>
            This time the state has reclassified the same biosolids as "Exceptional Quality" — exempt from the rules that worked the last time. The smell is back. The trucks are back. The route Samantha and her neighbors fought for two years to close has been reopened.
          </p>

          <p className="text-xl font-display text-primary border-t border-primary/10 pt-6">
            She is not letting them have this town again.
          </p>

          {/* Why this matters — connects fight to voter's daily life */}
          <div className="mt-12 bg-primary/5 border-l-4 border-accent p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
              Why This Matters Right Now
            </p>
            <p className="text-base md:text-lg leading-relaxed text-primary">
              PFAS doesn't break down. It gets into groundwater, livestock, and the food your grandkids eat. The Ocoee and Hiwassee bring 250,000+ visitors a year to the Basin — the river economy is what keeps your neighbors employed. If the smell drives tourists away, the rafting outfitters, restaurants, gas stations, and motels all feel it. This isn't an abstract environmental fight. It's about whether Polk County families still have a place to work next year.
            </p>
          </div>

          <div className="mt-12 pt-6 border-t border-muted/20">
            <details className="group">
              <summary className="text-xs text-muted cursor-pointer select-none hover:text-accent transition-colors uppercase tracking-wide">
                Source references
              </summary>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                NewsChannel 9 (WTVC): May 24, 2023; May 25/26, 2023 (bodycam); June 11, 2023 (town hall); June 29, 2023 (TDEC meeting); April 30, 2024 (round one stoppage). WDEF: May 2023. November 2025 restart confirmed by the official Tennessee Department of Environment and Conservation Copper Basin Mining District remediation page (tn.gov/environment).
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}

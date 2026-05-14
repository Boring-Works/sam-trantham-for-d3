// Tennessee statewide voter lookup (Secretary of State)
const TN_VOTER_LOOKUP = 'https://tnmap.tn.gov/voterlookup/'
// GoVoteTN portal (official TN SoS)
const GOVOTE_TN = 'https://sos.tn.gov/elections'
// Polk County Election Commission
const POLK_EC_PHONE = '(423) 338-4531'
const POLK_EC_PHONE_HREF = 'tel:+14233384531'
const POLK_EC_EMAIL = 'polk.commission@tn.gov'
const POLK_EC_ADDR = '6050 Hwy 411, Benton, TN 37307'

export function VoterInfo() {
  return (
    <section id="vote" className="bg-surface text-text px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">

        <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] text-center mb-3">
          Make Your Vote Count
        </p>
        <h2 className="text-4xl md:text-5xl font-display mb-4 text-center text-primary">
          How to Vote for Samantha
        </h2>
        <p className="text-center opacity-80 max-w-2xl mx-auto mb-14 text-lg">
          The Republican Primary is Thursday, August 6, 2026. Three steps and you're done.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mb-10">

          {/* Card 1: Am I in District 3? */}
          <a
            href={TN_VOTER_LOOKUP}
            target="_blank"
            rel="noopener noreferrer"
            data-animate
            data-delay="1"
            className="group bg-white p-7 border-l-4 border-accent hover:shadow-lg transition-shadow flex flex-col"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Step 1</p>
            <h3 className="text-2xl font-display mb-3 text-primary">Am I in District 3?</h3>
            <p className="text-sm leading-relaxed flex-grow mb-4">
              If you live in or around Copperhill, Ducktown, Turtletown, Isabella, Reliance, or the east side of Polk County, you're likely in District 3. Confirm with the TN voter lookup.
            </p>
            <p className="text-xs opacity-60 mb-3">
              Voter registration closes <strong>Tuesday, July 7, 2026</strong>.
            </p>
            <span className="text-sm font-bold uppercase tracking-wider text-accent group-hover:underline">
              Check My Registration →
            </span>
          </a>

          {/* Card 2: When to vote */}
          <div
            data-animate
            data-delay="2"
            className="bg-white p-7 border-l-4 border-accent flex flex-col"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Step 2</p>
            <h3 className="text-2xl font-display mb-3 text-primary">When to Vote</h3>
            <ul className="text-sm leading-relaxed space-y-3 flex-grow">
              <li>
                <span className="font-bold text-primary block">Early Voting</span>
                <span className="opacity-80">July 17 – August 1, 2026</span>
              </li>
              <li>
                <span className="font-bold text-primary block">Election Day</span>
                <span className="opacity-80">Thursday, August 6, 2026</span>
                <span className="block opacity-80">8 a.m. to 8 p.m. (Eastern)</span>
              </li>
              <li className="pt-1">
                <span className="font-bold text-primary block">Bring photo ID</span>
                <span className="text-xs opacity-70">TN driver's license, U.S. passport, military ID, or TN/federal photo ID. Expired is OK.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Where to vote */}
          <a
            href={GOVOTE_TN}
            target="_blank"
            rel="noopener noreferrer"
            data-animate
            data-delay="3"
            className="group bg-white p-7 border-l-4 border-accent hover:shadow-lg transition-shadow flex flex-col"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Step 3</p>
            <h3 className="text-2xl font-display mb-3 text-primary">Where to Vote</h3>
            <p className="text-sm leading-relaxed flex-grow mb-4">
              Your polling place depends on where you live in Polk County. The Polk County Election Commission can confirm yours, and the TN Secretary of State has the full list.
            </p>
            <span className="text-sm font-bold uppercase tracking-wider text-accent group-hover:underline mb-2">
              Find My Polling Place →
            </span>
          </a>

        </div>

        {/* Polk County Election Commission contact strip */}
        <div data-animate className="bg-primary text-surface px-6 md:px-10 py-8 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
              Questions About Voting?
            </p>
            <h3 className="text-xl font-display leading-snug">
              Polk County<br />Election Commission
            </h3>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Phone</p>
              <a href={POLK_EC_PHONE_HREF} className="font-bold hover:text-accent transition-colors">
                {POLK_EC_PHONE}
              </a>
              <p className="text-xs opacity-60 mt-1">M–F · 8:30 a.m. – 4:30 p.m.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Office</p>
              <p className="font-bold leading-snug">{POLK_EC_ADDR}</p>
              <a
                href={`mailto:${POLK_EC_EMAIL}`}
                className="text-xs opacity-80 hover:text-accent transition-colors break-all"
              >
                {POLK_EC_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-sm opacity-70 mt-8 max-w-2xl mx-auto">
          Questions about Samantha or the campaign?{' '}
          <a href="#connect" className="text-accent font-bold hover:underline">
            Reach out directly.
          </a>
        </p>

      </div>
    </section>
  )
}

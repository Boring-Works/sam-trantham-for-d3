// Tennessee statewide voter lookup (Secretary of State)
const TN_VOTER_LOOKUP = 'https://tnmap.tn.gov/voterlookup/'
// GoVoteTN portal (official TN SoS)
const GOVOTE_TN = 'https://sos.tn.gov/elections'

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
          The Republican Primary is Thursday, August 6, 2026. Here's what you need to know.
        </p>

        <div className="grid md:grid-cols-3 gap-5">

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
              Most folks in the Copper Basin (Copperhill, Ducktown, Turtletown, Reliance, parts of Benton) are in District 3. Look up your registration to confirm.
            </p>
            <span className="text-sm font-bold uppercase tracking-wider text-accent group-hover:underline">
              Check My Registration →
            </span>
          </a>

          {/* Card 2: Early voting */}
          <div
            data-animate
            data-delay="2"
            className="bg-white p-7 border-l-4 border-accent flex flex-col"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Step 2</p>
            <h3 className="text-2xl font-display mb-3 text-primary">When to Vote</h3>
            <ul className="text-sm leading-relaxed space-y-2 flex-grow mb-4">
              <li>
                <span className="font-bold text-primary block">Early Voting</span>
                <span className="opacity-80">July 17 – August 1, 2026</span>
              </li>
              <li>
                <span className="font-bold text-primary block">Election Day</span>
                <span className="opacity-80">Thursday, August 6, 2026 · 8 a.m. to 8 p.m. ET</span>
              </li>
              <li className="text-xs opacity-70 pt-1">
                Bring a valid photo ID (TN driver's license, state ID, U.S. passport, military ID).
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
              Your polling place depends on where you live in Polk County. The Polk County Election Commission can confirm yours, and the TN Secretary of State has the full county list.
            </p>
            <span className="text-sm font-bold uppercase tracking-wider text-accent group-hover:underline">
              Find My Polling Place →
            </span>
          </a>

        </div>

        <p className="text-center text-sm opacity-70 mt-10 max-w-2xl mx-auto">
          Questions about voting in Polk County? Call the Polk County Election Commission. Questions about Samantha?{' '}
          <a href="#connect" className="text-accent font-bold hover:underline">
            Reach out directly.
          </a>
        </p>

      </div>
    </section>
  )
}

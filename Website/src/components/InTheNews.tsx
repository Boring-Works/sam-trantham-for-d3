const NEWS_ITEMS = [
  {
    title: 'Biosolid delivery to Copperhill stops after TDEC finds violations',
    source: 'NewsChannel 9',
    short: 'WTVC',
    date: 'April 2024',
    url: 'https://newschannel9.com/news/local/copperhill-industries-stops-delivery-processing-of-biosolids-in-polk-county',
  },
  {
    title: 'Polk County debates safety of moving Boys and Girls Club next to controversial site',
    source: 'NewsChannel 9',
    short: 'WTVC',
    date: 'June 2024',
    url: 'https://newschannel9.com/news/local/polk-countys-boys-and-girls-club-relocation-plan-faces-backlash-over-site-safety-concerns',
  },
  {
    title: 'Bodycam reveals trucks cited for using back roads to deliver biosolids to Polk Co.',
    source: 'NewsChannel 9',
    short: 'WTVC',
    date: 'May 2023',
    url: 'https://newschannel9.com/news/instagram/video-shows-truck-drivers-delivering-leaking-biosolids-to-polk-county-despite-resolution',
  },
  {
    title: "Despite county ordinance, state OK's biosolids trucked in Polk County without permit",
    source: 'NewsChannel 9',
    short: 'WTVC',
    date: 'May 2023',
    url: 'https://newschannel9.com/news/local/despite-ordinance-reports-of-biosolids-dumped-in-polk-co-prompts-investigations-copperhill-industries-sludge',
  },
  {
    title: 'Polk County Commissioners Suing over Biowaste Disposal',
    source: 'WDEF News 12',
    short: 'WDEF',
    date: 'May 2023',
    url: 'https://www.wdef.com/polk-county-commissioners-suing-over-biowaste-disposal/',
  },
  {
    title: 'CSCC Alumna Spotlight: Samantha Trantham',
    source: 'Chattanoogan.com',
    short: 'CHA',
    date: 'February 2026',
    url: 'https://www.chattanoogan.com/2026/2/18/514923/CSCC-Alumna-Spotlight-Samantha-Trantham.aspx',
  },
]

export function InTheNews() {
  return (
    <section id="news" className="bg-surface text-text px-6 py-20 md:py-32">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] text-center mb-3">
          Independent Coverage
        </p>
        <h2 className="text-4xl md:text-5xl font-display mb-4 text-primary text-center">What the Press Reported</h2>
        <p className="text-lg text-center mb-12 opacity-80 max-w-2xl mx-auto">
          Not campaign talking points. Click through and see what the reporters covered.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {NEWS_ITEMS.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 bg-white p-5 border border-primary/10 hover:border-accent hover:shadow-md transition-all"
            >
              <div className="shrink-0 w-14 h-14 bg-primary text-accent flex items-center justify-center font-display font-bold text-sm tracking-wider">
                {item.short}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold mb-2 leading-snug group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted uppercase tracking-wider">
                  {item.source} · {item.date}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

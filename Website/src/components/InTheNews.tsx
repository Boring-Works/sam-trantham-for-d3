
export function InTheNews() {
  const newsItems = [
    {
      title: "Biosolid delivery to Copperhill stops after TDEC finds violations",
      source: "NewsChannel 9",
      date: "April 2024",
      url: "https://newschannel9.com/news/local/biosolid-delivery-to-copperhill-stops-after-tdec-finds-violations" // Note: Fake URL for now as per markdown
    },
    {
      title: "Polk County debates safety of moving Boys and Girls Club next to controversial site",
      source: "NewsChannel 9",
      date: "June 2024",
      url: "https://newschannel9.com/news/local/polk-county-debates-safety-of-moving-boys-and-girls-club-next-to-controversial-site"
    },
    {
      title: "Bodycam reveals trucks cited for using back roads to deliver biosolids to Polk Co.",
      source: "NewsChannel 9",
      date: "May 2023",
      url: "https://newschannel9.com/news/local/bodycam-reveals-trucks-cited-for-using-back-roads-to-deliver-biosolids-to-polk-co"
    },
    {
      title: "Despite county ordinance, state OK's biosolids trucked in Polk County without permit",
      source: "NewsChannel 9",
      date: "May 2023",
      url: "https://newschannel9.com/news/local/despite-county-ordinance-state-oks-biosolids-trucked-in-polk-county-without-permit"
    },
    {
      title: "Polk County Commissioners Suing over Biowaste Disposal",
      source: "WDEF",
      date: "May 2023",
      url: "https://wdef.com/2023/05/23/polk-county-commissioners-suing-over-biowaste-disposal/"
    },
    {
      title: "CSCC Alumna Spotlight: Samantha Trantham",
      source: "Chattanoogan.com",
      date: "February 2026",
      url: "https://www.chattanoogan.com/2026/2/18/482811/CSCC-Alumna-Spotlight-Samantha.aspx"
    }
  ];

  return (
    <section id="news" className="bg-surface text-text px-6 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display mb-4 text-primary text-center">Don't Take Our Word for It</h2>
        <p className="text-xl text-center mb-12 opacity-80">These aren't campaign talking points. Click through and see what the reporters covered.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => {
            if (item.url) {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 border-2 border-primary border-opacity-10 hover:border-accent hover:shadow-md transition-all group bg-white"
                >
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted uppercase tracking-wide">{item.source} • {item.date}</p>
                </a>
              );
            }
            return (
              <div key={index} className="block p-6 border-2 border-primary border-opacity-10 bg-white">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted uppercase tracking-wide">{item.source} • {item.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

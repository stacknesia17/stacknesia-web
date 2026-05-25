import Navbar from '../components/Navbar'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-6">
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
          <span className="text-[11px] text-red-800 font-medium">Our story</span>
        </div>
        <h1 className="text-4xl font-medium text-gray-900 leading-tight mb-6">
          We're not a big company.<br />
          <span className="text-red-600">We're two people who really love databases.</span>
        </h1>
        <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
          Stacknesia started with a simple frustration — every time we faced a tricky database problem at work, the resources online were either too generic, too outdated, or just plain wrong. We kept solving the same problems from scratch, and we knew other engineers were too.
        </p>
        <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
          So we decided to write it all down. The real stuff — the migrations that almost went wrong, the HA setups that took three attempts, the monitoring configs that actually work in production. Not the sanitized version. The honest one.
        </p>
        <p className="text-[15px] text-gray-500 leading-relaxed">
          We're both still working full-time as database engineers, which means everything here comes straight from what we're dealing with today — not what we dealt with five years ago.
        </p>
      </section>

      {/* Team */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-medium text-gray-900 mb-10 text-center">Meet the team</h2>
        <div className="grid grid-cols-2 gap-8">

          {/* Yosef */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-red-50 p-8 flex flex-col items-center border-b border-red-100">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white text-xl font-medium mb-3">YJ</div>
              <div className="text-[16px] font-medium text-gray-900">Yosef Jeffri</div>
              <div className="text-[12px] text-red-600 font-medium mt-1">Senior Database Engineer</div>
            </div>
            <div className="p-6">
              <p className="text-[13px] text-gray-500 italic border-l-2 border-red-200 pl-3 mb-5 leading-relaxed">
                "I've migrated databases that were older than my career. Every scar taught me something — and I'd rather you skip the scar part."
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {['PostgreSQL', 'Oracle → PG', 'Patroni / HA', 'Snowflake', 'Multi-cloud'].map((s) => (
                  <span key={s} className="text-[10px] bg-red-50 text-red-700 border border-red-200 px-2 py-1 rounded-full">{s}</span>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[11px] text-gray-400">Currently at a leading logistics company</div>
                <div className="text-[11px] text-gray-400">4+ years · 10TB+ environments</div>
                <div className="text-[11px] text-gray-400">Jakarta, Indonesia</div>
              </div>
            </div>
          </div>

          {/* Patria */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-red-50 p-8 flex flex-col items-center border-b border-red-100">
              <div className="w-16 h-16 rounded-full bg-red-800 flex items-center justify-center text-white text-xl font-medium mb-3">PW</div>
              <div className="text-[16px] font-medium text-gray-900">Patria Wineka</div>
              <div className="text-[12px] text-red-600 font-medium mt-1">Senior Database Administrator</div>
            </div>
            <div className="p-6">
              <p className="text-[13px] text-gray-500 italic border-l-2 border-red-200 pl-3 mb-5 leading-relaxed">
                "Managing 100+ databases teaches you one thing: everything will break eventually. The question is whether you're ready when it does."
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {['PostgreSQL / EDB', 'SQL Server HA', 'Alibaba Cloud', 'RHCSA', 'Automation'].map((s) => (
                  <span key={s} className="text-[10px] bg-red-50 text-red-700 border border-red-200 px-2 py-1 rounded-full">{s}</span>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[11px] text-gray-400">Currently at a leading retail group</div>
                <div className="text-[11px] text-gray-400">5+ years · 100+ prod databases</div>
                <div className="text-[11px] text-gray-400">Jakarta, Indonesia</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 max-w-4xl mx-auto border-t border-gray-100">
        <h2 className="text-2xl font-medium text-gray-900 mb-6">How Stacknesia came to be</h2>
        <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
          We met at the same company — a data consulting firm where we both worked as database consultants. Day after day, we were solving similar problems for different clients across banking, finance, telco, and insurance. It didn't take long before we realized we were thinking about the same things.
        </p>
        <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-5 my-6">
          <p className="text-[14px] text-gray-600 italic leading-relaxed">
            "We didn't build Stacknesia because we had all the answers. We built it because we kept searching for answers and coming up empty — so we decided to become the resource we wished we had."
          </p>
        </div>
        <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
          Long term? We want to build something bigger — a proper database and infrastructure consultancy. But right now, we're starting where every good thing starts: by being genuinely useful to the people around us.
        </p>
        <p className="text-[15px] text-gray-500 leading-relaxed">
          If you're a DBA, a data engineer, a developer who suddenly became responsible for a database, or someone trying to build their career in this space — this place is for you.
        </p>
      </section>

      {/* Values */}
      <section className="py-16 px-6 max-w-4xl mx-auto border-t border-gray-100">
        <h2 className="text-2xl font-medium text-gray-900 mb-8 text-center">What we believe in</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            { title: 'Honest over polished', desc: 'We write about what actually happened, including the mistakes. Sanitized content helps no one.' },
            { title: 'Practical over theoretical', desc: 'Every article, cheat sheet, and tool here is something we\'ve actually used in production.' },
            { title: 'Community first', desc: 'Knowledge should be free. Resources, guides, and tools on Stacknesia will always be free to access.' },
          ].map((v) => (
            <div key={v.title} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-[14px] font-medium text-gray-900 mb-3">{v.title}</div>
              <div className="text-[12px] text-gray-500 leading-relaxed">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center flex-wrap gap-6">
          <div>
            <div className="text-[14px] font-medium text-white mb-1">Stacknesia</div>
            <div className="text-[12px] text-gray-500">We've been in the trenches. Now we're sharing the map.</div>
          </div>
          <div className="text-[11px] text-gray-600">© 2025 Stacknesia · Jakarta, Indonesia</div>
        </div>
      </footer>

    </main>
  )
}
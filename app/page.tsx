import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-16">
          {/* Left content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
              <span className="text-[11px] text-red-800 font-medium">Database · Cloud · Big Data · Monitoring</span>
            </div>

            <h1 className="text-4xl font-medium text-gray-900 leading-tight mb-4">
              Your data infrastructure,<br />
              <span className="text-red-600">architected.</span>
            </h1>

            <p className="text-[15px] text-gray-500 leading-relaxed mb-8 max-w-md">
              Two senior DBAs sharing real-world knowledge from 100+ production databases — across finance, banking, telco, and logistics.
            </p>

            <div className="flex items-center gap-3 mb-10">
              <a href="/blog" className="bg-red-600 text-white text-[13px] font-medium px-5 py-2.5 rounded-md hover:bg-red-700">
                Read the blog
              </a>
              <a href="/resources" className="bg-white text-gray-800 text-[13px] px-5 py-2.5 rounded-md border border-gray-200 hover:border-gray-300">
                Free resources
              </a>
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-8">
              <div>
                <div className="text-2xl font-medium text-red-600">10TB+</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Data managed</div>
              </div>
              <div className="w-px h-8 bg-gray-100"></div>
              <div>
                <div className="text-2xl font-medium text-red-600">100+</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Production databases</div>
              </div>
              <div className="w-px h-8 bg-gray-100"></div>
              <div>
                <div className="text-2xl font-medium text-red-600">250GB+</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Largest migration</div>
              </div>
            </div>
          </div>

          {/* Right — Isometric illustration */}
          <div className="flex-1 flex justify-center">
            <svg viewBox="0 0 320 280" className="w-full max-w-sm" fill="none">
              {/* Server rack */}
              <polygon points="160,40 240,80 160,120 80,80" fill="#FADBD8"/>
              <polygon points="240,80 240,160 160,200 160,120" fill="#E8A89A"/>
              <polygon points="80,80 80,160 160,200 160,120" fill="#F5C6C0"/>
              {/* Second layer */}
              <polygon points="160,100 240,140 160,180 80,140" fill="#FADBD8" fillOpacity="0.7"/>
              <polygon points="240,140 240,200 160,240 160,180" fill="#E8A89A" fillOpacity="0.7"/>
              <polygon points="80,140 80,200 160,240 160,180" fill="#F5C6C0" fillOpacity="0.7"/>
              {/* LED lights */}
              <circle cx="220" cy="100" r="4" fill="#1E8449"/>
              <circle cx="220" cy="116" r="4" fill="#1E8449"/>
              <circle cx="220" cy="132" r="4" fill="#C0392B"/>
              {/* Cloud */}
              <ellipse cx="60" cy="40" rx="28" ry="14" fill="#FEF0EE"/>
              <ellipse cx="80" cy="46" rx="20" ry="12" fill="#FEF0EE"/>
              <ellipse cx="44" cy="46" rx="18" ry="11" fill="#FEF0EE"/>
              <rect x="26" y="45" width="74" height="16" rx="2" fill="#FEF0EE"/>
              <text x="60" y="57" textAnchor="middle" fontSize="9" fill="#C0392B" fontFamily="monospace">CLOUD</text>
              {/* Database cylinders */}
              <ellipse cx="60" cy="180" rx="32" ry="11" fill="#FADBD8"/>
              <rect x="28" y="180" width="64" height="44" fill="#F5C6C0"/>
              <ellipse cx="60" cy="224" rx="32" ry="11" fill="#E8A89A"/>
              <text x="60" y="206" textAnchor="middle" fontSize="9" fill="#922B21" fontFamily="monospace">PostgreSQL</text>
              {/* Connection lines */}
              <line x1="92" y1="195" x2="120" y2="170" stroke="#C0392B" strokeWidth="1" strokeDasharray="4,3" strokeOpacity="0.4"/>
              <line x1="60" y1="60" x2="100" y2="100" stroke="#C0392B" strokeWidth="1" strokeDasharray="4,3" strokeOpacity="0.3"/>
              {/* Status badge */}
              <rect x="190" y="50" width="70" height="18" rx="4" fill="#1E8449" fillOpacity="0.15"/>
              <text x="225" y="63" textAnchor="middle" fontSize="8" fill="#1E8449" fontFamily="monospace">● RUNNING</text>
            </svg>
          </div>

        </div>
      </section>
      {/* Trust Bar */}
<section className="border-t border-b border-gray-100 py-5 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-3">
    <span className="text-[12px] text-gray-400">Experienced across</span>
    <div className="flex items-center gap-3 flex-wrap">
      {['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS', 'GCP', 'Alibaba Cloud', 'Snowflake', 'EDB'].map((tech) => (
        <span key={tech} className="text-[12px] font-medium text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-md">
          {tech}
        </span>
      ))}
    </div>
  </div>
</section>
{/* Blog Grid */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <div className="text-center mb-12">
    <span className="text-[11px] font-medium text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">Articles & Tutorials</span>
    <h2 className="text-2xl font-medium text-gray-900 mt-4 mb-2">Real-world knowledge.<br/>Every layer of the data stack.</h2>
    <p className="text-[14px] text-gray-500">No theory, no fluff — just what actually works in production.</p>
  </div>

  <div className="grid grid-cols-3 gap-5">
    {[
      { tag: 'PostgreSQL', tag2: 'HA', title: 'PostgreSQL HA with Patroni + HAProxy + PgBouncer: complete setup guide', author: 'Yosef Jeffri', initials: 'YJ', date: 'May 2025', read: '12 min', code: ['# patronictl list', '+ Cluster: pg-prod', '  pg-01 | Leader | running', '  pg-02 | Replica| running'] },
      { tag: 'Operations', tag2: 'Scale', title: 'Managing 100+ production PostgreSQL instances: patterns that scale', author: 'Patria Wineka', initials: 'PW', date: 'Apr 2025', read: '9 min', code: ['SELECT count(*), state', 'FROM pg_stat_activity', 'GROUP BY state;', '-- active: 147'] },
      { tag: 'Migration', tag2: 'Oracle', title: 'Oracle to PostgreSQL: lessons from a 250GB banking database', author: 'Yosef Jeffri', initials: 'YJ', date: 'Mar 2025', read: '15 min', code: ['-- Pre-migration check', 'Schema: compatible ✓', 'Data types: mapped ✓', 'Stored procs: 12 found'] },
      { tag: 'Monitoring', tag2: 'Grafana', title: 'Building a complete PostgreSQL observability stack with Grafana + Prometheus', author: 'Patria Wineka', initials: 'PW', date: 'Feb 2025', read: '11 min', code: ['# prometheus scrape', 'job: postgres_exporter', 'targets: [":9187"]', 'interval: 15s'] },
      { tag: 'Performance', tag2: 'Tuning', title: 'PostgreSQL slow query analysis: from EXPLAIN to fix in production', author: 'Yosef Jeffri', initials: 'YJ', date: 'Jan 2025', read: '10 min', code: ['EXPLAIN ANALYZE', 'Seq Scan on orders', 'cost=0..89432.00', '→ Index Scan: 0.08ms'] },
      { tag: 'Automation', tag2: 'Ansible', title: 'Automating PostgreSQL deployments with Ansible: a production playbook', author: 'Patria Wineka', initials: 'PW', date: 'Dec 2024', read: '13 min', code: ['- name: Install PG', '  hosts: db_servers', '  apt:', '    name: postgresql-15'] },
    ].map((article, i) => (
      <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-red-200 transition-colors">
        {/* Code thumbnail */}
        <div className="bg-gray-900 p-4 h-24 flex flex-col justify-center">
          {article.code.map((line, j) => (
            <div key={j} className={`font-mono text-[10px] leading-relaxed ${j === 0 ? 'text-gray-400' : j === 2 ? 'text-green-400' : 'text-red-300'}`}>
              {line}
            </div>
          ))}
        </div>
        {/* Card body */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded-full">{article.tag}</span>
            <span className="text-[10px] bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded-full">{article.tag2}</span>
            <span className="text-[10px] text-gray-400 ml-auto">{article.date}</span>
          </div>
          <h3 className="text-[13px] font-medium text-gray-900 leading-snug mb-4">{article.title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white text-[9px] font-medium">{article.initials}</div>
              <span className="text-[11px] text-gray-500">{article.author}</span>
            </div>
            <span className="text-[11px] text-gray-400">{article.read}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
{/* Footer */}
<footer className="bg-gray-900 mt-16">
  <div className="max-w-6xl mx-auto px-6 py-10">
    <div className="flex justify-between items-start flex-wrap gap-10 mb-10">
      
      {/* Brand */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-red-600 rounded-md flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <polygon points="12,2 22,7 12,12 2,7" fill="white" fillOpacity="0.9"/>
              <polygon points="22,7 22,14 12,19 12,12" fill="white" fillOpacity="0.6"/>
              <polygon points="2,7 2,14 12,19 12,12" fill="white" fillOpacity="0.8"/>
            </svg>
          </div>
          <span className="text-[15px] font-medium text-white">Stacknesia</span>
        </div>
        <p className="text-[12px] text-gray-500 max-w-[200px] leading-relaxed">
          We've been in the trenches.<br/>Now we're sharing the map.
        </p>
        <p className="text-[11px] text-gray-600 mt-3">Jakarta, Indonesia 🌏</p>
      </div>

      {/* Links */}
      <div className="flex gap-16">
        <div>
          <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-4">Content</div>
          <div className="flex flex-col gap-3">
            <a href="/blog" className="text-[12px] text-gray-500 hover:text-white">Blog</a>
            <a href="/resources" className="text-[12px] text-gray-500 hover:text-white">Resources</a>
            <a href="/projects" className="text-[12px] text-gray-500 hover:text-white">Projects</a>
          </div>
        </div>
        <div>
          <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-4">Company</div>
          <div className="flex flex-col gap-3">
            <a href="/about" className="text-[12px] text-gray-500 hover:text-white">About</a>
            <a href="/contact" className="text-[12px] text-gray-500 hover:text-white">Contact</a>
          </div>
        </div>
        <div>
          <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-4">Social</div>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-[12px] text-gray-500 hover:text-white">GitHub</a>
            <a href="#" className="text-[12px] text-gray-500 hover:text-white">LinkedIn</a>
            <a href="#" className="text-[12px] text-gray-500 hover:text-white">Twitter / X</a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-gray-800 pt-6 flex justify-between items-center">
      <span className="text-[11px] text-gray-600">© 2025 Stacknesia. All rights reserved.</span>
      <span className="text-[11px] text-gray-600">Available for remote work worldwide</span>
    </div>
  </div>
</footer>
    </main>
  )
}

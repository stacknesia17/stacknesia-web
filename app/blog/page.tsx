import Navbar from '../components/Navbar'

const articles = [
  { slug: 'oracle-to-postgresql-migration', tag: 'Migration', tag2: 'Oracle', title: 'Oracle to PostgreSQL: lessons from a 250GB banking database', excerpt: 'What we learned migrating a 250GB Oracle database to PostgreSQL — schema compatibility, data type mapping, and post-migration tuning.', author: 'Yosef Jeffri', initials: 'YJ', date: 'Mar 2025', read: '15 min', code: ['-- Pre-migration check', 'Schema: compatible ✓', 'Data types: mapped ✓', 'Stored procs: 12 found'] },
  { slug: null, tag: 'PostgreSQL', tag2: 'HA', title: 'PostgreSQL HA with Patroni + HAProxy + PgBouncer: complete setup guide', excerpt: 'Step-by-step guide to building a production-grade PostgreSQL HA cluster with automated failover, connection pooling, and load balancing.', author: 'Yosef Jeffri', initials: 'YJ', date: 'May 2025', read: '12 min', code: ['# patronictl list', '+ Cluster: pg-prod', '  pg-01 | Leader | running', '  pg-02 | Replica| running'] },
  { slug: null, tag: 'Operations', tag2: 'Scale', title: 'Managing 100+ production PostgreSQL instances: patterns that scale', excerpt: 'Operational patterns, automation strategies, and lessons learned from managing over 100 PostgreSQL instances across multiple environments.', author: 'Patria Wineka', initials: 'PW', date: 'Apr 2025', read: '9 min', code: ['SELECT count(*), state', 'FROM pg_stat_activity', 'GROUP BY state;', '-- active: 147'] },
  { slug: null, tag: 'Monitoring', tag2: 'Grafana', title: 'Building a complete PostgreSQL observability stack with Grafana + Prometheus', excerpt: 'How to set up end-to-end database monitoring — from metrics collection to alerting — using open source tools that actually work in production.', author: 'Patria Wineka', initials: 'PW', date: 'Feb 2025', read: '11 min', code: ['# prometheus scrape', 'job: postgres_exporter', 'targets: [":9187"]', 'interval: 15s'] },
  { slug: null, tag: 'Performance', tag2: 'Tuning', title: 'PostgreSQL slow query analysis: from EXPLAIN to fix in production', excerpt: 'A practical walkthrough of identifying and fixing slow queries using EXPLAIN ANALYZE — with real examples from a high-traffic finance system.', author: 'Yosef Jeffri', initials: 'YJ', date: 'Jan 2025', read: '10 min', code: ['EXPLAIN ANALYZE', 'Seq Scan on orders', 'cost=0..89432.00', '→ Index Scan: 0.08ms'] },
  { slug: null, tag: 'Automation', tag2: 'Ansible', title: 'Automating PostgreSQL deployments with Ansible: a production playbook', excerpt: 'Stop deploying databases manually. This playbook covers installation, configuration, replication setup, and hardening — all automated.', author: 'Patria Wineka', initials: 'PW', date: 'Dec 2024', read: '13 min', code: ['- name: Install PG', '  hosts: db_servers', '  apt:', '    name: postgresql-15'] },
]

const filters = ['All', 'PostgreSQL', 'MySQL', 'MongoDB', 'High Availability', 'Migration', 'Monitoring', 'Automation', 'Performance']

export default function Blog() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Page header */}
      <div className="bg-white border-b border-gray-100 pt-20 pb-6 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-[11px] font-medium text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">Articles & Tutorials</span>
          <h1 className="text-3xl font-medium text-gray-900 mt-4 mb-2">Blog</h1>
          <p className="text-[14px] text-gray-500">Real-world knowledge from 100+ production databases. No fluff, no theory — just what actually works.</p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-white border-b border-gray-100 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-2 h-12 overflow-x-auto">
          {filters.map((f, i) => (
            <span key={f} className={`text-[12px] px-4 py-1.5 rounded-full border whitespace-nowrap cursor-pointer ${i === 0 ? 'bg-red-50 text-red-600 border-red-200 font-medium' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}`}>
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Article grid */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <a
              key={i}
              href={article.slug ? `/blog/${article.slug}` : '#'}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-red-200 transition-colors block"
            >
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
                <h3 className="text-[13px] font-medium text-gray-900 leading-snug mb-2">{article.title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-medium ${article.initials === 'YJ' ? 'bg-red-600' : 'bg-red-800'}`}>{article.initials}</div>
                    <span className="text-[11px] text-gray-500">{article.author}</span>
                  </div>
                  <span className="text-[11px] text-red-600 font-medium">
                    {article.slug ? 'Read more →' : 'Coming soon'}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

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
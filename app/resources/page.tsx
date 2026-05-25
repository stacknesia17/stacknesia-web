import Navbar from '../components/Navbar'

const resources = [
  {
    category: 'Cheat Sheets',
    items: [
      { title: 'PostgreSQL Performance Tuning Cheat Sheet', desc: 'Key parameters, query optimization tips, and indexing strategies for production PostgreSQL.', type: 'PDF', tag: 'PostgreSQL' },
      { title: 'MySQL 8.0 DBA Quick Reference', desc: 'Essential commands, configuration parameters, and replication setup for MySQL 8.0.', type: 'PDF', tag: 'MySQL' },
      { title: 'MongoDB Operations Cheat Sheet', desc: 'Common queries, aggregation pipelines, and replica set management commands.', type: 'PDF', tag: 'MongoDB' },
    ]
  },
  {
    category: 'Migration Guides',
    items: [
      { title: 'Oracle to PostgreSQL Migration Checklist', desc: 'Step-by-step checklist covering schema compatibility, data types, stored procedures, and cutover planning.', type: 'PDF', tag: 'Migration' },
      { title: 'SQL Server to PostgreSQL Migration Guide', desc: 'Complete guide for migrating SQL Server databases to PostgreSQL with minimal downtime.', type: 'PDF', tag: 'Migration' },
    ]
  },
  {
    category: 'Templates & Tools',
    items: [
      { title: 'Grafana Dashboard for PostgreSQL', desc: 'Production-ready Grafana dashboard covering connections, query performance, replication lag, and disk usage.', type: 'JSON', tag: 'Monitoring' },
      { title: 'Ansible Playbook — PostgreSQL Setup', desc: 'Automated PostgreSQL installation, configuration, and hardening playbook for RHEL/Ubuntu.', type: 'YAML', tag: 'Automation' },
      { title: 'PostgreSQL HA Architecture Diagram', desc: 'Editable architecture diagram for Patroni + HAProxy + PgBouncer high availability setup.', type: 'PNG', tag: 'HA' },
    ]
  },
  {
    category: 'Learning Paths',
    items: [
      { title: 'PostgreSQL DBA Roadmap 2025', desc: 'A structured learning path from beginner to senior DBA — covering core concepts, HA, cloud, and automation.', type: 'PDF', tag: 'Career' },
      { title: 'Database Engineer Career Guide', desc: 'How to build a career in database engineering — skills, certifications, and what hiring managers look for.', type: 'PDF', tag: 'Career' },
    ]
  },
]

const tagColors: Record<string, string> = {
  PostgreSQL: 'bg-red-50 text-red-700 border-red-200',
  MySQL: 'bg-orange-50 text-orange-700 border-orange-200',
  MongoDB: 'bg-green-50 text-green-700 border-green-200',
  Migration: 'bg-blue-50 text-blue-700 border-blue-200',
  Monitoring: 'bg-purple-50 text-purple-700 border-purple-200',
  Automation: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  HA: 'bg-red-50 text-red-700 border-red-200',
  Career: 'bg-gray-50 text-gray-700 border-gray-200',
}

const typeColors: Record<string, string> = {
  PDF: 'bg-red-600',
  JSON: 'bg-gray-700',
  YAML: 'bg-green-600',
  PNG: 'bg-blue-600',
}

export default function Resources() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Page header */}
      <div className="bg-white border-b border-gray-100 pt-20 pb-6 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-[11px] font-medium text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">Free Resources</span>
          <h1 className="text-3xl font-medium text-gray-900 mt-4 mb-2">Resources</h1>
          <p className="text-[14px] text-gray-500 max-w-xl">Cheat sheets, templates, playbooks, and guides — all free, all battle-tested in production. No signup required.</p>
        </div>
      </div>

      {/* Resources */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-12">
        {resources.map((section) => (
          <div key={section.category}>
            <h2 className="text-[16px] font-medium text-gray-900 mb-5 flex items-center gap-3">
              {section.category}
              <span className="text-[11px] font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{section.items.length} items</span>
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {section.items.map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-red-200 transition-colors cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${tagColors[item.tag]}`}>{item.tag}</span>
                    <span className={`text-[10px] text-white px-2 py-0.5 rounded font-medium ${typeColors[item.type]}`}>{item.type}</span>
                  </div>
                  <h3 className="text-[13px] font-medium text-gray-900 leading-snug mb-2">{item.title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center gap-1 text-[12px] text-red-600 font-medium group-hover:gap-2 transition-all">
                    Download free
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-red-600 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-medium text-white mb-3">Can't find what you need?</h2>
          <p className="text-[14px] text-red-100 mb-6">We're constantly adding new resources. If there's something specific you need, let us know!</p>
          <a href="/contact" className="bg-white text-red-600 text-[13px] font-medium px-6 py-2.5 rounded-lg hover:bg-red-50 inline-block">
            Request a resource →
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
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
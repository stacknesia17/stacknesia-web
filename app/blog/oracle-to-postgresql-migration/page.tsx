import Navbar from '../../../components/Navbar'

export default function ArticleOracleToPostgres() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Article header */}
      <section className="pt-24 pb-10 px-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <a href="/blog" className="text-[12px] text-gray-400 hover:text-gray-600">Blog</a>
          <span className="text-gray-300">/</span>
          <span className="text-[12px] text-gray-400">Migration</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-[11px] bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded-full">Migration</span>
          <span className="text-[11px] bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded-full">Oracle</span>
          <span className="text-[11px] bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded-full">PostgreSQL</span>
        </div>

        <h1 className="text-3xl font-medium text-gray-900 leading-tight mb-4">
          Oracle to PostgreSQL Migration: Lessons from a 250GB Banking Database
        </h1>

        <p className="text-[16px] text-gray-500 leading-relaxed mb-6">
          What actually happens when you migrate a 250GB production Oracle database to PostgreSQL at a banking company — the planning, the tools, the surprises, and what we'd do differently.
        </p>

        <div className="flex items-center gap-4 py-4 border-t border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-[11px] font-medium">YJ</div>
            <div>
              <div className="text-[13px] font-medium text-gray-900">Yosef Jeffri</div>
              <div className="text-[11px] text-gray-400">Senior Database Engineer</div>
            </div>
          </div>
          <div className="text-gray-200">|</div>
          <div className="text-[12px] text-gray-400">March 2025</div>
          <div className="text-gray-200">|</div>
          <div className="text-[12px] text-gray-400">15 min read</div>
        </div>
      </section>

      {/* Article content */}
      <article className="px-6 max-w-3xl mx-auto pb-20">

        {/* Intro */}
        <p className="text-[15px] text-gray-700 leading-relaxed mb-6">
          Last year, I was handed one of the more stressful migration projects of my career: move a 250GB Oracle database to PostgreSQL for a banking client, with minimal downtime and zero data loss. The database had been running Oracle for over a decade, with hundreds of stored procedures, custom data types, and Oracle-specific functions baked deep into the application layer.
        </p>
        <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
          This is the article I wish I had before starting. No sanitized success story — just what actually happened, what broke, and how we fixed it.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-medium text-gray-900 mb-4">Why they were migrating</h2>
        <p className="text-[15px] text-gray-700 leading-relaxed mb-6">
          The client's Oracle license was up for renewal, and the cost was significant. PostgreSQL was the natural alternative — mature, enterprise-ready, and free. But cost wasn't the only driver. The team also wanted more control over their infrastructure and the ability to run on cloud-managed PostgreSQL (Aurora, Cloud SQL) without Oracle's licensing restrictions.
        </p>

        {/* Callout box */}
        <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-5 mb-8">
          <p className="text-[13px] font-medium text-gray-900 mb-1">Key constraint</p>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            The database had to stay available during business hours. Maximum planned downtime for the final cutover: 4 hours, on a weekend.
          </p>
        </div>

        {/* Section 2 */}
        <h2 className="text-xl font-medium text-gray-900 mb-4">Pre-migration assessment</h2>
        <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
          Before touching anything, we spent two weeks in assessment mode. This is the part most people skip — and where most migrations go wrong.
        </p>

        <p className="text-[15px] text-gray-700 leading-relaxed mb-3">Here's what we catalogued:</p>
        <ul className="mb-6 flex flex-col gap-2">
          {[
            '847 tables, ranging from a few KB to 40GB+',
            '124 stored procedures — many using Oracle-specific PL/SQL syntax',
            '38 database functions with no direct PostgreSQL equivalent',
            'Custom Oracle sequences used for ID generation',
            'Oracle-specific data types: VARCHAR2, NUMBER, CLOB, BLOB',
            '12 database links to external Oracle instances',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-[14px] text-gray-700">
              <span className="text-red-500 mt-1">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
          The database links were the biggest surprise. Nobody had documented them. We only found them by querying <code className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-[13px]">DBA_DB_LINKS</code> directly. Each one required a separate conversation with the application team about whether it was still in use.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-medium text-gray-900 mb-4">The toolchain: why we chose Pentaho</h2>
        <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
          We evaluated three tools before settling on Pentaho Data Integration (PDI) for the data migration:
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { tool: 'ora2pg', pro: 'Free, open source, schema conversion built-in', con: 'Slow on large datasets, limited transformation logic' },
            { tool: 'AWS DMS', pro: 'Managed, good for ongoing replication', con: 'Expensive, less control over transformation' },
            { tool: 'Pentaho PDI', pro: 'Flexible, handles complex transformations, good for 250GB+', con: 'Steeper learning curve, requires setup' },
          ].map((t) => (
            <div key={t.tool} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="text-[13px] font-medium text-gray-900 mb-2">{t.tool}</div>
              <div className="text-[11px] text-green-700 mb-1">✓ {t.pro}</div>
              <div className="text-[11px] text-red-600">✗ {t.con}</div>
            </div>
          ))}
        </div>

        <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
          We ended up using <strong className="font-medium">ora2pg</strong> for schema conversion and <strong className="font-medium">Pentaho</strong> for data movement. They complement each other well — ora2pg handles the DDL translation, Pentaho handles the actual data transfer with transformation logic in between.
        </p>

        {/* Code block */}
        <h2 className="text-xl font-medium text-gray-900 mb-4">Schema conversion with ora2pg</h2>
        <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
          ora2pg produced a first-pass schema conversion, but it was never going to be production-ready out of the box. Here's a typical example of what it generated vs. what we actually needed:
        </p>

        <div className="bg-gray-900 rounded-xl p-5 mb-3">
          <div className="text-[11px] text-gray-400 mb-2 font-mono">-- Oracle original</div>
          <pre className="text-[12px] text-green-400 font-mono leading-relaxed overflow-x-auto">{`CREATE TABLE accounts (
  account_id    NUMBER(10) NOT NULL,
  account_name  VARCHAR2(100),
  balance       NUMBER(15,2),
  created_at    DATE,
  notes         CLOB,
  CONSTRAINT pk_accounts PRIMARY KEY (account_id)
);`}</pre>
        </div>

        <div className="bg-gray-900 rounded-xl p-5 mb-3">
          <div className="text-[11px] text-gray-400 mb-2 font-mono">-- ora2pg output (needs fixes)</div>
          <pre className="text-[12px] text-yellow-400 font-mono leading-relaxed overflow-x-auto">{`CREATE TABLE accounts (
  account_id    NUMERIC(10) NOT NULL,
  account_name  VARCHAR(100),
  balance       NUMERIC(15,2),
  created_at    TIMESTAMP,
  notes         TEXT,
  PRIMARY KEY (account_id)
);`}</pre>
        </div>

        <div className="bg-gray-900 rounded-xl p-5 mb-8">
          <div className="text-[11px] text-gray-400 mb-2 font-mono">-- Final PostgreSQL (what we actually used)</div>
          <pre className="text-[12px] text-blue-300 font-mono leading-relaxed overflow-x-auto">{`CREATE TABLE accounts (
  account_id    INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  account_name  VARCHAR(100),
  balance       NUMERIC(15,2),
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  notes         TEXT
);`}</pre>
        </div>

        {/* Section 4 */}
        <h2 className="text-xl font-medium text-gray-900 mb-4">The 3 biggest problems we hit</h2>

        <div className="flex flex-col gap-6 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-medium bg-red-600 text-white px-2 py-0.5 rounded">Problem 1</span>
              <span className="text-[14px] font-medium text-gray-900">NVL vs COALESCE in stored procedures</span>
            </div>
            <p className="text-[13px] text-gray-600 leading-relaxed mb-3">
              Oracle's <code className="bg-gray-100 text-red-600 px-1 rounded text-[12px]">NVL()</code> function has no direct equivalent in PostgreSQL. We had 847 occurrences across 124 stored procedures. We wrote a sed script to batch-replace them, then manually reviewed every procedure that touched financial calculations.
            </p>
            <div className="bg-gray-900 rounded-lg p-3">
              <pre className="text-[11px] font-mono text-green-400">{`-- Oracle
NVL(balance, 0)

-- PostgreSQL
COALESCE(balance, 0)`}</pre>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-medium bg-red-600 text-white px-2 py-0.5 rounded">Problem 2</span>
              <span className="text-[14px] font-medium text-gray-900">Sequence gaps causing primary key conflicts</span>
            </div>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              Oracle sequences and PostgreSQL sequences behave differently under load. During our dry run, we hit primary key conflicts because the sequence start values weren't set correctly after data migration. Always query the max ID after migration and set your sequence accordingly.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-medium bg-red-600 text-white px-2 py-0.5 rounded">Problem 3</span>
              <span className="text-[14px] font-medium text-gray-900">CLOB data with embedded newlines</span>
            </div>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              Several CLOB columns contained JSON-like data with embedded newlines. Pentaho's default CSV export broke on these. We had to switch to a binary transfer mode and handle the encoding explicitly during transformation.
            </p>
          </div>
        </div>

        {/* Cutover */}
        <h2 className="text-xl font-medium text-gray-900 mb-4">The cutover weekend</h2>
        <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
          We ran 3 dry runs before the actual cutover. Each one surfaced new issues. By the third run, we had the process down to 3h 42min — within our 4-hour window.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
          <div className="text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-4">Cutover timeline</div>
          <div className="flex flex-col gap-3">
            {[
              { time: '00:00', event: 'Oracle set to read-only. Application maintenance mode activated.' },
              { time: '00:15', event: 'Final delta sync via Pentaho — only rows changed in last 24h.' },
              { time: '01:30', event: 'Checksum validation — row counts and spot-check on financial tables.' },
              { time: '02:00', event: 'Stored procedures deployed to PostgreSQL. Smoke tests begin.' },
              { time: '03:15', event: 'Application config updated to point to PostgreSQL.' },
              { time: '03:42', event: 'Application back online. Monitoring begins.' },
            ].map((step) => (
              <div key={step.time} className="flex items-start gap-4">
                <div className="text-[12px] font-mono text-red-600 font-medium min-w-[48px]">{step.time}</div>
                <div className="text-[13px] text-gray-600">{step.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <h2 className="text-xl font-medium text-gray-900 mb-4">Results after 30 days</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { metric: 'Data loss', value: '0 rows', color: 'text-green-600' },
            { metric: 'Downtime', value: '3h 42m', color: 'text-gray-900' },
            { metric: 'Query performance', value: '+40% faster', color: 'text-green-600' },
          ].map((m) => (
            <div key={m.metric} className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center">
              <div className={`text-2xl font-medium mb-1 ${m.color}`}>{m.value}</div>
              <div className="text-[12px] text-gray-500">{m.metric}</div>
            </div>
          ))}
        </div>

        {/* Lessons */}
        <h2 className="text-xl font-medium text-gray-900 mb-4">What I'd do differently</h2>
        <div className="flex flex-col gap-3 mb-10">
          {[
            'Start stored procedure conversion earlier — we underestimated this by 2 weeks',
            'Run performance benchmarks before migration, not after — we got lucky with the +40% improvement',
            'Document every database link before starting — hunting them mid-project is painful',
            'Add a rollback timer to your runbook — if cutover hits 80% of your window, know when to abort',
            'Test with production data volume in dry runs, not a sample — the CLOB issue only appeared at scale',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-lg p-4">
              <span className="text-[12px] font-mono text-red-600 font-medium min-w-[20px]">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[14px] text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        {/* Author bio */}
        <div className="border border-gray-200 rounded-xl p-6 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-[14px] font-medium flex-shrink-0">YJ</div>
          <div>
            <div className="text-[14px] font-medium text-gray-900 mb-1">Yosef Jeffri Silvanus Nahak</div>
            <div className="text-[12px] text-red-600 mb-2">Senior Database Engineer · Stacknesia</div>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              4+ years managing polyglot database environments across finance, banking, telco, and logistics. Specializes in PostgreSQL HA, large-scale migrations, and multi-cloud database infrastructure.
            </p>
          </div>
        </div>

      </article>

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

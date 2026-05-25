import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-28 pb-16 px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-6">
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
          <span className="text-[11px] text-red-800 font-medium">Get in touch</span>
        </div>
        <h1 className="text-4xl font-medium text-gray-900 leading-tight mb-4">
          Let's talk<br />
          <span className="text-red-600">databases.</span>
        </h1>
        <p className="text-[15px] text-gray-500 leading-relaxed mb-12 max-w-lg">
          Whether you have a question, want to collaborate, or just want to say hi — we'd love to hear from you.
        </p>

        <div className="grid grid-cols-2 gap-12">

          {/* Contact form */}
          <div>
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-[12px] font-medium text-gray-700 mb-1.5 block">Name</label>
                <input type="text" placeholder="Your name" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[13px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-300"/>
              </div>
              <div>
                <label className="text-[12px] font-medium text-gray-700 mb-1.5 block">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[13px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-300"/>
              </div>
              <div>
                <label className="text-[12px] font-medium text-gray-700 mb-1.5 block">Message</label>
                <textarea rows={5} placeholder="What's on your mind?" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[13px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-300 resize-none"/>
              </div>
              <button className="bg-red-600 text-white text-[13px] font-medium px-6 py-2.5 rounded-lg hover:bg-red-700 text-left">
                Send message →
              </button>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-4">Contact</div>
              <div className="flex flex-col gap-3">
                <div>
                  <div className="text-[11px] text-gray-400 mb-0.5">Email</div>
                  <div className="text-[13px] font-medium text-gray-900">hello@stacknesia.com</div>
                </div>
                <div>
                  <div className="text-[11px] text-gray-400 mb-0.5">LinkedIn</div>
                  <div className="text-[13px] font-medium text-gray-900">linkedin.com/company/stacknesia</div>
                </div>
                <div>
                  <div className="text-[11px] text-gray-400 mb-0.5">GitHub</div>
                  <div className="text-[13px] font-medium text-gray-900">github.com/stacknesia</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-4">Based in</div>
              <div className="text-[13px] text-gray-900 font-medium">Jakarta, Indonesia 🌏</div>
              <div className="text-[12px] text-gray-500 mt-1">Available for remote work worldwide</div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="text-[13px] font-medium text-gray-900 mb-2">Response time</div>
              <div className="text-[12px] text-gray-500 leading-relaxed">We typically respond within 1-2 business days. For urgent database questions, feel free to reach out on LinkedIn directly.</div>
            </div>
          </div>

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
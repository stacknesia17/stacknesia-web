export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 flex items-center justify-between h-14 fixed top-0 z-50">
      
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-red-600 rounded-md flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <polygon points="12,2 22,7 12,12 2,7" fill="white" fillOpacity="0.9"/>
            <polygon points="22,7 22,14 12,19 12,12" fill="white" fillOpacity="0.6"/>
            <polygon points="2,7 2,14 12,19 12,12" fill="white" fillOpacity="0.8"/>
          </svg>
        </div>
        <span className="text-[15px] font-medium text-gray-900">Stacknesia</span>
      </div>

      <div className="flex items-center gap-6">
        <a href="/" className="text-[13px] text-gray-500 hover:text-gray-900">Home</a>
        <a href="/about" className="text-[13px] text-gray-500 hover:text-gray-900">About</a>
        <a href="/blog" className="text-[13px] text-gray-500 hover:text-gray-900">Blog</a>
        <a href="/resources" className="text-[13px] text-gray-500 hover:text-gray-900">Resources</a>
      </div>

      <a href="/contact" className="text-[13px] font-medium bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
        Get in touch
      </a>

    </nav>
  )
}
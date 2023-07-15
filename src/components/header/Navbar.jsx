import viteLogo from '/vite.svg'

export default function Navbar() {
  return (
    <nav className="bg-slate-400">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={viteLogo} alt="Logo" className="h-16 w-16 object-contain py-2" />
          </div>
          <div className="flex">
            <a href="#" className="text-slate-50 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            <a href="#" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
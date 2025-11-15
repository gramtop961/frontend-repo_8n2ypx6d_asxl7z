import { Search, Bell, User, Menu } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="h-9 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 flex items-center px-3 gap-2 text-[11px]">
      <button className="md:hidden p-1 hover:bg-gray-100 rounded">
        <Menu className="h-4 w-4 text-gray-600" />
      </button>
      <div className="relative flex-1 max-w-sm">
        <Search className="h-3.5 w-3.5 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search accounts, invoices..."
          className="w-full pl-7 pr-2 py-1.5 text-[11px] bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>
      <button className="p-1 hover:bg-gray-100 rounded">
        <Bell className="h-4 w-4 text-gray-600" />
      </button>
      <div className="flex items-center gap-2 pl-2 ml-2 border-l">
        <User className="h-4 w-4 text-gray-600" />
        <span className="text-gray-700">Alex</span>
      </div>
    </header>
  )
}

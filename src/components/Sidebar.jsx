import { Home, Calculator, Receipt, Users, Settings, BarChart3, Wallet } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Overview' },
  { icon: Calculator, label: 'Ledger' },
  { icon: Receipt, label: 'Invoices' },
  { icon: Wallet, label: 'Payments' },
  { icon: Users, label: 'Clients' },
  { icon: BarChart3, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside className="h-screen sticky top-0 border-r bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 w-44">
      <div className="h-9 flex items-center px-3 border-b">
        <span className="text-[11px] tracking-wide font-semibold text-gray-700">ACCOUNTS</span>
      </div>
      <nav className="py-1 text-[11px]">
        {navItems.map(({ icon: Icon, label }) => (
          <button key={label} className="w-full flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50">
            <Icon className="h-3.5 w-3.5" />
            <span className="truncate">{label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto p-3 text-[10px] text-gray-400">v1.0</div>
    </aside>
  )
}

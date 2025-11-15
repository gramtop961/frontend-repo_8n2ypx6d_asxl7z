import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import StatCard from './components/StatCard'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-[12px]">
      <div className="grid grid-cols-[11rem_1fr]">
        <Sidebar />
        <div className="min-h-screen flex flex-col">
          <Topbar />

          <main className="p-3 space-y-3">
            <section className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <StatCard label="Revenue (MTD)" value="$48,920" change="+4.3%" />
              <StatCard label="Outstanding" value="$12,740" change="-1.1%" />
              <StatCard label="Invoices" value="128" change="+9" />
              <StatCard label="Expenses" value="$7,803" change="+2.5%" />
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-2">
              <div className="border rounded bg-white p-0.5">
                <div className="flex items-center justify-between px-2 py-1.5 border-b">
                  <h3 className="text-[11px] font-semibold text-gray-700">Recent Invoices</h3>
                  <button className="text-[10px] text-blue-600 hover:underline">View all</button>
                </div>
                <table className="w-full text-[11px]">
                  <thead>
                    <tr className="text-gray-500 text-left border-b">
                      <th className="px-2 py-1 font-medium">No.</th>
                      <th className="px-2 py-1 font-medium">Client</th>
                      <th className="px-2 py-1 font-medium">Amount</th>
                      <th className="px-2 py-1 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { no: 'INV-1024', client: 'Acme Ltd', amount: '$1,240', status: 'Paid' },
                      { no: 'INV-1025', client: 'Globex', amount: '$980', status: 'Due' },
                      { no: 'INV-1026', client: 'Soylent', amount: '$2,310', status: 'Overdue' },
                      { no: 'INV-1027', client: 'Initech', amount: '$560', status: 'Paid' },
                    ].map((row) => (
                      <tr key={row.no} className="border-b last:border-0">
                        <td className="px-2 py-1">{row.no}</td>
                        <td className="px-2 py-1">{row.client}</td>
                        <td className="px-2 py-1">{row.amount}</td>
                        <td className="px-2 py-1">
                          <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                            row.status === 'Paid'
                              ? 'bg-emerald-50 text-emerald-700'
                              : row.status === 'Due'
                              ? 'bg-amber-50 text-amber-700'
                              : 'bg-red-50 text-red-700'
                          }`}>{row.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border rounded bg-white p-0.5">
                <div className="flex items-center justify-between px-2 py-1.5 border-b">
                  <h3 className="text-[11px] font-semibold text-gray-700">Expense Breakdown</h3>
                  <button className="text-[10px] text-blue-600 hover:underline">Export</button>
                </div>
                <ul className="divide-y text-[11px]">
                  {[
                    { cat: 'Payroll', amt: '$4,800' },
                    { cat: 'Software', amt: '$1,120' },
                    { cat: 'Office', amt: '$760' },
                    { cat: 'Travel', amt: '$1,123' },
                  ].map((i) => (
                    <li key={i.cat} className="flex items-center justify-between px-2 py-1.5">
                      <span className="text-gray-600">{i.cat}</span>
                      <span className="font-medium text-gray-800">{i.amt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border rounded bg-white p-0.5">
                <div className="flex items-center justify-between px-2 py-1.5 border-b">
                  <h3 className="text-[11px] font-semibold text-gray-700">Tasks</h3>
                  <button className="text-[10px] text-blue-600 hover:underline">New</button>
                </div>
                <ul className="divide-y text-[11px]">
                  {[
                    'Reconcile bank statement',
                    'Send Q3 invoices',
                    'Review tax obligations',
                    'Follow up with Globex',
                  ].map((t) => (
                    <li key={t} className="px-2 py-1.5 text-gray-700">{t}</li>
                  ))}
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App

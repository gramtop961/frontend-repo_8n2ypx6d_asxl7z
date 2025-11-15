export default function StatCard({ label, value, change }) {
  return (
    <div className="border rounded p-2 bg-white text-[11px]">
      <div className="text-gray-500">{label}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <div className="text-sm font-semibold text-gray-800">{value}</div>
        {change && (
          <span className={`text-[10px] ${change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>{change}</span>
        )}
      </div>
    </div>
  )
}

function SummaryCard ({summary}) {
  return (
    <div className="p-4 border-2 border-[#e3d8f3] rounded-lg">
      <h1 className="text-xl font-bold mb-6">Resumen</h1>
      <p className="text-[#120027] brightness-75">{summary}</p>
    </div>
  )
}

export default SummaryCard
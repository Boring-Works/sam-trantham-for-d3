
const PRIMARY_DATE = new Date('2026-08-06T00:00:00')

function getDaysUntil(date: Date): number {
  const now = new Date()
  const diff = date.getTime() - now.getTime()
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}

export function Countdown() {
  const days = getDaysUntil(PRIMARY_DATE)

  if (days === 0) return null

  return (
    <div className="bg-accent text-white py-2.5 px-6 text-center">
      <p className="text-sm md:text-base font-medium">
        <span className="font-bold">{days} days</span> until the August 6 Primary &mdash; Vote Samantha Trantham, District 3 Commissioner
      </p>
    </div>
  )
}

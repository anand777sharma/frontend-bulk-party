
import { useState, useEffect } from 'react'

export default function DateSelection() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [seatsFilledPercentage, setSeatsFilledPercentage] = useState(0)
  const [dateOptions, setDateOptions] = useState([])
  const [votes, setVotes] = useState({})

  useEffect(() => {
    // Simulate seats being filled over time
    const interval = setInterval(() => {
      setSeatsFilledPercentage(prev => Math.min(prev + 5, 100))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (seatsFilledPercentage >= 80 && dateOptions.length === 0) {
      const newDateOptions = [
        '2023-08-15',
        '2023-08-22',
        '2023-08-29',
        '2023-09-05'
      ]
      setDateOptions(newDateOptions)
      setVotes(Object.fromEntries(newDateOptions.map(date => [date, Math.floor(Math.random() * 50)])))
    }
  }, [seatsFilledPercentage])

  const handleDateClick = (date) => {
    setSelectedDate(new Date(date))
    setVotes(prev => ({
      ...prev,
      [date]: prev[date] + 1
    }))
    setCalendarOpen(false)
  }

  const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0)

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">Event Date</h2>
      {seatsFilledPercentage < 80 ? (
        <p className="mb-4 text-gray-600">Dates will be announced when 80% of seats are filled. Current: {seatsFilledPercentage}%</p>
      ) : (
        <>
          <p className="mb-4 text-gray-600">Select your preferred party date:</p>
          <div className="space-y-4">
            {dateOptions.map((date) => (
              <div key={date} className="flex items-center justify-between">
                <button
                  onClick={() => handleDateClick(date)}
                  className={`px-4 py-2 rounded ${
                    selectedDate?.toISOString().split('T')[0] === date
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  } hover:bg-purple-700 hover:text-white transition-colors`}
                >
                  {date}
                </button>
                <div className="text-gray-600">
                  {votes[date]} votes ({((votes[date] / totalVotes) * 100).toFixed(1)}%)
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}


import { useState } from 'react'
import BookingModal from './BookingModal'



export default function SeatGrid() {
  const [selectedSeats, setSelectedSeats] = useState([])
  const totalSeats = 67
  const [occupiedSeats, setOccupiedSeats] = useState(
    Array.from({ length: 20 }, () => Math.floor(Math.random() * totalSeats) + 1)
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [bookedUsers] = useState(
    Array.from({ length: 20 }, (_, i) => ({
      id: `user-${i + 1}`,
      name: `User ${i + 1}`,
      avatar: `/placeholder.svg?height=50&width=50&text=${i + 1}`
    }))
  )

  const toggleSeat = (seatNumber) => {
    if (occupiedSeats.includes(seatNumber)) return
    setSelectedSeats(prev => 
      prev.includes(seatNumber)
        ? prev.filter(seat => seat !== seatNumber)
        : [...prev, seatNumber]
    )
  }

  const gridSize = Math.ceil(Math.sqrt(totalSeats))

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">Select Your Spots</h2>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-purple-600 h-2.5 rounded-full"
          style={{ width: `${((occupiedSeats.length + selectedSeats.length) / totalSeats) * 100}%` }}
        ></div>
      </div>
      <div className={`grid gap-4 mb-4 `} style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
        {Array.from({ length: totalSeats }, (_, i) => (
          <button
            key={i}
            onClick={() => toggleSeat(i + 1)}
            className={`aspect-square rounded ${
              occupiedSeats.includes(i + 1)
                ? 'bg-gray-400 cursor-not-allowed'
                : selectedSeats.includes(i + 1)
                ? 'bg-purple-600 hover:bg-purple-700'
                : 'bg-gray-200 hover:bg-gray-300'
            } transition-colors`}
          />
        ))}
      </div>
      {/* <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Booked Users</h3>
        <div className="space-y-2">
          {bookedUsers.map((user) => (
            <div key={user.id} className="flex items-center space-x-2">
              <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
              <span>{user.name}</span>
            </div>
          ))}
        </div>
      </div> */}
      <button 
        onClick={() => setIsModalOpen(true)}
        disabled={selectedSeats.length === 0}
        className={`px-4 py-2 rounded ${
          selectedSeats.length === 0
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-purple-600 hover:bg-purple-700 text-white'
        } transition-colors`}
      >
        Book {selectedSeats.length} {selectedSeats.length === 1 ? 'Spot' : 'Spots'}
      </button>
      {isModalOpen && (
        <BookingModal
          selectedSeats={selectedSeats}
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => {
            setOccupiedSeats([...occupiedSeats, ...selectedSeats])
            setSelectedSeats([])
            setIsModalOpen(false)
          }}
        />
      )}
    </div>
  )
}


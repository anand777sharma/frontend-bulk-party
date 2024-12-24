import { useState } from 'react'



export default function SlotBookingStatus() {
  const [clubs, setClubs] = useState([
    { id: '1', name: 'Neon Nights', totalSlots: 200, bookedSlots: 150 },
    { id: '2', name: 'Beats & Vibes', totalSlots: 150, bookedSlots: 100 },
  ])

  const [selectedClub, setSelectedClub] = useState(null)
  const [bookings, setBookings] = useState([
    { id: '1', clubId: '1', userId: '1', userName: 'John Doe' },
    { id: '2', clubId: '1', userId: '2', userName: 'Jane Smith' },
    { id: '3', clubId: '2', userId: '3', userName: 'Alice Johnson' },
  ])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-purple-800">Slot & Booking Status</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Club Status</h3>
        <div className="space-y-4">
          {clubs.map(club => (
            <div key={club.id} className="border-b pb-4">
              <h4 className="font-semibold">{club.name}</h4>
              <p className="text-sm text-gray-600">
                Booked: {club.bookedSlots} / Total: {club.totalSlots}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-purple-600 h-2.5 rounded-full" 
                  style={{ width: `${(club.bookedSlots / club.totalSlots) * 100}%` }}
                ></div>
              </div>
              <button
                onClick={() => setSelectedClub(selectedClub === club.id ? null : club.id)}
                className="mt-2 bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition-colors"
              >
                {selectedClub === club.id ? 'Hide' : 'View'} Bookings
              </button>
              {selectedClub === club.id && (
                <div className="mt-4 space-y-2">
                  {bookings.filter(booking => booking.clubId === club.id).map(booking => (
                    <div key={booking.id} className="text-sm">
                      {booking.userName}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


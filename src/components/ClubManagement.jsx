import { useState } from 'react'

export default function ClubManagement() {
  const [clubs, setClubs] = useState([
    { id: '1', name: 'Neon Nights', location: '123 Party St, Funtown', capacity: 200 },
    { id: '2', name: 'Beats & Vibes', location: '456 Dance Ave, Groovecity', capacity: 150 },
  ])
  const [newClub, setNewClub] = useState({ name: '', location: '', capacity: 0 })

  const handleAddClub = () => {
    setClubs([...clubs, { ...newClub, id: Date.now().toString() }])
    setNewClub({ name: '', location: '', capacity: 0 })
  }

  const handleUpdateClub = (id, updatedClub) => {
    setClubs(clubs.map(club => club.id === id ? { ...club, ...updatedClub } : club))
  }

  const handleDeleteClub = (id) => {
    setClubs(clubs.filter(club => club.id !== id))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-purple-800">Club Management</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add New Club</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Club Name"
            value={newClub.name}
            onChange={(e) => setNewClub({ ...newClub, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Location"
            value={newClub.location}
            onChange={(e) => setNewClub({ ...newClub, location: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Capacity"
            value={newClub.capacity}
            onChange={(e) => setNewClub({ ...newClub, capacity: parseInt(e.target.value) })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleAddClub}
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors"
          >
            Add Club
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Existing Clubs</h3>
        <div className="space-y-4">
          {clubs.map(club => (
            <div key={club.id} className="flex items-center justify-between border-b pb-4">
              <div>
                <h4 className="font-semibold">{club.name}</h4>
                <p className="text-sm text-gray-600">{club.location}</p>
                <p className="text-sm text-gray-600">Capacity: {club.capacity}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleUpdateClub(club.id, { name: prompt('Enter new name', club.name) || club.name })}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClub(club.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


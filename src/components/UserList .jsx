'use client'

import { useState, useEffect } from 'react'


export default function UserList({ clubName }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const mockUsers = [
      { id: '1', name: 'John Doe', email: 'john@example.com', ticketId: 'T001', eventDate: '2023-07-15' },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com', ticketId: 'T002', eventDate: '2023-07-15' },
      { id: '3', name: 'Alice Johnson', email: 'alice@example.com', ticketId: 'T003', eventDate: '2023-07-22' },
    ]
    setUsers(mockUsers)
  }, [])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-purple-800">Ticket Holders for {clubName}</h2>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} >
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.ticketId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.eventDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


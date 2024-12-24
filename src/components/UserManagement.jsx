'use client'

import { useState } from 'react'



export default function UserManagement() {
  const [users, setUsers] = useState([
    { id: '1', name: 'John Doe', email: 'john@example.com', status: 'active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'active' },
  ])

  const toggleUserStatus = (id) => {
    setUsers(users.map(user => 
      user.id === id 
        ? { ...user, status: user.status === 'active' ? 'suspended' : 'active' } 
        : user
    ))
  }

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-purple-800">User Management</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Registered Users</h3>
        <div className="space-y-4">
          {users.map(user => (
            <div key={user.id} className="flex items-center justify-between border-b pb-4">
              <div>
                <h4 className="font-semibold">{user.name}</h4>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className={`text-sm ${user.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>
                  {user.status}
                </p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => toggleUserStatus(user.id)}
                  className={`${
                    user.status === 'active' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
                  } text-white px-3 py-1 rounded transition-colors`}
                >
                  {user.status === 'active' ? 'Suspend' : 'Activate'}
                </button>
                <button
                  onClick={() => removeUser(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


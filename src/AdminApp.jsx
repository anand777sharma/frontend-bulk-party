import { useState } from 'react'
import ClubManagement from './components/ClubManagement'
import UserManagement from './components/UserManagement'
import SlotBookingStatus from './components/SlotBookingStatus'
import QRCodeScanner from './components/QRCodeScanner'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('clubs')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // In a real application, you would validate credentials against a backend
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true)
    } else {
      alert('Invalid credentials')
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold text-purple-800 mb-6 text-center">ClubParty Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 text-gray-800">
      <header className="bg-purple-600 py-4 text-white">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ClubParty Admin</h1>
          <nav className="flex flex-wrap items-center space-x-4">
            <button
              onClick={() => setActiveTab('clubs')}
              className={`${activeTab === 'clubs' ? 'font-bold' : ''} hover:underline`}
            >
              Clubs
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`${activeTab === 'users' ? 'font-bold' : ''} hover:underline`}
            >
              Users
            </button>
            <button
              onClick={() => setActiveTab('slots')}
              className={`${activeTab === 'slots' ? 'font-bold' : ''} hover:underline`}
            >
              Slots & Bookings
            </button>
            <button
              onClick={() => setActiveTab('qr')}
              className={`${activeTab === 'qr' ? 'font-bold' : ''} hover:underline`}
            >
              QR Scanner
            </button>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-purple-100 transition-colors"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'clubs' && <ClubManagement />}
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'slots' && <SlotBookingStatus />}
        {activeTab === 'qr' && <QRCodeScanner />}
      </main>
      <footer className="bg-purple-600 py-4 text-center text-white">
        <p>&copy; 2023 ClubParty Admin. All rights reserved.</p>
      </footer>
    </div>
  )
}


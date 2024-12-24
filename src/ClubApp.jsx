'use client'

import { useState } from 'react'
import UserList from './components/UserList '
// import QRScanner from './components/QRScanner'
import QRCodeScanner from './components/QRCodeScanner'

export default function ClubDashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [activeTab, setActiveTab] = useState('users')
    const [clubName, setClubName] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        // In a real application, you would validate credentials against a backend
        if (clubName && password) {
            setIsLoggedIn(true)
        } else {
            alert('Please enter both club name and password')
        }
    }

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h1 className="text-2xl font-bold text-purple-800 mb-6 text-center">ClubParty Club Login</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="clubName" className="block text-sm font-medium text-gray-700">
                                Club Name
                            </label>
                            <input
                                type="text"
                                id="clubName"
                                value={clubName}
                                onChange={(e) => setClubName(e.target.value)}
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
                    <h1 className="text-2xl font-bold">ClubParty - {clubName}</h1>
                    <nav className="flex flex-wrap items-center space-x-4">
                        <button
                            onClick={() => setActiveTab('users')}
                            className={`${activeTab === 'users' ? 'font-bold' : ''} hover:underline`}
                        >
                            User List
                        </button>
                        <button
                            onClick={() => setActiveTab('scanner')}
                            className={`${activeTab === 'scanner' ? 'font-bold' : ''} hover:underline`}
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
                {activeTab === 'users' && <UserList clubName={clubName} />}
                {activeTab === 'scanner' && <QRCodeScanner clubName={clubName} />}
            </main>
            <footer className="bg-purple-600 py-4 text-center text-white">
                <p>&copy; 2023 ClubParty. All rights reserved.</p>
            </footer>
        </div>
    )
}


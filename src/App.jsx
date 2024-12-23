import { useState } from 'react'
import ProfileSection from './components/ProfileSection'
import SeatGrid from './components/SeatGrid'
import VotingButtons from './components/VotingButtons'
import DateSelection from './components/DateSelection'
import MyTickets from './components/MyTickets'

function App() {
  const [activeTab, setActiveTab] = useState('booking')

  return (
   <>
  <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 text-gray-800">
      <header className="bg-purple-600 py-4 text-white">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ClubParty</h1>
          <nav>
            <button
              onClick={() => setActiveTab('booking')}
              className={`mr-4 ${activeTab === 'booking' ? 'font-bold' : ''}`}
            >
              Book Party
            </button>
            <button
              onClick={() => setActiveTab('tickets')}
              className={activeTab === 'tickets' ? 'font-bold' : ''}
            >
              My Tickets
            </button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'booking' ? (
          <>
            <ProfileSection />
            <SeatGrid />
            <VotingButtons title="Vote for your favorite club" options={['DJ Snake', 'Martin Garrix', 'David Guetta', 'Armin van Buuren']} />
            <DateSelection />
          </>
        ) : (
          <MyTickets />
        )}
      </main>
      <footer className="bg-purple-600 py-4 text-center text-white">
        <p>&copy; 2023 ClubParty. All rights reserved.</p>
      </footer>
    </div>
   </>
  )
}

export default App

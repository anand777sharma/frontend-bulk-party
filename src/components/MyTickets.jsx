import { useState } from 'react'
import { jsPDF } from 'jspdf'


export default function MyTickets() {
  const [tickets] = useState([
    {
      id: 'CLUB001',
      name: 'John Doe',
      clubName: 'Neon Nights',
      clubLocation: '123 Party St, Funtown',
      date: '2023-07-15',
      seatNumber: 42
    },
    {
      id: 'CLUB002',
      name: 'John Doe',
      clubName: 'Beats & Vibes',
      clubLocation: '456 Dance Ave, Groovecity',
      date: '2023-07-22',
      seatNumber: 17
    }
  ])

  const [suggestion, setSuggestion] = useState('')

  const downloadTicket = (ticket) => {
    const doc = new jsPDF()
    doc.text(`Ticket ID: ${ticket.id}`, 10, 10)
    doc.text(`Name: ${ticket.name}`, 10, 20)
    doc.text(`Club: ${ticket.clubName}`, 10, 30)
    doc.text(`Location: ${ticket.clubLocation}`, 10, 40)
    doc.text(`Date: ${ticket.date}`, 10, 50)
    doc.text(`Seat Number: ${ticket.seatNumber}`, 10, 60)
    doc.save(`ticket_${ticket.id}.pdf`)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">My Tickets</h2>
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-purple-700">{ticket.clubName}</h3>
              <p className="text-gray-600">{ticket.clubLocation}</p>
              <p className="text-gray-600">Date: {ticket.date}</p>
              <p className="text-gray-600">Ticket ID: {ticket.id}</p>
              <p className="text-gray-600">Seat Number: {ticket.seatNumber}</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 flex items-center justify-center mb-2">
                QR Code
              </div>
              <button 
                onClick={() => downloadTicket(ticket)}
                className="text-purple-600 hover:text-purple-800"
              >
                Download Ticket
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2 text-purple-800">Give Suggestion</h3>
        <textarea
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800 mb-2"
          rows={3}
          placeholder="How can we make your experience better?"
        />
        <button
          onClick={() => {
            alert('Thank you for your suggestion!')
            setSuggestion('')
          }}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          Submit Suggestion
        </button>
      </div>
    </div>
  )
}


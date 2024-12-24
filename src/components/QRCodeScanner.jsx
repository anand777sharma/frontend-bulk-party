import { useState } from 'react'

export default function QRCodeScanner() {
  const [scanInput, setScanInput] = useState('')
  const [scanResult, setScanResult] = useState(null)

  const handleScan = () => {
    // In a real application, this would involve actual QR code scanning and validation
    // For this example, we'll simulate a scan result based on the input
    const result = {
      id: 'TICKET123',
      userName: 'John Doe',
      clubName: 'Neon Nights',
      date: '2023-07-15',
      isValid: Math.random() > 0.5, // Randomly determine if the ticket is valid
    }
    setScanResult(result)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-purple-800">QR Code Scanner</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Scan QR Code (simulated)"
            value={scanInput}
            onChange={(e) => setScanInput(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleScan}
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors"
          >
            Scan QR Code
          </button>
        </div>
        {scanResult && (
          <div className="mt-6 p-4 border rounded">
            <h3 className="text-lg font-semibold mb-2">Scan Result</h3>
            <p>Ticket ID: {scanResult.id}</p>
            <p>Ticket ID: {scanResult.id}</p>
            <p>User: {scanResult.userName}</p>
            <p>Club: {scanResult.clubName}</p>
            <p>Date: {scanResult.date}</p>
            <p className={scanResult.isValid ? 'text-green-600' : 'text-red-600'}>
              Status: {scanResult.isValid ? 'Valid' : 'Invalid'}
            </p>
            <button
              onClick={() => setScanResult(null)}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
            >
              Clear Result
            </button>
          </div>
        )}
      </div>
    </div>
  )
}


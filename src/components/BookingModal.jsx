
  export default function BookingModal({ selectedSeats, onClose, onConfirm }) {
    const totalPrice = selectedSeats.length * 50 // Assuming each seat costs $50
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Booking Summary</h2>
          <div className="mb-4">
            <p>Selected Spots: {selectedSeats.join(', ')}</p>
            <p>Number of Spots: {selectedSeats.length}</p>
            <p>Price per Spot: $50</p>
            <p className="font-bold">Total Price: ${totalPrice}</p>
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  
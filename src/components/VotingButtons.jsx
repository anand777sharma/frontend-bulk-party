import { useState } from 'react'



export default function VotingButtons({ title, options }) {
  const [votes, setVotes] = useState(
    Object.fromEntries(options.map(option => [option, Math.floor(Math.random() * 50)]))
  )

  const handleVote = (option) => {
    setVotes(prev => ({
      ...prev,
      [option]: prev[option] + 1
    }))
  }

  const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0)

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">{title}</h2>
      <div className="space-y-4">
        {options.map((option) => (
          <div key={option} className="flex items-center justify-between">
            <button
              onClick={() => handleVote(option)}
              className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              {option}
            </button>
            <div className="text-gray-600">
              {votes[option]} votes ({((votes[option] / totalVotes) * 100).toFixed(1)}%)
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


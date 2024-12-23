import { useState } from 'react'

export default function ProfileSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('John Doe')
  const [bio, setBio] = useState('Party enthusiast and dance floor king')
  const [avatar, setAvatar] = useState('https://i.pinimg.com/originals/7a/c8/4d/7ac84d2075ab95914dc2162e20fe7a3a.jpg')
  const [college, setCollege] = useState('University of Party')
  const [gender, setGender] = useState('Male')

  const handleSave = () => {
    setIsOpen(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
      <div className="w-32 h-32 mx-auto mb-4 border-4 border-purple-600 rounded-full overflow-hidden">
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      </div>
      <h1 className="text-3xl font-bold mb-2 text-purple-800">{name}</h1>
      <p className="text-gray-600 mb-2">{bio}</p>
      <p className="text-gray-600 mb-2">College: {college}</p>
      <p className="text-gray-600 mb-4">Gender: {gender}</p>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
      >
        Edit Profile
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Edit Profile</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bio" className="block text-sm font-medium mb-1 text-gray-700">
                Bio
              </label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800"
                rows={3}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="avatar" className="block text-sm font-medium mb-1 text-gray-700">
                Avatar URL
              </label>
              <input
                type="text"
                id="avatar"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="college" className="block text-sm font-medium mb-1 text-gray-700">
                College
              </label>
              <input
                type="text"
                id="college"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-medium mb-1 text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


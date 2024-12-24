import { useState } from 'react'
import AuthForm from '../components/AuthForm'
import { Link } from 'react-router-dom'


export default function SignupPage() {
  const [message, setMessage] = useState('')

  const handleSignup = async (email, password, username) => {
    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username }),
      })
      const data = await response.json()
      if (response.ok) {
        setMessage('Signup successful! Please log in.')
      } else {
        setMessage(data.message || 'Signup failed. Please try again.')
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for ClubParty</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthForm onSubmit={handleSignup} type="signup" />
          {message && (
            <p className="mt-4 text-center text-sm text-gray-600">
              {message}
            </p>
          )}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-purple-600 hover:text-purple-500">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}


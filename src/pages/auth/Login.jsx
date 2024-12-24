import { useState } from 'react'
import AuthForm from '../components/AuthForm'
import { Link, useNavigate } from 'react-router-dom'


export default function LoginPage() {
    const [message, setMessage] = useState('')
    const navigate = useNavigate();

    const handleLogin = async (email, password) => {
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })
            const data = await response.json()
            if (response.ok) {
                // Store the token in localStorage or a secure cookie
                localStorage.setItem('token', data.token)
                navigate('/') // Redirect to home page after successful login
            } else {
                setMessage(data.message || 'Login failed. Please try again.')
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to ClubParty</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <AuthForm onSubmit={handleLogin} type="login" />
                    {message && (
                        <p className="mt-4 text-center text-sm text-gray-600">
                            {message}
                        </p>
                    )}
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">
                            Sign up
                        </Link>
                    </p>
                    <div className="text-sm mt-4">
                        <Link to="/forgot-password" className="font-medium text-purple-600 hover:text-purple-500">
                            Forgot your password?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


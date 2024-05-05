"use client"


import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next';





  export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usertype, setUsertype] = useState('user');
    const [error, setError] = useState(null);
  
    const router = useRouter();
  
    const handleLogin = async (e) => {
        e.preventDefault();

        // Simulate checking username, password, and usertype
        if (username === 'Nayeem' && password === 'password') {
            setCookie('token', 'admin_token_here', { path: '/' });
            setCookie('usertype', 'admin', { path: '/' });
            router.push('/admin'); // Redirect admin to the admin dashboard
        } else if (username === 'NayeemIslam' && password === 'password') {
            setCookie('token', 'user_token_here', { path: '/' });
            setCookie('usertype', 'user', { path: '/' });
            router.push('/user'); // Redirect standard user to the user dashboard
        } else {
            setError('Invalid username or password');
        }
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Login to Puzzle-Panda</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
              <Link href="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Need an account? Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
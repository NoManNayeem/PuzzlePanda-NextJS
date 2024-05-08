"use client"


import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next';
import Header from '../homepageComponents/header';
import Footer from '../homepageComponents/footer';
import { loginURL } from '../BackendServer/API';
import axios from 'axios';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // Send a POST request to the login URL with username and password
      const response = await axios.post(loginURL, {
        username: username,
        password: password
      });

      if (response.status === 200) {
        // Destructure the data from response
        const { refresh, access, user_type } = response.data;
    
        // Set cookies for tokens and user type
        setCookie('refreshToken', refresh, { path: '/' });
        setCookie('token', access, { path: '/' });
        setCookie('usertype', user_type, { path: '/' });
    
        // Redirect based on user type
        if (user_type === 'Admin') {
          router.push('/admin');
        } else if (user_type === 'User') {
          router.push('/user');
        } else {
          throw new Error('Unhandled user type');
        }
      } else {
        // Handle non-200 responses
        throw new Error('Login failed with status: ' + response.status);
      }
    } catch (error) {
      // Handle errors, such as network issues or invalid credentials
      setError('Invalid username or password');
      console.error('Login error:', error);
    }
  };


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
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
      <Footer />
    </div>
  );
}

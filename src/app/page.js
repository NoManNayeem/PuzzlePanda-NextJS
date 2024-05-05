'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from './homepageComponents/header';
import Footer from './homepageComponents/footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 px-4 md:px-20 text-center my-2">
        <h2 className="text-xl md:text-2xl font-bold text-gray-700">Welcome!</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 animate-pulse">Puzzle-Panda!</h1>
        <p className="mt-3 text-lg md:text-2xl">Train your Brain!</p>
        <div className="mt-6 text-base md:text-xl">
          <Link href="/login" className="px-6 py-3 leading-normal bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Login
          </Link>
          <Link href="/register" className="ml-4 px-6 py-3 leading-normal bg-green-500 text-white rounded-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Register
          </Link>
        </div>
        {/* Responsive Cards Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
          <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-4 rounded-lg shadow-lg text-white transition duration-500 ease-in-out hover:scale-105">
            <h3 className="text-2xl font-bold">Total Players</h3>
            <p className="text-5xl font-bold">1,234</p>
          </div>
          <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-4 rounded-lg shadow-lg text-white transition duration-500 ease-in-out hover:scale-105">
            <h3 className="text-2xl font-bold">Total Winners</h3>
            <p className="text-5xl font-bold">120</p>
          </div>
          <div className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 p-4 rounded-lg shadow-lg text-white transition duration-500 ease-in-out hover:scale-105">
            <h3 className="text-2xl font-bold">Active Players</h3>
            <p className="text-5xl font-bold">456</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

'use client'


import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  // State to manage loading
  const [loading, setLoading] = useState(true);

  // useEffect to handle the loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 3000 ms = 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Spinner centered in the screen
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Main content when not loading
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white w-full">
        <div className="max-w-5xl mx-auto px-4 py-5 flex justify-between items-center">
          <h1 className="text-lg font-bold">
            <Link href="/">
              Puzzle-Panda
            </Link>
          </h1>
          <nav>
            <Link href="/about" className="px-3 hover:underline">About</Link>
            <Link href="/contact" className="px-3 hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h2 className="text-2xl font-bold">Welcome to</h2>
        <h1 className="text-6xl font-bold">
          <a className="text-blue-600">Puzzle-Panda!</a>
        </h1>
        <p className="mt-3 text-2xl">
          Train your Brain!
        </p>
        <div className="mt-6 text-xl">
          <Link href="/login" className="px-6 py-3 leading-normal bg-blue-500 text-white rounded-md hover:bg-blue-700">Login</Link>
          <Link href="/register" className="ml-4 px-6 py-3 leading-normal bg-green-500 text-white rounded-md hover:bg-green-700">Register</Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white w-full h-24 border-t border-gray-200 flex items-center justify-center">
        <div>Developed by 
          <a
            className="mx-2 text-amber-300"
            href="https://github.com/nomannayeem/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nayeem Islam
          </a>
        </div>
      </footer>
    </div>
  );
}

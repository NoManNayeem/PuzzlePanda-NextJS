'use client'

// Header component
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white w-full shadow-md">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold flex items-center">
          <i className="fas fa-puzzle-piece mr-2"></i> {/* Puzzle Icon */}
          <Link href="/">
            Puzzle-Panda
          </Link>
        </h1>
        <nav className="text-sm md:text-base flex items-center">
          <Link href="/about" className="px-2 md:px-3 hover:underline flex items-center">
            <i className="far fa-question-circle mr-1"></i> {/* Info Icon */}
            About
          </Link>
          <Link href="/contact" className="px-2 md:px-3 hover:underline flex items-center">
            <i className="far fa-envelope mr-1"></i> {/* Envelope Icon */}
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

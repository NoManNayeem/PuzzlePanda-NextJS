'use client'

// Header component
import Link from 'next/link';
import { FaPuzzlePiece, FaFantasyFlightGames, FaEnvelope, FaNewspaper,FaInfo } from 'react-icons/fa';




export default function Header() {
  return (
    <header className="bg-gray-800 text-white w-full shadow-md">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold flex items-center">
          <FaPuzzlePiece className="text-yellow-400 text-xl md:text-2xl mr-2" />
          <Link href="/" className="hover:text-gray-300">
            Puzzle-Panda
          </Link>
        </h1>
        <nav className="text-sm md:text-base flex items-center space-x-4">
          <NavLink href="/try-now" icon={<FaFantasyFlightGames className="text-blue-400" />}>Try Now</NavLink>
          <NavLink href="/about" icon={<FaInfo className="text-red-400" />}>About</NavLink>
          <NavLink href="/contact" icon={<FaEnvelope className="text-green-400" />}>Contact</NavLink>
          <NavLink href="/blogs" icon={<FaNewspaper className="text-purple-400" />}>Blogs</NavLink>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, icon, children }) {
  return (
    <Link href={href} className="hover:text-gray-300 flex items-center">
        {icon}
        {children}
    </Link>
  );
}
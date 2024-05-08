'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPuzzlePiece, FaFantasyFlightGames, FaEnvelope, FaNewspaper, FaInfo, FaBars, FaTimes } from 'react-icons/fa';
import NavLink from './NavLink'; // Assume NavLink is now in its own file

const navItems = [
  { href: '/try-now', icon: FaFantasyFlightGames, label: 'Try Now', color: 'text-blue-400' },
  { href: '/about', icon: FaInfo, label: 'About', color: 'text-red-400' },
  { href: '/contact', icon: FaEnvelope, label: 'Contact', color: 'text-green-400' },
  { href: '/blogs', icon: FaNewspaper, label: 'Blogs', color: 'text-purple-400' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-gray-800 text-white w-full shadow-md">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold flex items-center">
          <FaPuzzlePiece className="text-yellow-400 text-xl md:text-2xl mr-2" />
          <Link href="/" className="hover:text-gray-300">Puzzle-Panda</Link>
        </h1>
        <button aria-label="Toggle Menu" onClick={toggleMenu} className="text-white md:hidden">
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeMenu} aria-modal="true"></div>
        )}
        <nav className={`fixed top-0 right-0 h-full w-3/4 bg-gray-900 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-20`}>
          <button aria-label="Close Menu" onClick={closeMenu} className="absolute top-4 right-4 text-white text-2xl">
            <FaTimes />
          </button>
          <div className="flex flex-col items-center space-y-1 mt-24">
            {navItems.map(item => (
              <React.Fragment key={item.label}>
                <NavLink href={item.href} icon={React.createElement(item.icon, { className: item.color })} closeMenu={closeMenu}>
                  {item.label}
                </NavLink>
                <div className="w-full border-b border-gray-700"></div>
              </React.Fragment>
            ))}
          </div>
        </nav>
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map(item => (
            <NavLink key={item.label} href={item.href} icon={React.createElement(item.icon, { className: item.color })}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

'use client'


import Link from 'next/link';

function NavLink({ href, icon, children, closeMenu }) {
  return (
    <Link href={href} className="hover:text-gray-300 hover:scale-110 transition duration-300 flex items-center text-white justify-center text-xl py-2" onClick={closeMenu}>
      {icon}
      <span className="ml-2">{children}</span>
    </Link>
  );
}

export default NavLink;

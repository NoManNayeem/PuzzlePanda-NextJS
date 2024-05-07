import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import Link from 'next/link';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white w-full py-6 border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm md:text-base">
            Developed by <Link
              className="text-amber-300 hover:text-yellow-400"
              href="https://github.com/nomannayeem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nayeem Islam
            </Link>
          </p>
        </div>
        <div className="flex items-center space-x-4 md:ml-auto">
          <SocialLink href="https://github.com/nomannayeem/" icon={<FaGithub />} />
          <SocialLink href="https://bd.linkedin.com/in/nayeemislam60053" icon={<FaLinkedin />} />
          <SocialLink href="https://medium.com/@nomannayeem/" icon={<FaMedium />} />
        </div>
      </div>
      <div className="mt-4 text-xs md:text-sm text-center">
        &copy; {currentYear} Puzzle-Panda. All rights reserved.
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-amber-300 hover:text-yellow-400"
    >
      {icon}
    </Link>
  );
}

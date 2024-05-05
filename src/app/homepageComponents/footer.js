'use client'

// Footer component
export default function Footer() {
    return (
      <footer className="bg-black text-white w-full h-24 border-t border-gray-200 flex items-center justify-center text-sm md:text-base">
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
    );
  }
  
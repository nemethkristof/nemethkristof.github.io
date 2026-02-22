import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // background when scrolled: translucent depending on theme
  const bgStyle = scrolled
    ? { backgroundColor: dark ? 'rgba(59,55,43,0.68)' : 'rgba(255,255,255,0.72)' }
    : { backgroundColor: 'transparent' };

  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2" style={{ top: '14px', width: '100%', pointerEvents: 'auto', zIndex: 40 }}>
      <div
        className={`mx-auto flex items-center justify-between px-4 py-2 rounded-2xl backdrop-blur-sm transition-all duration-200 shadow-sm`} 
        style={{ width: '80vw', ...bgStyle }}
      >
        <div className="flex-1 text-sm font-semibold text-current opacity-95">My Portfolio</div>

        <ul className="flex-1 flex justify-center space-x-6 text-sm">
          <li>
            <Link to="hero" smooth={true} duration={500} className="hover:opacity-80 cursor-pointer">
              Hero
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={500} className="hover:opacity-80 cursor-pointer">
              Education
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500} className="hover:opacity-80 cursor-pointer">
              Work
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="hover:opacity-80 cursor-pointer">
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="hover:opacity-80 cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setDark((s) => !s)}
            aria-label="Toggle theme"
            className="p-2 rounded-md hover:bg-black/5 active:scale-95"
            title="Toggle theme"
            style={{ background: 'transparent' }}
          >
            {dark ? (
              // sun icon for light mode (when currently dark)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3.22l.61 1.24 1.37.2-1 1 .24 1.36L10 6.9l-1.22.62.24-1.36-1-1 1.37-.2L10 3.22zM4.22 7.5L5.5 8.11l.2 1.37-1 1 .62-1.22L4.22 10 3 8.78l1-1-.2-1.37L4.22 7.5zM10 13.1l1.22-.62-.24 1.36 1 1-1.37.2L10 16.78l-.61-1.24-1.37-.2 1-1-.24-1.36L10 13.1zM15.78 7.5l-1.28.61-.2 1.37 1 1-.62-1.22L16.78 10 18 8.78l-1-1 .2-1.37L15.78 7.5z" />
              </svg>
            ) : (
              // moon icon for dark mode (when currently light)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 116.707 2.707 7 7 0 1017.293 13.293z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
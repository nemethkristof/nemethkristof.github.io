import React, { useState, useRef, useEffect } from 'react';

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', onClick);
    return () => document.removeEventListener('pointerdown', onClick);
  }, [open]);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-20 w-[90%] max-w-4xl">
      <div className="glass flex items-center justify-between px-4 py-2 rounded-xl shadow-md">
        <div className="text-sm font-semibold">Resume</div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-3 items-center">
          {links.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-white/80 hover:text-white px-3 py-1 rounded-md transition"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
            className="p-2 rounded-md bg-white/6 border border-white/6"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {open && (
        <div className="fixed inset-0 z-30 flex items-start justify-center pt-24 px-6">
          <div ref={menuRef} className="glass w-full max-w-sm rounded-xl p-4 space-y-3">
            {links.map(l => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block text-lg text-white/90 py-2 rounded-md hover:bg-white/4 transition"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

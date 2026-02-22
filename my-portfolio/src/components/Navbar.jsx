import React from 'react';

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-20 w-[90%] max-w-4xl">
      <div className="glass flex items-center justify-between px-4 py-2 rounded-xl shadow-md">
        <div className="text-sm font-semibold">Resume</div>
        <div className="flex gap-3 items-center">
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
      </div>
    </nav>
  );
}

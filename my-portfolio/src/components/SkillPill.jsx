import React from 'react';

export default function SkillPill({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/6 border border-white/6 mr-2 mb-2">{children}</span>
  );
}

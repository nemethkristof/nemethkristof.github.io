import React from 'react';

export default function ResumeItem({ title, subtitle, date, bullets = [] }) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline justify-between">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-sm text-white/70">{date}</div>
      </div>
      <div className="text-sm text-white/80 mb-2">{subtitle}</div>
      <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

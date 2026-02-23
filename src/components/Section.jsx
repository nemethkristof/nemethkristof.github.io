import React from 'react';

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="glass rounded-xl p-6">{children}</div>
      </div>
    </section>
  );
}

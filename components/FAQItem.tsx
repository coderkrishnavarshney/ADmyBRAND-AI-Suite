'use client';
import React, { useState } from 'react';

export const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button onClick={() => setOpen(!open)} className="flex justify-between w-full text-left">
        <span>{q}</span>
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-2 text-gray-600 dark:text-gray-400">{a}</p>}
    </div>
  );
};

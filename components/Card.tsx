import React from 'react';

export const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={['rounded-xl shadow-lg p-6 bg-white/60 backdrop-blur-xs dark:bg-gray-800/60', className].join(' ')}>
    {children}
  </div>
);

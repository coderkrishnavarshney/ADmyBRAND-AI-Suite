'use client';
import React, { useEffect } from 'react';

export const Modal = ({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-8 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">✕</button>
        {children}
      </div>
    </div>
  );
};

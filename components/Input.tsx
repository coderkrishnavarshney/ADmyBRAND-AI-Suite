import React from 'react';

export const Input = ({ label, register, required, type = 'text', placeholder = '' }: { label: string; register: any; required?: boolean; type?: string; placeholder?: string }) => (
  <div className="flex flex-col space-y-1">
    <label className="text-sm font-medium">{label}</label>
    <input
      {...register(label.toLowerCase(), { required })}
      type={type}
      placeholder={placeholder}
      className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xs"
    />
  </div>
);

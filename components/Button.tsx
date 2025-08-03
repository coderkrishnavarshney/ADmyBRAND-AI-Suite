'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import React from 'react';

type Props = HTMLMotionProps<'button'> & {
  variant?: 'primary' | 'secondary';
};

export const Button = ({ variant = 'primary', className = '', ...props }: Props) => {
  const base = 'px-6 py-3 rounded-md font-semibold transition-colors';
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-white/20 backdrop-blur-xs text-white border border-white/30 hover:bg-white/10'
  };
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={[base, variants[variant], className].join(' ')}
      {...props}
    />
  );
};

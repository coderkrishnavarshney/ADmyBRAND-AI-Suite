'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const TestimonialCard = ({ quote, author, role, avatar }: { quote: string; author: string; role: string; avatar: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-6 rounded-lg bg-white/60 backdrop-blur-xs dark:bg-gray-800/60 shadow"
  >
    <p className="italic mb-4">"{quote}"</p>
    <div className="flex items-center space-x-3">
      <img src={avatar} alt={author} className="w-10 h-10 rounded-full object-cover" />
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
      </div>
    </div>
  </motion.div>
);

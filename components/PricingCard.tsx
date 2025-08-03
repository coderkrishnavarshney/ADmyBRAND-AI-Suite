'use client';
import { Button } from './Button';
import { motion } from 'framer-motion';
import React from 'react';

export const PricingCard = ({ tier, price, features, highlighted = false }: { tier: string; price: string; features: string[]; highlighted?: boolean }) => (
  <motion.div whileHover={{ scale: 1.02 }} className={`${highlighted ? 'ring-2 ring-primary' : ''} rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg flex flex-col`}>
    <h3 className="text-xl font-semibold mb-2">{tier}</h3>
    <p className="text-4xl font-bold mb-4">{price}</p>
    <ul className="space-y-1 flex-1">
      {features.map(f => <li key={f}>✓ {f}</li>)}
    </ul>
    <Button className="mt-6 w-full">Start now</Button>
  </motion.div>
);

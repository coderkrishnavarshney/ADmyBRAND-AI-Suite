'use client';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

export const Hero = () => (
  <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-6xl font-extrabold mb-6"
    >
      Empower Your Marketing with <span className="text-primary">AI</span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="max-w-xl mb-8 text-lg text-gray-600 dark:text-gray-400"
    >
      ADmyBRAND AI Suite brings cutting‑edge AI tools to streamline campaigns, boost conversions, and grow revenue.
    </motion.p>
    <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
      View Pricing
    </Button>
  </section>
);

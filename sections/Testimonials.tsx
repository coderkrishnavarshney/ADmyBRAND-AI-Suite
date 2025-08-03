'use client';
import { TestimonialCard } from '../components/TestimonialCard';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { quote: 'Our ROAS improved by 45% within weeks!', author: 'Sarah L.', role: 'CMO, GrowFast', avatar: 'https://i.pravatar.cc/100?img=5' },
  { quote: 'The AI Suite automated so many tedious tasks.', author: 'David K.', role: 'Marketing Lead, ScaleUp', avatar: 'https://i.pravatar.cc/100?img=11' },
  { quote: 'Beautiful UI and powerful insights.', author: 'Priya R.', role: 'Founder, StartSmart', avatar: 'https://i.pravatar.cc/100?img=32' }
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex(prev => (prev + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Loved by Marketers</h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <TestimonialCard {...testimonials[index]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

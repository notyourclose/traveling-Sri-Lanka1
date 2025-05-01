import React from 'react';
import { motion } from 'framer-motion';

export const Map: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-2xl bg-white"
        >
          <div className="relative">
            <img
              src="/large-detailed-tourist-map-of-sri-lanka.jpg"
              alt="Detailed tourist map of Sri Lanka"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center space-y-2"
        >
          <h2 className="text-4xl font-bold text-gray-900">Tourist Attractions</h2>
          <p className="text-xl text-gray-600">
            Explore iconic landmarks and hidden gems
          </p>
        </motion.div>
      </div>
    </section>
  );
}; 
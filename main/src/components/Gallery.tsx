import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

const galleryImages = [
  {
    src: '/88.jpg',
    title: 'Misty Mountains',
    description: 'Breathtaking mountain landscapes at sunset'
  },
  {
    src: '/coco.jpg',
    title: 'Colonial Heritage',
    description: 'Historic colonial architecture in Galle'
  },
  {
    src: '/mirissa-beach-sri-lanka-1.jpg',
    title: 'Mirissa Beach',
    description: 'Pristine coastal beauty and turquoise waters'
  },
  {
    src: '/slider1.jpg',
    title: 'Palm Paradise',
    description: 'Iconic coconut palm sunset view'
  }
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <ImageIcon className="w-7 h-7 text-[#03e9f4]" />
            <h2 className="text-2xl font-bold text-gray-800">Photo Gallery</h2>
          </div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Experience the beauty of Sri Lanka through our curated collection
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden shadow-lg h-48"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-sm font-semibold mb-1">{image.title}</h3>
                  <p className="text-xs text-gray-200">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
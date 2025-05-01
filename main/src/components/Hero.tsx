import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from './Button';
export const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const variants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };
  return <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <img src="/cover_page_.png" alt="Sri Lanka landscapes" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Discover the Wonder of Sri Lanka
          </h1>
          <p className="text-xl text-white mb-8">
            Explore pristine beaches, ancient temples, lush tea plantations, and
            exotic wildlife
          </p>
          <Button>Start Your Journey</Button>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-200 shadow-lg rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>;
};
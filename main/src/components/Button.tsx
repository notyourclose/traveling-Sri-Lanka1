import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onClick
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05
      }}
      onClick={onClick}
      className={`relative inline-block px-6 py-3 bg-transparent text-[#03e9f4] text-base uppercase 
      tracking-[4px] overflow-hidden transition-all duration-500 border border-[#03e9f4] 
      hover:bg-[#03e9f4] hover:text-white hover:shadow-[0_0_5px_#03e9f4,0_0_25px_#03e9f4,0_0_50px_#03e9f4,0_0_100px_#03e9f4]
      before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
      before:bg-[#03e9f4] before:transition-transform before:duration-500 before:origin-left
      before:skew-x-[45deg] before:translate-x-[-150%] hover:before:translate-x-[150%] ${className}`}
    >
      {children}
    </motion.button>
  );
};
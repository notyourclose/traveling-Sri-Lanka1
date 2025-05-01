import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from './Button';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#03e9f4] hover:shadow-[0_0_5px_#03e9f4] transition-all duration-300">
          Traveling In Sri Lanka
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'Destinations', 'Experiences', 'Wildlife', 'Contact'].map(item => <a key={item} href="#" className="text-[#03e9f4] hover:shadow-[0_0_5px_#03e9f4] tracking-wider transition-all duration-300">
                {item}
              </a>)}
        </div>
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#03e9f4]">
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4 flex flex-col space-y-4">
          {['Home', 'Destinations', 'Experiences', 'Wildlife', 'Contact'].map(item => <a key={item} href="#" className="text-[#03e9f4] hover:shadow-[0_0_5px_#03e9f4] tracking-wider transition-all duration-300">
                {item}
              </a>)}
        </div>}
    </nav>;
};
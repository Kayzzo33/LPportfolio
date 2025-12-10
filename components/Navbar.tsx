import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-display font-bold tracking-tighter">
          Nexus<span className="text-nexus-primary">Flow</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Products', 'Solutions', 'Enterprise', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nexus-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 glass-panel border-t border-nexus-border p-6 md:hidden flex flex-col space-y-4 animate-in slide-in-from-top-5">
           {['Products', 'Solutions', 'Enterprise', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-lg font-medium text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full py-3 rounded-lg bg-nexus-primary text-white font-bold">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
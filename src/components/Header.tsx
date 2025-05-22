import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Code className="h-8 w-8 text-blue-500 mr-2" />
          <h1 className="text-xl font-bold text-gray-900">Hot Beans Web</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-blue-500 transition-colors">
            About Us
          </a>
          <a href="#team" className="text-gray-700 hover:text-blue-500 transition-colors">
            Our Team
          </a>
          <a href="#jobs" className="text-gray-700 hover:text-blue-500 transition-colors">
            Jobs
          </a>
          <a href="#resources" className="text-gray-700 hover:text-blue-500 transition-colors">
            Resources
          </a>
          <a 
            href="#apply" 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Apply Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#team" 
              className="text-gray-700 hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </a>
            <a 
              href="#jobs" 
              className="text-gray-700 hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Jobs
            </a>
            <a 
              href="#resources" 
              className="text-gray-700 hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </a>
            <a 
              href="#apply" 
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
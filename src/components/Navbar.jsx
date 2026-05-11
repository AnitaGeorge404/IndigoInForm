import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#', hasDropdown: false },
    { name: 'THE PLATFORM', href: '#', hasDropdown: false },
    { name: 'SOLUTIONS', href: '#', hasDropdown: true },
    { name: 'SERVICES', href: '#', hasDropdown: false },
    { name: 'RESOURCES', href: '#', hasDropdown: false },
    { name: 'ABOUT US', href: '#', hasDropdown: true },
    { name: 'CONTACT US', href: '#', hasDropdown: false },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-white py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full border-4 border-primary-navy flex items-center justify-center">
             <div className="w-4 h-4 rounded-full border-2 border-primary-royal"></div>
          </div>
          <span className="text-2xl font-bold text-primary-navy">Indigo</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-gray-800 font-semibold text-sm hover:text-primary-royal transition-colors flex items-center space-x-1">
              <span>{link.name}</span>
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="bg-primary-royal hover:bg-blue-600 text-white font-medium rounded-lg px-6 py-2.5 transition-all transform hover:scale-105">
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-6 flex flex-col space-y-4">
           {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-gray-800 font-medium text-base flex justify-between items-center pb-2 border-b border-gray-50">
              <span>{link.name}</span>
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
          <button className="bg-primary-royal hover:bg-blue-600 text-white font-medium rounded-lg px-6 py-3 w-full mt-4">
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
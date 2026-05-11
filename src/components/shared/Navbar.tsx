import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navLinks } from '../../data/navigation';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <div key={index} className="relative group">
              <Link to={link.href} className="text-gray-800 font-semibold text-sm hover:text-primary-royal transition-colors flex items-center space-x-1 py-4">
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />}
              </Link>
              
              {/* Dropdown Menu */}
              {link.hasDropdown && link.dropdownItems && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {link.dropdownItems.map((item, i) => (
                      <a href={item.href} key={i} className="block px-6 py-3 text-sm text-gray-700 hover:text-primary-royal hover:bg-blue-50 transition-colors font-medium">
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
            <div key={index} className="flex flex-col border-b border-gray-50 pb-2">
              <Link to={link.href} className="text-gray-800 font-medium text-base flex justify-between items-center" onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}>
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
              {link.hasDropdown && link.dropdownItems && (
                <div className="flex flex-col mt-2 pl-4 space-y-2 border-l-2 border-blue-50">
                  {link.dropdownItems.map((item, i) => (
                    <a href={item.href} key={i} className="text-sm text-gray-600 py-1 hover:text-primary-royal" onClick={() => setIsMobileMenuOpen(false)}>
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
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
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  scrollY: number;
}

const Header: React.FC<HeaderProps> = ({ scrollY }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const isScrolled = scrollY > 50;
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#hero" 
          className="text-xl font-bold tracking-tight relative group cursor-pointer"
        >
          <span className="relative z-10 text-slate-900 dark:text-white transition-colors duration-300">
            OA<span className="text-blue-600">.</span>
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks onClick={() => {}} />
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded-md text-slate-900 dark:text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-slate-900 z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-8 text-2xl">
          <NavLinks onClick={toggleMenu} />
          
          <button 
            onClick={() => {
              toggleTheme();
              toggleMenu();
            }}
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center space-x-2"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5 text-slate-700" />
                <span className="text-sm">Dark Mode</span>
              </>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

const NavLinks: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <>
      {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={onClick}
          className="relative text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
        >
          <span>{item}</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
        </a>
      ))}
    </>
  );
};

export default Header;
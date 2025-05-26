import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <a 
              href="#hero" 
              className="text-2xl font-bold tracking-tight"
            >
              Oliveira Alexis<span className="text-blue-500">.</span>
            </a>
            <p className="mt-4 text-slate-400 max-w-md">
              Ingénieur en électricité et informatique industrielle en formation, passionné par les technologies innovantes et les solutions durables.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['À propos', 'Compétences', 'Expérience', 'Projets', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace('à', 'a')}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Lyon, France</li>
              <li>
                <a 
                  href="mailto:alexis.oliveira@example.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  alexis.oliveira@example.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+33123456789"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
            </ul>
            
            <div className="mt-6 flex space-x-4">
              {['linkedin', 'github', 'twitter'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="bg-slate-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300"
                  aria-label={platform}
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${platform}/ffffff`} 
                    alt={platform} 
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Oliveira Alexis. Tous droits réservés.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-slate-800 hover:bg-blue-600 rounded-full transform hover:-translate-y-1 transition-all duration-300"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
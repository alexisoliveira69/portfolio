import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const letters = titleRef.current?.querySelectorAll('.letter');
    
    if (letters) {
      letters.forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.add('animate-in');
        }, 100 * index);
      });
    }
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-orange-500 blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10 mt-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 opacity-0 animate-fade-in">
            Ingénieur en alternance
          </p>
          
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6"
          >
            {`Oliveira Alexis`.split('').map((char, index) => (
              <span 
                key={index} 
                className={`letter inline-block opacity-0 translate-y-8 ${char === ' ' ? 'mr-3' : ''}`}
                style={{
                  transitionProperty: 'all',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDuration: '600ms',
                }}
              >
                {char}
              </span>
            ))}
          </h1>
          
          <div className="h-1.5 w-24 bg-blue-600 rounded mb-6 opacity-0 animate-scale-in"></div>
          
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mb-8 opacity-0 animate-fade-in-delay">
            Passionné par l'ingénierie électrique et industrielle, en 3ème année de GEII en alternance chez JTEKT.
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-delay-2">
            <a 
              href="#about" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              En savoir plus
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-slate-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-500 text-slate-900 dark:text-white font-medium rounded-md transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in-delay-3">
        <a 
          href="#about" 
          className="flex flex-col items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
      
      <style jsx>{`
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s forwards;
        }
        
        .animate-fade-in-delay {
          animation: fadeIn 0.8s 0.4s forwards;
        }
        
        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s 0.6s forwards;
        }
        
        .animate-fade-in-delay-3 {
          animation: fadeIn 0.8s 1s forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.8s 0.3s forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scaleX(0);
            transform-origin: left;
          }
          to { 
            opacity: 1;
            transform: scaleX(1);
            transform-origin: left;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
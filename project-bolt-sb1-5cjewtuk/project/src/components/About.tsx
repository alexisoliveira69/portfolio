import React from 'react';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="À propos" subtitle="Découvrez mon parcours" />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500 relative z-10">
              <img 
                src="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Oliveira Alexis" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform translate-x-4 translate-y-4 -z-0"></div>
          </div>
          
          <div className="space-y-6">
            <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-md text-blue-600 dark:text-blue-400 font-medium">
              Ingénieur en devenir
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Passionné par l'ingénierie électrique et industrielle
            </h3>
            
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                À 21 ans, je suis actuellement en 3ème année de GEII (Génie Électrique et Informatique Industrielle) en alternance chez JTEKT, une entreprise de référence dans le secteur industriel.
              </p>
              <p>
                Mon parcours combine une solide formation académique avec une expérience pratique en entreprise, me permettant de développer des compétences techniques approfondies et une compréhension concrète des enjeux industriels.
              </p>
              <p>
                Je m'intéresse particulièrement aux systèmes automatisés, à l'électronique de puissance et aux solutions innovantes d'optimisation énergétique. Mon objectif est de contribuer à développer des systèmes plus efficaces et durables.
              </p>
            </div>
            
            <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">21</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Ans</div>
              </div>
              <div className="text-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Années d'études</div>
              </div>
              <div className="text-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">GEII</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Formation</div>
              </div>
              <div className="text-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">JTEKT</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Entreprise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
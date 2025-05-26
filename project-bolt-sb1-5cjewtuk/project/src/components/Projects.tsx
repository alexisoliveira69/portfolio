import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'academic' | 'professional' | 'personal';
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'academic' | 'professional' | 'personal'>('all');
  
  const projects: Project[] = [
    {
      title: "Système de supervision SCADA",
      description: "Développement d'une interface de supervision pour le monitoring en temps réel d'une ligne de production automatisée.",
      image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["SCADA", "HMI", "Automatisme", "Siemens"],
      category: "professional"
    },
    {
      title: "Robot suiveur de ligne",
      description: "Conception et programmation d'un robot autonome capable de suivre une ligne et d'éviter des obstacles.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Arduino", "Capteurs", "Programmation C++", "Robotique"],
      category: "academic"
    },
    {
      title: "Système de tri automatisé",
      description: "Développement d'un système automatisé pour le tri de pièces basé sur leur taille et leur matériau.",
      image: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["PLC", "Automation", "Vision industrielle", "Capteurs"],
      category: "academic"
    },
    {
      title: "Optimisation énergétique",
      description: "Projet d'analyse et d'optimisation de la consommation énergétique d'une unité de production.",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Efficacité énergétique", "Analyse de données", "Électrotechnique"],
      category: "professional"
    },
    {
      title: "Domotique DIY",
      description: "Système domotique personnel basé sur Raspberry Pi pour contrôler l'éclairage et le chauffage.",
      image: "https://images.pexels.com/photos/1042140/pexels-photo-1042140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Raspberry Pi", "IoT", "Python", "Domotique"],
      category: "personal"
    },
    {
      title: "Convertisseur DC-DC",
      description: "Conception et réalisation d'un convertisseur DC-DC haute efficacité pour applications embarquées.",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Électronique de puissance", "PCB", "Simulation", "Prototypage"],
      category: "academic"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const categoryLabels = {
    all: 'Tous',
    academic: 'Académiques',
    professional: 'Professionnels',
    personal: 'Personnels'
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <SectionHeading title="Projets" subtitle="Mes réalisations" />
        
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1 bg-slate-200 dark:bg-slate-700 rounded-lg">
            {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
              }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-md mb-2">
                      {project.category === 'academic' ? 'Académique' : 
                       project.category === 'professional' ? 'Professionnel' : 'Personnel'}
                    </span>
                    <div className="flex justify-between items-center">
                      <h4 className="text-white font-medium">{project.title}</h4>
                      <a 
                        href="#" 
                        className="text-white p-1 rounded-full bg-blue-600/50 hover:bg-blue-600 transition-colors duration-300"
                        aria-label="En savoir plus"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-xs font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
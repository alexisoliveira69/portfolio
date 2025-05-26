import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  highlights?: string[];
}

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const experiences: ExperienceItem[] = [
    {
      title: "Apprenti",
      company: "JTEKT Europe",
      period: "2024 - Présent",
      description: [
        "Dans une démarche de diffusion des connaissances, JTEKT souhaite mettre en place une formation spécifique sur le moteur utilisé dans ses systèmes de direction assistée.",
        "En tant qu'apprenti ingénieur chez JTEKT, mon objectif principal est de répondre à un besoin identifié au sein du centre technique, où ce sujet complexe est encore mal maîtrisé par de nombreuses personnes. Il s’agit d’aider un maximum de collaborateurs à élargir leurs connaissances, car le moteur représente un élément clé au sein du système complet de direction assistée.",
        
      ],
      highlights: [
        "Participation à la création d’un module de formation interne sur les moteurs synchrones à aimants permanents (PMSM), utilisé notamment dans les applications EPS (Electric Power Steering)",
        "Analyse des architectures rotor-stator, des topologies d’enroulement (concentré vs distribué), et des phénomènes électromagnétiques (flux, couple, torque ripple…), contrôle moteur",
        "Création de supports pédagogiques (illustrations, schémas, animations MATLAB) pour expliquer les paramètres influençant le couple et le rendement moteur",
        "Modélisation et visualisation du contôle vectoriel sur un moteur synchrone à aimant permanent",
        "Vulgarisation de concepts techniques complexes pour les rendre accessibles à différents profils (techniciens, ingénieurs, formateurs)",
      ]
    },
    {
      title: "Stage Technicien",
      company: "JTEKT Europe ",
      period: "2024 avril-juillet",
      description: [
        "Stage technique focalisé sur l'élaboration d'une commande pour un moteur synchrone.",
        "Développement et implémentation de solutions de contrôle moteur avancées."
      ],
      highlights: [
        "Conception et développement d'une commande pour moteur synchrone sous STM32 (PWM,ADC,TIMER,CORDIC)",
        "Réalisation de tests et optimisation des performances",
        "Documentation technique détaillée du système",
        "Régulation et asservissement sous Matlab Simulink"
      ]
    },
    {
      title: "Projet Universitaire",
      company: "IUT GEII",
      period: "2022 - 2023",
      description: [
        "Développement d'un système de régulation de température intelligent avec communication GSM/4G intégrée.",
        "Création d'une solution domotique permettant le contrôle à distance via SMS et la surveillance de la sécurité (état des portes)."
      ],
      highlights: [
        "Implémentation d'un module GSM/4G pour la communication à distance",
        "Développement d'un système de contrôle par SMS pour la régulation de température",
        "Intégration de capteurs de sécurité pour la surveillance des portes",
        "Conception d'une interface utilisateur pour le monitoring à distance",
        "Documentation complète du système et démonstration des fonctionnalités"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="Expérience" subtitle="Mon parcours professionnel" />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Timeline navigation */}
          <div className="lg:col-span-4">
            <div className="space-y-2">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-start ${
                    activeIndex === index
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800 border-l-4 border-transparent'
                  }`}
                >
                  <div>
                    <h4 className={`font-medium ${
                      activeIndex === index
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-slate-900 dark:text-white'
                    }`}>
                      {exp.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {exp.company}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                      {exp.period}
                    </p>
                  </div>
                  
                  <ChevronRight 
                    className={`ml-auto w-5 h-5 ${
                      activeIndex === index
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-slate-400'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Experience details */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 md:p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {experiences[activeIndex].title}
              </h3>
              
              <div className="flex items-center mt-2 mb-6">
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  {experiences[activeIndex].company}
                </span>
                <span className="mx-2 text-slate-400">•</span>
                <span className="text-slate-600 dark:text-slate-400">
                  {experiences[activeIndex].period}
                </span>
              </div>
              
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                {experiences[activeIndex].description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              
              {experiences[activeIndex].highlights && (
                <div className="mt-6">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                    Points clés:
                  </h4>
                  <ul className="space-y-2">
                    {experiences[activeIndex].highlights?.map((highlight, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 mr-2"></span>
                        <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'software' | 'soft';
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'technical' | 'software' | 'soft'>('all');
  
  const skills: Skill[] = [
    // Technical skills
    { name: 'Électronique', level: 90, category: 'technical' },
    { name: 'Automatisme', level: 85, category: 'technical' },
    { name: 'Électrotechnique', level: 80, category: 'technical' },
    { name: 'Programmation PLC', level: 75, category: 'technical' },
    { name: 'Systèmes embarqués', level: 70, category: 'technical' },
    { name: 'Réseaux industriels', level: 65, category: 'technical' },
    
    // Software skills
    { name: 'Siemens TIA Portal', level: 85, category: 'software' },
    { name: 'AutoCAD Electrical', level: 80, category: 'software' },
    { name: 'MATLAB/Simulink', level: 75, category: 'software' },
    { name: 'Python', level: 70, category: 'software' },
    { name: 'C/C++', level: 65, category: 'software' },
    { name: 'MS Office', level: 90, category: 'software' },
    
    // Soft skills
    { name: 'Travail d\'équipe', level: 90, category: 'soft' },
    { name: 'Résolution de problèmes', level: 85, category: 'soft' },
    { name: 'Communication', level: 80, category: 'soft' },
    { name: 'Gestion de projet', level: 75, category: 'soft' },
    { name: 'Adaptabilité', level: 90, category: 'soft' },
    { name: 'Autonomie', level: 85, category: 'soft' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <SectionHeading title="Compétences" subtitle="Ce que je maîtrise" />
        
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1 bg-slate-200 dark:bg-slate-700 rounded-lg">
            {[
              { value: 'all', label: 'Tous' },
              { value: 'technical', label: 'Techniques' },
              { value: 'software', label: 'Logiciels' },
              { value: 'soft', label: 'Soft Skills' }
            ].map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value as any)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.value
                    ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0,
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium text-lg text-slate-900 dark:text-white">
                  {skill.name}
                </h4>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                  style={{ 
                    width: `${skill.level}%`,
                    transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
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

export default Skills;
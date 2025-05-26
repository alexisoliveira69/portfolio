import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center' 
}) => {
  return (
    <div className={`max-w-3xl ${alignment === 'center' ? 'mx-auto text-center' : ''}`}>
      <h2 className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-2">
        {subtitle}
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
        {title}
      </h3>
      <div className={`h-1 w-20 bg-blue-600 mt-4 rounded-full ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;
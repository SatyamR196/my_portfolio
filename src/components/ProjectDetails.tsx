
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface ProjectDetailsProps {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  position: 'left' | 'right';
}

const ProjectDetails = ({ title, subtitle, description, technologies, position }: ProjectDetailsProps) => {
  return (
    <div className={`${position === 'right' ? 'text-left' : 'text-right'}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-cyan-600 font-medium mb-4">({subtitle})</p>
      <p className="text-gray-700 mb-6 text-sm leading-relaxed max-w-md">{description}</p>
      <div className={`flex flex-wrap gap-2 ${position === 'right' ? 'justify-start' : 'justify-end'}`}>
        {technologies.map((tech, index) => (
          <Badge key={index} variant="secondary" className="text-xs bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border border-cyan-200">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;

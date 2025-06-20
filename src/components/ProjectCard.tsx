
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  position?: 'left' | 'right';
}

const ProjectCard = ({ title, subtitle, description, image, technologies, position = 'left' }: ProjectCardProps) => {
  return (
    <div className={`transform transition-all duration-300 hover:scale-105 ${position === 'right' ? 'md:translate-x-4' : 'md:-translate-x-4'} hover:translate-x-0`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-l-4 border-l-cyan-600">
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
          <p className="text-sm text-cyan-600 font-medium">({subtitle})</p>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border border-cyan-200">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;

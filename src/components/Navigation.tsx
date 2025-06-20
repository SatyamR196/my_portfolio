import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ConfettiButton } from "@/components/magicui/confetti";
import { SparklesText } from "@/components/magicui/sparkles-text";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
      <div className="w-full mx-auto px-0.5 md:px-4 pt-2 pb-2 border-b border-blue-300">
        <div className="flex px-4 justify-between items-center">
          <div id="eff" >
            <ConfettiButton className="bg-slate-50 hover:bg-slate-50 cursor-pointer" 
              options={{
                get angle() {
                  return (360 - (Math.random() * 90));
                },
              }}
            >
              <SparklesText sparklesCount={5} className='text-2xl font-medium text-gray-900'>Satyam R </SparklesText>
            </ConfettiButton>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-cyan-600 hover:border-b-2 border-blue-400 font-medium transition-all duration-100"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-cyan-600 hover:border-b-2 border-blue-400 font-medium transition-all duration-100"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-cyan-600 hover:border-b-2 border-blue-400 font-medium transition-all  duration-100"
            >
              About
            </button>
          </div>

          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-cyan-600 hover:bg-cyan-700 text-white"
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import { Button } from '@/components/ui/button';
import { AuroraText } from "@/components/magicui/aurora-text";
import { Meteors } from "@/components/magicui/meteors";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { WordRotate } from "@/components/magicui/word-rotate";

const Hero = () => {
  return (
    <div className='relative overflow-hidden '>
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-50 to-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          <AuroraText className="animate-wiggle">Full Stack Developer
          </AuroraText>
          <WordRotate words={["Software Devlopment", "Web Devlopment"] } className='text-red-400' duration={4000} />
        </h1>
        <Meteors number={20} className='h-0 w-1' />
        

        <TypingAnimation duration={50} as="p" className='font-medium text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto'>I build exceptional digital experiences with modern web technologies. 
          Passionate about creating scalable, user-friendly applications.</TypingAnimation>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-3 text-lg"
            onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Resume/CV
          </Button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;

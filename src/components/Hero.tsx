import React,{useState,useEffect} from 'react';
import { Button } from '@/components/ui/button';
import { AuroraText } from "@/components/magicui/aurora-text";
import { Meteors } from "@/components/magicui/meteors";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { WordRotate } from "@/components/magicui/word-rotate";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
    
      useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  
  return (
    <div className='relative overflow-hidden'
    style={{ 
      transform: `translateY(${scrollY * 0.15}px)`,
      }}
    >
    <div className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: `radial-gradient(circle at 25% 25%, #06b6d4 0%, transparent 50%), 
                          radial-gradient(circle at 75% 75%, #0891b2 0%, transparent 50%)`,
          backgroundSize: '600px 600px',
        }}
    ></div>
    <section className="relative min-h-screen flex flex-col items-center justify-center  px-4">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-10 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.1}px) translateX(${scrollY * -0.05}px)`,
        }}
      />
      <div 
        className="absolute top-1/3 left-10 w-24 h-24 bg-cyan-200 rounded-full opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.15}px) translateX(${scrollY * 0.08}px)`,
        }}
      />
      <div 
        className="absolute bottom-20 right-1/4 w-32 h-32 bg-indigo-100 rounded-full opacity-25"
        style={{
          transform: `translateY(${scrollY * 0.12}px) translateX(${scrollY * -0.06}px)`,
        }}
      />
      <div 
        className="absolute top-1/2 right-1/3 w-16 h-16 bg-sky-200 rounded-full opacity-35"
        style={{
          transform: `translateY(${scrollY * 0.2}px) translateX(${scrollY * 0.1}px)`,
        }}
      />
      <Meteors number={20} className='h-0 w-1' />
      <div className="max-w-4xl mx-auto text-center relative z-9">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          <AuroraText className="animate-wiggle">Full Stack Developer
          </AuroraText>
          <WordRotate words={["Software Devlopment", "Web Devlopment"] } className='text-red-400' duration={4000} />
        </h1>
        
        

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

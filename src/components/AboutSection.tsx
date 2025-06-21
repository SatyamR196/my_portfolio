
import { useState, useMemo, useEffect } from 'react';
import React from "react";
import { Card, CardContent } from '@/components/ui/card';
import { User, Code, Palette, Zap } from 'lucide-react';
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";

const AboutSection = ({ scrollY }: { scrollY: number }) => {
  // const [scrollY, setScrollY] = useState(0);
  
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       setScrollY(window.scrollY);
  //     };
  
  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }, []);

  return (
    <section id="about" className="py-15 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-10 right-10 w-50 h-50 bg-teal-200 rounded-full opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.1}px) translateX(${scrollY * -0.2}px)`,
        }}
      />
      <div 
        className="absolute top-1/3 left-10 w-24 h-24 bg-cyan-200 rounded-full opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.15}px) translateX(${scrollY * 0.08}px)`,
        }}
      />
      <div 
        className="absolute top-5/6 left-120 w-24 h-24 bg-red-400 rounded-full opacity-20"
        style={{
          transform: `translateY(${scrollY * -0.15}px) translateX(${scrollY * -0.08}px)`,
        }}
      />
      <div 
        className="absolute bottom-20 right-1/4 w-32 h-32 bg-pink-300 rounded-full opacity-15"
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
      
      
      <div className="max-w-6xl mx-auto px-4 relative z-9">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg">Get to know me better</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 items-center">
          {/* Left Side - Profile Card */}
          <div className="flex justify-center ">
            <Card className="w-5/6 md:w-4/6 max-w-md overflow-hidden">
              <CardContent className="p-0">
                <div  className="relative">
                  <ScratchToReveal gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]} minScratchPercentage={50}>
                    <img
                      src={`${import.meta.env.BASE_URL}my_pic_short.png`}
                      // src="/my_pic_short.png"
                      alt="Profile"
                      className="w-full aspect-3/4 object-cover absolute z-2 animate-fadeImg1" 
                    />
                    <img
                      src={`${import.meta.env.BASE_URL}formal_img_crop_fit.png`}
                      // src="/formal_img_crop_fit.png"
                      alt="Profile"
                      className="w-full aspect-3/4 object-cover"
                    />
                  </ScratchToReveal>
                  <div className="absolute z-3 left-0 bottom-0 w-full h-3/8 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute z-5 bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">Satyam R</h3>
                    <p className="text-cyan-200">B.Tech., Final Year, IIT KGP</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-6 h-6 text-cyan-600" />
                Who I Am
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Hi, I’m Satyam Rahangdale, a passionate full-stack developer and
                Final year B.Tech student at IIT Kharagpur. I love building fast, interactive,
                and meaningful web applications that solve real-world problems.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                My core strengths lie in JavaScript, C++, and the MERN stack, 
                with hands-on experience in crafting dynamic UIs and scalable backend systems.
                I’ve worked on projects ranging from full stack lodging platform and real-time notification systems to interactive web games. 
                I’m also exploring ASR LLMs fairness and have co-developed a benchmarking
                tool for evaluating speech models, which got selected for Interspeech 2025.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I enjoy turning ideas into polished experiences — whether it’s scraping web data,
                visualizing algorithms, or designing smart UIs. When I’m not coding, 
                you can find me exploring new technologies, and reading about tech innovations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Skills</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• React.js & Next.js</li>
                  <li>• Node.js & Express</li>
                  <li>• MongoDB & MySQL</li>
                  <li>• TypeScript & JavaScript</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Relevent Courses</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• DSA</li>
                  <li>• OOPs</li>
                  <li>• Computer Networks</li>
                  <li>• DBMS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

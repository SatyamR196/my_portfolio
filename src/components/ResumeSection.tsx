
import React, { useState,useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FileText, Download, Eye } from 'lucide-react';

const ResumeSection = () => {
  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false);
  const [isCVDialogOpen, setIsCVDialogOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0);
        
          useEffect(() => {
            const handleScroll = () => {
              setScrollY(window.scrollY);
            };
        
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
          }, []);

  return (
    <section id="resume" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-0 right-0 w-40 h-40 bg-teal-200 rounded-full opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.1}px) translateX(${scrollY * -0.05}px)`,
        }}
      />
      <div 
        className="absolute top-[-600px] left-0 w-30 h-30 bg-purple-400 rounded-full opacity-25"
        style={{
          transform: `translateY(${scrollY * 0.15}px) translateX(${scrollY * 0.08}px)`,
        }}
      />
      <div 
        className="absolute top-[800px] left-120 w-24 h-24 bg-emerald-300 rounded-full opacity-25"
        style={{
          transform: `translateY(${scrollY * -0.15}px) translateX(${scrollY * -0.08}px)`,
        }}
      />
      <div 
        className="absolute top-[800px] left-380 w-45 h-45 bg-red-300 rounded-full opacity-25"
        style={{
          transform: `translateY(${scrollY * -0.15}px) translateX(${scrollY * -0.08}px)`,
        }}
      />
      <div 
        className="absolute top-[800px] left-390 w-450 h-450 bg-red-300 rounded-full opacity-25"
        style={{
          transform: `translateY(${scrollY * -0.15}px) translateX(${scrollY * -0.08}px)`,
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 relative z-9">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume & CV</h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg">Download or view my professional documents</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Resume Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-cyan-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Resume</CardTitle>
              <p className="text-gray-600">Professional summary and experience</p>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600 text-sm">
                Comprehensive overview of my professional journey, skills, and achievements.
              </p>
              <div className="space-y-3">
                <Button 
                  onClick={() => setIsResumeDialogOpen(true)}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Resume
                </Button>
                <a
                href="/Satyam_Resume.pdf" download>
                <Button 
                  variant="outline" 
                  className="w-full border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* CV Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-cyan-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Curriculum Vitae</CardTitle>
              <p className="text-gray-600">Detailed academic and professional record</p>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600 text-sm">
                Detailed academic background, publications, and comprehensive work history.
              </p>
              <div className="space-y-3">
                <Button 
                  onClick={() => setIsCVDialogOpen(true)}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View CV
                </Button>
                <a
                href="/Satyam_Resume.pdf" download>
                <Button 
                  variant="outline" 
                  className="w-full border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resume Dialog */}
        <Dialog open={isResumeDialogOpen} onOpenChange={setIsResumeDialogOpen} >
          <DialogContent className="max-w-4xl w-full h-[95vh] p-3">
            <DialogHeader>
              <DialogTitle className='text-center text-blue-800'>Resume</DialogTitle>
            <embed src="Satyam_Resume.pdf" type="application/pdf" width="100%" height="100%"/>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* CV Dialog */}
        <Dialog open={isCVDialogOpen} onOpenChange={setIsCVDialogOpen}>
          <DialogContent className="max-w-4xl w-full h-[95vh] p-3">
            <DialogHeader>
              <DialogTitle className='text-center text-blue-800'>CV</DialogTitle>
              <embed src="Satyam_Resume.pdf" type="application/pdf" width="100%" height="100%"/>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ResumeSection;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { CoolMode } from "@/components/magicui/cool-mode";
import { Pointer } from "@/components/magicui/pointer";
import { ShineBorder } from "@/components/magicui/shine-border";
import { BorderBeam } from "@/components/magicui/border-beam";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    fetch('https://ntfy.sh/portfolio_SR196', {
      method: 'POST', // PUT works too,
      headers: {
        'Title': 'Contact Me !',
        'Priority': '4',
        'Tags': 'bell',
        'Markdown': 'yes'
      },
      body:`**Name** : ${formData.name}\n**Email** : ${formData.email}\n**Message** : ${formData.message}`
    })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-10 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg">Ready to work together? Let's discuss your project!</p>
          <div className="flex justify-center mt-6">
            <CoolMode>
              <div>
                  <Pointer className="fill-blue-500 hidden sm:block" />
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Mail className="w-12 h-12 text-cyan-600" />
                    </div>
                  </div>
                  <div className="w-40 h-40 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full opacity-20"></div>
                </div>
              </div>
            </CoolMode>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4  items-center ">
          {/* Left Side - Image */}
          <div className="flex justify-center w-full align-middle lg:justify-start">
            <div className="relative w-full content-center">
              <img
                src="contact_h.png"
                alt="Contact illustration with two people discussing projects"
                className="w-full lg:h-10/12 rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="">
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md shadow-lg relative overflow-hidden">
                <div className='hidden sm:block'>
                <BorderBeam
                  duration={12}
                  size={400}
                  className="from-transparent via-red-500 to-transparent"
                />
                <BorderBeam
                  duration={12}
                  delay={6}
                  size={400}
                  className="from-transparent via-blue-500 to-transparent"
                />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-gray-900 flex items-center justify-center gap-2">
                    <Mail className="w-6 h-6 text-cyan-600" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 text-lg font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

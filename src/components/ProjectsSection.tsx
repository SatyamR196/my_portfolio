
import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectDetails from './ProjectDetails';

const ProjectsSection = () => {
  const projects = [
    {
      title: "ASR FairBench",
      subtitle: "Hugging Face Space | Full Stack Application",
      description: "ASR-FAIRBENCH is an open benchmarking platform dedicated to evaluating the fairness and accuracy of Automatic Speech Recognition (ASR) models. Our mission is to assess ASR models' performance across diverse demographic groups using the Fair Speech Dataset. Think your ASR model is both inclusive and high-performing? Put it to the test and claim your spot on the leaderboard!",
      images: ["/ASR_FairBench/Github_logo.png","/ASR_FairBench/CF_home.png","/ASR_FairBench/LBoard.png","/ASR_FairBench/Req_home.png","/ASR_FairBench/Req_result.png","/ASR_FairBench/Req_result2.png","/ASR_FairBench/Req_result3.png"],
      technologies: ["React.js", "Flask", "Hugging Face Transformers", "Docker", "Pandas", "PrimeReact UI", "Styled Components", "Recharts", "React Router", "React-Plotly","React-katex"],
      Link: "https://https://huggingface.co/spaces/satyamr196/ASR-FairBench.com"
    },
    {
      title: "Colorful Comments - Online code Editors",
      subtitle: "Chrome Extension",
      description: "Still use the regular comments to add notes to your code which are hard to read ? This chrome extension allows you to styles your comments in online code editors. This is very helpful if you want to add notes to explain your code or divide your code into sections.",
      images: ["/Colorful_Com/cc_logo_2.png","/Colorful_Com/popup.png","/Colorful_Com/popup_2.png","/Colorful_Com/example_light.png","/Colorful_Com/example_dark.png","/Colorful_Com/python_dark.png","/Colorful_Com/python_light.png"],
      technologies: ["Google Colab", "Onecompiler", "OnlineGDB", "Codechef IDE", "Programiz IDE", "Algozenith IDE"],
      Link: "https://github.com/SatyamR196/colorful_comments_extension"
    },
    {
      title: "CDC Noticeboard",
      subtitle: "Web Scraper | NTFY server",
      description: "CDC Notification is a Node.js-based automation tool that scrapes IIT Kharagpur’s CDC noticeboard using Puppeteer and delivers real-time placement/internship updates via Ntfy push notifications to your phone. It automates ERP login process using the Gmail API to fetch OTPs and ensure kgpians never miss any deadline.",
      images: ["/CDC_N/nf1.jpg","/CDC_N/nf2.jpg","/CDC_N/nf3.png","/CDC_N/nf4.png","/CDC_N/nf6.png","/CDC_N/nf8.png"],
      technologies: ["Node JS", "Puppeteer JS", "NTFY.sh", "MongoDB", "Axios"],
      Link: "https://github.com/SatyamR196/CDC_noticeBoard"
    },
    {
      title: "Explore It",
      subtitle: "Full Stack Application | E-Commerce Platform",
      description: "Complete e-commerce solution with user authentication, payment integration, and admin dashboard. Features include product management, order tracking, and analytics.",
      images: ["/ExploreIt/ex4.png","/ExploreIt/ex5.png","/ExploreIt/ex6.png"],
      technologies: ["HTML","CSS 5", "JavaScript", "EJS", "Express JS", "Mongoose", "Nodemon","Method Override"],
      Link: "https://drive.google.com/file/d/1xwlicNQ0yp6tNP92QIoMDyjZQpKSRiin/view?usp=drive_link://google.com"
    },
    {
      title: "Prompt Advisor Remastered Clone",
      subtitle: "Frontend Landing Page",
      description: "This is a clone of landing page of the Prompt Advisors Website, I have done some little modifications in order to make it better.",
      images: ["/PA/pa1.png","/PA/pa2.png","/PA/pa3.png","/PA/pa4.png","/PA/pa5.png","/PA/pa6.png","/PA/pa7.png","/PA/pa8.png","/PA/pa9.png","/PA/pa10.png","/PA/pa11.png","/PA/pa12.png","/PA/pa13.png"],
      technologies: ["React JS","Vite", "Prime React UI","Github"],
      Link: "https://satyamr196.github.io/PromptAdvisors_remastered/",
    },
    {
      title: "Dictionary",
      subtitle: "Web Dictionary",
      description: "This is a Dictionary App based on React JS , this dictionary can provide the following details about the searched word - Meaning, Parts of speech, Synnonyms, Antonyms, Example sentence.",
      images: ["/DT/dt1.jpg","/DT/dt2.png","/DT/dt3.png","/DT/dt4.png"],
      technologies: ["React JS","Vite", "React Icons", "Pico CSS", "Dictionary Api"],
      Link: "https://satyamr196.github.io/Dictionary/",
    },
    {
      title: "Snake And Ladder",
      subtitle: "Web Game",
      description: "Developed a classic Snake and Ladder game using HTML, CSS, and JavaScript, featuring a visually engaging board, real-time dice roll, and turn-based logic for two players. The game includes interactive movement, snakes that bring players down, and ladders that take them up—replicating the traditional experience in a clean, browser-friendly format. This project showcases my skills in DOM manipulation, event handling, and game state management using vanilla JavaScript.",
      images: ["/SL/sl1.jpg","/SL/sl2.jpg","/SL/sl3.jpg"],
      technologies: ["HTML","CSS 5", "JavaScript"],
      Link: "https://satyamr196.github.io/Snake-Ladder/"
    },
    {
      title: "Binary Tree Visualiser",
      subtitle: "Web App",
      description: "This is an app which can help one visulise how the Binary tree will look like when the given data is stored in the Binary Tree data structure. Binary tree visualizer can assist in solving and debugging binary tree related problems from platforms like GFG and LeetCode.",
      images: ["/BT/bt1.jpg","/BT/bt2.jpg","/BT/bt3.jpg","/BT/bt4.jpg"],
      technologies: ["HTML","CSS 5", "JavaScript", "GOJS"],
      Link: "https://satyamr196.github.io/BinaryTree_Visualise/"
    },
    {
      title: "Simons-Game",
      subtitle: "Web Game",
      description: "Simon is an electronic memory game invented by Ralph H. Baer and Howard J. Morrison in 1978,this is a web version of that game. Simon’s Game enhances memory and concentration skills by challenging players to recall and repeat sequences. It also improves pattern recognition and hand-eye coordination through interactive play.",
      images: ["/Simon_G/sm1.jpg","/Simon_G/sm2.jpg"],
      technologies: ["HTML","CSS 5", "JavaScript"],
      Link: "https://satyamr196.github.io/Simons-Game/"
    },
  ];

  return (
    <section id="projects" className="pb-10 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Works</h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-200 h-full hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot - Centered vertically with connector lines */}
                {/* <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-600 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div> */}
                <a href={project.Link} target="_blank" rel="noopener noreferrer">
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-600 rounded-full border-4 border-white shadow-lg z-10 hidden md:block transition duration-300 hover:scale-125 hover:bg-cyan-400"></div>
                </a>
                {/* Left Horizontal Connector Line */}
                {index % 2 === 0 ? (
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-1/4 h-0.5 bg-cyan-300 hidden md:block right-1/2 mr-2"></div>
                ) : (
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-cyan-300 hidden md:block right-1/2 mr-2"></div>
                )}

                {/* Right Horizontal Connector Line */}
                {index % 2 === 0 ? (
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-cyan-300 hidden md:block left-1/2 ml-2"></div>
                ) : (
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-1/4 h-0.5 bg-cyan-300 hidden md:block left-1/2 ml-2"></div>
                )}


                {/* Timeline Content */}
                <div className="hidden md:flex items-center">
                  {/* Left Side */}
                  <div className="w-full md:w-5/12 md:pr-2">
                    {index % 2 === 0 ? (
                      <ProjectImage title={project.title} images={project.images} Link={project.Link} />
                    ) : (
                      <ProjectDetails
                        title={project.title}
                        subtitle={project.subtitle}
                        description={project.description}
                        technologies={project.technologies}
                        position="right"
                      />
                    )}
                  </div>

                  {/* Spacer for timeline */}
                  <div className="hidden md:block w-2/12"></div>

                  {/* Right Side */}
                  <div className="w-full md:w-5/12 md:pl-2">
                    {index % 2 === 0 ? (
                      <ProjectDetails
                        title={project.title}
                        subtitle={project.subtitle}
                        description={project.description}
                        technologies={project.technologies}
                        position="left"
                      />
                    ) : (
                      <ProjectImage title={project.title} images={project.images} Link={project.Link} />
                    )}
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">

                  {/* <br/> */}
                  <ProjectImage title={project.title} images={project.images} Link={project.Link} />
                  <div className="mt-4">
                    <ProjectDetails
                      title={project.title}
                      subtitle={project.subtitle}
                      description={project.description}
                      technologies={project.technologies}
                      position="left"
                    />
                  </div>
                  {/* Render separator except after the last project */}
                  {index !== projects.length - 1 && (
                    <div className="my-8 h-px bg-cyan-200"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

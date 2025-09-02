import React from 'react';
import { Code, Cpu, Rocket, Layers } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Web & App Development',
      description: 'Full-stack websites and web apps built with React, Node.js, and cloud-native tech.'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI & Machine Learning',
      description: 'Predictive models, AI agents, and automation that optimize workflows.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Custom Software',
      description: 'Tailored tools and integrations to solve unique business challenges.'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Scalable Solutions',
      description: 'Clean, maintainable, and scalable code that grows with your business.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I help businesses turn ideas into <span className="font-semibold text-amber-500">powerful digital solutions</span>.  
            With expertise in <strong>web development, AI, and custom software</strong>, I deliver technology that drives real impact.
          </p>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {skill.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Let’s Build Something That Matters
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Available for freelance projects and collaborations. I bring a mix of technical 
              expertise and business understanding to create solutions that are both innovative 
              and results-driven.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-slate-700 rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-slate-700 rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-slate-700 rounded-full text-sm">Python</span>
              <span className="px-4 py-2 bg-slate-700 rounded-full text-sm">AI/ML</span>
              <span className="px-4 py-2 bg-slate-700 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-4 py-2 bg-slate-700 rounded-full text-sm">Next.js</span>
              <span className="px-4 py-2 bg-slate-700 rounded-full text-sm">MongoDB</span>
              <span className="px-4 py-2 bg-slate-700 rounded-full text-sm">AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

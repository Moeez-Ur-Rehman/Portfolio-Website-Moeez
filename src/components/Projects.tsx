import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Record Storage System',
      description:
        'A record Storage platform that stores with end to end encryption, a decent landing page and a taylored profile for the user. Built with React, Node.js, and PostgreSQL. Features real-time collaboration, advanced analytics, and custom integrations.',
      image: 'RcordStorageApp.jpeg',
      tags: ['React', 'Node.js', 'Firebase', 'Firebase Firestore', 'TypeScript'],
      liveUrl: '',
      githubUrl:
        'https://github.com/Moeez-Ur-Rehman/Working-of-my-portfolio-project/blob/main/README.md',
    },
    {
      title: 'Nutri Care Pro',
      description:
        'Developed an AI agent to to get the diet suggestion for a patient, with end to end authentication, health reminder and weekly updates on how to maintain a healthy diet',
      image: 'NutritionAPP.jpeg',
      tags: [
        'React',
        'Python Django',
        'Model Training',
        'Dataset Creation',
        'Firebase',
        'Agentic AI',
      ],
      liveUrl: '',
      githubUrl:
        'https://github.com/Moeez-Ur-Rehman/Working-of-my-portfolio-project/blob/main/README.md',
    },
    {
      title: 'Start Trading LLC website',
      description:
        'A world class design landing page for a trading company,with smooth transitions and animations.',
      image: 'TradingWebsite.jpg',
      tags: ['Typescript', 'Javascript', 'Tailwind CSS', 'CPanel'],
      liveUrl: 'https://starttradingllc.com/',
      githubUrl: '',
    },
    {
      title: 'Task Tracking App',
      description:
        'A full Stack task tracking system with end to end authentication, user profiles, and a sleek UI. Built with React, Node.js, and MongoDB. Features real-time updates, and smooth workflow',
      image: 'TaskTrackingAPP.jpeg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '',
      githubUrl:
        'https://github.com/Moeez-Ur-Rehman/Working-of-my-portfolio-project/blob/main/README.md',
    },
    {
      title: 'Movie Review Sentiment Analysis Model',
      description:
        'Machine Learning Model for sentiment analysis on movie reviews. Achieved 92% accuracy using NLP techniques and TensorFlow.',
      image: 'MovieReviewModel.jpeg',
      tags: [, 'Python', 'TensorFlow', 'NLP', 'Pandas', 'NumPy'],
      liveUrl: '',
      githubUrl:
        'https://github.com/Moeez-Ur-Rehman/Working-of-my-portfolio-project/blob/main/README.md',
    },
    {
      title: 'Chess Game on unity',
      description:
        'A 3D chess game with AI opponent, two-player mode, and intuitive controls. Developed using Unity and C#.',
      image: 'ChessGame.jpeg',
      tags: ['Unity', 'C#', 'Game Development', '3D Modeling'],
      liveUrl: '',
      githubUrl:
        'https://github.com/Moeez-Ur-Rehman/Working-of-my-portfolio-project/blob/main/README.md',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A selection of projects that showcase my skills in web development,
            design, and problem-solving. Each project represents a unique
            challenge and creative solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full group-hover:bg-amber-100 group-hover:text-amber-700 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ "All My Projects" link at the bottom */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Moeez-Ur-Rehman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-800 transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            View All My Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with HTML, CSS, and JavaScript featuring modern design and responsive layout.',
      icon: '🌐',
      gradient: 'from-electric-blue to-nebula-pink',
      github: 'https://github.com/mohammedkaifkaif',
      demo: 'https://mohammedkaifkaif.github.io/My-Personal-Portfolio-Website/'
    },
    {
      title: 'Android App',
      description: 'Mobile application developed using Java and Android Studio with user-friendly interface and smooth performance.',
      icon: '📱',
      gradient: 'from-nebula-pink to-lightning-yellow',
      github: 'https://github.com/mohammedkaifkaif',
      demo: '#'
    },
    {
      title: 'Database Project',
      description: 'Full-stack web application with MySQL database integration featuring CRUD operations and user authentication.',
      icon: '🗄️',
      gradient: 'from-lightning-yellow to-electric-blue',
      github: 'https://github.com/mohammedkaifkaif',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-electric-blue">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-nebula-pink mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-space-gray/30 backdrop-blur-sm rounded-xl p-6 border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-300 transform hover:scale-105 animate-float"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-2xl">{project.icon}</span>
                </div>
                <h3 className="text-xl font-bold font-orbitron mb-4 text-electric-blue">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`cosmic-btn bg-gradient-to-r ${project.gradient} px-4 py-2 rounded-full font-rajdhani font-semibold text-sm hover:animate-glow transition-all duration-300`}
                  >
                    <svg className="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-btn border border-electric-blue px-4 py-2 rounded-full font-rajdhani font-semibold text-sm hover:bg-electric-blue hover:text-space-navy transition-all duration-300"
                    >
                      <svg className="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

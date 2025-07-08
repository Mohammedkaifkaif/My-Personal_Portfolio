import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { name: 'UI/UX', description: 'Designing Web/App interface' },
    { name: 'Web Development', description: 'Web app development' },
    { name: 'App Development', description: 'Building Android apps' }
  ];

  const experience = [
    { role: 'Full Stack Intern', company: 'CITRIS Tumkur' },
    { role: 'Freelancing', company: 'Web Designing' },
    { role: 'Online Internship', company: 'Cyber Security' }
  ];

  const education = [
    { period: '2022 - 2026', degree: 'Bachelor of Engineering from CIT Tumkur' },
    { period: '2020 - 2022', degree: 'PUC-Science(PCMB) from Seshadripuram PU College' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-electric-blue">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-nebula-pink mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-8">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Mohammed Kaif - Professional headshot" 
                className="w-64 h-64 rounded-full object-cover border-4 border-electric-blue/50 animate-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-blue/20 to-nebula-pink/20 animate-pulse"></div>
            </div>
            
            <p className="text-lg font-inter text-gray-300 mb-8 leading-relaxed">
              I am an undergraduate student pursuing a degree in Computer Science Engineering with a strong 
              foundation in programming, software development, and problem-solving. My academic journey has 
              equipped me with skills in languages like Java, Python, and C, as well as experience in Full 
              stack development.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Skills */}
            <div className="bg-space-gray/30 backdrop-blur-sm rounded-xl p-6 border border-electric-blue/20">
              <h3 className="text-2xl font-bold font-orbitron mb-4 text-electric-blue">
                <svg className="w-6 h-6 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-dark-matter/50 p-4 rounded-lg"
                  >
                    <h4 className="font-rajdhani font-semibold text-lightning-yellow mb-2">{skill.name}</h4>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Experience */}
            <div className="bg-space-gray/30 backdrop-blur-sm rounded-xl p-6 border border-electric-blue/20">
              <h3 className="text-2xl font-bold font-orbitron mb-4 text-electric-blue">
                <svg className="w-6 h-6 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                Experience
              </h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-2 border-nebula-pink pl-4"
                  >
                    <h4 className="font-rajdhani font-semibold text-lightning-yellow">{exp.role}</h4>
                    <p className="text-sm text-gray-400">{exp.company}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div className="bg-space-gray/30 backdrop-blur-sm rounded-xl p-6 border border-electric-blue/20">
              <h3 className="text-2xl font-bold font-orbitron mb-4 text-electric-blue">
                <svg className="w-6 h-6 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.period}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-2 border-nebula-pink pl-4"
                  >
                    <h4 className="font-rajdhani font-semibold text-lightning-yellow">{edu.period}</h4>
                    <p className="text-sm text-gray-400">{edu.degree}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

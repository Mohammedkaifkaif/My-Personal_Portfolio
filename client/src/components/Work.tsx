import { motion } from 'framer-motion';

export default function Work() {
  const projects = [
    {
      title: 'Shop Website',
      description: 'The website connects you to the excellent collection',
      image: 'https://mohammedkaifkaif.github.io/My_Portfolio/images/work1.png.jpg',
      gradient: 'from-electric-blue to-nebula-pink'
    },
    {
      title: 'Design Website',
      description: 'The website connects you to the excellent collection',
      image: 'https://mohammedkaifkaif.github.io/My_Portfolio/images/work2.png.jpg',
      gradient: 'from-nebula-pink to-lightning-yellow'
    },
    {
      title: 'Develop Website',
      description: 'The website connects you to the excellent collection',
      image: 'https://mohammedkaifkaif.github.io/My_Portfolio/images/work3.png.jpg',
      gradient: 'from-lightning-yellow to-electric-blue'
    }
  ];

  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-electric-blue">
            My Work
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
              className="bg-space-gray/30 backdrop-blur-sm rounded-xl overflow-hidden border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-navy/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-orbitron mb-2 text-electric-blue">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <button className={`cosmic-btn bg-gradient-to-r ${project.gradient} px-4 py-2 rounded-full font-rajdhani font-semibold text-sm hover:animate-glow transition-all duration-300`}>
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="cosmic-btn border-2 border-electric-blue px-8 py-4 rounded-full font-rajdhani font-semibold text-lg hover:bg-electric-blue hover:text-space-navy transition-all duration-300 transform hover:scale-105">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}

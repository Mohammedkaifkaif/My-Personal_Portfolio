import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Software Developer',
      description: 'Programming languages are: Java and Python',
      gradient: 'from-electric-blue to-nebula-pink'
    },
    {
      icon: '🎨',
      title: 'Web Design',
      description: 'Frontend development using HTML, CSS, JavaScript',
      gradient: 'from-nebula-pink to-lightning-yellow'
    },
    {
      icon: '🗄️',
      title: 'MySQL',
      description: 'Database management and development',
      gradient: 'from-lightning-yellow to-electric-blue'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-electric-blue">
            My Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-nebula-pink mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-space-gray/30 backdrop-blur-sm rounded-xl p-8 border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-300 transform hover:scale-105 animate-float"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold font-orbitron mb-4 text-electric-blue">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <button className={`cosmic-btn bg-gradient-to-r ${service.gradient} px-6 py-3 rounded-full font-rajdhani font-semibold hover:animate-glow transition-all duration-300`}>
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function Certificates() {
  const handleViewCertificates = () => {
    window.open('https://mohammedkaifkaif.github.io/My-Personal-Portfolio-Website/page2.html', '_blank');
  };

  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-electric-blue">
            My Certificates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-nebula-pink mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-space-gray/30 backdrop-blur-sm rounded-xl p-8 border border-electric-blue/20 text-center"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-electric-blue to-nebula-pink rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2L3 7v11c0 5.55 3.84 8 7 8s7-2.45 7-8V7l-7-5zM8 11a3 3 0 11-6 0 3 3 0 016 0zm0 0c0 1 1 1 1 1s1 0 1-1-1-1-1-1-1 0-1 1zm5.02 3.02c.49-.49 1.28-.49 1.77 0 .49.49.49 1.28 0 1.77-.49.49-1.28.49-1.77 0-.49-.49-.49-1.28 0-1.77zM12 6a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-orbitron mb-4 text-electric-blue">Professional Certifications</h3>
            <p className="text-gray-400 mb-8">
              Explore my collection of certificates from various courses and training programs that showcase my skills and expertise in different technologies.
            </p>
            <button 
              onClick={handleViewCertificates}
              className="cosmic-btn bg-gradient-to-r from-electric-blue to-nebula-pink px-8 py-4 rounded-full font-rajdhani font-semibold text-lg hover:animate-glow transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              View Certificates
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

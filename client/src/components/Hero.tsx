import { motion } from 'framer-motion';

export default function Hero() {
  const handleExploreClick = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = async () => {
    try {
      const response = await fetch('/api/download-cv');
      const data = await response.json();
      if (data.success) {
        window.open(data.downloadUrl, '_blank');
      }
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="animate-float"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-nebula-pink to-lightning-yellow">
            Mohammed Kaif
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-rajdhani text-gray-300">
            Computer Science Engineering Student
          </p>
          <p className="text-lg md:text-xl mb-12 font-inter text-gray-400 max-w-2xl mx-auto">
            Passionate about programming, software development, and creating innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleExploreClick}
              className="cosmic-btn bg-gradient-to-r from-electric-blue to-nebula-pink px-8 py-4 rounded-full font-rajdhani font-semibold text-lg hover:animate-glow transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Explore My Universe
            </button>
            <button 
              onClick={handleDownloadCV}
              className="cosmic-btn border-2 border-electric-blue px-8 py-4 rounded-full font-rajdhani font-semibold text-lg hover:bg-electric-blue hover:text-space-navy transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

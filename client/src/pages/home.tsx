import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import SolarSystem from '@/components/SolarSystem';
import LightningTrail from '@/components/LightningTrail';

export default function Home() {
  useEffect(() => {
    // Lightning flash effect for button clicks
    const lightningContainer = document.createElement('div');
    lightningContainer.id = 'lightning-container';
    lightningContainer.className = 'fixed inset-0 pointer-events-none z-50';
    document.body.appendChild(lightningContainer);

    const handleButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.cosmic-btn')) {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const flash = document.createElement('div');
        flash.className = 'lightning-flash';
        flash.style.left = (centerX - 50) + 'px';
        flash.style.top = (centerY - 50) + 'px';
        
        lightningContainer.appendChild(flash);
        
        setTimeout(() => {
          if (flash.parentNode) {
            flash.parentNode.removeChild(flash);
          }
        }, 600);
      }
    };

    document.addEventListener('click', handleButtonClick);

    return () => {
      document.removeEventListener('click', handleButtonClick);
      if (lightningContainer.parentNode) {
        lightningContainer.parentNode.removeChild(lightningContainer);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-space-navy text-white overflow-x-hidden">
      <SolarSystem />
      <LightningTrail />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Work />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-electric-blue/20 bg-space-navy/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 font-inter">
            Copyright © 2025 Mohammed Kaif. Made for only portfolio.❤️❤️❤️
          </p>
        </div>
      </footer>
    </div>
  );
}

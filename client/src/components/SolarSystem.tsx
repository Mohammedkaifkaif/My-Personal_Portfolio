import { useEffect, useRef } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function SolarSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useScrollPosition();
  const cometsRef = useRef<number>(0);

  useEffect(() => {
    // Create dynamic comets based on scroll position
    if (scrollPosition > 0 && cometsRef.current < 10 && Math.random() < 0.1) {
      createComet();
    }
  }, [scrollPosition]);

  const createComet = () => {
    if (!containerRef.current) return;

    const comet = document.createElement('div');
    comet.className = 'absolute w-3 h-3 rounded-full animate-comet pointer-events-none';
    comet.style.top = Math.random() * window.innerHeight + 'px';
    comet.style.left = '-50px';
    comet.style.backgroundImage = "url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50')";
    comet.style.backgroundSize = 'cover';
    comet.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.8)`;
    comet.style.animationDelay = Math.random() * 2 + 's';
    comet.style.zIndex = '1';

    containerRef.current.appendChild(comet);
    cometsRef.current++;

    // Remove comet after animation
    setTimeout(() => {
      if (comet.parentNode) {
        comet.parentNode.removeChild(comet);
        cometsRef.current--;
      }
    }, 8000);
  };

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none">
      {/* Animated Galaxy Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Central Solar System */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Sun */}
        <div 
          className="absolute w-16 h-16 rounded-full animate-spin-slow transform -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200')",
            backgroundSize: 'cover',
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.8)'
          }}
        />
        
        {/* Mercury */}
        <div 
          className="absolute w-6 h-6 rounded-full orbit-mercury transform -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100')",
            backgroundSize: 'cover'
          }}
        />
        
        {/* Venus */}
        <div 
          className="absolute w-8 h-8 rounded-full orbit-venus transform -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120')",
            backgroundSize: 'cover'
          }}
        />
        
        {/* Earth */}
        <div 
          className="absolute w-10 h-10 rounded-full orbit-earth transform -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150')",
            backgroundSize: 'cover'
          }}
        />
        
        {/* Mars */}
        <div 
          className="absolute w-8 h-8 rounded-full orbit-mars transform -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120')",
            backgroundSize: 'cover'
          }}
        />
        
        {/* Jupiter */}
        <div 
          className="absolute w-20 h-20 rounded-full orbit-jupiter transform -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300')",
            backgroundSize: 'cover'
          }}
        />
        
        {/* Saturn */}
        <div 
          className="absolute w-16 h-16 rounded-full orbit-saturn transform -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250')",
            backgroundSize: 'cover'
          }}
        />
        
        {/* Uranus */}
        <div 
          className="absolute w-12 h-12 rounded-full orbit-uranus transform -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=180&h=180')",
            backgroundSize: 'cover'
          }}
        />
        
        {/* Neptune */}
        <div 
          className="absolute w-10 h-10 rounded-full orbit-neptune transform -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150')",
            backgroundSize: 'cover'
          }}
        />
      </div>
      
      {/* Static Comets */}
      <div className="absolute top-20 left-0 w-4 h-4 rounded-full animate-comet"
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60')",
             backgroundSize: 'cover',
             boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
           }}
      />
      
      <div className="absolute top-40 left-0 w-3 h-3 rounded-full animate-comet"
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50')",
             backgroundSize: 'cover',
             boxShadow: '0 0 15px rgba(0, 229, 255, 0.6)',
             animationDelay: '-3s'
           }}
      />
      
      <div className="absolute top-60 left-0 w-5 h-5 rounded-full animate-comet"
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=70&h=70')",
             backgroundSize: 'cover',
             boxShadow: '0 0 25px rgba(255, 64, 129, 0.7)',
             animationDelay: '-6s'
           }}
      />
      
      <div className="absolute top-80 left-0 w-2 h-2 rounded-full animate-comet"
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40')",
             backgroundSize: 'cover',
             animationDelay: '-2s'
           }}
      />
      
      {/* Nebula Effects */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 animate-pulse"
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400')",
             backgroundSize: 'cover',
             filter: 'blur(2px)'
           }}
      />
      
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-15 animate-pulse"
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300')",
             backgroundSize: 'cover',
             filter: 'blur(3px)',
             animationDelay: '-1s'
           }}
      />
      
      <div className="absolute top-1/2 right-1/4 w-56 h-56 rounded-full opacity-10 animate-pulse"
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&h=350')",
             backgroundSize: 'cover',
             filter: 'blur(4px)',
             animationDelay: '-2s'
           }}
      />
    </div>
  );
}

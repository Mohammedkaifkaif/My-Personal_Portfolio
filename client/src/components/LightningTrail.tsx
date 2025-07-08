import { useEffect, useRef } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

export default function LightningTrail() {
  const trailRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();

  useEffect(() => {
    if (!trailRef.current) return;

    // Create lightning bolt
    const bolt = document.createElement('div');
    bolt.className = 'lightning-bolt';
    bolt.style.left = (mousePosition.x - 2) + 'px';
    bolt.style.top = (mousePosition.y - 10) + 'px';
    bolt.style.transform = `rotate(${Math.random() * 360}deg)`;

    trailRef.current.appendChild(bolt);

    // Remove bolt after animation
    const timeout = setTimeout(() => {
      if (bolt.parentNode) {
        bolt.parentNode.removeChild(bolt);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [mousePosition]);

  return <div ref={trailRef} id="lightning-trail" className="fixed pointer-events-none z-50" />;
}

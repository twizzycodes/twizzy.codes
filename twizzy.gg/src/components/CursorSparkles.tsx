import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  vx: number;
  vy: number;
  size: number;
}

export default function CursorSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [sparkleId, setSparkleId] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Create a few sparkles at the cursor position
      const newSparkles: Sparkle[] = [];
      const sparkleCount = 2;
      
      for (let i = 0; i < sparkleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 1;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        const size = 2 + Math.random() * 3;
        
        newSparkles.push({
          id: sparkleId + i,
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          vx,
          vy,
          size,
        });
      }
      
      setSparkleId(prev => prev + sparkleCount);
      setSparkles(prev => [...prev, ...newSparkles]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animate sparkles
    const interval = setInterval(() => {
      setSparkles(prev => 
        prev
          .map(sparkle => ({
            ...sparkle,
            x: sparkle.x + sparkle.vx,
            y: sparkle.y + sparkle.vy,
            opacity: sparkle.opacity - 0.03,
            vx: sparkle.vx * 0.98,
            vy: sparkle.vy * 0.98,
          }))
          .filter(sparkle => sparkle.opacity > 0)
      );
    }, 16); // ~60fps

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [sparkleId]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            opacity: sparkle.opacity,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.size}px rgba(255, 255, 255, ${sparkle.opacity * 0.8})`,
          }}
        />
      ))}
    </div>
  );
}


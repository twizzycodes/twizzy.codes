import { useEffect, useRef, useState } from "react";

interface Snowflake {
  id: number;
  x: number;
  y: number;
  opacity: number;
  vy: number;
  vx: number;
  size: number;
  rotation: number;
}

export default function CursorSnow({ active }: { active: boolean }) {
  const [flakes, setFlakes] = useState<Snowflake[]>([]);
  const flakeId = useRef(0);

  useEffect(() => {
    if (!active) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newFlakes: Snowflake[] = [];
      const count = 3;

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.3 + Math.random() * 0.8;

        newFlakes.push({
          id: flakeId.current + i,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          opacity: 0.6 + Math.random() * 0.4,
          vy: 0.5 + Math.random() * 1.5,
          vx: Math.cos(angle) * speed,
          size: 2 + Math.random() * 4,
          rotation: Math.random() * 360,
        });
      }

      flakeId.current += count;
      setFlakes((prev) => [...prev.slice(-120), ...newFlakes]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
      setFlakes((prev) =>
        prev
          .map((flake) => ({
            ...flake,
            x: flake.x + flake.vx,
            y: flake.y + flake.vy,
            opacity: flake.opacity - 0.012,
            rotation: flake.rotation + 2,
            vx: flake.vx * 0.99,
          }))
          .filter((flake) => flake.opacity > 0)
      );
    }, 16);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-white select-none"
          style={{
            left: `${flake.x}px`,
            top: `${flake.y}px`,
            opacity: flake.opacity,
            transform: `translate(-50%, -50%) rotate(${flake.rotation}deg)`,
            fontSize: `${flake.size}px`,
            textShadow: "0 0 4px rgba(255,255,255,0.8)",
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}

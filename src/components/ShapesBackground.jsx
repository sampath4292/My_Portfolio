import { useEffect, useState } from "react";

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

export const ShapesBackground = ({ theme }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const numParticles = Math.floor((window.innerWidth * window.innerHeight) / 1800);
    const newParticles = [];
    for (let i = 0; i < numParticles; i++) {
      const size = randomBetween(6, 18);
      const x = randomBetween(0, 100);
      const y = randomBetween(0, 100);
      const opacity = randomBetween(0.10, 0.25);
      const duration = randomBetween(8, 22);
      const delay = randomBetween(0, 10);
      let color;
      if (theme === "light") {
        const palette = [
          "#1E90FF", // Dodger Blue
          "#FFB347", // Light Orange
          "#7CFC00", // Lawn Green
          "#FF69B4", // Hot Pink
          "#FFD700", // Gold
          "#00CFFF", // Cyan
          "#B388FF", // Light Purple
        ];
        color = palette[Math.floor(Math.random() * palette.length)];
      } else {
        const palette = [
          "#1E90FF",
          "#274472",
          "#4169E1",
          "#283747",
          "#5DADE2",
          "#B0BEC5", // Gray blue
          "#90A4AE", // Muted blue gray
        ];
        color = palette[Math.floor(Math.random() * palette.length)];
      }
      newParticles.push({
        id: i,
        size,
        x,
        y,
        opacity,
        color,
        duration,
        delay
      });
    }
    setParticles(newParticles);
    // Regenerate on resize
    const handleResize = () => setParticles([]);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [theme]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => {
        const style = {
          position: "absolute",
          width: particle.size,
          height: particle.size,
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          opacity: particle.opacity,
          background: particle.color,
          borderRadius: "50%",
          boxShadow: `0 0 12px 2px ${particle.color}33`,
          animation: `particle-float ${particle.duration}s ease-in-out infinite`,
          animationDelay: `${particle.delay}s`,
          zIndex: 0,
        };
        return <div key={particle.id} style={style} />;
      })}
      <style>{`
        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-10px) scale(1.05); }
          50% { transform: translateY(10px) scale(0.97); }
          75% { transform: translateY(-6px) scale(1.03); }
        }
      `}</style>
    </div>
  );
}; 
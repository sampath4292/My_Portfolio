import { useEffect, useState } from "react";

export const BubblesBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    generateBubbles();
    window.addEventListener("resize", generateBubbles);
    return () => window.removeEventListener("resize", generateBubbles);
  }, []);

  const generateBubbles = () => {
    const numberOfBubbles = Math.floor((window.innerWidth * window.innerHeight) / 9000);
    const azureShades = [
      // Azure blue shades (rgba)
      (opacity) => `rgba(0, 191, 255, ${opacity})`, // Deep Sky Blue
      (opacity) => `rgba(135, 206, 250, ${opacity})`, // Light Sky Blue
      (opacity) => `rgba(70, 130, 180, ${opacity})`, // Steel Blue
      (opacity) => `rgba(240, 255, 255, ${opacity})`, // Azure (very light)
    ];
    const newBubbles = [];
    for (let i = 0; i < numberOfBubbles; i++) {
      const opacity = Math.random() * 0.3 + 0.2; // 0.2 to 0.5
      const colorFn = azureShades[Math.floor(Math.random() * azureShades.length)];
      newBubbles.push({
        id: i,
        size: Math.random() * 60 + 40, // 40px to 100px
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity,
        blur: Math.random() * 12 + 8, // 8px to 20px
        color: colorFn(opacity),
        animationDuration: Math.random() * 8 + 8, // 8s to 16s
        animationDelay: Math.random() * 8, // 0s to 8s
      });
    }
    setBubbles(newBubbles);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble-float"
          style={{
            position: "absolute",
            width: bubble.size + "px",
            height: bubble.size + "px",
            left: bubble.x + "%",
            top: bubble.y + "%",
            opacity: bubble.opacity,
            filter: `blur(${bubble.blur}px)` ,
            background: bubble.color,
            borderRadius: "50%",
            boxShadow: `0 0 60px 10px ${bubble.color}`,
            animation: `bubble-float ${bubble.animationDuration}s ease-in-out infinite`,
            animationDelay: `${bubble.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
}; 
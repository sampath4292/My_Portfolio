import { useEffect, useState } from 'react';

export const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleLinkHover = () => {
      setIsHovering(true);
    };

    const handleLinkLeave = () => {
      setIsHovering(false);
    };

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0})`,
        }}
      >
        <div
          className={`w-3 h-3 rounded-full transition-all duration-300 ease-out ${
            isHovering
              ? 'bg-primary scale-150 opacity-80'
              : 'bg-primary/60 scale-100 opacity-60'
          }`}
        />
      </div>

      {/* Trailing cursor ring */}
      <div
        className="fixed pointer-events-none z-[9998] transition-transform duration-300 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0})`,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border-2 transition-all duration-500 ease-out ${
            isHovering
              ? 'border-primary/40 scale-150'
              : 'border-primary/20 scale-100'
          }`}
        />
      </div>

      {/* Outer glow ring */}
      <div
        className="fixed pointer-events-none z-[9997] transition-transform duration-700 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0})`,
        }}
      >
        <div
          className={`w-16 h-16 rounded-full transition-all duration-700 ease-out ${
            isHovering
              ? 'bg-primary/10 scale-100'
              : 'bg-primary/5 scale-75'
          }`}
        />
      </div>
    </>
  );
}; 
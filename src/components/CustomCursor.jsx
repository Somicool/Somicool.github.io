import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animFrame;
    let dot = { x: 0, y: 0 };
    let target = { x: 0, y: 0 };

    const moveMouse = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setDotPosition({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      dot.x += (target.x - dot.x) * 0.12;
      dot.y += (target.y - dot.y) * 0.12;
      setPosition({ x: dot.x, y: dot.y });
      animFrame = requestAnimationFrame(animate);
    };

    const handleHoverIn = () => setIsHovering(true);
    const handleHoverOut = () => setIsHovering(false);

    window.addEventListener('mousemove', moveMouse);
    document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', handleHoverIn);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '40px' : '24px',
          height: isHovering ? '40px' : '24px',
          background: isHovering ? 'rgba(0, 212, 255, 0.15)' : 'transparent',
          borderColor: isHovering ? '#8b5cf6' : '#00d4ff',
        }}
      />
      <div
        className="cursor-dot hidden md:block"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;

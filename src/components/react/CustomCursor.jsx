import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick !== null ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] transition-opacity duration-300 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          transition: 'transform 0.05s ease-out',
        }}
      />

      {/* Cursor ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 border-2 border-gray-500 rounded-full pointer-events-none z-[9998] transition-all duration-200 ${
          isHidden ? 'opacity-0' : 'opacity-50'
        } ${isPointer ? 'scale-150 border-white' : 'scale-100'}`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          transition: 'transform 0.15s ease-out, scale 0.2s ease-out, border-color 0.2s ease-out',
        }}
      />
    </>
  );
}

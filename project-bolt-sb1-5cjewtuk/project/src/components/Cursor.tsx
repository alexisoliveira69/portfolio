import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if ('ontouchstart' in window) return;
    
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, input, textarea, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();
    setHidden(false);

    return () => {
      removeEventListeners();
    };
  }, []);

  // Don't render cursor on touch devices
  if ('ontouchstart' in window) return null;

  return (
    <>
      <div
        className={`cursor-dot fixed pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-100 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-50' : ''} ${linkHovered ? 'scale-150' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          backgroundColor: '#3B82F6',
        }}
      />
      <div
        className={`cursor-outline fixed pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ${
          hidden ? 'opacity-0' : 'opacity-70'
        } ${clicked ? 'scale-150' : ''} ${linkHovered ? 'scale-200 bg-blue-500/10' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '40px',
          height: '40px',
          borderColor: '#3B82F6',
          transitionProperty: 'width, height, border-color, opacity, transform',
        }}
      />
    </>
  );
};

export default Cursor;
import { useEffect, useRef, useState } from 'react';

const AdvancedCursor = () => {
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);
  const lineRefs = useRef([]);
  const [isClicking, setIsClicking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const trailCount = 8;
  const lineCount = 4;

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let trailIndex = 0;
    let lineIndex = 0;

    // Smooth cursor movement
    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      requestAnimationFrame(updateCursor);
    };

    // Create spiral trail particles
    const createTrailParticle = (x, y, delay = 0) => {
      const particle = document.createElement('div');
      particle.className = 'cursor-trail';
      
      // Random particle type
      const particleTypes = ['trail-particle-1', 'trail-particle-2', 'trail-particle-3', 'trail-particle-4'];
      const randomType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      particle.classList.add(randomType);
      
      // Random size variation
      const sizeVariation = 0.8 + Math.random() * 0.4;
      particle.style.width = particle.style.height = (parseInt(particle.style.width || '6px') * sizeVariation) + 'px';
      
      // Position with spiral offset
      const angle = (trailIndex * 45) * (Math.PI / 180);
      const radius = 15 + (trailIndex * 3);
      const offsetX = Math.cos(angle) * radius;
      const offsetY = Math.sin(angle) * radius;
      
      particle.style.left = (x + offsetX) + 'px';
      particle.style.top = (y + offsetY) + 'px';
      
      // Random rotation
      particle.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      document.body.appendChild(particle);
      
      // Remove after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 1200);
      
      trailIndex = (trailIndex + 1) % trailCount;
    };

    // Create spiral trail lines
    const createTrailLine = (x, y) => {
      const line = document.createElement('div');
      line.className = 'cursor-trail-line';
      
      // Spiral positioning
      const angle = (lineIndex * 90) * (Math.PI / 180);
      const radius = 20 + (lineIndex * 5);
      const offsetX = Math.cos(angle) * radius;
      const offsetY = Math.sin(angle) * radius;
      
      line.style.left = (x + offsetX) + 'px';
      line.style.top = (y + offsetY) + 'px';
      line.style.transform = `rotate(${angle * (180 / Math.PI)}deg)`;
      
      document.body.appendChild(line);
      
      // Remove after animation
      setTimeout(() => {
        if (line.parentNode) {
          line.parentNode.removeChild(line);
        }
      }, 800);
      
      lineIndex = (lineIndex + 1) % lineCount;
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Create trail effects
      if (Math.random() < 0.3) { // 30% chance to create trail
        createTrailParticle(mouseX, mouseY);
      }
      
      if (Math.random() < 0.1) { // 10% chance to create line
        createTrailLine(mouseX, mouseY);
      }
    };

    // Mouse down handler
    const handleMouseDown = () => {
      setIsClicking(true);
      cursor.classList.add('clicking');
      
      // Create burst effect
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          createTrailParticle(mouseX, mouseY, i * 50);
        }, i * 50);
      }
    };

    // Mouse up handler
    const handleMouseUp = () => {
      setIsClicking(false);
      cursor.classList.remove('clicking');
    };

    // Hover handlers
    const handleMouseEnter = (e) => {
      if (e.target.matches('a, button, .btn, .shimmer-btn, .nav-link')) {
        cursor.style.transform = 'scale(1.8)';
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches('a, button, .btn, .shimmer-btn, .nav-link')) {
        cursor.style.transform = 'scale(1)';
      }
    };

    // Focus handlers
    const handleFocus = (e) => {
      if (e.target.matches('input, textarea, [contenteditable]')) {
        cursor.style.transform = 'scale(1.4)';
      }
    };

    const handleBlur = (e) => {
      if (e.target.matches('input, textarea, [contenteditable]')) {
        cursor.style.transform = 'scale(1)';
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    document.addEventListener('focus', handleFocus, true);
    document.addEventListener('blur', handleBlur, true);

    // Start cursor animation
    updateCursor();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('focus', handleFocus, true);
      document.removeEventListener('blur', handleBlur, true);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className={`custom-cursor ${isClicking ? 'clicking' : ''} ${isLoading ? 'loading' : ''}`}
    >
      <div className="cursor-dot"></div>
    </div>
  );
};

export default AdvancedCursor;

import { useEffect, useRef, useState } from 'react';

const LightningCursor = () => {
  const cursorRef = useRef(null);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Smooth cursor movement
    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      requestAnimationFrame(updateCursor);
    };

    // Create lightning spark particles
    const createSpark = (x, y, intensity = 1) => {
      const spark = document.createElement('div');
      spark.className = 'lightning-spark';
      
      // Random spark properties
      const size = (2 + Math.random() * 4) * intensity;
      const angle = Math.random() * Math.PI * 2;
      const distance = 10 + Math.random() * 20;
      const duration = 200 + Math.random() * 300;
      
      spark.style.width = spark.style.height = size + 'px';
      spark.style.left = (x + Math.cos(angle) * distance) + 'px';
      spark.style.top = (y + Math.sin(angle) * distance) + 'px';
      spark.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      // Random purple/blue color
      const colors = ['#8A2BE2', '#9400D3', '#4B0082', '#0000FF', '#4169E1', '#6A5ACD'];
      spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      document.body.appendChild(spark);
      
      // Animate spark
      spark.animate([
        { 
          opacity: 1, 
          transform: `rotate(${Math.random() * 360}deg) scale(1)`,
          boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'
        },
        { 
          opacity: 0, 
          transform: `rotate(${Math.random() * 360}deg) scale(0.1)`,
          boxShadow: '0 0 5px currentColor'
        }
      ], {
        duration: duration,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }).onfinish = () => {
        if (spark.parentNode) {
          spark.parentNode.removeChild(spark);
        }
      };
    };

    // Create lightning bolt effect
    const createLightningBolt = (x, y) => {
      const bolt = document.createElement('div');
      bolt.className = 'lightning-bolt';
      
      const segments = 5 + Math.floor(Math.random() * 5);
      const points = [];
      
      // Generate zigzag points
      let currentX = x;
      let currentY = y;
      points.push({ x: currentX, y: currentY });
      
      for (let i = 1; i < segments; i++) {
        currentX += (Math.random() - 0.5) * 30;
        currentY += 20 + Math.random() * 20;
        points.push({ x: currentX, y: currentY });
      }
      
      // Create SVG path
      const pathData = points.map((point, index) => 
        `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
      ).join(' ');
      
      bolt.innerHTML = `
        <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">
          <path d="${pathData}" stroke="#8A2BE2" stroke-width="3" fill="none" 
                filter="drop-shadow(0 0 5px #8A2BE2) drop-shadow(0 0 10px #4169E1) drop-shadow(0 0 15px #9400D3)" />
        </svg>
      `;
      
      bolt.style.position = 'fixed';
      bolt.style.left = '0';
      bolt.style.top = '0';
      bolt.style.width = '100vw';
      bolt.style.height = '100vh';
      bolt.style.pointerEvents = 'none';
      bolt.style.zIndex = '9999';
      
      document.body.appendChild(bolt);
      
      // Remove after animation
      setTimeout(() => {
        if (bolt.parentNode) {
          bolt.parentNode.removeChild(bolt);
        }
      }, 500);
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Create occasional sparks
      if (Math.random() < 0.1) {
        createSpark(mouseX, mouseY, 0.5);
      }
    };

    // Mouse down handler
    const handleMouseDown = () => {
      setIsClicking(true);
      cursor.classList.add('clicking');
      
      // Create burst of sparks
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          createSpark(mouseX, mouseY, 1.5);
        }, i * 30);
      }
      
      // Create lightning bolt
      createLightningBolt(mouseX, mouseY);
    };

    // Mouse up handler
    const handleMouseUp = () => {
      setIsClicking(false);
      cursor.classList.remove('clicking');
    };

    // Hover handlers
    const handleMouseEnter = (e) => {
      if (e.target.matches('a, button, .btn, .shimmer-btn, .nav-link, input, textarea')) {
        setIsHovering(true);
        cursor.classList.add('hovering');
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches('a, button, .btn, .shimmer-btn, .nav-link, input, textarea')) {
        setIsHovering(false);
        cursor.classList.remove('hovering');
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Start cursor animation
    updateCursor();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className={`lightning-cursor ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
    >
      <div className="cursor-core"></div>
      <div className="cursor-glow"></div>
      <div className="cursor-sparks"></div>
    </div>
  );
};

export default LightningCursor;

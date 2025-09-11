import { useEffect, useRef, useState } from 'react';

const DynamicSpiralBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const spiralsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize spirals
    const initSpirals = () => {
      spiralsRef.current = [];
      const spiralCount = 3 + Math.floor(Math.random() * 3); // 3-5 spirals

      for (let i = 0; i < spiralCount; i++) {
        spiralsRef.current.push({
          id: i,
          centerX: Math.random() * canvas.width,
          centerY: Math.random() * canvas.height,
          radius: 50 + Math.random() * 100,
          angle: Math.random() * Math.PI * 2,
          angleSpeed: (Math.random() - 0.5) * 0.05,
          radiusSpeed: (Math.random() - 0.5) * 0.5,
          centerSpeedX: (Math.random() - 0.5) * 2,
          centerSpeedY: (Math.random() - 0.5) * 2,
          color: `hsl(${120 + Math.random() * 40}, 100%, ${50 + Math.random() * 30}%)`, // Green variations
          opacity: 0.3 + Math.random() * 0.4,
          thickness: 2 + Math.random() * 3,
          segments: 100 + Math.floor(Math.random() * 50),
          direction: Math.random() > 0.5 ? 1 : -1,
          pulseSpeed: 0.01 + Math.random() * 0.02,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    };

    // Draw spiral
    const drawSpiral = (spiral) => {
      ctx.save();
      ctx.globalAlpha = spiral.opacity;
      ctx.strokeStyle = spiral.color;
      ctx.lineWidth = spiral.thickness;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();
      
      const segments = spiral.segments;
      const angleStep = (Math.PI * 4) / segments; // 2 full rotations
      
      for (let i = 0; i < segments; i++) {
        const angle = spiral.angle + (i * angleStep * spiral.direction);
        const currentRadius = spiral.radius + (i * spiral.radius / segments);
        
        // Add pulsing effect
        const pulse = Math.sin(spiral.pulsePhase + i * 0.1) * 10;
        const finalRadius = currentRadius + pulse;
        
        const x = spiral.centerX + Math.cos(angle) * finalRadius;
        const y = spiral.centerY + Math.sin(angle) * finalRadius;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.stroke();
      ctx.restore();
    };

    // Update spiral properties
    const updateSpiral = (spiral) => {
      // Update center position
      spiral.centerX += spiral.centerSpeedX;
      spiral.centerY += spiral.centerSpeedY;
      
      // Bounce off edges
      if (spiral.centerX < 0 || spiral.centerX > canvas.width) {
        spiral.centerSpeedX *= -1;
        spiral.centerX = Math.max(0, Math.min(canvas.width, spiral.centerX));
      }
      if (spiral.centerY < 0 || spiral.centerY > canvas.height) {
        spiral.centerSpeedY *= -1;
        spiral.centerY = Math.max(0, Math.min(canvas.height, spiral.centerY));
      }
      
      // Update angle
      spiral.angle += spiral.angleSpeed;
      
      // Update radius with some variation
      spiral.radius += spiral.radiusSpeed;
      if (spiral.radius < 30 || spiral.radius > 200) {
        spiral.radiusSpeed *= -1;
        spiral.radius = Math.max(30, Math.min(200, spiral.radius));
      }
      
      // Update pulse phase
      spiral.pulsePhase += spiral.pulseSpeed;
      
      // Random direction changes
      if (Math.random() < 0.001) {
        spiral.centerSpeedX = (Math.random() - 0.5) * 2;
        spiral.centerSpeedY = (Math.random() - 0.5) * 2;
        spiral.angleSpeed = (Math.random() - 0.5) * 0.05;
      }
      
      // Random color shifts
      if (Math.random() < 0.0005) {
        spiral.color = `hsl(${120 + Math.random() * 40}, 100%, ${50 + Math.random() * 30}%)`;
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add subtle background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, 'rgba(0, 20, 0, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw spirals
      spiralsRef.current.forEach(spiral => {
        updateSpiral(spiral);
        drawSpiral(spiral);
      });
      
      animationId = requestAnimationFrame(animate);
    };

    initSpirals();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="dynamic-spiral-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        pointerEvents: 'none'
      }}
    />
  );
};

export default DynamicSpiralBackground;

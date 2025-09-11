import { useEffect, useState } from 'react';

const ScrollBackground = () => {
  const [currentBackground, setCurrentBackground] = useState('#0A1C2A');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', color: '#33AB0C' },
        { id: 'about', color: '#113A00' },
        { id: 'events', color: '#010108' },
        { id: 'sessions', color: '#33AB0C' },
        { id: 'glimpse2024', color: '#113A00' },
        { id: 'registration-now-open', color: '#33AB0C' },
        { id: 'contact', color: '#010108' }
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Find the current section based on scroll position
      let activeSection = sections[0];
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            activeSection = section;
            break;
          }
        }
      }
      
      // Update background color with smooth transition
      setCurrentBackground(activeSection.color);
      
      // Apply transparent background with green accents
      document.body.style.transition = 'background 1s ease';
      document.body.style.background = `
        radial-gradient(ellipse at var(--gradient-1-pos, 20% 80%), rgba(0, 255, 65, 0.3) 0%, rgba(0, 255, 65, 0.1) 30%, transparent 70%),
        radial-gradient(ellipse at var(--gradient-2-pos, 80% 20%), rgba(0, 255, 0, 0.25) 0%, rgba(0, 255, 0, 0.08) 30%, transparent 70%),
        radial-gradient(ellipse at var(--gradient-3-pos, 40% 40%), rgba(0, 255, 136, 0.28) 0%, rgba(0, 255, 136, 0.1) 30%, transparent 60%),
        radial-gradient(ellipse at var(--gradient-4-pos, 60% 70%), rgba(0, 255, 65, 0.22) 0%, rgba(0, 255, 65, 0.06) 30%, transparent 50%),
        radial-gradient(ellipse at var(--gradient-5-pos, 30% 30%), rgba(0, 255, 0, 0.18) 0%, rgba(0, 255, 0, 0.05) 30%, transparent 50%),
        radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 255, 65, 0.4) 0%, rgba(0, 255, 65, 0.15) 20%, transparent 40%),
        transparent
      `;
    };

    // Helper function to adjust color brightness
    const adjustColor = (color, amount) => {
      const hex = color.replace('#', '');
      const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
      const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
      const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set background
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default ScrollBackground;

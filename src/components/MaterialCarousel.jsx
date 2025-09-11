import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MaterialCarousel = ({ 
  items = [], 
  autoPlay = true, 
  interval = 5000,
  showIndicators = true,
  showArrows = true,
  className = '',
  onItemClick = null
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const intervalRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, interval, items.length]);

  // Pause on hover
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(autoPlay);

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(autoPlay), 2000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  // Touch/swipe support
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        goToPrevious();
        break;
      case 'ArrowRight':
        e.preventDefault();
        goToNext();
        break;
      case ' ':
        e.preventDefault();
        setIsPlaying(!isPlaying);
        break;
      default:
        break;
    }
  };

  if (!items.length) return null;

  return (
    <div 
      className={`material-carousel ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Carousel"
      aria-live="polite"
    >
      {/* Carousel Container */}
      <div className="carousel-container">
        {/* Navigation Arrows */}
        {showArrows && items.length > 1 && (
          <>
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={goToPrevious}
              aria-label="Previous slide"
              type="button"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={goToNext}
              aria-label="Next slide"
              type="button"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </>
        )}

        {/* Slides Container */}
        <div 
          className="carousel-slides"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="carousel-slide"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={() => onItemClick && onItemClick(items[currentIndex], currentIndex)}
            >
              {items[currentIndex].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        {showIndicators && items.length > 1 && (
          <div className="carousel-indicators" role="tablist">
            {items.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                role="tab"
                aria-selected={index === currentIndex}
                type="button"
              />
            ))}
          </div>
        )}

        {/* Play/Pause Button */}
        {items.length > 1 && (
          <button
            className="carousel-play-pause"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
            type="button"
          >
            <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
          </button>
        )}
      </div>

      {/* Screen Reader Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {items.length}
      </div>
    </div>
  );
};

export default MaterialCarousel;

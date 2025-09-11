import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading...');

  // Memoized loading texts to prevent recreation
  const loadingTexts = useMemo(() => [
    'Initializing AKPESSC 2025...',
    'Loading Power & Energy Congress...',
    'Preparing Event Details...',
    'Almost Ready...'
  ], []);

  // Optimized completion handler
  const handleComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    let currentTextIndex = 0;
    const textInterval = setInterval(() => {
      setLoadingText(loadingTexts[currentTextIndex]);
      currentTextIndex = (currentTextIndex + 1) % loadingTexts.length;
    }, 400); // Slightly faster text changes

    // Optimized progress loading
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          // Immediate completion for faster loading
          setTimeout(handleComplete, 50); // Reduced delay
          return 100;
        }
        return prev + 5; // Faster progress increment
      });
    }, 20); // Reduced interval for smoother progress

    // Optimized fallback timeout
    const fallbackTimeout = setTimeout(handleComplete, 2000); // Reduced timeout

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(fallbackTimeout);
    };
  }, [loadingTexts, handleComplete]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-container">
        <motion.div
          className="loading-logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <svg width="120" height="60" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M20 50 L50 20 L80 50 L110 20 L140 50 L170 20"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.text
              x="100"
              y="80"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              fontWeight="600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              AKPESSC 2025
            </motion.text>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0147ff" />
                <stop offset="50%" stopColor="#ffa9e9" />
                <stop offset="100%" stopColor="#0147ff" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          className="loading-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2>All Kerala Power & Energy Student Congress</h2>
          <motion.p
            key={loadingText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {loadingText}
          </motion.p>
        </motion.div>

        <motion.div
          className="progress-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="progress-text">{progress}%</div>
        </motion.div>

        <motion.div
          className="loading-dots"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

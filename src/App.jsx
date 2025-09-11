import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Registration from './components/Registration';
import Map from './components/Map';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Memoized callback to prevent unnecessary re-renders
  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Optimized loading logic with single timeout
  useEffect(() => {
    // Faster loading for better UX
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Reduced from 1500ms to 1200ms

    return () => clearTimeout(loadingTimeout);
  }, []);

  // Memoized main content to prevent unnecessary re-renders
  const mainContent = useMemo(() => (
    <div key="content">
      <Navbar />
      <main className="main-wrapper">
        <Hero />
        <About />
        <Schedule />
        <Speakers />
        <Registration />
        <Map />
        <Contact />
      </main>
      <Footer />
    </div>
  ), []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          mainContent
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
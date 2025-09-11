import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="o-hero t-home">
      <div className="o-hero__container">

        {/* Main Content - Phamily Structure */}
        <div className="m-title is-inview -isReady">
          {/* AKPESSC Logo */}
          <motion.div
            className="hero-logo"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/assets/images/akpessc.png" 
              alt="AKPESSC Logo" 
              className="hero-logo-img"
            />
          </motion.div>

          <motion.div
            className="a-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="line" style={{ '--delay': '0.1s' }}>
              <span className="tx-xxl">All Kerala Power & Energy</span>
            </div>
            <div className="line" style={{ '--delay': '0.2s' }}>
              <span className="tx-xxl">Student Congress</span>
            </div>
          </motion.div>

          <motion.div
            className="m-textContent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            data-reveal
          >
            <div className="tx-s" style={{ marginTop: '2rem', opacity: 0.8 }}>
              <strong>October 10-11, 2025</strong> • College of Engineering Trivandrum, Kerala
            </div>
          </motion.div>

          <motion.div
            className="o-hero__toggle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a href="#registration" className="a-button -tertiary">
              <span>Register Now</span>
            </a>
            <a href="#about" className="a-button -tertiary">
              <span>Learn More</span>
            </a>
          </motion.div>
        </div>

        {/* Additional Text Content */}
        <motion.div
          className="o-hero__text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          data-text
        >
          <p className="tx-xs">
            Empowering the next generation of power & energy professionals through innovation, 
            collaboration, and cutting-edge technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
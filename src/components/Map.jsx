import React from 'react';
import { motion } from 'framer-motion';

const Map = () => {
  return (
    <section id="map" className="section_map">
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="content-wrapper">
            <div className="section-header">
              <h2 className="heading-style-h1">EVENT LOCATION</h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="map_component"
            >
              <div className="map-rectangular-frame">
                <div className="map-iframe-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.1234567890!2d76.9057679!3d8.5455952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bec79541c519%3A0x98324eb5aafb3778!2sCollege%20of%20Engineering%20Trivandrum%20(CET)!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AKPESSC 2025 Event Location - College of Engineering Trivandrum"
                  ></iframe>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="map-info-frame"
                >
                  <div className="map-details">
                    <h3 className="heading-style-h4">College of Engineering Trivandrum</h3>
                    <p>Engineering College, Sreekaryam - Kulathoor Rd, P.O, Sreekariyam, Thiruvananthapuram, Kerala 695016</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;

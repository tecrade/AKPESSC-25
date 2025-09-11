import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://via.placeholder.com/200x80/ffffff/09543d?text=AKPESSC+2025" 
              alt="AKPESSC 2025 Logo" 
              className="footer-logo"
            />
          </motion.div>

          <motion.div 
            className="footer-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white mb-3 footer-event-title">All Kerala Power & Energy Society Student Congress 2025</h4>
            <p className="text-white-50 mb-4">
              Empowering Minds, Energizing the Future
            </p>
          </motion.div>


          <motion.div 
            className="organizers-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h5 className="organizers-title">Organized By</h5>
            <div className="organizers-logos">
              <div className="organizer-logo">
                <img src="/assets/images/akpessc.png" alt="AKPESSC 2025" />
              </div>
              <div className="organizer-logo">
                <img src="https://via.placeholder.com/160x80/ffffff/09543d?text=IEEE+PES+KC" alt="IEEE PES Kerala Chapter" />
              </div>
              <div className="organizer-logo">
                <img src="https://via.placeholder.com/160x80/ffffff/09543d?text=IEEE+SB+CET" alt="IEEE SB CET" />
              </div>
              <div className="organizer-logo">
                <img src="https://via.placeholder.com/160x80/ffffff/09543d?text=IEEE" alt="IEEE" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="sponsors-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h5 className="sponsors-title">Sponsored By</h5>
            <div className="sponsors-logos">
              <div className="sponsor-logo">
                <img src="https://via.placeholder.com/160x80/ffffff/09543d?text=Sponsor+1" alt="Sponsor 1" />
              </div>
              <div className="sponsor-logo">
                <img src="https://via.placeholder.com/160x80/ffffff/09543d?text=Sponsor+2" alt="Sponsor 2" />
              </div>
              <div className="sponsor-logo">
                <img src="https://via.placeholder.com/160x80/ffffff/09543d?text=Sponsor+3" alt="Sponsor 3" />
              </div>
              <div className="sponsor-logo">
                <img src="https://via.placeholder.com/160x80/ffffff/09543d?text=Sponsor+4" alt="Sponsor 4" />
              </div>
              <div className="sponsor-logo">
                <img src="https://via.placeholder.com/160x80/ffffff/09543d?text=Sponsor+5" alt="Sponsor 5" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="https://www.instagram.com/ieeepesks/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://in.linkedin.com/company/ieeepesks" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=919747150336&text=" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="mailto:akpessc2025@ieee.org">
              <i className="bi bi-envelope"></i>
            </a>
          </motion.div>

          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="row">
              <div className="col-md-4 mb-3">
                <h6 className="text-white mb-2">Dr. Boby Philip</h6>
                <p className="text-white-50 small mb-1">Chair, IEEE PES Kerala Chapter</p>
                <p className="text-white-50 small">
                  <a href="tel:+919495741482" className="text-white-50">+91 94957 41482</a>
                </p>
                <p className="text-white-50 small">
                  <a href="mailto:boby.philip@ieee.org" className="text-white-50">boby.philip@ieee.org</a>
                </p>
              </div>
              
              <div className="col-md-4 mb-3">
                <h6 className="text-white mb-2">Aravind R</h6>
                <p className="text-white-50 small mb-1">SR, IEEE PES Kerala Chapter</p>
                <p className="text-white-50 small">
                  <a href="tel:+919495741482" className="text-white-50">+91 94957 41482</a>
                </p>
                <p className="text-white-50 small">
                  <a href="mailto:aravind.r@ieee.org" className="text-white-50">aravind.r@ieee.org</a>
                </p>
              </div>
              
              <div className="col-md-4 mb-3">
                <h6 className="text-white mb-2">Anvitha Vinod</h6>
                <p className="text-white-50 small mb-1">Chair, IEEE SB CET</p>
                <p className="text-white-50 small">
                  <a href="tel:+917736128024" className="text-white-50">+91 7736128024</a>
                </p>
                <p className="text-white-50 small">
                  <a href="mailto:anvithavinod@ieee.org" className="text-white-50">anvithavinod@ieee.org</a>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="copyright"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <p className="text-white-50 small">
              Copyright © 2025 IEEE PES Kerala Chapter. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
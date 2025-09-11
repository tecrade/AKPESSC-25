import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div data-animation="default" className="navbar_component" role="banner">
      <div className="navbar_container">
        <a href="#" className="navbar_logo-link" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          <img src="/assets/images/akpessc.png" alt="AKPESSC 2025" className="navbar-logo-img" />
        </a>
        
        <nav role="navigation" className={`navbar_menu ${isMenuOpen ? 'is-page-height-tablet' : ''}`}>
          <div className="navbar_menu-links">
            <a href="#hero" className="navbar_link" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a>
            <a href="#schedule" className="navbar_link" onClick={(e) => { e.preventDefault(); scrollToSection('schedule'); }}>Schedule</a>
            <a href="#speakers" className="navbar_link" onClick={(e) => { e.preventDefault(); scrollToSection('speakers'); }}>Speakers</a>
            <a href="#events" className="navbar_link" onClick={(e) => { e.preventDefault(); scrollToSection('events'); }}>Events</a>
            <a href="#contact" className="navbar_link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
            <div className="navbar_desktop-register">
              <a href="#registration" className="navbar_register-link" onClick={(e) => { e.preventDefault(); scrollToSection('registration'); }}>
                <span>Register</span>
              </a>
            </div>
            <div className="navbar_mobile-register">
              <a href="#registration" className="navbar_register-link" onClick={(e) => { e.preventDefault(); scrollToSection('registration'); }}>
                <span>Register</span>
              </a>
            </div>
          </div>
        </nav>
        
        
        <div className={`navbar_menu-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="menu-icon">
            <div className="menu-icon_line-top"></div>
            <div className="menu-icon_line-middle">
              <div className="menu-icon_line-middle-inner"></div>
            </div>
            <div className="menu-icon_line-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
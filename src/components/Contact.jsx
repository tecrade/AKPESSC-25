import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section_template">
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact_component"
          >
            <div className="contact_top-grid">
              <div className="contact_form-wrapper">
                <div className="contact-form-header">
                  <h2 className="heading-style-h5 text-style-allcaps">get in touch</h2>
                  <p>Reach out with inquiries about tickets, partnerships, or event details.</p>
                </div>
                
                <form className="contact_form" onSubmit={handleSubmit}>
                  <input
                    className="contact-form_input"
                    maxLength="256"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    className="contact-form_input"
                    maxLength="256"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <input
                    className="contact-form_input"
                    maxLength="256"
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  <textarea
                    placeholder="Message"
                    maxLength="5000"
                    name="message"
                    className="contact-form_input is-area"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  <input type="submit" className="button is-submit" value="Submit"/>
                </form>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
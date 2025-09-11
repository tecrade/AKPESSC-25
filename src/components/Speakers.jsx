import React from 'react';
import { motion } from 'framer-motion';

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      title: "Chief Engineer, KSEB",
      image: "https://cdn.prod.website-files.com/681a3073065f80d516f5a43d/681b65083162ca0b5844a64f_Image.avif"
    },
    {
      id: 2,
      name: "Prof. Suresh Nair",
      title: "Director, CET Trivandrum",
      image: "https://cdn.prod.website-files.com/681a3073065f80d516f5a43d/681b650932d2f07dffe932b0_Image-3.avif"
    },
    {
      id: 3,
      name: "Dr. Priya Menon",
      title: "Research Head, NTPC",
      image: "https://cdn.prod.website-files.com/681a3073065f80d516f5a43d/681b6509d658fcb7e71e7660_Image-1.avif"
    },
    {
      id: 4,
      name: "Eng. Vikram Singh",
      title: "CTO, PowerGrid Corporation",
      image: "https://cdn.prod.website-files.com/681a3073065f80d516f5a43d/681b650956abad1d07fe2e38_Image-2.avif"
    }
  ];

  return (
    <section id="speakers" className="section_speakers">
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="content-wrapper">
            <div className="section-header">
              <h2 className="heading-style-h1">KEYNOTE SPEAKERS</h2>
            </div>
            
            {/* Commented out original image cards */}
            {/* 
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="speakers_grid"
            >
              {speakers.map((speaker, index) => (
                <React.Fragment key={speaker.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="speakers-details"
                  >
                    <h3 className="heading-style-h4">{speaker.name}</h3>
                    <div>{speaker.title}</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.1 }}
                    className="speakers-image-wrapper"
                  >
                    <img src={speaker.image} loading="lazy" alt={speaker.name} className="image"/>
                  </motion.div>
                </React.Fragment>
              ))}
            </motion.div>
            */}

            {/* New rounded rectangle cards with overlay animations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="card__collection clear-fix"
            >
              {speakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`cards ${index === 0 ? 'cards--two' : index === 1 ? 'cards--three' : 'cards--two'}`}
                >
                  <img src={speaker.image} className="img-responsive" alt={speaker.name} />
                  
                  {index === 0 && (
                    <>
                      <span className="cards--two__rect"></span>
                      <span className="cards--two__tri"></span>
                      <p>{speaker.name}</p>
                      <ul className="cards__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                      </ul>
                    </>
                  )}
                  
                  {index === 1 && (
                    <>
                      <span className="cards--three__rect-1">
                        <span className="shadow-1"></span>
                        <p>{speaker.name}</p>
                      </span>
                      <span className="cards--three__rect-2">
                        <span className="shadow-2"></span>
                      </span>
                      <span className="cards--three__circle"></span>
                      <ul className="cards--three__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                      </ul>
                    </>
                  )}
                  
                  {index >= 2 && (
                    <>
                      <span className="cards--two__rect"></span>
                      <span className="cards--two__tri"></span>
                      <p>{speaker.name}</p>
                      <ul className="cards__list">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                      </ul>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
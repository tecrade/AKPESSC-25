import React from 'react';
import { motion } from 'framer-motion';

const About = () => {

  const organizations = [
    {
      id: 1,
      title: "IEEE PES Kerala Chapter",
      description: "IEEE Power & Energy Society (PES) is a global, non-profit community of over 37,000 professionals, academics, and students dedicated to advancing power and energy technologies, industry standards, and education.",
      details: "Founded in 1999 with just 12 members, the IEEE PES Kerala Chapter has grown into a vibrant hub for collaboration, knowledge sharing, and skill development. Through conferences, seminars, workshops, and networking events, it enables members to stay ahead in the dynamic power and energy sector. Its mission is to provide cutting-edge scientific and engineering knowledge for the betterment of society and to serve as the preferred platform for professional growth in the field.",
      icon: "⚡"
    },
    {
      id: 2,
      title: "IEEE SB CET",
      description: "IEEE SB CET is the student branch of IEEE at the College of Engineering Trivandrum, known for its vibrant community and technical excellence. It provides a dynamic platform for students to explore emerging technologies, participate in hands-on workshops, attend conferences and seminars, and engage with industry professionals.",
      details: "The branch hosts 8 active technical societies, 1 affinity group (Women in Engineering – WIE), and 1 special interest group (SIGHT – focused on humanitarian technology). Through these bodies, IEEE SB CET drives impactful initiatives in technical education, innovation, and social responsibility—making it a hub for future-ready engineers and a valuable partner for industry collaborations.",
      icon: "🎓"
    },
    {
      id: 3,
      title: "AKPESSC 2025",
      description: "AKPESSC 2025 is the flagship annual congregation of IEEE PES Kerala Chapter, envisioned as a melting pot of innovation, technical advancement, and collaborative spirit. This prestigious event brings together power and energy engineering students from across Kerala for two days of learning, networking, and professional development opportunities.",
      details: "Hosted this year by the IEEE Student Branch of College of Engineering Trivandrum, the congress will unfold over two impactful days—October 10th and 11th, 2025—bringing together budding engineers, researchers, and volunteers from across the state. The event aims to: • Foster cutting-edge discussions in power and energy engineering • Celebrate the contributions of IEEE volunteers • Inspire novel ideas through interactive platforms and workshops • Create vibrant opportunities for professional networking.",
      icon: "🏆"
    }
  ];

  return (
    <section id="about" className="section_feature">
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="content-wrapper">
            <div className="section-header">
              <h2 className="heading-style-h1">ABOUT AKPESSC 2025</h2>
            </div>
            
            <div className="feature_component">
              {organizations.map((org, index) => (
                <motion.div
                  key={org.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={index === 0 ? "feature_card-first" : "feature_card"}
                >
                  <h3>{org.title}</h3>
                  <p>{org.description}</p>
                  <div className="card-details">
                    <p>{org.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
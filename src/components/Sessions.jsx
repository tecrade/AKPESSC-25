import { motion } from 'framer-motion';
import { useState } from 'react';

const Sessions = () => {
  const [activeDay, setActiveDay] = useState(1);

  const sessions = {
    1: [
      {
        id: 'inauguration',
        title: 'Inauguration Ceremony',
        time: '9:00 AM - 10:30 AM',
        description: 'Welcome address, keynote speeches, and official opening of AKPESSC 2025',
        image: '/assets/images/team akpessc.png',
        type: 'ceremony',
        speaker: 'Chief Guest & IEEE PES Kerala Chapter'
      },
      {
        id: 'workshop-ai',
        title: 'AI in Power Systems Workshop',
        time: '10:45 AM - 12:30 PM',
        description: 'Hands-on workshop on AI applications in power engineering and smart grid technology',
        image: '/assets/images/lab akpessc.png',
        type: 'workshop',
        speaker: 'Industry Expert Panel'
      },
      {
        id: 'lunch',
        title: 'Lunch Break',
        time: '12:30 PM - 1:30 PM',
        description: 'Networking lunch with participants and industry professionals',
        image: '/assets/images/rooming akpessc.png',
        type: 'break',
        speaker: 'All Participants'
      },
      {
        id: 'technical-session-1',
        title: 'Renewable Energy Technologies',
        time: '1:30 PM - 3:00 PM',
        description: 'Technical session on solar, wind, and hydro power technologies',
        image: '/assets/images/energy.png',
        type: 'technical',
        speaker: 'Dr. Renewable Energy Expert'
      },
      {
        id: 'panel-discussion',
        title: 'Future of Power Systems',
        time: '3:15 PM - 4:45 PM',
        description: 'Panel discussion on emerging trends and challenges in power systems',
        image: '/assets/images/group akpessc.png',
        type: 'panel',
        speaker: 'Industry Leaders Panel'
      }
    ],
    2: [
      {
        id: 'industrial-visit',
        title: 'Industrial Visit - Power Plant',
        time: '8:00 AM - 12:00 PM',
        description: 'Field visit to major power generation facility and substation',
        image: '/assets/images/field visit akpessc.png',
        type: 'visit',
        speaker: 'Plant Engineers'
      },
      {
        id: 'lunch-day2',
        title: 'Lunch Break',
        time: '12:00 PM - 1:00 PM',
        description: 'Lunch at the industrial facility',
        image: '/assets/images/rooming akpessc.png',
        type: 'break',
        speaker: 'All Participants'
      },
      {
        id: 'technical-talk',
        title: 'Smart Grid Implementation',
        time: '2:00 PM - 3:30 PM',
        description: 'Expert talk on smart grid technologies and implementation challenges',
        image: '/assets/images/energy.png',
        type: 'talk',
        speaker: 'Smart Grid Specialist'
      },
      {
        id: 'workshop-smart',
        title: 'Smart Metering Workshop',
        time: '3:45 PM - 5:15 PM',
        description: 'Hands-on workshop on smart metering systems and IoT applications',
        image: '/assets/images/lab akpessc.png',
        type: 'workshop',
        speaker: 'IoT & Smart Metering Expert'
      },
      {
        id: 'cultural-night',
        title: 'Cultural Night',
        time: '7:00 PM - 10:00 PM',
        description: 'Evening of cultural performances, entertainment, and networking',
        image: '/assets/images/dance akpessc.png',
        type: 'cultural',
        speaker: 'Cultural Teams'
      }
    ],
    3: [
      {
        id: 'networking',
        title: 'Professional Networking Session',
        time: '9:00 AM - 10:30 AM',
        description: 'Connect with industry professionals, alumni, and fellow students',
        image: '/assets/images/rooming akpessc.png',
        type: 'networking',
        speaker: 'Industry Professionals'
      },
      {
        id: 'competition',
        title: 'Technical Competition',
        time: '10:45 AM - 12:30 PM',
        description: 'Showcase your skills in power engineering challenges and problem-solving',
        image: '/assets/images/group akpessc.png',
        type: 'competition',
        speaker: 'Competition Judges'
      },
      {
        id: 'lunch-day3',
        title: 'Lunch Break',
        time: '12:30 PM - 1:30 PM',
        description: 'Final networking lunch',
        image: '/assets/images/rooming akpessc.png',
        type: 'break',
        speaker: 'All Participants'
      },
      {
        id: 'research-presentations',
        title: 'Student Research Presentations',
        time: '1:30 PM - 3:00 PM',
        description: 'Students present their research work and innovative projects',
        image: '/assets/images/lab akpessc.png',
        type: 'presentation',
        speaker: 'Student Researchers'
      },
      {
        id: 'valedictory',
        title: 'Valedictory Ceremony',
        time: '3:15 PM - 4:30 PM',
        description: 'Closing ceremony, award distribution, and vote of thanks',
        image: '/assets/images/statue akpessc.png',
        type: 'ceremony',
        speaker: 'AKPESSC Organizing Committee'
      }
    ]
  };

  const getTypeColor = (type) => {
    const colors = {
      ceremony: '#0147FF',
      workshop: '#09543d',
      visit: '#f45c24',
      talk: '#7c3aed',
      cultural: '#ffa9e9',
      networking: '#dc2626',
      competition: '#ffc200',
      panel: '#10b981',
      technical: '#8b5cf6',
      presentation: '#f59e0b',
      break: '#6b7280'
    };
    return colors[type] || '#0147FF';
  };

  return (
    <section id="sessions" className="sessions-section section">
      <div className="container">
        <motion.div
          className="section-header text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Sessions & Schedule</h2>
          <p className="section-subtitle">
            Detailed program across three days of AKPESSC 2025
          </p>
        </motion.div>

        {/* Day Selector */}
        <motion.div
          className="day-selector mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="day-tabs">
            {[1, 2, 3].map((day) => (
              <motion.button
                key={day}
                className={`day-tab ${activeDay === day ? 'active' : ''}`}
                onClick={() => setActiveDay(day)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Day {day}
                <span className="day-date">
                  {day === 1 && 'Oct 10'}
                  {day === 2 && 'Oct 11'}
                  {day === 3 && 'Oct 12'}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Sessions List */}
        <motion.div
          className="sessions-list"
          key={activeDay}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {sessions[activeDay].map((session, index) => (
            <motion.div
              key={session.id}
              className="session-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="session-card">
                <div className="session-image">
                  <img src={session.image} alt={session.title} />
                  <div className="session-type-badge" style={{ backgroundColor: getTypeColor(session.type) }}>
                    {session.type.toUpperCase()}
                  </div>
                </div>
                <div className="session-content">
                  <div className="session-time">{session.time}</div>
                  <h5 className="session-title">
                    <span className="session-number">{index + 1}.</span>
                    {session.title}
                  </h5>
                  <p className="session-description">{session.description}</p>
                  <div className="session-speaker">
                    <i className="bi bi-person-fill"></i>
                    <span>{session.speaker}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="sessions-cta text-center mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Don't Miss Any Session!</h3>
          <p className="mb-4">
            Register now to secure your spot in all sessions and activities.
          </p>
          <motion.button
            className="btn btn-primary"
            onClick={() => {
              const element = document.getElementById('registration');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Sessions;

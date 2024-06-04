// Todo: Best Edit Code Ready for Merge and Commit
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pageStyle = {
    backgroundColor: '#f97316',
    padding: '2rem 1rem',
  };

  const containerStyle = {
    padding: '2rem',
    maxWidth: '1350px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#f97316',
    border: '5px solid #ddd',
    borderRadius: '30px',
    boxShadow: '0 15px 24px rgba(0, 0, 0, 0.1)',
  };

  const itemStyle = {
    marginBottom: '3rem',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '90%',
    maxWidth: '600px',
    margin: '1.5rem auto',
    borderRadius: '15px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  };

  const textContainerStyle = {
    width: isMobile ? '100%' : '70%',
    maxWidth: '750px',
    margin: '1rem auto',
    padding: '1.5rem',
    border: '2px solid #ddd',
    borderRadius: '18px',
    backgroundColor: '#ffffff',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: '1.5rem',
  };

  const paragraphStyle = {
    color: '#4a5568',
    fontSize: '1.25rem',
    textAlign: 'justify',
    lineHeight: '1.6',
    marginBottom: '1.85rem',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div style={pageStyle}>
      <motion.section
        style={containerStyle}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div style={itemStyle} variants={itemVariants}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src='/god.jpg' alt="Description of the image" style={imageStyle} />
          </motion.div>
          <motion.div 
            style={textContainerStyle}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h1 style={headingStyle}>About Us</h1>
            <p style={paragraphStyle}>
              Welcome to Vedic Vani, your gateway to the profound teachings of the Bhagavad Gita. We are dedicated to preserving and sharing the timeless wisdom found in its chapters and shlokas. Vedic Vani serves as a digital haven for those seeking enlightenment and a deeper understanding of life's fundamental principles.
            </p>
          </motion.div>
        </motion.div>

        <motion.div style={itemStyle} variants={itemVariants}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src='/mission.jpg' alt="Description of the image" style={imageStyle} />
          </motion.div>
          <motion.div 
            style={textContainerStyle}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h1 style={headingStyle}>Our Mission</h1>
            <p style={paragraphStyle}>
              At Vedic Vani, our mission is to make the spiritual teachings of the Bhagavad Gita accessible to everyone, regardless of their background or beliefs. We strive to bridge the gap between the ancient wisdom of the Gita and the modern world, fostering a greater appreciation for its universal truths and life-changing lessons.
            </p>
          </motion.div>
        </motion.div>

        <motion.div style={itemStyle} variants={itemVariants}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src='/bhagvatgita.jpg' alt="Description of the image" style={imageStyle} />
          </motion.div>
          <motion.div 
            style={textContainerStyle}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <h1 style={headingStyle}>The Essence of the Bhagavad Gita</h1>
            <p style={paragraphStyle}>
              The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that forms part of the Indian epic Mahabharata. It consists of a conversation between Prince Arjuna and Lord Krishna, who serves as his charioteer and spiritual guide. This sacred dialogue explores the moral and philosophical dilemmas faced by Arjuna on the battlefield and offers profound insights into duty, righteousness, and the path to spiritual realization.
            </p>
          </motion.div>
        </motion.div>

        <motion.div style={itemStyle} variants={itemVariants}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src='/ImportanceGita.jpg' alt="Description of the image" style={imageStyle} />
          </motion.div>
          <motion.div 
            style={textContainerStyle}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <h1 style={headingStyle}>Importance of Gita</h1>
            <p style={paragraphStyle}>
              The Bhagavad Gita, an ancient Hindu scripture, provides timeless guidance on duty and spiritual devotion. In just 700 verses, it offers profound insights into life's purpose, serving as a spiritual compass for seekers worldwide, inspiring them on the path to self-realization, inner peace, and enlightenment.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutUs;

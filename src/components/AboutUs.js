
import React, { useState, useEffect } from 'react';
import image1 from './krishnabg.png'; // Update this path to the uploaded image file

function AboutUs() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const MainSectionStyle = {
    backgroundColor: '#FF7500',
    color: 'white',
  };

  const aboutSectionStyle = {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: isMobile ? 'column' : 'row',
    padding: '10px',
    backgroundColor: '#FF7500',
    color: 'white',
    minHeight: '50vh',
  };

  const imageContainerStyle = {
    textAlign: 'center',
    marginBottom: isMobile ? '20px' : '0',
    marginTop: isMobile ? '0' : '-10px',
  };

  const profileImageStyle = {
    width: isMobile ? '250px' : '360px',
    height: isMobile ? '250px' : '360px',
    borderRadius: '50%',
    border: '10px solid #FFFFFF',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  };

  const textContainerStyle = {
    textAlign: isMobile ? 'center' : 'left',
    marginTop: isMobile ? '0' : '1px',
    padding: isMobile ? '10px' : '50px',
    maxWidth: '600px',
  };

  const infoMainCardsStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
    padding: '10px',
    marginTop: '8px',
  };

  if (isMobile) {
    infoMainCardsStyle.justifyContent = 'space-around';
  }

  const infoCardStyle = {
    backgroundColor: '#FFFFFF',
    color: '#FF7500',
    padding: '12px',
    margin: isMobile ? '10px' : '18px',
    borderRadius: '35px',
    flex: '1',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    width: '10px',
    height: '250px',
  };
  if (isMobile) {
    infoCardStyle.flex = '100%'
    infoCardStyle.minWidth = '180px'
    infoCardStyle.maxWidth = '281px';
    infoCardStyle.height = '380px';
  }

  const headingStyle = {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '6px',
    marginBottom: '1rem',
  };

  const pStyle = {
    fontSize: '17px',
    marginBottom: '1rem',
  };

  const linkStyle = {
    padding: '7px 18px 7px',
    color: '#FF7500',
    backgroundColor: '#FFFFFF',
    textDecoration: 'none',
    borderRadius: '15px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, transform 0.2s',
    // display: 'inline-block',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
  };

  const onMouseOver = (e) => {
    e.target.style.backgroundColor = '#FFA733';
    e.target.style.transform = 'scale(1.05)';
  };

  const onMouseOut = (e) => {
    e.target.style.backgroundColor = '#fff';
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div style={MainSectionStyle}>
      <div style={aboutSectionStyle}>
        <div style={imageContainerStyle}>
          <img
            src={image1}
            alt="About Us"
            style={profileImageStyle}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          />
        </div>
        <div style={textContainerStyle}>
          <h2 style={headingStyle}>About Us</h2>
          <p style={pStyle}>
            Welcome to Vedic Vani, your gateway to the profound teachings of the Bhagavad Gita, Chronicle, and Bhakti geet. We are dedicated to preserving and sharing the timeless wisdom found in their chapters, shlokas, and verses. Vedic Vani serves as a digital haven for those seeking enlightenment and a deeper understanding of life's fundamental principles. By relating these teachings to Hindu mythology and referencing revered texts, we make ancient knowledge accessible and relevant for modern seekers. Join us on this spiritual journey.
          </p>

          <a
            href="https://github.com/UjjwalSaini07"
            style={linkStyle}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
          >
            - Made By Ujjwal Saini ❣️
          </a>
        </div>
      </div>
      <div style={infoMainCardsStyle}>
        <div style={infoCardStyle}>
          <h3 style={headingStyle}>Our Mission</h3>
          <p>
            At Vedic Vani, our mission is to make the spiritual teachings of the Bhagavad Gita accessible to everyone, regardless of their background or beliefs. We strive to bridge the gap between the ancient wisdom of the Gita and the modern world, fostering a greater appreciation for its universal truths and life-changing lessons.
          </p>
        </div>
        <div style={infoCardStyle}>
          <h3 style={headingStyle}>Selfless duty and devotion</h3>
          <p>
            The Bhagavad Gita offers profound insights into life, duty, and spirituality. It emphasizes selfless action, knowledge, devotion to God, understanding one's dharma, detachment, and inner peace through meditation and self-discipline. It encourages living a righteous and spiritually wise life.
          </p>
        </div>
        <div style={infoCardStyle}>
          <h3 style={headingStyle}>Importance of Gita</h3>
          <p>
            The Bhagavad Gita, an ancient Hindu scripture, offers timeless guidance on duty and spiritual devotion. In 700 verses, it provides profound insights into life's purpose, serving as a spiritual compass for seekers, inspiring them towards self-realization, inner peace, and enlightenment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;


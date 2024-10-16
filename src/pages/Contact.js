import React, { useEffect } from "react";
import { motion } from "framer-motion";

import krishna from "../components/CodeAssets/krishnabg.png";
import logounder from "../components/CodeAssets/LogoUnder.png";


const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
  },
});

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const script = document.createElement('script');
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const isMobile = window.innerWidth <= 768;

  const formContainerStyle = {
    boxShadow: '10px 12px 16px rgba(0, 0, 0, 0.2)',
    borderRadius: '30px',
    padding: '1rem', // Default padding for both PC and mobile
    marginTop: '1rem',
    maxWidth: '980px', // Default max-width for PC
    maxHeight: '750px', // Default max-height for PC
    margin: '0 auto',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Ensure the container takes the full height of its parent
  };

  // Adjust styles for mobile
  if (isMobile) {
    formContainerStyle.padding = '1rem 1rem 7.5rem';
    formContainerStyle.maxWidth = '530px'; // Adjust max-width for mobile
    formContainerStyle.maxHeight = '500px'; // Adjust max-height for mobile
    formContainerStyle.height = '90vh'; // Ensure the container takes the full height of the viewport on mobile
  }

  const pContainerStyle = {
    display: isMobile ? 'none' : 'block', // Hide on mobile, show on PC
    backgroundColor: '#fff',
    border: '2px solid #ddd',
    boxShadow: '15px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '2rem', // Padding remains consistent
    borderRadius: '30px',
    margin: '1.5rem 10',
    marginTop: '0.2rem',
    fontSize: '1rem',
    color: '#333',
    maxWidth: '980px', // Default max-width for PC
    margin: '0 auto',
    marginTop: '-2rem'
  };

  const containerStyle = {
    display: isMobile ? 'block' : 'none', // Show on mobile, hide on PC
    boxShadow: '10px 12px 16px rgba(0, 0, 0, 0.2)',
    borderRadius: '30px',
    padding: isMobile ? '2rem' : '1rem', // Adjust padding for PC and mobile
    marginTop: '1rem',
    maxWidth: isMobile ? '530px' : '980px', // Adjust max-width for PC and mobile
    margin: '0 auto',
    backgroundColor: '#fff',
    marginBottom: '2rem', // Add space between containers
    marginTop: '-4rem'
  };

  return (
    <section style={{ backgroundColor: '#ff7800', minHeight: '100vh', padding: '2rem' }}>
      <div id="detail_fill_container" className="flex justify-center items-center">
        <img id="contact_image" src={krishna} alt='krishna' />
        <div id="Form_container">
          <motion.div
            variants={textVariant(0.46)}
            initial="hidden"
            animate="show"
          >
            <div className="relative mb-3 flex justify-center items-center">
              <img data-aos="fade-right" style={{ top: isMobile ? '2rem' : '1.5rem', zIndex: 1 }} className="backdrop-opacity-15 absolute w-[25rem] max-w-full transform -translate-x-1/2" src={logounder} alt="logo" />
              <p style={{ fontSize: isMobile ? '4rem' : '5rem', color: 'blue', position: 'relative', zIndex: 1 }} className="font-[Alegreya] text-center">VedicVani</p>
            </div>
          </motion.div>
          <motion.div
            variants={textVariant(0.92)}
            initial="hidden"
            animate="show"
          >
          <div style={pContainerStyle}>
            <motion.div
              variants={textVariant(1.42)}
              initial="hidden"
              animate="show"
            >
            <p>
              Welcome to Vedic Vani! We share the wisdom of the Vedic tradition. For questions, collaborations, or just to say hello, reach out to us. Seeking guidance, feedback, or partnership opportunities? Our team is here to help. Contact us using the details below. We value your thoughts and respond promptly. Thank you for your interest in Vedic Vani - we look forward to connecting with you!
              <span style={{ display: 'block', marginTop: '10px' }}>Developer - Ujjwal Saini</span>
            </p>
            </motion.div>
          </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={textVariant(0.92)}
        initial="hidden"
        animate="show"
      >
      <div id="detail_fill_container" className="flex relative justify-center items-center" style={containerStyle}>
        <motion.div
          variants={textVariant(1.92)}
          initial="hidden"
          animate="show"
        >
        <p>
          Welcome to Vedic Vani! We share the wisdom of the Vedic tradition. For questions, collaborations, or just to say hello, reach out to us. Seeking guidance, feedback, or partnership opportunities? Our team is here to help. Contact us using the details below. We value your thoughts and respond promptly. Thank you for your interest in Vedic Vani - we look forward to connecting with you!
          <span style={{ display: 'block', marginTop: '10px' }}>Developer - Ujjwal Saini</span>
        </p>
        </motion.div>
      </div>
      </motion.div>

      {/* Form container */}
      <motion.div
        variants={textVariant(2.42)}
        initial="hidden"
        animate="show"
      >
      <div id="detail_fill_container" className="flex relative justify-center items-center" style={formContainerStyle}>
        {!isMobile ? (
          <div
            className="visme_d"
            data-title="VedicVani_ContactForm"
            data-url="epqw3qmv-vedicvani-contactform"
            data-domain="forms"
            data-full-page="false"
            data-min-height="450px"
            data-form-id="76882"
          />
        ) : (
          <div
            className="visme_d"
            data-title="VedicVani_ContactForm"
            data-url="epqw3qmv-vedicvani-contactform?sidebar=true"
            data-domain="forms"
            data-full-page="false"
            data-min-height="600px" 
            data-form-id="76882"
          />
        )}
      </div>
      </motion.div>
    </section>
  );
}

export default Contact;

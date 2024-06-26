import React, { useEffect } from "react";
import krishna from "./krishnabg.png";
import logounder from "../components/LogoUnder.png";
import '../components/style.css';

const Contact = () => {
  useEffect(() => {
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
  };

  // Adjust styles for mobile
  if (isMobile) {
    formContainerStyle.padding = '2rem'; // Increase padding on mobile
    formContainerStyle.maxWidth = '530px'; // Adjust max-width for mobile
    formContainerStyle.maxHeight = '540px'; // Adjust max-height for mobile
  }

  return (
    <section style={{ backgroundColor: '#ff7800', minHeight: '100vh', padding: '2rem' }}>
      <div id="detail_fill_container" className="flex justify-center items-center">
        <img id="contact_image" src={krishna} alt='krishna' />
        <div id="Form_container">
          <div className="relative mb-8 flex justify-center items-center">
            <img data-aos="fade-right" style={{ top: '1.85rem', zIndex: 1 }} className="backdrop-opacity-10 absolute w-[30rem] max-w-full transform -translate-x-1/2" src={logounder} alt="logo" />
            <p style={{ fontSize: '5rem', color: 'blue', position: 'relative', zIndex: 1 }} className="font-[Alegreya] text-center">VedicVani</p>
          </div>
          <div style={{
            backgroundColor: '#fff',
            border: '1.5px solid #ddd',
            boxShadow: '10px 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '2rem', // Padding remains consistent
            borderRadius: '30px',
            margin: '1.5rem 0',
            marginTop: '1rem',
            fontSize: '1rem',
            color: '#333',
            maxWidth: isMobile ? '1000%' : 'auto', // Adjusted maxWidth for mobile
            marginLeft: isMobile ? 'auto' : 'unset', // Center align on mobile
            marginRight: isMobile ? 'auto' : 'unset', // Center align on mobile
          }}>
            <p>
              Welcome to Vedic Vani! We share the wisdom of the Vedic tradition. For questions, collaborations, or just to say hello, reach out to us. Seeking guidance, feedback, or partnership opportunities? Our team is here to help. Contact us using the details below. We value your thoughts and respond promptly. Thank you for your interest in Vedic Vani - we look forward to connecting with you!
            </p>
          </div>
        </div>
      </div>

      {/* Form container */}
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
    </section>
  );
}

export default Contact;

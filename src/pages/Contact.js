// Todo: Changes Occur
import React from "react";
import krishna from "./krishnabg.png";
import img from '../assets/images/Contact us-amico.png';
import logounder from "../components/LogoUnder.png";
import '../components/style.css'

const Contact = () => {
  return (
    <section style={{ backgroundColor: '#ff7800', minHeight: '100vh', padding: '2rem' }}>
      <div id="detail_fill_container" className="flex justify-center items-center">
        <img id="contact_image" src={krishna} alt='krishna' />
        <div id="Form_container">
          <div className="relative mb-8 flex justify-center items-center">
            <img data-aos="fade-right" style={{ top: '1.60rem', zIndex: 1 }} className="backdrop-opacity-1 absolute w-[28rem] max-w-full transform -translate-x-1/2" src={logounder} alt="logo" />
            <p style={{ fontSize: '5rem', color: 'blue', position: 'relative', zIndex: 1 }} className="font-[Alegreya] text-center">VedicVani</p>
          </div>
          <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '2rem', borderRadius: '8px', margin: '2rem 0', fontSize: '1.2rem', color: '#333' }}>
            <p>Welcome to Vedic Vani! We're dedicated to sharing the wisdom and teachings of the Vedic tradition with the world. If you have any questions about our project, want to collaborate, or simply want to say hello, we'd love to hear from you. Whether you're seeking guidance, have feedback to share, or want to explore partnership opportunities, our team is here to assist you. Feel free to reach out to us through the contact details provided below. Your thoughts and inquiries are valuable to us, and we endeavor to respond promptly to all messages. Thank you for your interest in Vedic Vani - we look forward to connecting with you!</p>
          </div>
        </div>
      </div>
      <div id="detail_fill_container" className="flex relative justify-center items-center" style={{ backgroundColor: 'linear-gradient(to right, #ff7e5f, #feb47b)', boxShadow: '0 12px 16px rgba(0, 0, 0, 0.2)', borderRadius: '12px', padding: '2rem', marginTop: '2rem' }}>
        <p id="head" style={{ position: 'absolute', textAlign: 'center', top: '2%', fontSize: '2.5rem', fontWeight: '900', color: '#d400d4', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>Contact Our Team</p>
        <div id="Form_container" className="flex justify-center items-center flex-col gap-5" style={{ width: '100%', maxWidth: '600px', padding: '2rem', border: '1px solid #ddd', borderRadius: '12px', backgroundColor: '#ffffffdd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <p style={{ fontSize: '2rem', color: '#333' }}>Contact</p>
          <input className="p-3" type="text" placeholder="Name" style={{ width: '100%', backgroundColor: '#f9f9f9', border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }} />
          <input className="p-3" type="text" placeholder="Email" style={{ width: '100%', backgroundColor: '#f9f9f9', border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }} />
          <textarea className="p-3" type="text" placeholder="Message" style={{ width: '100%', backgroundColor: '#f9f9f9', border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }} />
          <button className="Submit_button" style={{ backgroundColor: '#000', color: '#fff', padding: '1rem 4rem', borderRadius: '8px', position: 'relative', overflow: 'hidden', textTransform: 'uppercase', fontWeight: '900', transition: 'all 0.3s ease' }}>
            <span className="new" style={{ display: 'block', transform: 'scale(0)', transition: 'transform 0.2s' }}>{`submit :)`}</span>
            <div className="old" style={{ position: 'absolute', inset: '0', display: 'grid', placeItems: 'center' }}>
              <span style={{ background: 'linear-gradient(159deg, #00ccff54, #0e1538, #d400d466)', color: 'white', display: 'block', clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}>SUBMIT</span>
              <span aria-hidden style={{ background: 'linear-gradient(159deg, #00ccff54, #0e1538, #d400d466)', color: 'white', display: 'block', clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}>SUBMIT</span>
            </div>
          </button>
        </div>
        <img id="contact_image" src={img} alt="images" style={{ width: '50%', padding: '1rem' }} />
      </div>
    </section>
  )
}

export default Contact;
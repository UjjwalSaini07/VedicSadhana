import React from "react";
import krishna from "./krishnabg.png";
import img from '../assets/images/Contact us-amico.png';
import logounder from "../components/LogoUnder.png";
import '../components/style.css'
const Contact = () => {
    
  return (
    <section>
      <div id="detail_fill_container"  className="flex justify-center items-center">
        <img id="contact_image" src={krishna} alt='krishna' />
        <div id="Form_container">
        <div className="relative mb-8 flex justify-center items-center">
        <img data-aos="fade-right" style={{top:'1.60rem',zIndex:1}} className="backdrop-opacity-1 absolute w-[28rem] max-w-full  transform -translate-x-1/2" src={logounder} alt="logo" />
        <p style={{fontSize:'5rem',color:'blue',position:'relative',zIndex:2}} className="font-[Alegreya] text-center">VedicVani</p>
        </div>
        <p>Welcome to Vedic Vani! We're dedicated to sharing the wisdom and teachings of the Vedic tradition with the world. If you have any questions about our project, want to collaborate, or simply want to say hello, we'd love to hear from you. Whether you're seeking guidance, have feedback to share, or want to explore partnership opportunities, our team is here to assist you. Feel free to reach out to us through the contact details provided below. Your thoughts and inquiries are valuable to us, and we endeavor to respond promptly to all messages. Thank you for your interest in Vedic Vani - we look forward to connecting with you!</p>
        </div>
      </div>
      <div id="detail_fill_container" class="flex relative justify-center items-center">
      <p id="head">Contact Our Team</p>
      <div id="Form_container" className="flex justify-center items-center flex-col gap-5">
        <p>Contact</p>
          <input className="p-3" type="text" placeholder="Name"/>
          <input className="p-3" type="text" placeholder="Email"/>
          <textarea className="p-3" type="text" placeholder="Message"/>
          <button className="Submit_button">
          <span className="new">{`submit :)`}</span>
           <div className="old">
             <span>SUBMIT</span>
             <span aria-hidden>SUBMIT</span>
           </div>
      </button>
      </div>
      <img id="contact_image" src={img} alt="images" />
      </div>
    </section>
  )
}

export default Contact
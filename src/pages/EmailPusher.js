import React, { useState } from "react";

const isMobile = window.innerWidth <= 768;
const EmailPusher = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email Submitted:", email);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.description}>
        Want Daily Bhagvat Geeta Verse!<br/>Enter your email below:
      </h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <div className='relative inline-flex items-center justify-center p-2 px-4 py-2 overflow-hidden font-medium text-[#00264d] bg-[#00264d] transition duration-300 ease-out border-2 border-[#00264d] rounded-lg shadow-md group w-[170px]'>
            <span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#00264d] group-hover:translate-x-0 ease'>
                <span>Subscribed!</span>
                <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                ></path>
                </svg>
            </span>
            <span className='absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease'>
                Subscribe
            </span>
            <span className='relative invisible'>Subscription</span>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "30vh", // Slightly larger height for more room
    padding: "20px",
    borderRadius: "15px",
    marginTop: isMobile ? "0" : "-3.5rem",
    marginLeft: isMobile ? "0" : "4rem",
    maxWidth: "600px", // Limit the width for large screens
  },
  description: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  input: {
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    width: "100%", // Full width on mobile
    maxWidth: "400px", // Limit input width on large screens
    marginBottom: "20px",
    fontSize: "1rem",
    backgroundColor: "#ffe5d5",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
  },

  // Media queries for responsiveness
  "@media (max-width: 768px)": {
    container: {
      padding: "10px", // Adjust padding for smaller screens
      height: "auto", // Allow flexible height for small screens
    },
    description: {
      fontSize: "1.25rem", // Smaller font size on mobile
    },
    input: {
      fontSize: "0.9rem", // Smaller input font for mobile
    },
    button: {
      fontSize: "1rem", // Adjust button font size on mobile
      padding: "8px 16px", // Slightly smaller button on mobile
    },
  },
  "@media (hover:hover)": {
    input: {
      "&:focus": {
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
      },
    },
    button: {
      "&:hover": {
        backgroundColor: "#004080",
        transform: "scale(1.05)",
      },
    },
  },
};

export default EmailPusher;

// Todo: This Code wriiten By Main Mentor
// import React from 'react'


// const AboutUs = () => {
//   return (
//     <section className="py-8 px-4">
  
//   <div className='flex flex-wrap mb-7'>
//         <div className='md:w-[40%] w-full h-auto'>
//         <img src='/god.jpg' alt="Description of the image" className='w-[70%] my-7 mx-9' />
//          </div>

//         <div className=' md:w-[50%] mx-7 '>
//         <h1 className="text-4xl font-bold text-gray-800 mb-4 ">About Us</h1>
//         <p className="text-black text-lg text-start mb-6 p-6">
//             Welcome to Vedic Vani, your gateway to the profound teachings of the Bhagavad Gita. We are dedicated to preserving and sharing the timeless wisdom found in the chapters and shlokas of this ancient scripture. Vedic Vani serves as a digital haven for those seeking enlightenment, guidance, and a deeper understanding of life's fundamental principles.
//         </p>
//         </div>

//     </div>

//     <div className='flex flex-wrap mb-7'>
//        <div className='md:w-[40%] w-full h-auto'>
//         <img src='/mission.jpg' alt="Description of the image" className='w-[70%] my-7 mx-9' />
//         </div>

//         <div className=' md:w-[50%] mx-7 '>
//         <h1 className="text-4xl font-bold text-gray-800 mb-4 ">Our Mission</h1>
//         <p className="text-black text-lg text-start mb-6 p-6">
//         At Vedic Vani, our mission is to make the spiritual teachings of the Bhagavad Gita accessible to everyone, regardless of their background or beliefs. We strive to bridge the gap between the ancient wisdom of the Gita and the modern world, fostering a greater appreciation for its universal truths and life-changing lessons.
//         </p>
//         </div>
//     </div>

//     <div className='flex flex-wrap'>
       
//     <div className='md:w-[40%] w-full h-auto'>
//         <img src='/bhagvatgita.jpg' alt="Description of the image" className='w-[70%] my-7 mx-9' />
//     </div>

//         <div className=' md:w-[50%] mx-7 '>
//         <h1 className="text-4xl font-bold text-gray-800 mb-4 ">The Essence of the Bhagavad Gita</h1>
//         <p className="text-black text-lg text-start mb-6 p-6">
//         The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that forms part of the Indian epic Mahabharata. It consists of a conversation between Prince Arjuna and Lord Krishna, who serves as his charioteer and spiritual guide. This sacred dialogue explores the moral and philosophical dilemmas faced by Arjuna on the battlefield and offers profound insights into duty, righteousness, and the path to spiritual realization.
//         </p>
//         </div>

//     </div>
        
    
// </section>
//   )
// }

// export default AboutUs


// Todo: Best Edit Code Ready for Merge and Commit
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const pageStyle = {
    backgroundColor: '#f97316',
    padding: '2rem 1rem',
  };

  const containerStyle = {
    padding: '2rem',
    maxWidth: '1350px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#f97316', // Same background color as the page
    border: '5px solid #ddd', // Border around the container
    borderRadius: '30px',
    boxShadow: '0 15px 24px rgba(0, 0, 0, 0.1)',
  };

  const itemStyle = {
    marginBottom: '3rem',
    display: 'flex',
    flexDirection: 'row',
    // flexDirection: 'column',
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
    width: '70%',
    maxWidth: '750px',
    margin: '1rem auto',
    padding: '1.5rem',
    border: '2px solid #ddd',
    borderRadius: '18px',
    backgroundColor: '#ffffff', // Background color of the text containers
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

  return (
    <div style={pageStyle}>
      <section style={containerStyle}>
        <div style={itemStyle}>
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
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h1 style={headingStyle}>About Us</h1>
            <p style={paragraphStyle}>
              Welcome to Vedic Vani, your gateway to the profound teachings of the Bhagavad Gita. We are dedicated to preserving and sharing the timeless wisdom found in its chapters and shlokas. Vedic Vani serves as a digital haven for those seeking enlightenment and a deeper understanding of life's fundamental principles.
            </p>
          </motion.div>
        </div>

        <div style={itemStyle}>
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
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h1 style={headingStyle}>Our Mission</h1>
            <p style={paragraphStyle}>
              At Vedic Vani, our mission is to make the spiritual teachings of the Bhagavad Gita accessible to everyone, regardless of their background or beliefs. We strive to bridge the gap between the ancient wisdom of the Gita and the modern world, fostering a greater appreciation for its universal truths and life-changing lessons.
            </p>
          </motion.div>
        </div>

        <div style={itemStyle}>
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
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <h1 style={headingStyle}>The Essence of the Bhagavad Gita</h1>
            <p style={paragraphStyle}>
              The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that forms part of the Indian epic Mahabharata. It consists of a conversation between Prince Arjuna and Lord Krishna, who serves as his charioteer and spiritual guide. This sacred dialogue explores the moral and philosophical dilemmas faced by Arjuna on the battlefield and offers profound insights into duty, righteousness, and the path to spiritual realization.
            </p>
          </motion.div>
        </div>

        <div style={itemStyle}>
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
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <h1 style={headingStyle}>Importance of Gita</h1>
            <p style={paragraphStyle}>
              The Bhagavad Gita, an ancient Hindu scripture, provides timeless guidance on duty and spiritual devotion. In just 700 verses, it offers profound insights into life's purpose, serving as a spiritual compass for seekers worldwide, inspiring them on the path to self-realization, inner peace, and enlightenment.
            </p>
          </motion.div>
        </div>

      </section>
    </div>
  );
};

export default AboutUs;

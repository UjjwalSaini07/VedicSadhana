import React from 'react'


const AboutUs = () => {
  return (
    <section className="py-8 px-4">
  
  <div className='flex flex-wrap mb-7'>
        <div className='md:w-[40%] w-full h-auto'>
        <img src='/god.jpg' alt="Description of the image" className='w-[70%] my-7 mx-9' />
         </div>

        <div className=' md:w-[50%] mx-7 '>
        <h1 className="text-4xl font-bold text-gray-800 mb-4 ">About Us</h1>
        <p className="text-black text-lg text-start mb-6 p-6">
            Welcome to Vedic Vani, your gateway to the profound teachings of the Bhagavad Gita. We are dedicated to preserving and sharing the timeless wisdom found in the chapters and shlokas of this ancient scripture. Vedic Vani serves as a digital haven for those seeking enlightenment, guidance, and a deeper understanding of life's fundamental principles.
        </p>
        </div>

    </div>

    <div className='flex flex-wrap mb-7'>
       <div className='md:w-[40%] w-full h-auto'>
        <img src='/mission.jpg' alt="Description of the image" className='w-[70%] my-7 mx-9' />
        </div>

        <div className=' md:w-[50%] mx-7 '>
        <h1 className="text-4xl font-bold text-gray-800 mb-4 ">Our Mission</h1>
        <p className="text-black text-lg text-start mb-6 p-6">
        At Vedic Vani, our mission is to make the spiritual teachings of the Bhagavad Gita accessible to everyone, regardless of their background or beliefs. We strive to bridge the gap between the ancient wisdom of the Gita and the modern world, fostering a greater appreciation for its universal truths and life-changing lessons.
        </p>
        </div>
    </div>

    <div className='flex flex-wrap'>
       
    <div className='md:w-[40%] w-full h-auto'>
        <img src='/bhagvatgita.jpg' alt="Description of the image" className='w-[70%] my-7 mx-9' />
    </div>

        <div className=' md:w-[50%] mx-7 '>
        <h1 className="text-4xl font-bold text-gray-800 mb-4 ">The Essence of the Bhagavad Gita</h1>
        <p className="text-black text-lg text-start mb-6 p-6">
        The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that forms part of the Indian epic Mahabharata. It consists of a conversation between Prince Arjuna and Lord Krishna, who serves as his charioteer and spiritual guide. This sacred dialogue explores the moral and philosophical dilemmas faced by Arjuna on the battlefield and offers profound insights into duty, righteousness, and the path to spiritual realization.
        </p>
        </div>

    </div>
        
    
</section>
  )
}

export default AboutUs
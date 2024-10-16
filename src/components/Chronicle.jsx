import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import Ramayana from "./Carousel_Images/CoverImages/Ramayana_Image.jpg";
import Mahabharat from "./Carousel_Images/CoverImages/Mahabharat_Image.jpg";
import song from './FluteTunes/Flute2.mp3';
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useSpring, animated } from '@react-spring/web';

const isMobile = window.innerWidth <= 768;

const textVariant = (delay) => ({
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1.25, delay: delay },
    },
  });
  
  const textVariantdistort = (delay) => ({
    initial: { y: -50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,  // Adjust stiffness to control the bounce
        damping: 20,
        duration: 1.25,
        delay: delay
      },
    },
  });

const slideCover = [
    {
        name: 'The Ramayana',
        image: Ramayana,
        route: '/api/Ramayana_carousel' // Route to Ramayana carousel component
    },
    {
        name: 'The Mahabharata',
        image: Mahabharat,
        route: '/api/Mahabharat_carousel' // Route to Mahabharata carousel component
    },
];

const headerStyle = {
    width: "100%",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    fontSize: isMobile ? "1.9rem" : "2.6rem",
    color: "#ffffff",
    fontWeight: "450",
};

const Chronicle = () => {
    const bounce = useSpring({
        from: { transform: 'translate3d(0, -180px, 0)' },
        to: { transform: 'translate3d(0, 0, 0)' },
        config: { tension: 150, friction: 6.8 },
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

    return (
        <div>
            <ReactAudioPlayer
                src={song}
                autoPlay
                loop
                volume={0.25}
                style={{ display: 'none' }} // Hide the audio player
            />
            <animated.h1 style={bounce}>
            <div style={headerStyle} className="hidden sm:block">
                <Typewriter
                words={["Welcome to Chronicle Section", "Enjoy Epic tales of virtue and duty"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={180}
                deleteSpeed={80}
                delaySpeed={1000}
                />
            </div>
            <div style={headerStyle} className="block sm:hidden">
                <Typewriter
                words={["Welcome Here !!", "Enjoy Slideshow"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={180}
                deleteSpeed={100}
                delaySpeed={1000}
                />
            </div>
            </animated.h1>
            <motion.div
                variants={textVariant(0.3)}
                initial="hidden"
                animate="show"
            >
            <div className="flex flex-wrap justify-center items-center p-4">
                {slideCover.map((cover, index) => (
                    <motion.div
                        variants={textVariantdistort(0.45)}
                        initial="initial"
                        animate="animate"
                    >
                    <div key={index} className="bg-white rounded-xl shadow-lg m-4 w-72 h-[500px] overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                        <Link to={cover.route} style={{ textDecoration: 'none' }}>
                            <motion.div
                                variants={textVariantdistort(1.1)}
                                initial="initial"
                                animate="animate"
                            >
                            <img className="w-full h-72 object-contain object-center" src={cover.image} alt={cover.name} />
                            </motion.div>
                            <motion.div
                                variants={textVariant(1.8)}
                                initial="hidden"
                                animate="show"
                            >
                            <div className="p-6 text-center">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">{cover.name}</h2>
                                {cover.name === 'The Ramayana' && (
                                    <p className="text-gray-600">Slide through the epic adventures narrated in the {cover.name}, learning life lessons from ancient legends.</p>
                                )}
                                {cover.name === 'The Mahabharata' && (
                                    <p className="text-gray-600">Discover heroic stories and virtues in the {cover.name}, delving into the epic battles and moral dilemmas faced by its characters.</p>
                                )}
                            </div>
                            </motion.div>
                        </Link>
                    </div>
                    </motion.div>
                ))}
            </div>
            </motion.div>
        </div>
    );
};

export default Chronicle;

// Todo: Perfect Change - Responsive : Repsonsive in Column Styling
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faStepBackward, faStepForward, faForward, faBackward} 
from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useSpring, animated } from '@react-spring/web';

//Import all Song Here
import song1 from "./BhaktiGeetAssets/Audios/Audio1_1_Ganeshji.mp3";
import song2 from "./BhaktiGeetAssets/Audios/Audio2_1_Ramji.mp3";
import song3 from "./BhaktiGeetAssets/Audios/Audio3_Hanuman.mp3";
import song4 from "./BhaktiGeetAssets/Audios/Audio4_Ganeshji.mp3";
import song5 from "./BhaktiGeetAssets/Audios/Audio5_Shivji.mp3";
import song6 from "./BhaktiGeetAssets/Audios/Audio6_RadheRadhe.mp3";
import song7 from "./BhaktiGeetAssets/Audios/Audio7_KishoriRadhe.mp3";
import song8 from "./BhaktiGeetAssets/Audios/Audio8_Krishna1.mp3";
import song9 from "./BhaktiGeetAssets/Audios/Audio9_Krishna2.mp3";
import song10 from "./BhaktiGeetAssets/Audios/Audio10_MataRani.mp3";
import song11 from "./BhaktiGeetAssets/Audios/Audio11_ShreemanNarayan.mp3";
import song12 from "./BhaktiGeetAssets/Audios/Audio12_ShivjiMahamrityunjay.mp3";
import song13 from "./BhaktiGeetAssets/Audios/Audio13_RamSiyaRam.mp3";
import song14 from "./BhaktiGeetAssets/Audios/Audio14_Hanuman.mp3";
import song15 from "./BhaktiGeetAssets/Audios/Audio15_Sundarkand.mp3";
import song16 from "./BhaktiGeetAssets/Audios/Audio16_ShivaRudra.mp3";
import song17 from "./BhaktiGeetAssets/Audios/Audio17_MataRani2.mp3";
import song18 from "./BhaktiGeetAssets/Audios/Audio18_NirvanaShatkam.mp3";
import song19 from "./BhaktiGeetAssets/Audios/Audio19_PanchaksharStotra.mp3";
import song20 from "./BhaktiGeetAssets/Audios/Audio20_ShivTandavStotram.mp3";

//Import all Images Here
import img1 from "./BhaktiGeetAssets/Images/Img1.jpg";
import img2 from "./BhaktiGeetAssets/Images/Img2.jpg";
import img3 from "./BhaktiGeetAssets/Images/Img3.png";
import img4 from "./BhaktiGeetAssets/Images/Img4.png";
import img5 from "./BhaktiGeetAssets/Images/Img5_2.jpg";
import img6 from "./BhaktiGeetAssets/Images/Img6.jpg";
import img7 from "./BhaktiGeetAssets/Images/Img7.jpg";
import img8 from "./BhaktiGeetAssets/Images/Img8.png";
import img9 from "./BhaktiGeetAssets/Images/Img9.png";
import img10 from "./BhaktiGeetAssets/Images/Img10_1.png";
import img11 from "./BhaktiGeetAssets/Images/Img11_1.jpg";
import img12 from "./BhaktiGeetAssets/Images/Img12.png";
import img13 from "./BhaktiGeetAssets/Images/Img13_1.png";
import img14 from "./BhaktiGeetAssets/Images/Img14.png";
import img15 from "./BhaktiGeetAssets/Images/Img15.png";
import img16 from "./BhaktiGeetAssets/Images/Img16.jpg";
import img17 from "./BhaktiGeetAssets/Images/Img17_1.png";
import img18 from "./BhaktiGeetAssets/Images/Img18.png";
import img19 from "./BhaktiGeetAssets/Images/Img19.png";
import img20 from "./BhaktiGeetAssets/Images/Img20.png";


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

const MusicPlayer = ({
  song,
  isPlaying,
  setPlayingSong,
  playNext,
  playPrevious,
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const updateCurrentTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", updateCurrentTime);
    return () => {
      audio.removeEventListener("timeupdate", updateCurrentTime);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    if (isPlaying) {
      setPlayingSong(null);
    } else {
      setPlayingSong(song);
    }
  };

  const handleTimeChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration * e.target.value) / 100;
    setCurrentTime(audio.currentTime);
  };

  const fastForward = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
    setCurrentTime(audio.currentTime);
  };

  const rewind = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.max(audio.currentTime - 10, 0);
    setCurrentTime(audio.currentTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const containerStyle = {
    display: "inline-block",
    margin: "15px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.8)",
    padding: "40px",
    width: "300px",
    textAlign: "center",
    boxSizing: "border-box",
  };

  const titleStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "1.5rem",
    fontWeight: "700",
    margin: "10px 0",
    color: "#000000",
  };

  const artistStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "0.9rem",
    fontWeight: "360",
    color: "#666666",
    margin: "8px 0",
  };

  const albumArtContainerStyle = {
    margin: "20px 0",
    height: "240px",
    width: "220px",
    backgroundColor: "#f0f0f0",
    borderRadius: "20px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    position: "relative", 
    alignItems: "center",
    margin: "0 auto",
    animation: isPlaying ? "vibrate 0.5s infinite" : "none",
  };

  const albumArtStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const timeContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: "15px 0",
  };

  const timeTextStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "0.8rem",
    color: "#000000",
  };

  const timeRangeStyle = {
    margin: "0 10px",
    width: "auto",
    flex: "1",
    appearance: "none",
    background: `linear-gradient(to right, #ff5733 ${
      audioRef.current ? (currentTime / audioRef.current.duration) * 100 : 0
    }%, #ddd 0%)`,
    height: isMobile ? "3.5px" : "5px", 
    borderRadius: "5px",
    outline: "none",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#000000",
  };

  return (
    <motion.div
        variants={textVariant(0.8)}
        initial="hidden"
        animate="show"
    >
    <div style={containerStyle}>
      <motion.div
        variants={textVariant(1.3)}
        initial="hidden"
        animate="show"
      >
      <h2 style={titleStyle}>{song.title}</h2>
      <p style={artistStyle}>{song.artist}</p>
      <motion.div
          variants={textVariantdistort(1.7)}
          initial="initial"
          animate="animate"
      >
      <div style={albumArtContainerStyle}>
          <img src={song.albumArt} alt="Album Art" style={albumArtStyle} />
      </div>
      </motion.div>
      <motion.div
        variants={textVariant(2.0)}
        initial="hidden"
        animate="show"
      >
      <div style={timeContainerStyle}>
        {(
          <span style={timeTextStyle}>
            {audioRef.current ? formatTime(currentTime) : "00:00"}
          </span>
        )}
        <input
          type="range"
          min="0"
          max="100"
          value={
            audioRef.current
              ? (currentTime / audioRef.current.duration) * 100
              : 0
          }
          onChange={handleTimeChange}
          style={timeRangeStyle}
        />
        {(
          <span style={timeTextStyle}>
            {audioRef.current ? formatTime(audioRef.current.duration) : "00:00"}
          </span>
        )}
      </div>
      </motion.div>
      <motion.div
          variants={textVariantdistort(2.3)}
          initial="initial"
          animate="animate"
      >
      <div style={buttonContainerStyle}>
        <button
          style={{ ...buttonStyle, fontSize: "1.5em" }}
          onClick={playPrevious}
        >
          <FontAwesomeIcon icon={faStepBackward} size="lg" />
        </button>
        <button
          style={{ ...buttonStyle, fontSize: "1.25em" }}
          onClick={rewind}
        >
          <FontAwesomeIcon icon={faBackward} size="lg" />
        </button>
        <button
          style={{ ...buttonStyle, fontSize: "1.5em" }}
          onClick={togglePlayPause}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="lg" />
        </button>
        <button
          style={{ ...buttonStyle, fontSize: "1.25em" }}
          onClick={fastForward}
        >
          <FontAwesomeIcon icon={faForward} size="lg" />
        </button>
        <button
          style={{ ...buttonStyle, fontSize: "1.5em" }}
          onClick={playNext}
        >
          <FontAwesomeIcon icon={faStepForward} size="lg" />
        </button>
      </div>
      </motion.div>
      <audio ref={audioRef} src={song.src} />
      </motion.div>
    </div>
    </motion.div>
  );
};

const vibrateKeyframes = `
  @keyframes vibrate {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = vibrateKeyframes;
document.head.appendChild(styleSheet);

const songs = [
  {
    title: "गणेश आरती",
    artist: "Rahul Vaidya",
    albumArt: img1,
    src: song1,
  },
  {
    title: "श्री राम स्तुति",
    artist: "Ravindra Singh",
    albumArt: img2,
    src: song2,
  },
  {
    title: "श्री हनुमान चालीसा",
    artist: "Shankar Mahadevan",
    albumArt: img3,
    src: song3,
  },
  {
    title: "108 गणपती महामंत्र",
    artist: "Priya Dhodi",
    // artist: "Priya Dhodi, Dipesh Dhodi",
    albumArt: img4,
    src: song4,
  },
  {
    title: "Om Namah Shivay",
    artist: "SpiritualIndia",
    albumArt: img5,
    src: song5,
  },
  {
    title: "राधे राधे",
    artist: "Gaurav Krishna Goswami",
    albumArt: img6,
    src: song6,
  },
  {
    title: "Kishori Radhe",
    artist: "Gaurav Krishna Goswami",
    albumArt: img7,
    src: song7,
  },
  {
    title: "Krishna 1",
    artist: "SuprabhaKV",
    albumArt: img8,
    src: song8,
  },
  {
    title: "Krishna 2",
    artist: "SuprabhaKV",
    albumArt: img9,
    src: song9,
  },
  {
    title: "Mata Bhajan",
    artist: "Bhakti",
    albumArt: img10,
    src: song10,
  },
  {
    title: "Mata Bhajan 2",
    artist: "Gulshan Kumar",
    albumArt: img17,
    src: song17,
  },
  {
    title: "Shreeman Narayan",
    artist: "Studio Sangeeta",
    albumArt: img11,
    src: song11,
  },
  {
    title: " ॐ महामृत्युंजय मंत्र",
    artist: "Shankar Sahney",
    albumArt: img12,
    src: song12,
  },
  {
    title: "श्री शिव रुद्राष्टकम",
    artist: "Religious India",
    albumArt: img16,
    src: song16,
  },
  {
    title: "श्री निर्वाण षट्कम:",
    artist: "Religious India",
    albumArt: img18,
    src: song18,
  },
  {
    title: "श्री शिव पंचाक्षर",
    artist: "Religious India",
    albumArt: img19,
    src: song19,
  },
  {
    title: "श्री शिव तांडव स्तोत्र",
    artist: "Shankar Mahadevan",
    albumArt: img20,
    src: song20,
  },
  {
    title: "Ram Siya Ram",
    artist: "SpiritualIndia",
    albumArt: img13,
    src: song13,
  },
  {
    title: "Hanuman Ji",
    artist: "Divine Shine",
    albumArt: img14,
    src: song14,
  },
  {
    title: "Sunderkand",
    artist: "Rasraj Maharaj",
    albumArt: img15,
    src: song15,
  },
];

const App = () => {
  const [playingSongIndex, setPlayingSongIndex] = useState(null);

  const setPlayingSong = (song) => {
    const index = songs.findIndex((s) => s === song);
    setPlayingSongIndex(index);
  };

  const playNext = () => {
    if (playingSongIndex !== null && playingSongIndex < songs.length - 1) {
      setPlayingSongIndex(playingSongIndex + 1);
    }
  };

  const playPrevious = () => {
    if (playingSongIndex !== null && playingSongIndex > 0) {
      setPlayingSongIndex(playingSongIndex - 1);
    }
  };

  const bounce = useSpring({
    from: { transform: 'translate3d(0, -180px, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
    config: { tension: 150, friction: 6 },
  });

  const appStyle = {
    background: "#f97316",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: "0",
    flexWrap: "wrap",
    overflowY: "auto",
    padding: "5px",
  };

  const headerStyle = {
    width: "100%",
    textAlign: "center",
    marginBottom: "15px",
    fontFamily: "Arial, sans-serif",
    fontSize: isMobile ? "1.74rem" : "2.5rem",
    color: "#ffffff",
    fontWeight: "450",
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={appStyle}>
      <div style={headerStyle}>
      <animated.h1 style={bounce}>
        <Typewriter
          words={['Welcome to Bhakti Geet', 'Feel the Divine Vibes']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={180}
          deleteSpeed={100}
          delaySpeed={1000}
        />
        </animated.h1>
      </div>
      {songs.map((song, index) => (
        <MusicPlayer
          key={index}
          song={song}
          isPlaying={playingSongIndex === index}
          setPlayingSong={setPlayingSong}
          playNext={playNext}
          playPrevious={playPrevious}
        />
      ))}
    </div>
  );
};

export default App;

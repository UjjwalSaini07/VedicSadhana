// Todo: Perfect Change - Responsive in Matrix Styling
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faStepBackward, faStepForward,}
from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Typewriter } from "react-simple-typewriter";

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

// Todo: Adding TypeWritter
// const h1 {
//   text-transform: uppercase;
//   font-size: 2rem;
//   font-weight: 700;
//   color: #fff;
//   margin-bottom: 30px;
// }

{/* <h1>
  <Typewriter
    words={["Bhakti Geet"]}
    loop={200}
    cursor
    cursorStyle="_"
    typeSpeed={500}
    deleteSpeed={100}
    delaySpeed={1200}
  />
</h1>; */}

const isMobile = window.innerWidth <= 768;

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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const containerStyle = {
    display: "inline-block",
    margin: isMobile ? "10px" : "15px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.8)",
    padding: isMobile ? "10px" : "40px",
    width: isMobile ? "calc(50% - 20px)" : "300px",
    textAlign: "center",
    boxSizing: "border-box",
  };

  const titleStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: isMobile ? "1.1rem" : "1.5rem",
    fontWeight: "700",
    margin: "10px 0",
    color: "#000000",
  };

  const artistStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "0.9rem",
    padding: isMobile ? "6px" : "0",
    fontWeight: "360",
    color: "#666666",
    margin: "8px 0",
  };

  const albumArtContainerStyle = {
    //Todo: Danger Zone - Change when dimension less than 330px {In MOBILE VIEW}
    margin: "20px 0",
    height: isMobile ? "120px" : "240px",
    width: isMobile ? "120px" : "220px",
    backgroundColor: "#f0f0f0",
    borderRadius: "20px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
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
    flexDirection: isMobile ? "column" : "row",
    margin: "15px 0",
  };

  const timeTextStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: isMobile ? "0.7rem" : "0.8rem",
    color: "#000000",
    marginBottom: isMobile ? "4px" : "0",
  };

  const timeRangeStyle = {
    margin: isMobile ? "0 8px" : "0 10px",
    width: isMobile ? "calc(100% - 3px)" : "auto",
    flex: "1",
    appearance: "none",
    background: `linear-gradient(to right, #ff5733 ${
      audioRef.current ? (currentTime / audioRef.current.duration) * 100 : 0
    }%, #ddd 0%)`,
    height: isMobile ? "2px" : "5px", // Changed to 3px for mobile view to match the image
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
    <div style={containerStyle}>
      <h2 style={titleStyle}>{song.title}</h2>
      <p style={artistStyle}>{song.artist}</p>
      <div style={albumArtContainerStyle}>
        <img src={song.albumArt} alt="Album Art" style={albumArtStyle} />
      </div>
      <div style={timeContainerStyle}>
        {!isMobile && (
          <span style={timeTextStyle}>
            {audioRef.current ? formatTime(currentTime) : "00:00"}
          </span>
        )}
        {isMobile && (
          <span style={timeTextStyle}>
            {audioRef.current
              ? formatTime(audioRef.current.duration - currentTime)
              : "00:00"}
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
        {!isMobile && (
          <span style={timeTextStyle}>
            {audioRef.current ? formatTime(audioRef.current.duration) : "00:00"}
          </span>
        )}
      </div>
      <div style={buttonContainerStyle}>
        <button
          style={{ ...buttonStyle, fontSize: isMobile ? "1em" : "1.5em" }}
          onClick={playPrevious}
        >
          <FontAwesomeIcon icon={faStepBackward} size="lg" />
        </button>
        <button
          style={{ ...buttonStyle, fontSize: isMobile ? "1em" : "1.5em" }}
          onClick={togglePlayPause}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="lg" />
        </button>
        <button
          style={{ ...buttonStyle, fontSize: isMobile ? "1em" : "1.5em" }}
          onClick={playNext}
        >
          <FontAwesomeIcon icon={faStepForward} size="lg" />
        </button>
      </div>
      <audio ref={audioRef} src={song.src} />
    </div>
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
    title: "Ganesh Aarti",
    artist: "Rahul Vaidya",
    albumArt: img1,
    src: song1,
  },
  {
    title: "Shri Ram Stuti",
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
    artist: "Priya Dhodi, Dipesh Dhodi",
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
    artist: "Gaurav Krishna",
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

  const appStyle = {
    background: "#f97316",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: "0",
    flexWrap: isMobile ? "wrap" : "wrap",
    overflowY: "auto",
    padding: "5px",
  };

  return (
    <div style={appStyle}>
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

// Todo: Perfect Change - But Not Responsive : We make repsonsive in Column Styling
// import React, { useState, useRef, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay, faPause, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import song1 from './Flute1.mp3';
// import song2 from './Flute2.mp3';
// import song3 from './Flute3.mp3';
// import song4 from './Flute4.mp3';
// import img1 from './BhaktiGeetAssets/Img1.jpg';
// import img2 from './BhaktiGeetAssets/Img2.jpeg';
// import img3 from './BhaktiGeetAssets/Img3.jpg';
// import img4 from './BhaktiGeetAssets/Img4.jpg';

// const MusicPlayer = ({ song, isPlaying, setPlayingSong, playNext, playPrevious }) => {
//   const [currentTime, setCurrentTime] = useState(0);
//   const audioRef = useRef(null);

//   useEffect(() => {
//     const audio = audioRef.current;
//     const updateCurrentTime = () => setCurrentTime(audio.currentTime);
//     audio.addEventListener('timeupdate', updateCurrentTime);
//     return () => {
//       audio.removeEventListener('timeupdate', updateCurrentTime);
//     };
//   }, []);

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (isPlaying) {
//       audio.play();
//     } else {
//       audio.pause();
//     }
//   }, [isPlaying]);

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       setPlayingSong(null);
//     } else {
//       setPlayingSong(song);
//     }
//   };

//   const handleTimeChange = (e) => {
//     const audio = audioRef.current;
//     audio.currentTime = (audio.duration * e.target.value) / 100;
//     setCurrentTime(audio.currentTime);
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60).toString().padStart(2, '0');
//     return `${minutes}:${seconds}`;
//   };

//   return (
//     <div style={{
//       display: 'inline-block',
//       margin: '20px',
//       backgroundColor: '#ffffff',
//       borderRadius: '20px',
//       boxShadow: '0 6px 12px rgba(0,0,0,0.7)',
//       padding: '35px',
//       width: '300px',
//       textAlign: 'center'
//     }}>
//       <h2 style={{
//         fontFamily: 'Arial, sans-serif',
//         fontSize: '1.5rem',
//         fontWeight: '650',
//         margin: '10px 0',
//         color: '#000000'
//       }}>{song.title}</h2>
//       <p style={{
//         fontFamily: 'Arial, sans-serif',
//         fontSize: '1rem',
//         fontWeight: '400',
//         color: '#666666',
//         margin: '5px 0'
//       }}>{song.artist}</p>
//       <div style={{
//         margin: '20px 0'
//       }}>
//         <div style={{
//           height: '235px',
//           width: '200px',
//           backgroundColor: '#f0f0f0',
//           borderRadius: '18px',
//           overflow: 'hidden',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           margin: '0 auto'
//         }}>
//           <img src={song.albumArt} alt="Album Art" style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover'
//           }} />
//         </div>
//       </div>
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         margin: '10px 0'
//       }}>
//         <span style={{
//           fontFamily: 'Arial, sans-serif',
//           fontSize: '0.8rem',
//           color: '#000000'
//         }}>{formatTime(currentTime)}</span>
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={audioRef.current ? (currentTime / audioRef.current.duration) * 100 : 0}
//           onChange={handleTimeChange}
//           style={{
//             margin: '0 10px',
//             flex: '1',
//             appearance: 'none',
//             background: `linear-gradient(to right, #ff5733 ${audioRef.current ? (currentTime / audioRef.current.duration) * 100 : 0}%, #ddd 0%)`,
//             height: '5px',
//             borderRadius: '5px',
//             outline: 'none'
//           }}
//         />
//         <span style={{
//           fontFamily: 'Arial, sans-serif',
//           fontSize: '0.8rem',
//           color: '#000000'
//         }}>{audioRef.current ? formatTime(audioRef.current.duration) : '00:00'}</span>
//       </div>
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-around'
//       }}>
//         <button style={{
//           background: 'none',
//           border: 'none',
//           cursor: 'pointer',
//           color: '#000000'
//         }} onClick={playPrevious}>
//           <FontAwesomeIcon icon={faStepBackward} size="2x" />
//         </button>
//         <button style={{
//           background: 'none',
//           border: 'none',
//           cursor: 'pointer',
//           color: '#000000'
//         }} onClick={togglePlayPause}>
//           <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="2x" />
//         </button>
//         <button style={{
//           background: 'none',
//           border: 'none',
//           cursor: 'pointer',
//           color: '#000000'
//         }} onClick={playNext}>
//           <FontAwesomeIcon icon={faStepForward} size="2x" />
//         </button>
//       </div>
//       <audio ref={audioRef} src={song.src} />
//     </div>
//   );
// };

// // Define your songs
// const songs = [
//   {
//     title: 'Bhajan 1',
//     artist: 'Unknown Artist',
//     albumArt: img1,
//     src: song1
//   },
//   {
//     title: 'Bhajan 2',
//     artist: 'Unknown Artist',
//     albumArt: img2,
//     src: song2
//   },
//   {
//     title: 'Bhajan 3',
//     artist: 'Unknown Artist',
//     albumArt: img3,
//     src: song3
//   },
//   {
//     title: 'Bhajan 4',
//     artist: 'Unknown Artist',
//     albumArt: img4,
//     src: song4
//   },
// ];

// const App = () => {
//   const [playingSongIndex, setPlayingSongIndex] = useState(null);

//   const setPlayingSong = (song) => {
//     const index = songs.findIndex((s) => s === song);
//     setPlayingSongIndex(index);
//   };

//   const playNext = () => {
//     if (playingSongIndex !== null && playingSongIndex < songs.length - 1) {
//       setPlayingSongIndex(playingSongIndex + 1);
//     }
//   };

//   const playPrevious = () => {
//     if (playingSongIndex !== null && playingSongIndex > 0) {
//       setPlayingSongIndex(playingSongIndex - 1);
//     }
//   };

//   return (
//     <div style={{
//       background: '#f97316',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       margin: '0'
//     }}>
//       {songs.map((song, index) => (
//         <MusicPlayer
//           key={index}
//           song={song}
//           isPlaying={playingSongIndex === index}
//           setPlayingSong={setPlayingSong}
//           playNext={playNext}
//           playPrevious={playPrevious}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;

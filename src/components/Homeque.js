import React, { useState, useEffect, useRef, useCallback } from "react";
import bgpic from "./CodeAssets/Homebg.png";
import icon from "./CodeAssets/Icon.svg";
import "../App.css";
import { Link, useLocation } from "react-router-dom";
import AudioRead from "./AudioRead";
import Swal from "sweetalert2";

const Homeque = () => {
  const [voices, setVoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [chap, setChap] = useState(1);
  const [ver, setVer] = useState(1);
  
  const [verseData, setVerseData] = useState({
    chapter: "",
    verse: "",
    slok: "",
    transliteration: "",
    slokHindi: "",
    slokEnglish: "",
  });

  const speech = useRef(new SpeechSynthesisUtterance()).current;

  const fetchVoices = useCallback(() => {
    const voicesList = window.speechSynthesis.getVoices();
    setVoices(voicesList);
  }, []);

  useEffect(() => {
    fetchVoices();
    window.speechSynthesis.onvoiceschanged = fetchVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [fetchVoices]);

  useEffect(() => {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchData = async () => {
      const urlParts = location.pathname.split("/");
      const newChap = parseInt(urlParts[urlParts.indexOf("chapter") + 1]);
      const newVer = parseInt(urlParts[urlParts.indexOf("shlok") + 1]);

      if (!isNaN(newChap) && !isNaN(newVer)) {
        setChap(newChap);
        setVer(newVer);
        setLoading(true);
        await reqHandler(newChap, newVer);
      }
    };
    fetchData();
  }, [location]);

  const reqHandler = async (chap, ver) => {
    const currentURL = `https://vedicvani-backend.onrender.com${window.location.pathname}`;
    loadVerseData(currentURL);
  };

  const loadVerseData = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setVerseData({
          chapter: data.chapter,
          verse: data.verse,
          slok: data.slok,
          transliteration: data.transliteration,
          slokHindi: data.tej.ht,
          slokEnglish: data.siva.et,
        });
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred while fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const textFormatter = (text) => text.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  const handleNext = () => {
    if (ver < 47) {
      const nextVer = ver + 1;
      setVer(nextVer);
      setLoading(true);
      reqHandler(chap, nextVer);
    } else {
      Swal.fire({
        text: "All Chapters are Finished",
        icon: "warning",
      });
    }
  };

  const handlePrevious = () => {
    if (ver > 1) {
      const prevVer = ver - 1;
      setVer(prevVer);
      setLoading(true);
      reqHandler(chap, prevVer);
    } else {
      Swal.fire({
        text: "Already on the First Chapter and Verse",
        icon: "warning",
      });
    }
  };

  useEffect(() => {
    Swal.fire({
      title: "Take a Look!!!",
      text: "Double Click on the Volume Icon to Change the Respective Audio",
      icon: "info",
    });
  }, []);

  useEffect(() => {
    if (voices.length > 0) {
      const googleHindiVoice = voices.find((voice) => voice.lang === "hi-IN");
      if (googleHindiVoice) {
        speech.voice = googleHindiVoice;
      } else {
        console.warn("Google Hindi voice not found.");
      }
    }
  }, [voices, speech]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen max-w-5xl mx-auto px-4">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin h-8 w-8 sm:h-10 sm:w-10 rounded-full border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8">
            || श्रीमद्भगवद्गीता {verseData.chapter}.{verseData.verse} ||
          </h1>
          <img className="w-full max-w-xl mb-6" src={bgpic} alt="Background" />
          <div className="flex justify-between items-center w-full max-w-xl mb-0">
            <Link
              to={`/api/chapter/${chap}/shlok/${ver - 1}`}
              className="transform rotate-180"
            >
              <img
                className="w-10 h-8 sm:w-10 sm:h-8 opacity-45 hover:opacity-100 duration-300 cursor-pointer"
                onClick={handlePrevious}
                src={icon}
                alt="Previous"
                title="Previous Shlok"
              />
            </Link>
            <Link to={`/api/chapter/${chap}/shlok/${ver + 1}`}>
              <img
                className="w-10 h-8 sm:w-10 sm:h-8 opacity-45 hover:opacity-100 duration-300 cursor-pointer"
                onClick={handleNext}
                src={icon}
                alt="Next"
                title="Next Shlok"
              />
            </Link>
          </div>

          <div className="text-center w-full sm:p-3">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              <AudioRead slok={verseData.slok} speech={speech} />
              {textFormatter(verseData.slok)}
            </h1>

            <p className="text-lg sm:text-lg text-gray-800 font-semibold mb-3">
              <AudioRead slok={verseData.transliteration} speech={speech} />
              {textFormatter(verseData.transliteration)}
            </p>

            <p className="text-lg sm:text-lg md:text-2xl font-semibold text-gray-900 mb-3">
              <AudioRead slok={verseData.slokHindi} speech={speech} />
              {textFormatter(verseData.slokHindi)}
            </p>

            <p className="text-lg sm:text-lg text-gray-800 font-semibold">
              <AudioRead slok={verseData.slokEnglish} speech={speech} />
              {textFormatter(verseData.slokEnglish)}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Homeque;

// Todo: My Previous Code - Not Optimised
// import React, { useState, useEffect, useRef } from "react";
// import bgpic from "./CodeAssets/Homebg.png";
// import icon from "./CodeAssets/Icon.svg";
// import "../App.css";
// import { Link, useLocation } from "react-router-dom";
// import AudioRead from "./AudioRead";
// import Swal from 'sweetalert2';

// const Homeque = () => {
//   const [voices, setVoices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();
//   const [chap, setChap] = useState(1);
//   const [ver, setVer] = useState(1);
  
//   const [chapter, setChapter] = useState("");
//   const [verse, setVerse] = useState("");
//   const [slok, setSlok] = useState("");
//   const [transliteration, setTransliteration] = useState("");
//   const [slokHindi, setSlokHindi] = useState("");
//   const [slokEnglish, setSlokEnglish] = useState("");

//   const speech = useRef(new SpeechSynthesisUtterance()).current;

//   useEffect(() => {
//     const fetchVoices = () => {
//       const voices = window.speechSynthesis.getVoices();
//       setVoices(voices);
//     };

//     // Fetch voices when component mounts
//     fetchVoices();

//     // Update voices when changed
//     window.speechSynthesis.onvoiceschanged = fetchVoices;

//     // Clean up event listener
//     return () => {
//       window.speechSynthesis.onvoiceschanged = null;
//     };
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       const urlParts = location.pathname.split("/");
//       const newChap = parseInt(urlParts[urlParts.indexOf("chapter") + 1]);
//       const newVer = parseInt(urlParts[urlParts.indexOf("shlok") + 1]);

//       if (!isNaN(newChap) && !isNaN(newVer)) {
//         setChap(newChap);
//         setVer(newVer);
//         setLoading(true);

//         reqHandler(newChap, newVer);
//       }
//     };

//     fetchData();
//   }, [location]);

//   const reqHandler = async (chap, ver) => {
//     const currentURL =
//       "https://vedicvani-backend.onrender.com" + window.location.pathname;
//     loadVerseData(currentURL);
//   };

//   const loadVerseData = async (url) => {
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         setChapter(data.chapter);
//         setVerse(data.verse);
//         setSlok(data.slok);
//         setTransliteration(data.transliteration);
//         setSlokHindi(data.tej.ht);
//         setSlokEnglish(data.siva.et);
//       } else {
//         console.error("Failed to fetch data");
//       }
//     } catch (error) {
//       console.error("An error occurred while fetching data", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const textFormatter = (text) => {
//     return text.split("\n").map((line, index) => (
//       <span key={index}>
//         {line}
//         <br />
//       </span>
//     ));
//   };

//   const handleNext = () => {
//     if (ver < 47) {
//       setVer(ver + 1);
//       setLoading(true);
//       reqHandler(chap, ver + 1);
//     } else {
//       Swal.fire({
//         text: "All Chapters are Finished",
//         icon: "warning",
//       });
//     }
//   };

//   const handlePrevious = () => {
//     if (ver > 1) {
//       setVer(ver - 1);
//       setLoading(true); 
//       reqHandler(chap, ver - 1);
//     } else {
//       Swal.fire({
//         text: "Already on the First Chapter and Verse",
//         icon: "warning",
//       });
//     }
//   };

//   useEffect(() => {
//     showVolumeAlert();
//   }, []);

//   const showVolumeAlert = () => {
//     Swal.fire({
//       title: "Take a Look!!!",
//       text: "Double Click on the Volume Icon to Change the Respective Audio",
//       icon: "info",
//     });
//   };

//   useEffect(() => {
//     if (voices.length > 0) {
//       // Find Google Hindi voice
//       const googleHindiVoice = voices.find(voice => voice.lang === "hi-IN");

//       if (googleHindiVoice) {
//         // Set the speech synthesis voice
//         speech.voice = googleHindiVoice;
//       } else {
//         console.warn("Google Hindi voice not found.");
//       }
//     }
//   }, [voices]);

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen max-w-5xl mx-auto px-4">
//       {loading ? (
//         <div className="flex justify-center items-center min-h-screen">
//           <div className="animate-spin h-8 w-8 sm:h-10 sm:w-10 rounded-full border-t-2 border-b-2 border-gray-900"></div>
//         </div>
//       ) : (
//         <>
//           <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8">
//             || श्रीमद्भगवद्गीता {chapter + "." + verse} ||
//           </h1>
//           <img className="w-full max-w-xl mb-6" src={bgpic} alt="Background" />
//           <div className="flex justify-between items-center w-full max-w-xl mb-0">
//             <Link
//               to={`/api/chapter/${chap}/shlok/${ver - 1}`}
//               className="transform rotate-180">
//               <img
//                 className="w-10 h-8 sm:w-10 sm:h-8 opacity-45 hover:opacity-100 duration-300 cursor-pointer"
//                 onClick={handlePrevious}
//                 src={icon}
//                 alt="Previous"
//                 title="Previous Shlok"
//               />
//             </Link>
//             <Link to={`/api/chapter/${chap}/shlok/${ver + 1}`}>
//               <img
//                 className="w-10 h-8 sm:w-10 sm:h-8 opacity-45 hover:opacity-100 duration-300 cursor-pointer"
//                 onClick={handleNext}
//                 alt="Next"
//                 src={icon}
//                 title="Next Shlok"
//               />
//             </Link>
//           </div>
          
//           <div className="text-center w-full sm:p-3">
//             <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 transition-all duration-300 ease-in-out">
//               <AudioRead slok={slok} speech={speech} />{textFormatter(slok)}
//             </h1>
            
//             <p className="text-lg sm:text-lg text-gray-800 font-semibold mb-3 transition-all transform">
//               <AudioRead slok={transliteration} speech={speech} />{textFormatter(transliteration)}
//             </p>
            
//             <p className="text-lg sm:text-lg md:text-2xl font-semibold text-gray-900 mb-3 transition-all duration-300 ease-in-out">
//               <AudioRead slok={slokHindi} speech={speech} />{textFormatter(slokHindi)}
//             </p>
            
//             <p className="text-lg sm:text-lg text-gray-800 font-semibold transition-all transform">
//               <AudioRead slok={slokEnglish} speech={speech} />{textFormatter(slokEnglish)}
//             </p>
//           </div>

//         </>
//       )}
//     </div>
//   );
// };

// export default Homeque;

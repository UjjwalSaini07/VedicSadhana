import React, { useState, useEffect, useRef } from "react";
import bgpic from "./CodeAssets/Homebg.png";
import icon from "./CodeAssets/Icon.svg";
import "../App.css";
import { Link, useLocation } from "react-router-dom";
import AudioRead from "./AudioRead";

const Homeque = () => {
  const [voices, setVoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [chap, setChap] = useState(1);
  const [ver, setVer] = useState(1);
  
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [slok, setSlok] = useState("");
  const [transliteration, setTransliteration] = useState("");
  const [slokHindi, setSlokHindi] = useState("");
  const [slokEnglish, setSlokEnglish] = useState("");

  const speech = useRef(new SpeechSynthesisUtterance()).current;

  useEffect(() => {
    const fetchVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setVoices(voices);
    };

    // Fetch voices when component mounts
    fetchVoices();

    // Update voices when changed
    window.speechSynthesis.onvoiceschanged = fetchVoices;

    // Clean up event listener
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const urlParts = location.pathname.split("/");
      const newChap = parseInt(urlParts[urlParts.indexOf("chapter") + 1]);
      const newVer = parseInt(urlParts[urlParts.indexOf("shlok") + 1]);

      if (!isNaN(newChap) && !isNaN(newVer)) {
        setChap(newChap);
        setVer(newVer);
        setLoading(true);

        reqHandler(newChap, newVer);
      }
    };

    fetchData();
  }, [location]);

  const reqHandler = async (chap, ver) => {
    const currentURL =
      "https://vedicvani-backend.onrender.com" + window.location.pathname;
    loadVerseData(currentURL);
  };

  const loadVerseData = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setChapter(data.chapter);
        setVerse(data.verse);
        setSlok(data.slok);
        setTransliteration(data.transliteration);
        setSlokHindi(data.tej.ht);
        setSlokEnglish(data.siva.et);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred while fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const textFormatter = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const handleNext = () => {
    if (ver < 47) {
      setVer(ver + 1);
      setLoading(true);
      reqHandler(chap, ver + 1);
    } else {
      alert("All chapters are finished");
    }
  };

  const handlePrevious = () => {
    if (ver > 1) {
      setVer(ver - 1);
      setLoading(true); 
      reqHandler(chap, ver - 1);
    } else {
      alert("Already on the first chapter and verse");
    }
  };

  useEffect(() => {
    // Alert on component load
    showVolumeAlert();
  }, []);

  const showVolumeAlert = () => {
    const alertMessage = "Mind It : Double Click on the Volume Icon to Change the Respective Audio";
    alert(alertMessage);
  };

  useEffect(() => {
    if (voices.length > 0) {
      // Find Google Hindi voice
      const googleHindiVoice = voices.find(voice => voice.lang === "hi-IN");

      if (googleHindiVoice) {
        // Set the speech synthesis voice
        speech.voice = googleHindiVoice;
      } else {
        console.warn("Google Hindi voice not found.");
      }
    }
  }, [voices]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen max-w-5xl mx-auto px-4">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin h-8 w-8 sm:h-10 sm:w-10 rounded-full border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            || श्रीमद्भगवद्गीता {chapter + "." + verse} ||
          </h1>
          <img className="w-full max-w-xl mb-8" src={bgpic} alt="Background" />
          <div className="flex justify-between items-center w-full max-w-xl mb-8">
            <Link
              to={`/api/chapter/${chap}/shlok/${ver - 1}`}
              className="transform rotate-180">
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
                alt="Next"
                src={icon}
                title="Next Shlok"
              />
            </Link>
          </div>
          <div className="text-center w-full">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              <AudioRead slok={slok} speech={speech} />{textFormatter(slok)}
            </h1>
            <p className="text-base sm:text-lg mb-4">
              <AudioRead slok={transliteration} speech={speech} />{textFormatter(transliteration)}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl mb-4">
              <AudioRead slok={slokHindi} speech={speech} />{textFormatter(slokHindi)}
            </p>
            <p className="text-base sm:text-lg"><AudioRead slok={slokEnglish} speech={speech} />{textFormatter(slokEnglish)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Homeque;

// Todo: Initial Code - Only for Emergency
// import React, { useState, useEffect, useRef } from "react";
// import bgpic from "./Homebg.png";
// import icon from "./Icon.svg";
// import "../App.css";
// import { Link, useLocation } from "react-router-dom";
// import AudioRead from "./AudioRead";

// const Homeque = () => {
//   const speech = useRef(new SpeechSynthesisUtterance()).current;
//   const voices = window.speechSynthesis.getVoices();
//   speech.voice = voices[10]; // setting default voice

//   const location = useLocation();
//   const [chap, setChap] = useState(1);
//   const [ver, setVer] = useState(1);
//   const [loading, setLoading] = useState(true);

//   const [chapter, setChapter] = useState("");
//   const [verse, setVerse] = useState("");
//   const [slok, setSlok] = useState("");
//   const [transliteration, setTransliteration] = useState("");
//   const [slokHindi, setSlokHindi] = useState("");
//   const [slokEnglish, setSlokEnglish] = useState("");

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
//     LoadData(currentURL);
//   };

//   const LoadData = async (url) => {
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

//   useEffect(() => {
//     // Alert on component load
//     showVolumeAlert();
//   }, [0]); // Empty dependency array ensures this effect runs only once on mount

//   const showVolumeAlert = () => {
//     const alertMessage = "Mind It : Double Click on the Volume Icon to Change the Respective Audio";
//     alert(alertMessage);
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
//       alert("All chapters are finished");
//     }
//   };

//   const handlePrevious = () => {
//     if (ver > 1) {
//       setVer(ver - 1);
//       setLoading(true); 
//       reqHandler(chap, ver - 1);
//     } else {
//       alert("Already on the first chapter and verse");
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen max-w-5xl mx-auto px-4">
//       {loading ? (
//         <div className="flex justify-center items-center min-h-screen">
//           <div className="animate-spin h-8 w-8 sm:h-10 sm:w-10 rounded-full border-t-2 border-b-2 border-gray-900"></div>
//         </div>
//       ) : (
//         <>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
//             || श्रीमद्भगवद्गीता {chapter + "." + verse} ||
//           </h1>
//           <img className="w-full max-w-xl mb-8" src={bgpic} alt="Background" />
//           <div className="flex justify-between items-center w-full max-w-xl mb-8">
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
//           <div className="text-center w-full">
//             <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
//               <AudioRead slok={slok} speech={speech} />{textFormatter(slok)}
//             </h1>
//             <p className="text-base sm:text-lg mb-4">
//               <AudioRead slok={transliteration} speech={speech} />{textFormatter(transliteration)}
//             </p>
//             <p className="text-lg sm:text-xl md:text-2xl mb-4">
//               <AudioRead slok={slokHindi} speech={speech} />{textFormatter(slokHindi)}
//             </p>
//             <p className="text-base sm:text-lg"><AudioRead slok={slokEnglish} speech={speech} />{textFormatter(slokEnglish)}</p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Homeque;

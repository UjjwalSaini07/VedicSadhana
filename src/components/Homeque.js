import React, { useState, useEffect, useRef } from "react";
import bgpic from "./Homebg.png";
import icon from "./Icon.svg";
import "../App.css";
import { Link, useLocation } from "react-router-dom";
import AudioRead from "./AudioRead";

const Homeque = () => {
  // setting speech
  const speech = useRef(new SpeechSynthesisUtterance()).current;
  const voices = window.speechSynthesis.getVoices()
  speech.voice = voices[10]//setting default voice

  const location = useLocation();
  const [chap, setChap] = useState(1);
  const [ver, setVer] = useState(1);
  const [loading, setLoading] = useState(true);

  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [slok, setSlok] = useState("");
  const [transliteration, setTransliteration] = useState("");
  const [slokHindi, setSlokHindi] = useState("");
  const [slokEnglish, setSlokEnglish] = useState("");

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
    LoadData(currentURL);
  };

  const LoadData = async (url) => {
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
              to={`/api/chapter/${chap}/shlok/${ver - 1}`}>
              <span
                className="w-8 h-6 sm:w-10 sm:h-8 opacity-20 hover:opacity-50 duration-300 cursor-pointer"
                onClick={handlePrevious}
                alt="Previous">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="indigo" class="bi bi-arrow-left-circle-fill hover:fill-white " viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                </svg> 
              </span>
            </Link>
            <Link to={`/api/chapter/${chap}/shlok/${ver + 1}`}>
              <span
                className="w-8 h-6 sm:w-10 sm:h-8 opacity-20 hover:opacity-50 duration-300 cursor-pointer"
                onClick={handleNext}
                alt="Next">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="indigo" className="bi bi-arrow-right-circle-fill hover:fill-white " viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
              </span>
            </Link>
          </div>
          <div className="text-center w-full">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              <AudioRead slok={slok} speech={speech}/>{textFormatter(slok)}
            </h1>
            <p className="text-base sm:text-lg mb-4">
            <AudioRead slok={transliteration} speech={speech}/>{textFormatter(transliteration)}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl mb-4">
            <AudioRead slok={slokHindi} speech={speech}/>{textFormatter(slokHindi)}
            </p>
            <p className="text-base sm:text-lg"><AudioRead slok={slokEnglish} speech={speech}/>{textFormatter(slokEnglish)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Homeque;
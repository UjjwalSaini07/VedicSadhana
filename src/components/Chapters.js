import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Krihnabg from './CodeAssets/krishnabg.png';
import icon from './CodeAssets/Icon.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chapters = () => {
  const [chap, setChap] = useState(1);
  const [ver, setVer] = useState(1);
  const [isSpeakingEn, setIsSpeakingEn] = useState(false);
  const [isSpeakingHi, setIsSpeakingHi] = useState(false);
  const [voices, setVoices] = useState([]);
  const [Data, setData] = useState({
    Title: "",
    translation: "",
    meaning: { en: "", hi: "" },
    summary: { en: "", hi: "" },
  });

  useEffect(() => {
    const requestHandler = async (chap, verse) => {
      const currentURL = `https://vedicvani-backend.onrender.com${window.location.pathname}`;
      await fetchData(currentURL);
    };

    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("An error occurred while fetching data", error);
      }
    };

    // Load data initially when the component mounts
    requestHandler(chap, ver);

    // Fetch voices available in the browser
    const fetchVoices = () => {
      const synth = window.speechSynthesis;
      let voices = synth.getVoices();
      if (voices.length !== 0) {
        setVoices(voices);
      }
    };

    // Fetch voices after some delay to ensure they are loaded
    const voicesTimeout = setTimeout(() => {
      fetchVoices();
    }, 1000);

    return () => clearTimeout(voicesTimeout); // Cleanup timeout on unmount

  }, [chap, ver]);

  const textFormatter = (text) => {
    return { __html: text.replace(/(\r\n|\n|\r)/g, '<br />') };
  };

  const changePrevious = () => {
    if (chap > 1) {
      setChap(chap - 1);
      setVer(1);
    }
  };

  const changeNext = () => {
    if (chap < 18) {
      setChap(chap + 1);
      setVer(1);
    }
  };

  const handleSpeech = (text, lang) => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      if (lang === 'en') {
        if (isSpeakingEn) {
          synth.cancel(); // Stop speaking
          setIsSpeakingEn(false);
        } else {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = 'en-US';
          utterance.onend = () => setIsSpeakingEn(false); // Set speaking to false when speech ends
          synth.speak(utterance);
          setIsSpeakingEn(true);
        }
      } else if (lang === 'hi') {
        if (isSpeakingHi) {
          synth.cancel(); // Stop speaking
          setIsSpeakingHi(false);
        } else {
          const utterance = new SpeechSynthesisUtterance();
          const hindiVoice = voices.find(voice => voice.lang === 'hi-IN');
          if (hindiVoice) {
            utterance.voice = hindiVoice;
          }
          utterance.lang = 'hi-IN';
          utterance.onend = () => setIsSpeakingHi(false); // Set speaking to false when speech ends

          // Split text into smaller chunks
          const chunks = text.match(/.{1,150}/g) || [text]; // Decreased chunk size to 150 characters
          utterance.text = chunks.shift();
          synth.speak(utterance);

          // Speak subsequent chunks with minimal delay
          utterance.onend = () => {
            if (chunks.length > 0) {
              setTimeout(() => {
                utterance.text = chunks.shift();
                synth.speak(utterance);
              }, 30); // Adjust delay as needed for smooth speech
            } else {
              setIsSpeakingHi(false);
            }
          };

          setIsSpeakingHi(true);
        }
      }
    } else {
      console.error('Speech Synthesis not supported in this browser.');
    }
  };

  const isPreviousEnabled = chap !== 1;
  const isNextEnabled = chap !== 18;

  return (
    <section>
      <h1 className='text-[2rem]'>|| {Data.name} ||</h1>
      <img className='m-auto pt-10 w-[30rem]' src={Krihnabg} alt="Background" />

      {/* Adding Arrow For fast Travelling */}
      <div className="flex justify-content-around items-center p-25">
        {isPreviousEnabled ? (
          <Link to={`/api/chapter/${chap - 1}`} id="previous" className="transform rotate-180">
            <img
              className="w-10 h-8 sm:w-10 sm:h-8 opacity-45 hover:opacity-100 duration-300 cursor-pointer"
              onClick={changePrevious}
              src={icon}
              alt="Previous"
              title="Previous ChapterSummary"
            />
          </Link>
        ) : (
          <img
            className="w-10 h-8 sm:w-10 sm:h-8 opacity-45 cursor-not-allowed"
            src={icon}
            alt="Previous"
            title="Previous ChapterSummary"
            style={{ opacity: 0.45 }}
          />
        )}

        <p
          className="text-[2rem] text-gray-900 font-bold"
          dangerouslySetInnerHTML={textFormatter(Data.meaning.hi)}
        ></p>

        {isNextEnabled ? (
          <Link to={`/api/chapter/${chap + 1}`} id="next">
            <img
              className="w-10 h-8 sm:w-10 sm:h-8 opacity-45 hover:opacity-100 duration-300 cursor-pointer"
              onClick={changeNext}
              src={icon}
              alt="Next"
              title="Next ChapterSummary"
            />
          </Link>
        ) : (
          <img
            className="w-10 h-8 sm:w-10 sm:h-8 opacity-45 cursor-not-allowed"
            src={icon}
            alt="Next"
            title="Next ChapterSummary"
            style={{ opacity: 0.45 }}
          />
        )}
      </div>

      <div className="text-center flex flex-col justify-center items-center">
        {/* Separator of Heading */}
        <hr style={{
          borderColor: "darkBlue",
          width: "20vw",
          opacity: "0.8",
          height: "15px",  // Adjust the height as needed
          position: "relative",
          top: "8px"
        }} />
      </div>

      <div className='text-center flex justify-between items-center mb-4 row'>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 26px',  /* Default padding for mobile view */
            maxWidth: '480px',  /* Max width for PC view */
            margin: '0 auto',   /* Center align on larger screens */
            boxSizing: 'border-box',
            /* Media query for PC view */
            '@media (min-width: 768px)': {
              padding: '0 460px',
            }
          }}>
            {/* Hin (Hindi) Section */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '10px' }}>
              <i className={`fa-solid fa-volume-high ${isSpeakingHi ? 'text-danger' : ''}`} style={{ cursor: 'pointer', marginBottom: '2px' }} onClick={() => handleSpeech(`${Data.meaning.hi} ${Data.summary.hi}`, 'hi')}></i>
              <p style={{ fontSize: '0.75rem', margin: '0', marginBottom: '5px' }}>Hin</p>
            </div>

            {/* English Section */}
            <div style={{ flexGrow: 1, textAlign: 'center' }}>
              <p
                className="text-[1.25rem] text-gray-900"
                style={{ marginBottom: "10px" }}
                dangerouslySetInnerHTML={textFormatter(Data.meaning.en)}
              ></p>
            </div>

            {/* Eng (English) Section */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '10px' }}>
              <i className={`fa-solid fa-volume-high ${isSpeakingEn ? 'text-danger' : ''}`} style={{ cursor: 'pointer', marginBottom: '2px' }} onClick={() => handleSpeech(`${Data.meaning.en} ${Data.summary.en}`, 'en')}></i>
              <p style={{ fontSize: '0.75rem', margin: '0', marginBottom: '5px' }}>Eng</p>
            </div>
          </div>
        </div>
      </div>

      {/* In that section - Volume Buttons are not fix */}
      {/* <div className="new-ui-element text-center my-4">
        <div className="flex justify-center items-center space-x-0">
            <i className={`fa-solid fa-volume-high ${isSpeakingHi ? 'text-danger' : ''}`}
              style={{ cursor: 'pointer', padding: '0.5rem' }}
              onClick={() => handleSpeech(`${Data.meaning.hi} ${Data.summary.hi}`, 'hi')}>
            </i>
            <p className="text-[1.25rem] text-gray-900 p-4"
              dangerouslySetInnerHTML={textFormatter(Data.meaning.en)}>
            </p>
            <i className={`fa-solid fa-volume-high ${isSpeakingEn ? 'text-danger' : ''}`}
              style={{ cursor: 'pointer', padding: '0.5rem' }}
              onClick={() => handleSpeech(`${Data.meaning.en} ${Data.summary.en}`, 'en')}>
            </i>
        </div>
      </div> */}

      {Data && (
        <div className="text-center flex flex-col justify-center items-center">
          <p
            className="text-[1.5rem] text-gray-900 w-[86vw] sm:w-[70vw]"
            dangerouslySetInnerHTML={textFormatter(Data.summary.hi)}
          ></p>
          {/* Buttons for Read Aloud (Mobile Only) */}
          <div className="text-center mb-4 mt-3 block md:hidden"> {/* Hide on medium screens and larger */}
            <button type="button" className="w-[12rem] btn btn-primary" onClick={() => handleSpeech(Data.summary.hi, 'hi')}>
              {isSpeakingHi ? 'Stop Reading Hindi' : 'Read Aloud Hindi'}
            </button>
          </div>
          {/* Separator between Hindi And English */}
          <hr style={{
            borderColor: "darkBlue",
            width: "65vw",
            opacity: "0.6",
            height: "25px",
            position: "relative",
            top: "13px"
          }} />

          <p
            className="text-[1.5rem] text-gray-900 w-[95vw] sm:w-[70vw]"
            dangerouslySetInnerHTML={textFormatter(Data.summary.en)}
          ></p>

          {/* Buttons for Read Aloud (Mobile Only) */}
          <div className="text-center mb-1 mt-3 block md:hidden"> {/* Hide on medium screens and larger */}
            <button type="button" className="w-[12rem] btn btn-primary" onClick={() => handleSpeech(Data.summary.en, 'en')}>
              {isSpeakingEn ? 'Stop Reading English' : 'Read Aloud English'}
            </button>
          </div>
        </div>
      )}

      <div className='flex justify-content-around items-center p-4 sm:p-10'>
        {isPreviousEnabled ? (
          <Link to={`/api/chapter/${chap - 1}`} id="previous">
            <button type="button" className='w-[8rem] sm:w-[10rem] btn btn-danger' onClick={changePrevious}>Previous</button>
          </Link>
        ) : (
          <button type="button" className='w-[8rem] sm:w-[10rem] btn btn-danger' disabled>Previous</button>
        )}

        {isNextEnabled ? (
          <Link to={`/api/chapter/${chap + 1}`} id="next">
            <button type="button" className='w-[8rem] sm:w-[10rem] btn btn-danger' onClick={changeNext}>Next</button>
          </Link>
        ) : (
          <button type="button" className='w-[8rem] sm:w-[10rem] btn btn-danger' disabled>Next</button>
        )}
      </div>

    </section>
  );
};

export default Chapters;

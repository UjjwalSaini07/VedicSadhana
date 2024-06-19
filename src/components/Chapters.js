import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Krihnabg from '../pages/krishnabg.png';
import icon from './Icon.svg';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chapters = () => {
  const [chap, setChap] = useState(1);
  const [ver, setVer] = useState(1);

  const [Data, setData] = useState({
    Title: "",
    translation: "",
    meaning: { en: "", hi: "" },
    summary: { en: "", hi: "" },
  });
  useEffect(() => {
    const rquestHandler = async (chap, verse) => {
      const currentURL =
        "https://vedicvani-backend.onrender.com" + window.location.pathname;
      await LoadData(currentURL);
    };

    const LoadData = async (url) => {
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
    rquestHandler(chap, ver);

    //when reloading making button to work as normal function
    const url= window.location.pathname;
    const loc= url.split('/');
    setChap(loc[3])
  }, [chap, ver]);

  const textFormatter = (text) => {
    return { __html: text.replace(/(\r\n|\n|\r)/g, '<br />') };
  }
 
  const changePrevious=()=>{
    if (chap > 1) {
      setChap(chap-1);
      setVer(1);
    }
  }

  const changeNext=()=>{
    if(chap<18){
      setChap(parseInt(chap)+1);
      setVer(1);
    }
  }

  return (
    <section>
      <h1 className='text-[2rem]'>|| {Data.name} ||</h1>
      <img className='m-auto pt-10 w-[30rem]' src={Krihnabg} alt="Background" />

      {/* Adding Arrow For fast Travelling */}
      <div className="flex justify-content-around items-center p-25">
        {chap != 1 ? (
          <Link to={`/api/chapter/${chap-1}`} id="previous" className="transform rotate-180">
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

        {chap != 18 ? (
          <Link to={`/api/chapter/${parseInt(chap)+1}`} id="next">
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

      {Data && (
        <div className="text-center flex flex-col justify-center items-center">
          {/* <p
            className="text-[2rem] text-gray-900 font-bold"
            dangerouslySetInnerHTML={textFormatter(Data.meaning.hi)}
          ></p> */}
          {/* Separator of Heading */}
          <hr style={{
              borderColor: "darkBlue",
              width: "20vw",
              opacity: "0.8",
              height: "15px",  // Adjust the height as needed
              position: "relative",
              top: "8px"
          }} />
          <p
            className="text-[1.25rem] text-gray-900"
            style={{ marginBottom: "20px" }}
            dangerouslySetInnerHTML={textFormatter(Data.meaning.en)}
          ></p>
          <p
            className="text-[1.5rem] text-gray-900 w-[70vw]"
            dangerouslySetInnerHTML={textFormatter(Data.summary.hi)}
          ></p>
          {/* Separator between Hindi And Engish */}
          <hr style={{
            borderColor: "darkBlue",
            width: "65vw",
            opacity: "0.6",
            height: "25px",  // Corrected the height
            position: "relative",
            top: "13px"
          }} />

          <p
            className="text-[1.5rem] text-gray-900 w-[70vw]"
            dangerouslySetInnerHTML={textFormatter(Data.summary.en)}
          ></p>
        </div>
      )}

      <div className='flex justify-content-around items-center p-10'>
        {chap!=1 ?  <Link to={`/api/chapter/${chap-1}`} id="previous">
          <button type="button" className='w-[10rem] btn btn-danger'  onClick={changePrevious}>Previous</button>
        </Link> : <button type="button" className='w-[10rem] btn btn-danger' disabled >Previous</button>}

        {chap!=18 ? <Link to={`/api/chapter/${parseInt(chap)+1}`} id="next">
          <button type="button" className='w-[10rem] btn btn-danger'onClick={changeNext}>Next</button>
        </Link>: <button type="button" className='w-[10rem] btn btn-danger' disabled>Next</button>}
      </div>

    </section>
  );
};

export default Chapters;

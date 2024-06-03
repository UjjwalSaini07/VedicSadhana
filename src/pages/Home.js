import React, { useState, useEffect } from "react";
import krishna from "./krishnabg.png";
import logounder from "../components/LogoUnder.png";
import { Link } from "react-router-dom";
import './home.css';
import { AudioPlayer } from 'react-audio-play'
import song from '../components/krishnaflute.mp3'
import AOS from 'aos';


function Home() {
  const [selectedchap, setSelectedchap] = useState(1);
  const [selectedcvers, setSelectedcvers] = useState(1);
  const [verseOptions, setVerseOptions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(
          `https://vedicvani-backend.onrender.com/api/chapter/${selectedchap}`
        );
        const data = await req.json();
        const i = data.verses_count;
        const verseOptions = Array.from({ length: i }, (_, index) => (
          <option key={index} value={index + 1}>
            Shlok {index + 1}
          </option>
        ));
        setVerseOptions(verseOptions);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [selectedchap]);

  const handleChangechap = (event) => {
    setSelectedchap(event.target.value);
  };

  const handleChangevers = (event) => {
    setSelectedcvers(event.target.value);
  };
  useEffect(() => {
    AOS.init({duration: 1000});
  })

  return (
    <section className="min-h-screen flex flex-col items-center p-4">
      <div className="w-full flex justify-center items-center mb-8">
        <img className="opacity-80 w-full max-w-xl" src={krishna} alt="krishna" style={{ animation: "float 2s ease-in-out infinite" }} />

      </div>
      <div className="relative mb-8">
        <img data-aos="fade-right" className="backdrop-opacity-1 absolute w-[28rem] max-w-full top-2 left-[12%] transform -translate-x-1/2" src={logounder} alt="logo" />
        <p className="text-5xl font-[Alegreya] text-center">VedicVani</p>
        <AudioPlayer className="invisible" loop autoPlay src={song} volume={5} />

      </div>

      <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-xl mx-auto mb-8 gap-4">
          <form className="w-full flex flex-col md:flex-row justify-evenly items-center gap-4">
          <div className="relative mt-4 w-full">
            <select
              className="custom-dropdown w-full md:w-72 h-12 z-10 rounded-lg pl-4 text-lg bg-orange-200 border-2 border-orange-400 text-orange-800 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none"
              name="chap"
              id="chap"
              onChange={handleChangechap}
              value={selectedchap}
            >
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="1">Chapter 1</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="2">Chapter 2</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="3">Chapter 3</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="4">Chapter 4</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="5">Chapter 5</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="6">Chapter 6</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="7">Chapter 7</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="8">Chapter 8</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="9">Chapter 9</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="10">Chapter 10</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="11">Chapter 11</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="12">Chapter 12</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="13">Chapter 13</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="14">Chapter 14</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="15">Chapter 15</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="16">Chapter 16</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="17">Chapter 17</option>
              <option className="bg-orange-200 text-orange-800 hover:bg-orange-300" value="18">Chapter 18</option>
            </select>
          </div>

          <div className="relative mt-4 w-full">
            <select
              className="w-full md:w-72 h-12 z-10 rounded-lg pl-4 text-lg bg-orange-200 border-2 border-orange-400 text-orange-800 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none"
              name="verse"
              id="verse"
              onChange={handleChangevers}
              value={selectedcvers}
            >
              {verseOptions}
            </select>
          </div>

            <Link to={`/api/chapter/${selectedchap}/shlok/${selectedcvers}`}>
              <button className="bg-[#002147] text-[#F2F3F4] font-[Alegreya] text-2xl rounded-lg w-full md:w-24 px-4 py-2 duration-300 hover:bg-[#F2F3F4] hover:text-[#002147] hover:shadow-md hover:shadow-orange-900">Go</button>
            </Link>
          </form>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-4 mb-16">
          <Link to={`/api/chapter/1/shlok/1`} className="w-full md:w-auto">
            <button className="bg-[#002147] text-[#F2F3F4] font-[Alegreya] text-2xl rounded-lg w-full px-8 py-4 duration-300 hover:bg-[#F2F3F4] hover:text-[#002147] hover:shadow-md hover:shadow-orange-900">Read Shlok's</button>
          </Link>
          <Link to={`/api/chapter/1`} className="w-full md:w-auto">
            <button className="bg-[#002147] text-[#F2F3F4] font-[Alegreya] text-2xl rounded-lg w-full px-8 py-4 duration-300 hover:bg-[#F2F3F4] hover:text-[#002147] hover:shadow-md hover:shadow-orange-900">Chapter's Summary</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;

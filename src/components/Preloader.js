import React, { useEffect, useRef } from 'react'
import './style.css'
import preimage from './CodeAssets/LogoUnder.png'
import AOS from 'aos';

function Preloader() {
  useEffect(() => {
    AOS.init({duration: 1000});
  })
  const preloaderRef = useRef(null);
  useEffect(() => {
    const loader = preloaderRef.current;
    if (loader) {
      setTimeout(() => {
        loader.classList.add('preloaderremove');
      }, 1500);
      setTimeout(() => {
        loader.classList.add('preloaderhide');
      }, 1505);
    }
  }, []);

  return (
    <div id="preloader" ref={preloaderRef}>
      <span className="text-[#1F2937] font-['Alegreya'] text-[5rem] relative w-[315px] sm: w-[400px]" data-aos="fade-up" data-aos-delay="0">
        VedicVani
          <img className='absolute h-[100px] w-full top-[15px] sm:top-[16px]' data-aos="fade-right" src={preimage} alt="" />
      </span>
    </div>)
}

export default Preloader

import { Link } from 'react-router-dom';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactAudioPlayer from 'react-audio-player';
import { Typewriter } from 'react-simple-typewriter';
import Flute3 from './Flute4.mp3';

// Adding Images
import Image0 from "./Carousel_Images/Ramyana/_Logo.png";
import Image1 from "./Carousel_Images/Ramyana/_01.jpg";
import Image2 from "./Carousel_Images/Ramyana/JaiShreeRam.jpg";
import Image3 from "./Carousel_Images/Ramyana/ShreeRam.jpg";
import Image4 from "./Carousel_Images/Ramyana/ShreeRam2.jpg";

const RamayanaCarousel = () => {
  const imageList = [
    { src: Image0, alt: "Image 0" }, { src: Image1, alt: "Image 1" }, { src: Image2, alt: "Image 2" }, { src: Image3, alt: "Image 3" }, , { src: Image4, alt: "Image 4" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2500,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <style>
        {`
          .ramayana-carousel {
            font-family: 'Montserrat', sans-serif;
            background-color: #f97316;
            padding: 50px 10px;
            text-align: center;
          }
          .ramayana-carousel h1 {
            text-transform: uppercase;
            font-size: 2rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 30px;
          }
          .ramayana-carousel .slider-container {
            position: relative;
            max-width: 43%;
            margin: 0 auto;
            padding: 20px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .ramayana-carousel .box {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            border-radius: 15px;
            height: 450px; /* Initial height for desktop */
          }
          .ramayana-carousel img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              max-width: 100%;
              max-height: 100%;
              width: auto;
              height: auto;
              object-fit: contain;
              margin: auto;
              transition: transform 0.3s ease-in-out;
              border-radius: 20px;
              display: block;
          }
          .slick-prev, .slick-next {
            width: 15px;
            height: 40px;
            z-index: 1;
          }
          .slick-prev:before, .slick-next:before {
            font-size: 40px;
            color: #fff;
          }
          @media (max-width: 992px) {
            .ramayana-carousel .slider-container {
              max-width: 60%;
            }
            .ramayana-carousel .box {
              height: 350px; /* Adjusted height for tablets */
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          @media (max-width: 768px) {
            .ramayana-carousel .slider-container {
              max-width: 80%;
            }
            .ramayana-carousel .box {
              height: 360px; /* Adjusted height for mobile */
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .ramayana-carousel img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              max-width: 100%;
              max-height: 100%;
              width: auto;
              height: auto;
              object-fit: contain;
              margin: auto;
              transition: transform 0.3s ease-in-out;
              border-radius: 20px;
              display: block;
            }
            .ramayana-carousel h1 {
              font-size: 1.5rem;
            }
            .slick-prev, .slick-next {
              width: 12px;
              height: 32px;
            }
            .slick-prev:before, .slick-next:before {
              font-size: 22px;
            }
          }
        `}
      </style>
      <div className="ramayana-carousel">
        <h1>
          <Typewriter
            words={['The Ramayana']}
            loop={200}
            cursor
            cursorStyle='_'
            typeSpeed={500}
            deleteSpeed={100}
            delaySpeed={1200}
          />
        </h1>
        <div className="slider-container">
          <Slider {...settings}>
            {imageList.map((image, index) => (
              <div key={index} className="box">
                <img
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </Slider>
        </div>
        <ReactAudioPlayer
          src={Flute3}
          autoPlay
          loop
          volume={0.2}
          style={{ display: 'none' }} // Hide the audio player
        />
      </div>
    </>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-62px" }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-45px" }}
      onClick={onClick}
    />
  );
};

export default RamayanaCarousel;


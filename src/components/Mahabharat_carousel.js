import { Route, Link } from 'react-router-dom';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactAudioPlayer from 'react-audio-player';
import { Typewriter } from 'react-simple-typewriter';
import { FaHome } from 'react-icons/fa';
import Flute3 from './FluteTunes/Flute3.mp3';
import chronicle from './Chronicle';
import { motion } from "framer-motion";

// Adding Images
import Image1 from "./Carousel_Images/Mahabharat/_0MahaBharat.png";
import Image2 from "./Carousel_Images/Mahabharat/_01.jpg";
import Image3 from "./Carousel_Images/Mahabharat/_01_.jpeg";
import Image4 from "./Carousel_Images/Mahabharat/_1.jpg";
import Image5 from "./Carousel_Images/Mahabharat/_2_1.jpg";
import Image6 from "./Carousel_Images/Mahabharat/_2_2.jpg";
import Image7 from "./Carousel_Images/Mahabharat/_3.jpg";
import Image8 from "./Carousel_Images/Mahabharat/_3_1.jpg";
import Image9 from "./Carousel_Images/Mahabharat/_4.jpg";
import Image10 from "./Carousel_Images/Mahabharat/_4_0Yudhisthira.jpg";
import Image11 from "./Carousel_Images/Mahabharat/_4_1Arjun.jpg";
import Image12 from "./Carousel_Images/Mahabharat/_4_2Bheem.jpg";
import Image13 from "./Carousel_Images/Mahabharat/_5.png";
import Image14 from "./Carousel_Images/Mahabharat/_5_1.jpeg";
import Image15 from "./Carousel_Images/Mahabharat/_5_2All5Pandav.jpg";
import Image16 from "./Carousel_Images/Mahabharat/_5_3.jpeg";
import Image17 from "./Carousel_Images/Mahabharat/_6.png";
import Image18 from "./Carousel_Images/Mahabharat/_7.png";
import Image19 from "./Carousel_Images/Mahabharat/_8.png";
import Image20 from "./Carousel_Images/Mahabharat/_8_1.png";
import Image21 from "./Carousel_Images/Mahabharat/_9.jpg";
import Image22 from "./Carousel_Images/Mahabharat/_10.jpg";
import Image23 from "./Carousel_Images/Mahabharat/_11.png";
import Image24 from "./Carousel_Images/Mahabharat/_11_1.jpg";
import Image25 from "./Carousel_Images/Mahabharat/_12.jpg";
import Image26 from "./Carousel_Images/Mahabharat/_13.jpg";
import Image27 from "./Carousel_Images/Mahabharat/_14_1.jpg";
import Image28 from "./Carousel_Images/Mahabharat/_14_2.png";
import Image29 from "./Carousel_Images/Mahabharat/_14_3.jpg";
import Image30 from "./Carousel_Images/Mahabharat/_14_4.png";
import Image31 from "./Carousel_Images/Mahabharat/_14_5.png";
import Image32 from "./Carousel_Images/Mahabharat/_14_6.jpg";
import Image33 from "./Carousel_Images/Mahabharat/_14_7.png";
import Image34 from "./Carousel_Images/Mahabharat/_15.png";
import Image35 from "./Carousel_Images/Mahabharat/_15_1.png";
import Image36 from "./Carousel_Images/Mahabharat/_15_2.jpeg";
import Image37 from "./Carousel_Images/Mahabharat/_15_3.png";
import Image38 from "./Carousel_Images/Mahabharat/_16.jpeg";
import Image39 from "./Carousel_Images/Mahabharat/_16_1.png";
import Image40 from "./Carousel_Images/Mahabharat/_16_2.png";
import Image41 from "./Carousel_Images/Mahabharat/_17.png";
import Image42 from "./Carousel_Images/Mahabharat/_17_1.png";
import Image43 from "./Carousel_Images/Mahabharat/_17_2.jpg";
import Image44 from "./Carousel_Images/Mahabharat/_17_3.jpg";
import Image45 from "./Carousel_Images/Mahabharat/_18.jpeg";
import Image46 from "./Carousel_Images/Mahabharat/_18_1.png";
import Image47 from "./Carousel_Images/Mahabharat/_18_2.png";
import Image48 from "./Carousel_Images/Mahabharat/_18_3.png";
import Image49 from "./Carousel_Images/Mahabharat/_19.jpeg";
import Image50 from "./Carousel_Images/Mahabharat/_20.png";
import Image51 from "./Carousel_Images/Mahabharat/_20_1.png";
import Image52 from "./Carousel_Images/Mahabharat/_20_2.jpg";
import Image53 from "./Carousel_Images/Mahabharat/_20_3.jpg";
import Image54 from "./Carousel_Images/Mahabharat/_21.jpeg";
import Image55 from "./Carousel_Images/Mahabharat/_21_1.jpeg";
import Image56 from "./Carousel_Images/Mahabharat/_21_2.png";
import Image57 from "./Carousel_Images/Mahabharat/_21_3.png";
import Image58 from "./Carousel_Images/Mahabharat/_22.png";
import Image59 from "./Carousel_Images/Mahabharat/_22_1.jpg";
import Image60 from "./Carousel_Images/Mahabharat/_23.jpg";
import Image61 from "./Carousel_Images/Mahabharat/_24.jpeg";
import Image62 from "./Carousel_Images/Mahabharat/_24_1.jpg";
import Image63 from "./Carousel_Images/Mahabharat/_25.png";
import Image64 from "./Carousel_Images/Mahabharat/_26.jpg";
import Image65 from "./Carousel_Images/Mahabharat/_26_1.jpg";
import Image66 from "./Carousel_Images/Mahabharat/_27.jpeg";
import Image67 from "./Carousel_Images/Mahabharat/_27_1.jpeg";
import Image68 from "./Carousel_Images/Mahabharat/_27_2.png";
import Image69 from "./Carousel_Images/Mahabharat/_28_1.jpg";
import Image70 from "./Carousel_Images/Mahabharat/_28_2.jpeg";
import Image71 from "./Carousel_Images/Mahabharat/_28_3.jpg";
import Image72 from "./Carousel_Images/Mahabharat/_29.png";
import Image73 from "./Carousel_Images/Mahabharat/_30.jpeg";
import Image74 from "./Carousel_Images/Mahabharat/_30_1.jpg";
import Image75 from "./Carousel_Images/Mahabharat/_30_2.jpg";
import Image76 from "./Carousel_Images/Mahabharat/_30_3.jpg";
import Image77 from "./Carousel_Images/Mahabharat/_30_4.jpg";
import Image78 from "./Carousel_Images/Mahabharat/_30_5.jpg";
import Image79 from "./Carousel_Images/Mahabharat/_31War.jpg";
import Image80 from "./Carousel_Images/Mahabharat/_31War0.jpg";
import Image81 from "./Carousel_Images/Mahabharat/_31War1.jpg";
import Image82 from "./Carousel_Images/Mahabharat/_31War2.jpeg";
import Image83 from "./Carousel_Images/Mahabharat/_31War3.jpg";
import Image84 from "./Carousel_Images/Mahabharat/_31War4.jpeg";
import Image85 from "./Carousel_Images/Mahabharat/_31War5.jpg";
import Image86 from "./Carousel_Images/Mahabharat/_31War6.jpg";
import Image87 from "./Carousel_Images/Mahabharat/_31War7.jpeg";
import Image88 from "./Carousel_Images/Mahabharat/_31War8.jpeg";
import Image89 from "./Carousel_Images/Mahabharat/_31War9.jpg";
import Image90 from "./Carousel_Images/Mahabharat/_31War10.jpeg";
import Image91 from "./Carousel_Images/Mahabharat/_31War11.jpeg";
import Image92 from "./Carousel_Images/Mahabharat/_31War12.jpeg";
import Image93 from "./Carousel_Images/Mahabharat/_31War13.jpg";
import Image94 from "./Carousel_Images/Mahabharat/_31War14.png";
import Image95 from "./Carousel_Images/Mahabharat/_31War15.jpeg";
import Image96 from "./Carousel_Images/Mahabharat/_31War16.jpeg";
import Image97 from "./Carousel_Images/Mahabharat/_31War17.jpg";
import Image98 from "./Carousel_Images/Mahabharat/_31War18.jpeg";
import Image99 from "./Carousel_Images/Mahabharat/_31War19.jpg";
import Image100 from "./Carousel_Images/Mahabharat/_31War20.jpeg";
import Image101 from "./Carousel_Images/Mahabharat/_31War21.jpeg";
import Image102 from "./Carousel_Images/Mahabharat/_31War22.jpg";
import Image103 from "./Carousel_Images/Mahabharat/_31War23.png";
import Image104 from "./Carousel_Images/Mahabharat/_31War24.png";
import Image105 from "./Carousel_Images/Mahabharat/_31War25.jpeg";
import Image106 from "./Carousel_Images/Mahabharat/_31War26.jpeg";
import Image107 from "./Carousel_Images/Mahabharat/_31War27.jpeg";
import Image108 from "./Carousel_Images/Mahabharat/_31War28.jpeg";
import Image109 from "./Carousel_Images/Mahabharat/_31War29.jpeg";
import Image110 from "./Carousel_Images/Mahabharat/_31War30.jpeg";
import Image111 from "./Carousel_Images/Mahabharat/_31War31.png";
import Image112 from "./Carousel_Images/Mahabharat/_31War32.jpg";
import Image113 from "./Carousel_Images/Mahabharat/_31War33.png";
import Image114 from "./Carousel_Images/Mahabharat/_31War34.jpg";
import Image115 from "./Carousel_Images/Mahabharat/_31War35.jpeg";
import Image116 from "./Carousel_Images/Mahabharat/_32.png";
import Image117 from "./Carousel_Images/Mahabharat/_33.png";
import Image118 from "./Carousel_Images/Mahabharat/_33_1.jpg";
import Image119 from "./Carousel_Images/Mahabharat/_33_2.jpg";
import Image120 from "./Carousel_Images/Mahabharat/_33_3.jpeg";
import Image121 from "./Carousel_Images/Mahabharat/_34.jpeg";
import Image122 from "./Carousel_Images/Mahabharat/_35.jpeg";
import Image123 from "./Carousel_Images/Mahabharat/_35_1.jpg";
import Image124 from "./Carousel_Images/Mahabharat/last.jpg";

const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
  },
});

const Mahabharatcarousel = () => {
  const imageList = [
    { src: Image1, alt: "Image 1" }, { src: Image2, alt: "Image 2" }, { src: Image3, alt: "Image 3" }, { src: Image4, alt: "Image 4" },
    { src: Image5, alt: "Image 5" }, { src: Image6, alt: "Image 6" }, { src: Image7, alt: "Image 7" }, { src: Image8, alt: "Image 8" },
    { src: Image9, alt: "Image 9" }, { src: Image10, alt: "Image 10" }, { src: Image11, alt: "Image 11" }, { src: Image12, alt: "Image 12" },
    { src: Image13, alt: "Image 13" }, { src: Image14, alt: "Image 14" }, { src: Image15, alt: "Image 15" }, { src: Image16, alt: "Image 16" },
    { src: Image17, alt: "Image 17" }, { src: Image18, alt: "Image 18" }, { src: Image19, alt: "Image 19" }, { src: Image20, alt: "Image 20" },
    { src: Image21, alt: "Image 21" }, { src: Image22, alt: "Image 22" }, { src: Image23, alt: "Image 23" }, { src: Image24, alt: "Image 24" },
    { src: Image25, alt: "Image 25" }, { src: Image26, alt: "Image 26" }, { src: Image27, alt: "Image 27" }, { src: Image28, alt: "Image 28" },
    { src: Image29, alt: "Image 29" }, { src: Image30, alt: "Image 30" }, { src: Image31, alt: "Image 31" }, { src: Image32, alt: "Image 32" },
    { src: Image33, alt: "Image 33" }, { src: Image34, alt: "Image 34" }, { src: Image35, alt: "Image 35" }, { src: Image36, alt: "Image 36" },
    { src: Image37, alt: "Image 37" }, { src: Image38, alt: "Image 38" }, { src: Image39, alt: "Image 39" }, { src: Image40, alt: "Image 40" },
    { src: Image41, alt: "Image 41" }, { src: Image42, alt: "Image 42" }, { src: Image43, alt: "Image 43" }, { src: Image44, alt: "Image 44" },
    { src: Image45, alt: "Image 45" }, { src: Image46, alt: "Image 46" }, { src: Image47, alt: "Image 47" }, { src: Image48, alt: "Image 48" },
    { src: Image49, alt: "Image 49" }, { src: Image50, alt: "Image 50" }, { src: Image51, alt: "Image 51" }, { src: Image52, alt: "Image 52" },
    { src: Image53, alt: "Image 53" }, { src: Image54, alt: "Image 54" }, { src: Image55, alt: "Image 55" }, { src: Image56, alt: "Image 56" },
    { src: Image57, alt: "Image 57" }, { src: Image58, alt: "Image 58" }, { src: Image59, alt: "Image 59" }, { src: Image60, alt: "Image 60" },
    { src: Image61, alt: "Image 61" }, { src: Image62, alt: "Image 62" }, { src: Image63, alt: "Image 63" }, { src: Image64, alt: "Image 64" },
    { src: Image65, alt: "Image 65" }, { src: Image66, alt: "Image 66" }, { src: Image67, alt: "Image 67" }, { src: Image68, alt: "Image 68" },
    { src: Image69, alt: "Image 69" }, { src: Image70, alt: "Image 70" }, { src: Image71, alt: "Image 71" }, { src: Image72, alt: "Image 72" },
    { src: Image73, alt: "Image 73" }, { src: Image74, alt: "Image 74" }, { src: Image75, alt: "Image 75" }, { src: Image76, alt: "Image 76" },
    { src: Image77, alt: "Image 77" }, { src: Image78, alt: "Image 78" }, { src: Image79, alt: "Image 79" }, { src: Image80, alt: "Image 80" },
    { src: Image81, alt: "Image 81" }, { src: Image82, alt: "Image 82" }, { src: Image83, alt: "Image 83" }, { src: Image84, alt: "Image 84" },
    { src: Image85, alt: "Image 85" }, { src: Image86, alt: "Image 86" }, { src: Image87, alt: "Image 87" }, { src: Image88, alt: "Image 88" },
    { src: Image89, alt: "Image 89" }, { src: Image90, alt: "Image 90" }, { src: Image91, alt: "Image 91" }, { src: Image92, alt: "Image 92" },
    { src: Image93, alt: "Image 93" }, { src: Image94, alt: "Image 94" }, { src: Image95, alt: "Image 95" }, { src: Image96, alt: "Image 96" },
    { src: Image97, alt: "Image 97" }, { src: Image98, alt: "Image 98" }, { src: Image99, alt: "Image 99" }, { src: Image100, alt: "Image 100" },
    { src: Image101, alt: "Image 101" }, { src: Image102, alt: "Image 102" }, { src: Image103, alt: "Image 103" }, { src: Image104, alt: "Image 104" },
    { src: Image105, alt: "Image 105" }, { src: Image106, alt: "Image 106" }, { src: Image107, alt: "Image 107" }, { src: Image108, alt: "Image 108" },
    { src: Image109, alt: "Image 109" }, { src: Image110, alt: "Image 110" }, { src: Image111, alt: "Image 111" }, { src: Image112, alt: "Image 112" },
    { src: Image113, alt: "Image 113" }, { src: Image114, alt: "Image 114" }, { src: Image115, alt: "Image 115" }, { src: Image116, alt: "Image 116" },
    { src: Image117, alt: "Image 117" }, { src: Image118, alt: "Image 118" }, { src: Image119, alt: "Image 119" }, { src: Image120, alt: "Image 120" },
    { src: Image121, alt: "Image 121" }, { src: Image122, alt: "Image 122" }, { src: Image123, alt: "Image 123" }, { src: Image124, alt: "Image 124" },
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
          .mahabharat-carousel {
            font-family: 'Montserrat', sans-serif;
            background-color: #f97316;
            padding: 50px 10px;
            text-align: center;
            position: relative;
          }
          .mahabharat-carousel h1 {
            text-transform: uppercase;
            font-size: 2rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 30px;
          }
          .mahabharat-carousel .slider-container {
            position: relative;
            max-width: 43%;
            margin: 0 auto;
            padding: 20px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .mahabharat-carousel .box {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            border-radius: 15px;
            height: 450px; /* Initial height for desktop */
          }
          .mahabharat-carousel img {
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
          .innovative-button {
            position: absolute;
            top: 8px;
            right: 10px;
            padding: 1px 8px;
            background-color: #fff;
            color: #f97316;
            border: 1.5px solid #f97316;
            border-radius: 25px;
            text-transform: uppercase;
            font-size: 1rem;
            font-weight: 650;
            text-decoration: none;
            transition: all 0.3s ease-in-out;
            z-index: 1;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
          .innovative-button:hover {
            background-color: #f97316;
            color: #fff;
            transform: scale(1.1);
          }
          .home-icon {
            display: none;
            position: absolute;
            top: 10px;
            right: 12px;
            font-size: 1.5rem;
            color: #fff;
            z-index: 1;
          }

          @media (max-width: 992px) {
            .mahabharat-carousel .slider-container {
              max-width: 60%;
            }
            .mahabharat-carousel .box {
              height: 350px; /* Adjusted height for tablets */
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          @media (max-width: 768px) {
            .mahabharat-carousel {
              padding: 40px 10px;
              height: 46rem;
              text-align: center;
            }
            .mahabharat-carousel .slider-container {
              max-width: 80%;
            }
            .mahabharat-carousel .box {
              height: 360px; /* Adjusted height for mobile */
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .mahabharat-carousel img {
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
            .mahabharat-carousel h1 {
              font-size: 1.5rem;
            }
            .slick-prev, .slick-next {
              width: 12px;
              height: 32px;
            }
            .slick-prev:before, .slick-next:before {
              font-size: 22px;
            }
            .innovative-button {
              display: none;
            }
            .home-icon {
              display: block;
              z-index: 1;
            }
          }
        `}
      </style>
      <div className="mahabharat-carousel">
        {/* <Link to='/api/chronicle' className="innovative-button">Chronicles</Link> */}
        <Link to='/api/chronicle' className="home-icon">
        <motion.div
          variants={textVariant(0.48)}
          initial="hidden"
          animate="show"
        >
          <FaHome />
        </motion.div>
        </Link>
        <motion.div
          variants={textVariant(0.74)}
          initial="hidden"
          animate="show"
        >
        <h1>
          <Typewriter
            words={['The Mahabharata']}
            loop={200}
            cursor
            cursorStyle='_'
            typeSpeed={500}
            deleteSpeed={100}
            delaySpeed={1200}
          />
        </h1>
        </motion.div>
        <motion.div
          variants={textVariant(1.24)}
          initial="hidden"
          animate="show"
        >
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
        </motion.div>
        <ReactAudioPlayer
          src={Flute3}
          autoPlay
          loop
          volume={0.35}
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

const Chronicle = () => {
  return <div>Chronicle Page</div>;
};

export default Mahabharatcarousel;

import React from 'react';
import { Route, Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactAudioPlayer from 'react-audio-player';
import { Typewriter } from 'react-simple-typewriter';
import { FaHome } from 'react-icons/fa';
import Flute4 from './FluteTunes/Flute4.mp3';
import chronicle from './Chronicle';
import { motion } from "framer-motion";

// Adding Images
import Image0 from "./Carousel_Images/Ramyana/__0_Logo.png";
import Image1 from "./Carousel_Images/Ramyana/_0_1.jpg";
import Image2 from "./Carousel_Images/Ramyana/_0_init.jpg";
import Image3 from "./Carousel_Images/Ramyana/_0_init1.png";
import Image4 from "./Carousel_Images/Ramyana/_1.jpeg";
import Image5 from "./Carousel_Images/Ramyana/_2.png";
import Image6 from "./Carousel_Images/Ramyana/_3.png";
import Image7 from "./Carousel_Images/Ramyana/_4.png"; //todo: Ramayana Kandas1 - Bala Kanda
import Image8 from "./Carousel_Images/Ramyana/_5.jpeg";
import Image9 from "./Carousel_Images/Ramyana/_6.png";
import Image10 from "./Carousel_Images/Ramyana/_7.jpeg";
import Image11 from "./Carousel_Images/Ramyana/_7_1.jpg";
import Image12 from "./Carousel_Images/Ramyana/_8.jpeg";
import Image13 from "./Carousel_Images/Ramyana/_9.jpg";
import Image14 from "./Carousel_Images/Ramyana/_9_1.png";
import Image15 from "./Carousel_Images/Ramyana/_9_2.png";
import Image16 from "./Carousel_Images/Ramyana/_9_3.png";
import Image17 from "./Carousel_Images/Ramyana/_10.png";
import Image18 from "./Carousel_Images/Ramyana/_10_1.jpg";
import Image19 from "./Carousel_Images/Ramyana/_10_2.png";
import Image20 from "./Carousel_Images/Ramyana/_10_3.png";
import Image21 from "./Carousel_Images/Ramyana/_10_3_1.jpeg";
import Image22 from "./Carousel_Images/Ramyana/_10_4.jpeg";
import Image23 from "./Carousel_Images/Ramyana/_10_5.jpg";
import Image24 from "./Carousel_Images/Ramyana/_10_6.png";
import Image25 from "./Carousel_Images/Ramyana/_11.jpg";
import Image26 from "./Carousel_Images/Ramyana/_11_1.png";
import Image27 from "./Carousel_Images/Ramyana/_11_2.jpg";
import Image28 from "./Carousel_Images/Ramyana/_11_3.png";
import Image29 from "./Carousel_Images/Ramyana/_12.jpg";
import Image30 from "./Carousel_Images/Ramyana/_13.png";
import Image31 from "./Carousel_Images/Ramyana/_13_1.png";
import Image32 from "./Carousel_Images/Ramyana/_13_2.jpg";
import Image33 from "./Carousel_Images/Ramyana/_13_2_1.jpeg";
import Image34 from "./Carousel_Images/Ramyana/_13_2_2.jpeg";
import Image35 from "./Carousel_Images/Ramyana/_13_3.png";
import Image36 from "./Carousel_Images/Ramyana/_13_4.jpeg";
import Image37 from "./Carousel_Images/Ramyana/_13_5.jpg";
import Image38 from "./Carousel_Images/Ramyana/_13_6.png";
import Image39 from "./Carousel_Images/Ramyana/_14.png";
import Image40 from "./Carousel_Images/Ramyana/_15.png";
import Image41 from "./Carousel_Images/Ramyana/_15_1.jpg";
import Image42 from "./Carousel_Images/Ramyana/_15_2.jpeg";
import Image43 from "./Carousel_Images/Ramyana/_15_3.png";
import Image44 from "./Carousel_Images/Ramyana/_15_4.png";
import Image45 from "./Carousel_Images/Ramyana/_15_5.jpg";
import Image46 from "./Carousel_Images/Ramyana/_15_6.jpg";
import Image47 from "./Carousel_Images/Ramyana/_15_7.jpg";
import Image48 from "./Carousel_Images/Ramyana/_15_8.jpg";
import Image49 from "./Carousel_Images/Ramyana/_15_9.png";
import Image50 from "./Carousel_Images/Ramyana/_16_0.jpg";
import Image51 from "./Carousel_Images/Ramyana/_16_1.jpg";
import Image52 from "./Carousel_Images/Ramyana/_16_2.jpg";
import Image53 from "./Carousel_Images/Ramyana/_17.jpg";
import Image54 from "./Carousel_Images/Ramyana/_17_1.jpg";
import Image55 from "./Carousel_Images/Ramyana/_17_2.jpg";
import Image56 from "./Carousel_Images/Ramyana/_18.gif";
import Image57 from "./Carousel_Images/Ramyana/_18_1.jpg";
import Image58 from "./Carousel_Images/Ramyana/_18_2.png";
import Image59 from "./Carousel_Images/Ramyana/_18_3.png";
import Image60 from "./Carousel_Images/Ramyana/_18_4.png";
import Image61 from "./Carousel_Images/Ramyana/_18_5.jpg";
import Image62 from "./Carousel_Images/Ramyana/_18_6.png";
import Image63 from "./Carousel_Images/Ramyana/_18_7.jpeg";
import Image64 from "./Carousel_Images/Ramyana/_18_8.png";
import Image65 from "./Carousel_Images/Ramyana/_19.jpg";
import Image66 from "./Carousel_Images/Ramyana/_19_1.jpg";
import Image67 from "./Carousel_Images/Ramyana/_19_2.png";
import Image68 from "./Carousel_Images/Ramyana/_19_3.jpg";
import Image69 from "./Carousel_Images/Ramyana/_19_4.jpeg";
import Image70 from "./Carousel_Images/Ramyana/_19_5.jpg";
import Image71 from "./Carousel_Images/Ramyana/_19_6.png";
import Image72 from "./Carousel_Images/Ramyana/_20.png"; //todo: Ramayana Kandas2 - Ayodhya Kanda
import Image73 from "./Carousel_Images/Ramyana/_22.jpeg";
import Image74 from "./Carousel_Images/Ramyana/_22__1.jpeg";
import Image75 from "./Carousel_Images/Ramyana/_22_1.jpg";
import Image76 from "./Carousel_Images/Ramyana/_22_2.jpeg";
import Image77 from "./Carousel_Images/Ramyana/_22_3.png";
import Image78 from "./Carousel_Images/Ramyana/_22_4.jpeg";
import Image79 from "./Carousel_Images/Ramyana/_22_5.jpg";
import Image80 from "./Carousel_Images/Ramyana/_22_6.png";
import Image81 from "./Carousel_Images/Ramyana/_23.jpeg";
import Image82 from "./Carousel_Images/Ramyana/_23_1.png";
import Image83 from "./Carousel_Images/Ramyana/_23_2.png";
import Image84 from "./Carousel_Images/Ramyana/_24.png";
import Image85 from "./Carousel_Images/Ramyana/_24_1.png";
import Image86 from "./Carousel_Images/Ramyana/_24_2.png";
import Image87 from "./Carousel_Images/Ramyana/_24_3.jpeg";
import Image88 from "./Carousel_Images/Ramyana/_24_4.png";
import Image89 from "./Carousel_Images/Ramyana/_24_5.jpeg";
import Image90 from "./Carousel_Images/Ramyana/_24_6.jpg";
import Image91 from "./Carousel_Images/Ramyana/_24_7.jpg";
import Image92 from "./Carousel_Images/Ramyana/_25.png";
import Image93 from "./Carousel_Images/Ramyana/_26.png"; //todo: Ramayana Kandas3 - Aranya Kanda
import Image94 from "./Carousel_Images/Ramyana/_27.png";
import Image95 from "./Carousel_Images/Ramyana/_27_1.png";
import Image96 from "./Carousel_Images/Ramyana/_27_1_1.jpg";
import Image97 from "./Carousel_Images/Ramyana/_27_2.png";
import Image98 from "./Carousel_Images/Ramyana/_27_2_1.jpeg";
import Image99 from "./Carousel_Images/Ramyana/_27_3.jpg";
import Image100 from "./Carousel_Images/Ramyana/_27_4.jpg";
import Image101 from "./Carousel_Images/Ramyana/_28.png";
import Image102 from "./Carousel_Images/Ramyana/_28_1.jpeg";
import Image103 from "./Carousel_Images/Ramyana/_28_2.jpg";
import Image104 from "./Carousel_Images/Ramyana/_28_3.png";
import Image105 from "./Carousel_Images/Ramyana/_28_4.jpg";
import Image106 from "./Carousel_Images/Ramyana/_28_5.png";
import Image107 from "./Carousel_Images/Ramyana/_29.png";
import Image108 from "./Carousel_Images/Ramyana/_29_1.png";
import Image109 from "./Carousel_Images/Ramyana/_29_2.jpg";
import Image110 from "./Carousel_Images/Ramyana/_29_2_1.jpg";
import Image111 from "./Carousel_Images/Ramyana/_29_3.jpg";
import Image112 from "./Carousel_Images/Ramyana/_29_4.png";
import Image113 from "./Carousel_Images/Ramyana/_29_5.jpg";
import Image114 from "./Carousel_Images/Ramyana/_29_6.jpeg";
import Image115 from "./Carousel_Images/Ramyana/_29_7.jpeg";
import Image116 from "./Carousel_Images/Ramyana/_29_8.png";
import Image117 from "./Carousel_Images/Ramyana/_29_9.png";
import Image118 from "./Carousel_Images/Ramyana/_29_10.jpg";
import Image119 from "./Carousel_Images/Ramyana/_29_11.jpg";
import Image120 from "./Carousel_Images/Ramyana/_30.jpg";
import Image121 from "./Carousel_Images/Ramyana/_30_1.png";
import Image122 from "./Carousel_Images/Ramyana/_31.jpeg";
import Image123 from "./Carousel_Images/Ramyana/_32.jpg";
import Image124 from "./Carousel_Images/Ramyana/_32_1.jpg";
import Image125 from "./Carousel_Images/Ramyana/_32_2.png";
import Image126 from "./Carousel_Images/Ramyana/_32_3.jpg";
import Image127 from "./Carousel_Images/Ramyana/_33.png"; //todo: Ramayana Kandas4 - Kishikindha Kanda
import Image128 from "./Carousel_Images/Ramyana/_34.png";
import Image129 from "./Carousel_Images/Ramyana/_34_1.jpeg";
import Image130 from "./Carousel_Images/Ramyana/_34_2.jpeg";
import Image131 from "./Carousel_Images/Ramyana/_34_3.png";
// import Image132 from "./Carousel_Images/Ramyana/_34_3.png"; // Todo: 132 Spot Out by the Chance this link again create
import Image133 from "./Carousel_Images/Ramyana/_34_4.jpg";
import Image134 from "./Carousel_Images/Ramyana/_34_4_1.jpeg";
import Image135 from "./Carousel_Images/Ramyana/_34_4_2.jpeg";
import Image136 from "./Carousel_Images/Ramyana/_34_4_3.png";
import Image137 from "./Carousel_Images/Ramyana/_34_5.jpg";
import Image138 from "./Carousel_Images/Ramyana/_34_6.jpg";
import Image139 from "./Carousel_Images/Ramyana/_34_7.png";
import Image140 from "./Carousel_Images/Ramyana/_35.jpg";
import Image141 from "./Carousel_Images/Ramyana/_35_1.jpg";
import Image142 from "./Carousel_Images/Ramyana/_35_2.jpg";
import Image143 from "./Carousel_Images/Ramyana/_36.jpg";
import Image144 from "./Carousel_Images/Ramyana/_37.png"; //todo: Ramayana Kandas5 - Sundara Kanda
import Image145 from "./Carousel_Images/Ramyana/_38.jpeg";
import Image146 from "./Carousel_Images/Ramyana/_38_1.jpg";
import Image147 from "./Carousel_Images/Ramyana/_38_2.png";
import Image148 from "./Carousel_Images/Ramyana/_38_3.png";
import Image149 from "./Carousel_Images/Ramyana/_38_4.jpg";
import Image150 from "./Carousel_Images/Ramyana/_38_5.jpg";
import Image151 from "./Carousel_Images/Ramyana/_38_6.png";
import Image152 from "./Carousel_Images/Ramyana/_39.jpg";
import Image153 from "./Carousel_Images/Ramyana/_39_1.jpg";
import Image154 from "./Carousel_Images/Ramyana/_39_1_1.png";
import Image155 from "./Carousel_Images/Ramyana/_39_2.jpg";
import Image156 from "./Carousel_Images/Ramyana/_39_3.jpg";
import Image157 from "./Carousel_Images/Ramyana/_39_4.jpg";
import Image158 from "./Carousel_Images/Ramyana/_39_5.png";
import Image159 from "./Carousel_Images/Ramyana/_39_6.jpeg";
import Image160 from "./Carousel_Images/Ramyana/_39_7.jpeg";
import Image161 from "./Carousel_Images/Ramyana/_40.jpg";
import Image162 from "./Carousel_Images/Ramyana/_40_1.jpg";
import Image163 from "./Carousel_Images/Ramyana/_40_2.png";
import Image164 from "./Carousel_Images/Ramyana/_40_3.jpg";
import Image165 from "./Carousel_Images/Ramyana/_41.png"; //todo: Ramayana Kandas6 - Yuddha Kanda
import Image166 from "./Carousel_Images/Ramyana/_42.png";
import Image167 from "./Carousel_Images/Ramyana/_42_1.jpg";
import Image168 from "./Carousel_Images/Ramyana/_42_2.jpeg";
import Image169 from "./Carousel_Images/Ramyana/_43.png";
import Image170 from "./Carousel_Images/Ramyana/_43_1.jpeg";
import Image171 from "./Carousel_Images/Ramyana/_43_2.jpg";
import Image172 from "./Carousel_Images/Ramyana/_43_3.png";
import Image173 from "./Carousel_Images/Ramyana/_43_4.png";
import Image174 from "./Carousel_Images/Ramyana/_43_5.jpeg";
import Image175 from "./Carousel_Images/Ramyana/_43_6.jpg";
import Image176 from "./Carousel_Images/Ramyana/_44.png";
import Image177 from "./Carousel_Images/Ramyana/_44_1.jpeg";
import Image178 from "./Carousel_Images/Ramyana/_44_2.jpg";
import Image179 from "./Carousel_Images/Ramyana/_45.jpg";
import Image180 from "./Carousel_Images/Ramyana/_45_1.png";
import Image181 from "./Carousel_Images/Ramyana/_45_2.jpeg";
import Image182 from "./Carousel_Images/Ramyana/_45_3.png";
import Image183 from "./Carousel_Images/Ramyana/_45_4.png";
import Image184 from "./Carousel_Images/Ramyana/_45_5.jpg";
import Image185 from "./Carousel_Images/Ramyana/_45_6.jpg";
import Image186 from "./Carousel_Images/Ramyana/_45_7.png";
import Image187 from "./Carousel_Images/Ramyana/_46.png";
import Image188 from "./Carousel_Images/Ramyana/_46_1.jpg";
import Image189 from "./Carousel_Images/Ramyana/_47.png";
import Image190 from "./Carousel_Images/Ramyana/_47_1.png";
import Image191 from "./Carousel_Images/Ramyana/_47_2.png";
import Image192 from "./Carousel_Images/Ramyana/_47_2.png";
import Image193 from "./Carousel_Images/Ramyana/_47_3.jpeg";
import Image194 from "./Carousel_Images/Ramyana/_47_5.png";
import Image195 from "./Carousel_Images/Ramyana/_47_6.png";
import Image196 from "./Carousel_Images/Ramyana/_47_7.jpg";
import Image197 from "./Carousel_Images/Ramyana/_48.png";
import Image198 from "./Carousel_Images/Ramyana/_48_1.png";
import Image199 from "./Carousel_Images/Ramyana/_48_2.jpg";
import Image200 from "./Carousel_Images/Ramyana/_49.png";
import Image201 from "./Carousel_Images/Ramyana/_49_1.jpeg";
import Image202 from "./Carousel_Images/Ramyana/_49_2.jpg";
import Image203 from "./Carousel_Images/Ramyana/_49_3.png";
import Image204 from "./Carousel_Images/Ramyana/_49_4.jpeg";
import Image205 from "./Carousel_Images/Ramyana/_49_5.jpeg";
import Image206 from "./Carousel_Images/Ramyana/_49_6.jpg";
import Image207 from "./Carousel_Images/Ramyana/_50.jpg";
import Image208 from "./Carousel_Images/Ramyana/_50_1.jpeg";
import Image209 from "./Carousel_Images/Ramyana/_50_2.jpg";
import Image210 from "./Carousel_Images/Ramyana/_51.png";
import Image211 from "./Carousel_Images/Ramyana/_51_1.png";
import Image212 from "./Carousel_Images/Ramyana/_51_2.png";
import Image213 from "./Carousel_Images/Ramyana/_52.png";
import Image214 from "./Carousel_Images/Ramyana/_52_1.png";
import Image215 from "./Carousel_Images/Ramyana/_52_2.jpg";
import Image216 from "./Carousel_Images/Ramyana/_52_3.png";
import Image217 from "./Carousel_Images/Ramyana/_52_4.jpeg";
import Image218 from "./Carousel_Images/Ramyana/_52_5.jpeg";
import Image219 from "./Carousel_Images/Ramyana/_52_6.jpeg";
import Image220 from "./Carousel_Images/Ramyana/_52_7.jpg";
import Image221 from "./Carousel_Images/Ramyana/_52_8.jpg";
import Image222 from "./Carousel_Images/Ramyana/_52_9.jpeg";
import Image223 from "./Carousel_Images/Ramyana/_52_10.jpeg";
import Image224 from "./Carousel_Images/Ramyana/_52_11.png";
import Image225 from "./Carousel_Images/Ramyana/_52_12.png";
import Image226 from "./Carousel_Images/Ramyana/_52_13.png";
import Image227 from "./Carousel_Images/Ramyana/_52_14.jpeg";
import Image228 from "./Carousel_Images/Ramyana/_53.png"; //todo: Ramayana Kandas7 - Uttara Kanda
import Image229 from "./Carousel_Images/Ramyana/_53_1.jpg";
import Image230 from "./Carousel_Images/Ramyana/_53_2.png";
import Image231 from "./Carousel_Images/Ramyana/_53_3.jpg";
import Image232 from "./Carousel_Images/Ramyana/_54.jpg";
import Image233 from "./Carousel_Images/Ramyana/_54_1.jpg";
import Image234 from "./Carousel_Images/Ramyana/_54_1_1.png";
import Image235 from "./Carousel_Images/Ramyana/_54_2.jpg";
import Image236 from "./Carousel_Images/Ramyana/_54_3.jpg";
import Image237 from "./Carousel_Images/Ramyana/_54_4.jpeg";
import Image238 from "./Carousel_Images/Ramyana/_55.jpg";
import Image239 from "./Carousel_Images/Ramyana/_55_1.jpeg";
import Image240 from "./Carousel_Images/Ramyana/_55_2.png";
import Image241 from "./Carousel_Images/Ramyana/_55_3.jpg";
import Image242 from "./Carousel_Images/Ramyana/_55_4.png";
import Image243 from "./Carousel_Images/Ramyana/_55_5.png";
import Image244 from "./Carousel_Images/Ramyana/_55_6.png";
import Image245 from "./Carousel_Images/Ramyana/_55_7.png";
import Image246 from "./Carousel_Images/Ramyana/_55_7.png";
import Image247 from "./Carousel_Images/Ramyana/_55_8.png";
import Image248 from "./Carousel_Images/Ramyana/_55_9.png";
import Image249 from "./Carousel_Images/Ramyana/_55_10.png";
import Image250 from "./Carousel_Images/Ramyana/_55_11.png";
import Image251 from "./Carousel_Images/Ramyana/_56.png";
import Image252 from "./Carousel_Images/Ramyana/_56_1.png";
import Image253 from "./Carousel_Images/Ramyana/_56_2.png";
import Image254 from "./Carousel_Images/Ramyana/_56_3.png";
import Image255 from "./Carousel_Images/Ramyana/_56_4.png";
import Image256 from "./Carousel_Images/Ramyana/_57.png";
import Image257 from "./Carousel_Images/Ramyana/_57_1.png";
import Image258 from "./Carousel_Images/Ramyana/_57_2.png";
import Image259 from "./Carousel_Images/Ramyana/_57_3.png";
import Image260 from "./Carousel_Images/Ramyana/_57_4.png";
import Image261 from "./Carousel_Images/Ramyana/_58.png";
import Image262 from "./Carousel_Images/Ramyana/_58_1.jpg";
import Image263 from "./Carousel_Images/Ramyana/_58_2.png";
import Image264 from "./Carousel_Images/Ramyana/_59.png";
import Image265 from "./Carousel_Images/Ramyana/_59_1.jpg";
import Image266 from "./Carousel_Images/Ramyana/_60.png";

const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
  },
});

const textVariantdistort = (delay) => ({
  initial: { y: -50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,  // Adjust stiffness to control the bounce
      damping: 20,
      duration: 1.25,
      delay: delay
    },
  },
});

const RamayanaCarousel = () => {
  const imageList = [
    { src: Image0, alt: "Image 0" }, { src: Image1, alt: "Image 1" }, { src: Image2, alt: "Image 2" }, { src: Image3, alt: "Image 3" }, { src: Image4, alt: "Image 4" },
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
    { src: Image125, alt: "Image 125" }, { src: Image126, alt: "Image 126" }, { src: Image127, alt: "Image 127" }, { src: Image128, alt: "Image 128" },
    { src: Image129, alt: "Image 129" }, { src: Image130, alt: "Image 130" }, { src: Image131, alt: "Image 131" },
    { src: Image133, alt: "Image 133" }, { src: Image134, alt: "Image 134" }, { src: Image135, alt: "Image 135" }, { src: Image136, alt: "Image 136" },
    { src: Image137, alt: "Image 137" }, { src: Image138, alt: "Image 138" }, { src: Image139, alt: "Image 139" }, { src: Image140, alt: "Image 140" },
    { src: Image141, alt: "Image 141" }, { src: Image142, alt: "Image 142" }, { src: Image143, alt: "Image 143" }, { src: Image144, alt: "Image 144" },
    { src: Image145, alt: "Image 145" }, { src: Image146, alt: "Image 146" }, { src: Image147, alt: "Image 147" }, { src: Image148, alt: "Image 148" },
    { src: Image149, alt: "Image 149" }, { src: Image150, alt: "Image 150" }, { src: Image151, alt: "Image 151" }, { src: Image152, alt: "Image 152" },
    { src: Image153, alt: "Image 153" }, { src: Image154, alt: "Image 154" }, { src: Image155, alt: "Image 155" }, { src: Image156, alt: "Image 156" },
    { src: Image157, alt: "Image 157" }, { src: Image158, alt: "Image 158" }, { src: Image159, alt: "Image 159" }, { src: Image160, alt: "Image 160" },
    { src: Image161, alt: "Image 161" }, { src: Image162, alt: "Image 162" }, { src: Image163, alt: "Image 163" }, { src: Image164, alt: "Image 164" },
    { src: Image165, alt: "Image 165" }, { src: Image166, alt: "Image 166" }, { src: Image167, alt: "Image 167" }, { src: Image168, alt: "Image 168" },
    { src: Image169, alt: "Image 169" }, { src: Image170, alt: "Image 170" }, { src: Image171, alt: "Image 171" }, { src: Image172, alt: "Image 172" },
    { src: Image173, alt: "Image 173" }, { src: Image174, alt: "Image 174" }, { src: Image175, alt: "Image 175" }, { src: Image176, alt: "Image 176" },
    { src: Image177, alt: "Image 177" }, { src: Image178, alt: "Image 178" }, { src: Image179, alt: "Image 179" }, { src: Image180, alt: "Image 180" },
    { src: Image181, alt: "Image 181" }, { src: Image182, alt: "Image 182" }, { src: Image183, alt: "Image 183" }, { src: Image184, alt: "Image 184" },
    { src: Image185, alt: "Image 185" }, { src: Image186, alt: "Image 186" }, { src: Image187, alt: "Image 187" }, { src: Image188, alt: "Image 188" },
    { src: Image189, alt: "Image 189" }, { src: Image190, alt: "Image 190" }, { src: Image191, alt: "Image 191" }, { src: Image192, alt: "Image 192" },
    { src: Image193, alt: "Image 193" }, { src: Image194, alt: "Image 194" }, { src: Image195, alt: "Image 195" }, { src: Image196, alt: "Image 196" },
    { src: Image197, alt: "Image 197" }, { src: Image198, alt: "Image 198" }, { src: Image199, alt: "Image 199" }, { src: Image200, alt: "Image 200" },
    { src: Image201, alt: "Image 201" }, { src: Image202, alt: "Image 202" }, { src: Image203, alt: "Image 203" }, { src: Image204, alt: "Image 204" },
    { src: Image205, alt: "Image 205" }, { src: Image206, alt: "Image 206" }, { src: Image207, alt: "Image 207" }, { src: Image208, alt: "Image 208" },
    { src: Image209, alt: "Image 209" }, { src: Image210, alt: "Image 210" }, { src: Image211, alt: "Image 211" }, { src: Image212, alt: "Image 212" },
    { src: Image213, alt: "Image 213" }, { src: Image214, alt: "Image 214" }, { src: Image215, alt: "Image 215" }, { src: Image216, alt: "Image 216" },
    { src: Image217, alt: "Image 217" }, { src: Image218, alt: "Image 218" }, { src: Image219, alt: "Image 219" }, { src: Image220, alt: "Image 220" },
    { src: Image221, alt: "Image 221" }, { src: Image222, alt: "Image 222" }, { src: Image223, alt: "Image 223" }, { src: Image224, alt: "Image 224" },
    { src: Image225, alt: "Image 225" }, { src: Image226, alt: "Image 226" }, { src: Image227, alt: "Image 227" }, { src: Image228, alt: "Image 228" },
    { src: Image229, alt: "Image 229" }, { src: Image230, alt: "Image 230" }, { src: Image231, alt: "Image 231" }, { src: Image232, alt: "Image 232" },
    { src: Image233, alt: "Image 233" }, { src: Image234, alt: "Image 234" }, { src: Image235, alt: "Image 235" }, { src: Image236, alt: "Image 236" },
    { src: Image237, alt: "Image 237" }, { src: Image238, alt: "Image 238" }, { src: Image239, alt: "Image 239" }, { src: Image240, alt: "Image 240" },
    { src: Image241, alt: "Image 241" }, { src: Image242, alt: "Image 242" }, { src: Image243, alt: "Image 243" }, { src: Image244, alt: "Image 244" },
    { src: Image245, alt: "Image 245" }, { src: Image246, alt: "Image 246" }, { src: Image247, alt: "Image 247" }, { src: Image248, alt: "Image 248" },
    { src: Image249, alt: "Image 249" }, { src: Image250, alt: "Image 250" }, { src: Image251, alt: "Image 251" }, { src: Image252, alt: "Image 252" },
    { src: Image253, alt: "Image 253" }, { src: Image254, alt: "Image 254" }, { src: Image255, alt: "Image 255" }, { src: Image256, alt: "Image 256" },
    { src: Image257, alt: "Image 257" }, { src: Image258, alt: "Image 258" }, { src: Image259, alt: "Image 259" }, { src: Image260, alt: "Image 260" },
    { src: Image261, alt: "Image 261" }, { src: Image262, alt: "Image 262" }, { src: Image263, alt: "Image 263" }, { src: Image264, alt: "Image 264" },
    { src: Image265, alt: "Image 265" }, { src: Image266, alt: "Image 266" },
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
            position: relative;
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
            .ramayana-carousel {
              padding: 30px 10px;
              height: 45rem;
              text-align: center;
            }
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
      <div className="ramayana-carousel">
        
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
          variants={textVariant(0.64)}
          initial="hidden"
          animate="show"
        >
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
          src={Flute4}
          autoPlay
          loop
          volume={0.34}
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

export default RamayanaCarousel;

import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact.js";
import {Route, Routes } from "react-router-dom";
import Homeque from "./components/Homeque";
import Navbar from "./components/Navbar";
import Snowfall from "react-snowfall";
import Chapters from "./components/Chapters";
import "./App.css";
import Resources from "./components/Resources";
import BhaktiGeet from "./components/BhaktiGeet.js";
import AboutUs from "./components/AboutUs.js";
import MahabharatCarousel from "./components/Mahabharat_carousel.js";
import RamayanaCarousel from "./components/Ramayana_carousel";
import Chronicle from './components/Chronicle';
import AppLayout from "./components/AppLayout";
import Preloader from "./components/Preloader.js";
import 'aos/dist/aos.css';

const App = () => {
  return (
    <>
        <Preloader/>
      <div className="App">
        <Navbar />
        <Snowfall
          color="white"
          snowflakeCount={150}
          style={{ position: "absolute", zIndex: 3 }}
        />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/api/chapter/:chap/shlok/:ver" element={<Homeque />} />
            <Route path="/api/chapter/:chap" element={<Chapters />} />
            <Route path="/api/resources" element={<Resources />} />
            <Route path="/api/BhaktiGeet" element={<BhaktiGeet />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/api/aboutus" element={<AboutUs />} />
            <Route path="/api/Mahabharat_carousel" element={<MahabharatCarousel />} />
            <Route path="/api/Ramayana_carousel" element={<RamayanaCarousel />} />
            <Route path='/api/chronicle' element={<Chronicle/>}/>
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default App;

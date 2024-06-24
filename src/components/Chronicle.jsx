import React from 'react';
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import Ramayana from "./Carousel_Images/CoverImages/Ramayana_Image.jpg";
import Mahabharat from "./Carousel_Images/CoverImages/Mahabharat_Image.jpg";
import song from './Flute2.mp3';

const slideCover = [
    {
        name: 'The Ramayana',
        image: Ramayana,
        route: '/api/Ramayana_carousel' // Route to Ramayana carousel component
    },
    {
        name: 'The Mahabharata',
        image: Mahabharat,
        route: '/api/Mahabharat_carousel' // Route to Mahabharata carousel component
    },
];

const Chronicle = () => {
    return (
        <div>
            <ReactAudioPlayer
                src={song}
                autoPlay
                loop
                volume={0.25}
                style={{ display: 'none' }} // Hide the audio player
            />
            <div className="flex flex-wrap justify-center items-center p-5">
                {slideCover.map((cover, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg m-4 w-72 h-[500px] overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                        <Link to={cover.route} style={{ textDecoration: 'none' }}>
                            <img className="w-full h-72 object-contain object-center" src={cover.image} alt={cover.name} />
                            <div className="p-6 text-center">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">{cover.name}</h2>
                                {cover.name === 'The Ramayana' && (
                                    <p className="text-gray-600">Slide through the epic adventures narrated in the {cover.name}, learning life lessons from ancient legends.</p>
                                )}
                                {cover.name === 'The Mahabharata' && (
                                    <p className="text-gray-600">Discover heroic stories and virtues in the {cover.name}, delving into the epic battles and moral dilemmas faced by its characters.</p>
                                )}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chronicle;

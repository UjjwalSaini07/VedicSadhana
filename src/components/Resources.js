import React from 'react';
import Puranas from "./Resource_Image/Puranas.jpg";
import Brahmanas from "./Resource_Image/Brahmanas.jpg";
import GarudaPuran from "./Resource_Image/GarudaPuran.jpg";
import MatsyaPuran from "./Resource_Image/MatsyaPuran.jpg";
import ShivaPurana from "./Resource_Image/ShivaPurana.jpg";
import AgniPurana from "./Resource_Image/The Agni-Purana.jpg";
import Vedangas from "./Resource_Image/Vedangas.jpg";


const books = [
    {
        name: 'The Bhagavad Gita',
        image: 'https://i.pinimg.com/736x/de/80/21/de80218401a2e168a697ac4f6ddf2507.jpg'
    },
    {
        name: 'The Ramayana',
        image: 'https://i.pinimg.com/564x/66/dd/c4/66ddc40d895208649668f74df692de0e.jpg'
    },
    {
        name: 'The Holy Vedas',
        image: 'https://i.pinimg.com/564x/59/7b/69/597b699950665213b36f0fe4ff3c3ba0.jpg'
    },
    {
        name: 'The Upanishads',
        image: 'https://i.pinimg.com/564x/8f/80/d1/8f80d1e91642c474533ae37011bdad20.jpg'
    },
    {
        name: 'The Mahabharata',
        image: 'https://i.pinimg.com/564x/db/c1/ec/dbc1ec84c7998923770e604556c26cff.jpg'
    },
    {
        name: 'Kalki (Avatar of Vishnu)',
        image: 'https://i.pinimg.com/564x/05/80/82/05808240b9a7581f9fb175725f86ccce.jpg'
    },
    {
        name: 'The Vishnu Puranas',
        image: 'https://i.pinimg.com/236x/f4/38/a0/f438a019288e762948e4e648da8d6805.jpg'
    },
    {
        name: 'The Puranas',
        image: Puranas
    },
    {
        name: 'The Brahmanas',
        image: Brahmanas
    },
    {
        name: 'GarudaPuran',
        image: GarudaPuran
    },
    {
        name: 'MatsyaPuran',
        image: MatsyaPuran
    },
    {
        name: 'The ShivaPurana',
        image: ShivaPurana
    },
    {
        name: 'The AgniPurana',
        image: AgniPurana
    },
    {
        name: 'Vedangas',
        image: Vedangas
    },
];

const Resources = () => {
    return (
        <div className="flex flex-wrap justify-center items-center p-5 ">
            {books.map((book, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg m-4 w-72 h-[500px] overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                    <img className="w-full h-72 object-contain object-center " src={book.image} alt={book.name} />
                    <div className="p-5 text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{book.name}</h2>
                        <p className="text-gray-600">Explore the depth and wisdom of the {book.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Resources;

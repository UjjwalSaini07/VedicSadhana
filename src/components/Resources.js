import React from 'react';

// Importing Required Images
import Bhagvat_Gita from "./Resource_Image/Bhagvat_Gita.png";
import Holy_Veda from "./Resource_Image/Holy_Veda.png";
import Ramayana from "./Resource_Image/Ramayana.png";
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
        image: Bhagvat_Gita
    },
    {
        name: 'The Ramayana',
        image: Ramayana
    },
    {
        name: 'The Holy Vedas',
        image: Holy_Veda
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
                    <div className="p-6 text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{book.name}</h2>
                        {(book.name === 'The Bhagavad Gita' || book.name === 'The Upanishads' || book.name === 'The Puranas' || book.name === 'The ShivaPurana') && (
                            <p className="text-gray-600">Discover the deep insights and timeless wisdom of the {book.name}.</p>
                        )}
                        {(book.name === 'The Ramayana' || (book.name === 'The Vishnu Puranas') || (book.name === 'The Brahmanas') || (book.name === 'The AgniPurana')) && (
                            <p className="text-gray-600">Explore the profound insights and ancient wisdom contained in the {book.name}.</p>
                        )}
                        {(book.name === 'The Mahabharata' || (book.name === 'GarudaPuran') || (book.name === 'Vedangas')) && (
                            <p className="text-gray-600">Immerse yourself in the profound knowledge and timeless teachings of the {book.name}.</p>
                        )}
                        {(book.name === 'The Holy Vedas' || (book.name === 'Kalki (Avatar of Vishnu)') || (book.name === 'MatsyaPuran')) && (
                            <p className="text-gray-600">Delve into the depth and timeless wisdom found within the {book.name}.</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Resources;

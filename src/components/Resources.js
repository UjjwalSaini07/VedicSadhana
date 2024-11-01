import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

// Importing Required Images
import Bhagvat_Gita from "./Resource_Image/Bhagvat_Gita.png";
import Ramayana from "./Resource_Image/Ramayana.png";
import Mahabharat from "./Resource_Image/Mahabharat.jpg";
import Holy_Veda from "./Resource_Image/Holy_Veda.png";
import Kalki from "./Resource_Image/Kalki.jpg";
import Upanishads from "./Resource_Image/upanishads.jpg";
import VishnuPuranas from "./Resource_Image/VishnuPuranas.jpg";
import BhavishyaPuranas from "./Resource_Image/BhavishyaMalikaPuran.jpg";
import Puranas from "./Resource_Image/Puranas.jpg";
import ShivaPurana from "./Resource_Image/ShivaPurana.jpg";
import AgniPurana from "./Resource_Image/The Agni-Purana.jpg";
import GarudaPuran from "./Resource_Image/GarudaPuran.jpg";
import Vedangas from "./Resource_Image/Vedangas.jpg";
import Brahmanas from "./Resource_Image/Brahmanas.jpg";
import MatsyaPuran from "./Resource_Image/MatsyaPuran.jpg";

// Importing icons from react-icons
import { FaShoppingCart, FaBookOpen } from "react-icons/fa";

const isMobile = window.innerWidth <= 768;

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

const books = [
  {
    name: "The Bhagavad Gita",
    image: Bhagvat_Gita,
    buyLink:
      "https://www.amazon.in/Bhagavad-Gita-Hindi-C-Bhaktivedanta/dp/9382176330",
    readLink: "https://bhaktiprasad.in/download-bhagwat-geeta-pdf/",
    // readLink: 'https://www.rupanugabhajanashram.com/writings/books-pdfs/bhagavad-gita/#read'  //EXtra Link
  },
  {
    name: "The Ramayana",
    image: Ramayana,
    buyLink:
      "https://www.amazon.in/Valmiki-Ramayana-Bhakti-Vikasa-Swami/dp/9382109137",
    readLink:
      "https://ia801300.us.archive.org/9/items/HindiBookValmikiRamayanPartIByGitaPress/Hindi%20Book-Valmiki-Ramayan-Part-I%20by%20Gita%20Press.pdf",
    // readLink: 'https://archive.org/details/shrimad-valmiki-ramayana-hindi-edition-valmiki/mode/2up'
  },
  {
    name: "The Mahabharata",
    image: Mahabharat,
    buyLink: "https://www.amazon.in/Mahabharat-VED-VYAS/dp/9353490979",
    readLink:
      "https://archive.org/details/mahabharata-by-gita-press-in-hindi-and-sanskrit/Mahabharata%20Volume%201/",
  },
  {
    name: "The Holy Vedas",
    image: Holy_Veda,
    buyLink:
      "https://www.amazon.in/Vedas-Edited-Pandit-Satyakam-Vidyalankar/dp/8185120544",
    readLink:
      "https://archive.org/details/in.ernet.dli.2015.68948/page/n1/mode/2up",
  },
  {
    name: "Dharmayoddha Kalki",
    image: Kalki,
    buyLink:
      "https://www.amazon.in/Dharmayoddha-Kalki-Avatar-Vishnu-Book/dp/8193503309?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1WYWER0W24N8S",
    readLink:
      "https://archive.org/details/dharmayoddha-kalki-avatar-of-vishnu-by-kevin-missal-book-drive.com",
  },
  {
    name: "The Upanishads",
    image: Upanishads,
    buyLink:
      "https://www.amazon.in/Upanishads-Translated-Commentated-Swami-Paramananda/dp/9389717329",
    readLink:
      "https://archive.org/details/lDtf_108-upanishad-gyan-khand-with-hindi-explanation-by-ram-sharma-acharya-yug-nirman-yojana-vistar-/page/n3/mode/2up",
  },
  {
    name: "The Vishnu Puranas",
    image: VishnuPuranas,
    buyLink:
      "https://www.exoticindiaart.com/book/details/vishnu-mahapuranam-azf640/",
    readLink: "https://archive.org/details/vishnu-puran-gita-press/mode/2up",
  },
  {
    name: "Bhavishya Malika Puran",
    image: BhavishyaPuranas,
    buyLink:
      "https://www.amazon.in/Bhavishya-Malika-Puran-%E0%A4%AD%E0%A4%B5%E0%A4%BF%E0%A4%B7%E0%A5%8D%E0%A4%AF-%E0%A4%AE%E0%A4%BE%E0%A4%B2%E0%A4%BF%E0%A4%95%E0%A4%BE/dp/B0BT27525X",
    readLink: "https://drive.google.com/file/d/1_q88GMUUoF4AFU9EhFXx4Wcz9JQQGeCm/view?usp=sharing",
  },
  {
    name: "The Puranas",
    image: Puranas,
    buyLink:
      "https://www.amazon.in/Puranas-Goddesses-Sunita-Pant-Bansal/dp/9391914977",
    readLink: "https://archive.org/details/ThePuranas",
  },
  {
    name: "The ShivaPurana",
    image: ShivaPurana,
    buyLink:
      "https://www.exoticindiaart.com/book/details/siva-purana-complete-set-in-4-volumes-nab424/",
    readLink: "https://vedpuran.net/wp-content/uploads/2011/10/shiv-puran.pdf",
  },
  {
    name: "The AgniPurana",
    image: AgniPurana,
    buyLink:
      "https://www.amazon.in/Agni-Purana-Ancient-Tradition-Mythology/dp/8120803590",
    readLink: "https://vedpuran.net/wp-content/uploads/2011/10/agni-puran.pdf",
  },
  {
    name: "GarudaPuran",
    image: GarudaPuran,
    buyLink: "https://www.amazon.in/Garuda-Puran-Sawan/dp/B08R9TPNZ9",
    readLink: "https://vedpuran.net/wp-content/uploads/2011/10/garuda1.pdf",
  },
  {
    name: "Vedangas",
    image: Vedangas,
    buyLink:
      "https://www.exoticindiaart.com/book/details/history-of-vedangas-haa693/",
    readLink: "https://archive.org/details/VedangaJyotisha/mode/2up",
  },
  {
    name: "The Brahmanas",
    image: Brahmanas,
    buyLink:
      "https://www.exoticindiaart.com/book/details/sri-aitareya-brahmana-in-set-of-2-volumes-idj474/",
    readLink:
      "https://archive.org/details/ShatpathBrahmanHindiVigyanBhashyaDwitiyaKhandaMotilalShastri/page/n1/mode/2up",
  },
  {
    name: "MatsyaPuran",
    image: MatsyaPuran,
    buyLink:
      "https://www.amazon.in/Complete-Matsya-Puran-Translation-Gorakhpur/dp/B097KB6JL6",
    readLink:
      "https://vedpuran.net/wp-content/uploads/2011/10/matsya-puran-1.pdf",
  },
];

const appStyle = {
  textAlign: "center",
  marginBottom: "5px",
};

const headerStyle = {
  width: "100%",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
  fontSize: isMobile ? "1.9rem" : "2.5rem",
  color: "#ffffff",
  fontWeight: "450",
};

const Resources = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div style={appStyle}>
      <div style={headerStyle} className="hidden sm:block">
      <motion.div
        variants={textVariant(0.7)}
        initial="hidden"
        animate="show"
      >
        <Typewriter
          words={["Welcome to Resources Section", "Enjoy the Divine Knowledge"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={180}
          deleteSpeed={80}
          delaySpeed={1000}
        />
        </motion.div>
      </div>
      <div style={headerStyle} className="block sm:hidden">
      <motion.div
        variants={textVariant(0.7)}
        initial="hidden"
        animate="show"
      >
        <Typewriter
          words={["Welcome Here !!", "Enjoy Vedic Knowledge"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={180}
          deleteSpeed={100}
          delaySpeed={1000}
        />
        </motion.div>
      </div>
      <motion.div
        variants={textVariantdistort(1.0)}
        initial="initial"
        animate="animate"
      >
      <div className="flex flex-wrap justify-center items-center p-4">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg m-4 w-72 h-[600px] sm:h-[530px] overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
          >
            <motion.div
              variants={textVariant(1.64)}
              initial="hidden"
              animate="show"
            >
            <img
              className="w-full h-72 object-contain object-center"
              src={book.image}
              alt={book.name}
            />
            </motion.div>
            <div className="p-6 text-center">
              <motion.div
                variants={textVariant(1.97)}
                initial="hidden"
                animate="show"
              >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {book.name}
              </h2>
              </motion.div>

              <motion.div
                variants={textVariant(2.52)}
                initial="hidden"
                animate="show"
              >
              {(book.name === "The Bhagavad Gita" ||
                book.name === "Dharmayoddha Kalki" ||
                book.name === "The Puranas" ||
                book.name === "Vedangas") && (
                <p className="text-gray-600">
                  Discover the deep insights and timeless wisdom of the{" "}
                  {book.name}.
                </p>
              )}
              {(book.name === "The Ramayana" ||
                book.name === "The Brahmanas" ||
                book.name === "Bhavishya Malika Puran" ||
                book.name === "The AgniPurana") && (
                <p className="text-gray-600">
                  Explore the profound insights and ancient wisdom contained in
                  the {book.name}.
                </p>
              )}
              {(book.name === "The Mahabharata" ||
                book.name === "GarudaPuran" ||
                book.name === "The ShivaPurana") && (
                <p className="text-gray-600">
                  Immerse yourself in the profound knowledge and timeless
                  teachings of the {book.name}.
                </p>
              )}
              {(book.name === "The Holy Vedas" ||
                book.name === "The Upanishads" ||
                book.name === "MatsyaPuran") && (
                <p className="text-gray-600">
                  Delve into the depth and timeless wisdom found within the{" "}
                  {book.name}.
                </p>
              )}
              {book.name === "The Vishnu Puranas" && (
                <p className="text-gray-600">
                  Explore the depth and wisdom of the {book.name}
                </p>
              )}
              </motion.div>

              <motion.div
                variants={textVariant(3.0)}
                initial="hidden"
                animate="show"
              >
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-4">
                <a
                  href={book.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3.5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 no-underline"
                >
                  <FaShoppingCart className="mr-1" /> Buy
                </a>
                <a
                  href={book.readLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105 duration-300 no-underline"
                >
                  <FaBookOpen className="mr-1" /> Read Now
                </a>
              </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
    </div>
  );
};

export default Resources;

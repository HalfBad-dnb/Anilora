import { useState, useEffect } from 'react';
import Layout from './Layout';
import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';
import Masonry from 'react-masonry-css';
import "../App.css";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const allFlowers = [
    { id: 1, image: "/images/a3.jpg", note: "Tobula ypatingoms progoms" },
    { id: 2, image: "/images/a4.jpg", note: "Pavasario mėgstamiausios" },
    { id: 3, image: "/images/a9.jpg", note: "Išskirtinės ir kvepiančios" },
    { id: 4, image: "/images/a7.jpg", note: "Paprastos ir gražios" },
    { id: 5, image: "/images/a5.jpg", note: "Šviesios ir džiaugsmingos" },
    { id: 6, image: "/images/a1.jpg", note: "Prabangūs ir žavingi" },

  ];

  const otherFlowers = [
    { id: 5, image: "/images/a5.jpg", note: "Šviesios ir džiaugsmingos" },
    { id: 6, image: "/images/a1.jpg", note: "Prabangūs ir žavingi" },
    { id: 7, image: "/images/a8.jpg", note: "Egzotiškos ir elegantiškos" },
  ];

  useEffect(() => {
    document.title = "Anilora Flower Shop - Home";

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const masonryBreakpoints = {
    default: 3, // 3 columns by default (desktop)
    1100: 2,    // 2 columns at 1100px
    700: 1,     // 1 column at 700px (ensures single-column layout on small screens)
  };

  const renderFlowerGrid = (flowers) => (
    <Masonry
      breakpointCols={masonryBreakpoints}
      className="flex mt-32 px-8 sm:px-4 gap-x-16 sm:gap-x-10 gap-y-32 sm:gap-y-24" // Spacing adjusted previously to prevent overlap
      columnClassName="masonry-column"
    >
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="relative p-10 sm:p-6 mb-8 sm:mb-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 w-4/5 sm:w-3/4 rotate-2">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full shadow-md border border-yellow-700"></div>
            <div className="bg-yellow-50 px-6 py-4 sm:px-4 sm:py-3 text-center border border-yellow-200 shadow-md rounded-sm">
              <span className="text-lg sm:text-base font-bold text-yellow-800">{flower.note}</span>
            </div>
          </div>
          <img
            src={flower.image}
            alt={flower.name}
            // Updated image size: set a larger height while maintaining width: 100%
            className="w-full h-64 sm:h-48 object-cover rounded-lg mb-16 sm:mb-10" // Added h-64 (desktop) and h-48 (mobile) for larger images
          />
          <h3 className="mt-8 sm:mt-4 text-2xl sm:text-lg text-center">{flower.name}</h3>
        </div>
      ))}
    </Masonry>
  );

  return (
    <Layout>
      <div className="py-12 px-6 max-w-7xl mx-auto">
        {/* Main Title */}
        <h1 className={`text-6xl md:text-8xl font-extrabold text-center mb-8 ${isScrolled ? 'sticky-title' : ''}`}>
          Anilora
        </h1>

        {/* Subtitle */}
        <h2 className={`text-4xl md:text-5xl font-semibold text-center mb-12 ${isScrolled ? 'sticky-title' : ''} glowing-text`}>
          Jūsų gėlių specialistė. 💐
        </h2>

        {/* Flower Grid Section */}
        {renderFlowerGrid(allFlowers)}

        {/* Order Section */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mt-32 mb-16 glowing-text">
          Gėlių užsakymas!
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glowing-text">
          Radote patinkančias gėles sau?
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glowing-text">
          Užsisakykite jas čia!
        </h2>

        {/* Contact Section */}
        <div className="grid gap-12 sm:gap-8 place-items-center mt-32 mb-32">
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="flex items-center text-2xl md:text-3xl font-bold text-blue-600 hover:text-blue-800 transition gap-3">
            <FaFacebook /> Facebook
          </a>
          <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="flex items-center text-2xl md:text-3xl font-bold text-pink-500 hover:text-pink-700 transition gap-3">
            <FaInstagram /> Instagram
          </a>
          <p className="flex items-center text-2xl md:text-3xl font-bold gap-3 glowing-text">
            <FaPhone /> +370 600 00000
          </p>
        </div>

        {/* Delivery Section */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mt-32 mb-16 glowing-text">
          Gėlių pristatymas!
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glowing-text">
          Pristatome gėles į namus!
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glowing-text">
          Galite pasirinkti pristatymo laiką ir vietą.
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glowing-text">
          Galite gėles atsiimti ir patys.
        </h2>

        {/* Second Flower Grid */}
        {renderFlowerGrid(otherFlowers)}

        {/* Care Section */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mt-32 mb-16 glowing-text">
          Gėlių priežiūra!
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 glowing-text">
          Kaip prižiūrėti gėles?
        </h2>

        {/* Facebook Reels */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-6 mt-12">
          <iframe 
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/766729265352164&show_text=0&width=320&autoplay=1" 
            width="100%" 
            height="400" 
            frameBorder="0" 
            scrolling="no" 
            allow="autoplay; encrypted-media" 
            allowFullScreen
            className="sm:w-1/3 w-full"
          ></iframe>

          <iframe 
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/498871589258474&show_text=0&width=320&autoplay=1" 
            width="100%" 
            height="400" 
            frameBorder="0" 
            scrolling="no" 
            allow="autoplay; encrypted-media" 
            allowFullScreen
            className="sm:w-1/3 w-full"
          ></iframe>

          <iframe 
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/299076532786492&show_text=0&width=320&autoplay=1" 
            width="100%" 
            height="400" 
            frameBorder="0" 
            scrolling="no" 
            allow="autoplay; encrypted-media" 
            allowFullScreen
            className="sm:w-1/3 w-full"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
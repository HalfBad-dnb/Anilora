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
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const renderFlowerGrid = (flowers) => (
    <Masonry
      breakpointCols={masonryBreakpoints}
      className="flex gap-16 mt-24"
      columnClassName="masonry-column"
    >
      {flowers.map((flower) => (
        <div 
          key={flower.id} 
          className="relative p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))',
            backdropFilter: 'blur(5px)',
          }}
        >
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 w-4/5 rotate-2">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full shadow-md border border-yellow-700"></div>
            <div className="bg-yellow-50 px-4 py-3 text-center border border-yellow-200 shadow-md rounded-sm">
              <span className="text-lg font-bold text-yellow-800">{flower.note}</span>
            </div>
          </div>
          <img
            src={flower.image}
            alt={flower.name}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <h3 className="mt-4 text-2xl text-center">{flower.name}</h3>
          <button className="mt-6 w-full py-3 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out">
            View Details
          </button>
        </div>
      ))}
    </Masonry>
  );

  return (
    <Layout>
      <div className="py-8 px-4 max-w-7xl mx-auto">
        {/* Main Title */}
        <h1 className={`text-8xl font-extrabold text-center mb-6 ${isScrolled ? 'sticky-title' : ''}`}>
          Anilora
        </h1>

        {/* Subtitle */}
        <h2 className={`text-5xl font-semibold text-center ${isScrolled ? 'sticky-title' : ''} glowing-text`}>
          Jūsų gėlių specialistė. 💐
        </h2>

        {/* Flower Grid Section */}
        {renderFlowerGrid(allFlowers)}

        {/* Order Section */}
        <h2 className="text-6xl font-bold text-center mt-24 mb-12 glowing-text">
          Gėlių užsakymas!
        </h2>
        <h2 className="text-4xl font-bold text-center mb-12 glowing-text">
          Radote patinkančias gėles sau?
        </h2>
        <h2 className="text-4xl font-bold text-center mb-12 glowing-text">
          Užsisakykite jas čia!
        </h2>

        {/* Contact Section */}
        <div className="grid gap-8 place-items-center mt-24 mb-24">
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="flex items-center text-3xl font-bold text-blue-600 hover:text-blue-800 transition gap-2">
            <FaFacebook /> Facebook
          </a>
          <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="flex items-center text-3xl font-bold text-pink-500 hover:text-pink-700 transition gap-2">
            <FaInstagram /> Instagram
          </a>
          <p className="flex items-center text-3xl font-bold text-gray-800 gap-2">
            <FaPhone /> +370 600 00000
          </p>
        </div>

        {/* Delivery Section */}
        <h2 className="text-6xl font-bold text-center mt-24 mb-12 glowing-text">
          Gėlių pristatymas!
        </h2>
        <h2 className="text-4xl font-bold text-center mb-12 glowing-text">
          Pristatome gėles į namus!
        </h2>
        <h2 className="text-4xl font-bold text-center mb-12 glowing-text">
          Galite pasirinkti pristatymo laiką ir vietą.
        </h2>
        <h2 className="text-4xl font-bold text-center mb-12 glowing-text">
          Galite gėles atsiimti ir patys.
        </h2>

        {/* Second Flower Grid */}
        {renderFlowerGrid(otherFlowers)}

        {/* Care Section */}
        <h2 className="text-6xl font-bold text-center mt-24 mb-12 glowing-text">
          Gėlių priežiūra!
        </h2>
        <h2 className="text-4xl font-bold text-center mb-12 glowing-text">
          Kaip prižiūrėti gėles?
        </h2>

        {/* Facebook Reels */}
        <div className="flex space-x-4 justify-center mt-8">
       
        <iframe 
    src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/766729265352164&show_text=0&width=320&autoplay=1" 
    width="320" 
    height="400" 
    frameBorder="0" 
    scrolling="no" 
    allow="autoplay; encrypted-media" 
    allowFullScreen>
</iframe>

<iframe 
    src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/498871589258474&show_text=0&width=320&autoplay=1" 
    width="320" 
    height="400" 
    frameBorder="0" 
    scrolling="no" 
    allow="autoplay; encrypted-media" 
    allowFullScreen>
</iframe>

<iframe 
    src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/299076532786492&show_text=0&width=320&autoplay=1" 
    width="320" 
    height="400" 
    frameBorder="0" 
    scrolling="no" 
    allow="autoplay; encrypted-media" 
    allowFullScreen>
</iframe>
        </div>
        
      </div>
    </Layout>
  );
};

export default Home;

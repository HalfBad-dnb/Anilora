import { useState, useEffect } from "react";
import Layout from "./Layout";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Masonry from "react-masonry-css";
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
    default: 3,
    1100: 2,
    700: 1,
  };

  const renderFlowerGrid = (flowers, sectionId) => (
    <Masonry
      breakpointCols={masonryBreakpoints}
      className="flex mt-32 px-0 gap-x-16 sm:gap-x-10 gap-y-32 sm:gap-y-24 w-full"
      columnClassName="masonry-column"
    >
      {flowers.map((flower) => (
        <div
          key={flower.id}
          id={`flower-${sectionId}-${flower.id}`}
          className="flower-item relative mb-8 sm:mb-6 transform transition-transform duration-300 hover:scale-105"
        >
          {/* Image */}
          <img
            src={flower.image}
            alt={flower.note}
            className="w-full h-96 sm:h-72 object-cover rounded-lg mb-16 sm:mb-10"
          />
          
          {/* Premium Note directly under the image */}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-3/4 p-4 text-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 border-t-4 border-red-700 shadow-xl rounded-b-xl text-lg sm:text-base font-semibold text-white">
            {flower.note}
          </span>
        </div>
      ))}
    </Masonry>
  );

  return (
    <Layout>
      <h1
        className={`text-6xl md:text-8xl font-extrabold text-center mb-8 ${
          isScrolled ? "sticky-title" : ""
        }`}
      >
        Anilora
      </h1>
      <h2
        className={`text-4xl md:text-5xl font-semibold text-center mb-12 ${
          isScrolled ? "sticky-title" : ""
        } glowing-text`}
      >
        Jūsų asmenine floristė. 💐
      </h2>

      <div id="main-section" className="content-section">
        {renderFlowerGrid(allFlowers, "main")}
      </div>

      <div id="order-section" className="content-section mt-32">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 glowing-text">
          Gėlių užsakymas!
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glowing-text">
          Radote patinkančias gėles sau?
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glowing-text">
          Užsisakykite jas čia!
        </h2>
        
        {/* Social Media and Contact Links Section */}
        <div className="flex justify-center items-center space-x-8 mt-6">
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-2xl md:text-3xl font-bold text-blue-600 hover:text-blue-800 transition gap-3"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href="https://www.instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-2xl md:text-3xl font-bold text-pink-500 hover:text-pink-700 transition gap-3"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>

      <div id="delivery-section" className="content-section mt-32">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 glowing-text">
          Gėlių pristatymas!
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glowing-text">
          Pristatome gėles į namus!
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glowing-text">
          Galite pasirinkti pristatymo laiką ir vietą.
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glowing-text">
          Galite gėles atsiimti ir patys.
        </h2>
        {renderFlowerGrid(otherFlowers, "delivery")}
      </div>

      <div id="care-section" className="content-section mt-32">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 glowing-text">
          Gėlių priežiūra!
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glowing-text">
          Kaip prižiūrėti gėles?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/766729265352164&show_text=0&width=320&autoplay=1"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full sm:w-1/3"
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/498871589258474&show_text=0&width=320&autoplay=1"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full sm:w-1/3"
          ></iframe>
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/299076532786492&show_text=0&width=320&autoplay=1"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full sm:w-1/3"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
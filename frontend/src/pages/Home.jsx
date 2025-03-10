import { useState, useEffect } from 'react';
import Layout from './Layout';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const allFlowers = [
    { id: 1, name: "Rožės", type: 1, image: "/images/a3.jpg", note: "Tobula ypatingoms progoms" },
    { id: 2, name: "Tulpės", type: 1, image: "/images/a4.jpg", note: "Pavasario mėgstamiausios" },
    { id: 3, name: "Lelijos", type: 1, image: "/images/a9.jpg", note: "Išskirtinės ir kvepiančios" },
    { id: 4, name: "Ramunės", type: 1, image: "/images/a7.jpg", note: "Paprastos ir gražios" },

  ];

  useEffect(() => {
    document.title = "Anilora Flower Shop - Home";

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <div className="py-8 px-4 max-w-7xl mx-auto">
        {/* Main title */}
        <h1 className={`text-8xl font-extrabold text-center mb-6 ${isScrolled ? 'sticky-title' : ''}`}>
          Anilora
        </h1>
        {/* Subtitle */}
        <h2 className={`text-5xl font-semibold text-center ${isScrolled ? 'sticky-title' : ''} glowing-text`}>
          Jūsų gėlių specialistė. 💐
        </h2>

        {/* Flower grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mt-24">
          {allFlowers.map((flower) => (
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
                className="w-full h-64 object-cover rounded-lg mb-8" // Made the height fixed and width full
              />
              <h3 className="mt-4 text-2xl text-center">{flower.name}</h3>
              <button className="mt-6 w-full py-3 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

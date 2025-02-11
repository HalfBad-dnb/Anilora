import { useState, useEffect } from 'react';
import FlowerMenu from './FlowerMenu'; // Import FlowerMenu

function Home() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll behavior

  const flowerTabs = [
    { id: 1, name: "Bouquet", image: "/images/a1.jpg" },
    { id: 2, name: "Cactus", image: "/images/a2.jpg" },
    { id: 3, name: "Sunflower", image: "/images/a3.jpg" },
    { id: 4, name: "Orchid", image: "/images/a4.jpg" },
    { id: 5, name: "Daisy", image: "/images/a5.jpg" },
  ];

  const allFlowers = [
    { id: 1, name: "Rose", type: 1, image: "/images/a1.jpg" },
    { id: 2, name: "Tulip", type: 1, image: "/images/a2.jpg" },
    { id: 3, name: "Lily", type: 1, image: "/images/a3.jpg" },
    { id: 4, name: "Daisy", type: 1, image: "/images/a4.jpg" },
    { id: 5, name: "Cactus Flower 1", type: 2, image: "/images/a5.jpg" },
    { id: 6, name: "Cactus Flower 2", type: 2, image: "/images/a6.jpg" },
    { id: 7, name: "Cactus Flower 3", type: 2, image: "/images/a7.jpg" },
    { id: 8, name: "Cactus Flower 4", type: 2, image: "/images/a8.jpg" },
    { id: 9, name: "Sunflower 1", type: 3, image: "/images/a9.jpg" },
    { id: 10, name: "Sunflower 2", type: 3, image: "/images/a10.jpg" },
    { id: 11, name: "Sunflower 3", type: 3, image: "/images/a11.jpg" },
    { id: 12, name: "Sunflower 4", type: 3, image: "/images/a12.jpg" },
    { id: 13, name: "Orchid 1", type: 4, image: "/images/a13.jpg" },
    { id: 14, name: "Orchid 2", type: 4, image: "/images/a14.jpg" },
    { id: 15, name: "Orchid 3", type: 4, image: "/images/a15.jpg" },
    { id: 16, name: "Orchid 4", type: 4, image: "/images/a16.jpg" },
    { id: 17, name: "Daisy 1", type: 5, image: "/images/a17.jpg" },
    { id: 18, name: "Daisy 2", type: 5, image: "/images/a18.jpg" },
    { id: 19, name: "Daisy 3", type: 5, image: "/images/a19.jpg" },
    { id: 20, name: "Daisy 4", type: 5, image: "/images/a20.jpg" },
  ];

  useEffect(() => {
    document.title = "Anilora Flower Shop - Home";

    // Add event listener for scroll to manage scroll behavior
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true); // Make titles sticky after scrolling
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter flowers based on the selected tab
  const filteredFlowers = allFlowers.filter(flower => flower.type === selectedTab);

  return (
    <>
      <div className="container mx-auto px-4">
        {/* FlowerMenu at the top */}
        <FlowerMenu />

        {/* Animated "Anilora" Title with Blur Effect */}
        <h1 className={`text-6xl font-extrabold text-green-700 text-center mb-6 leading-tight tracking-wide animate__animated animate__fadeIn animate__delay-1s animate__faster ${isScrolled ? 'sticky-title' : ''}`}>
          <span className="text-7xl text-green-800 animate__animated animate__fadeIn animate__delay-2s">Anilora</span>
        </h1>

        {/* Subtitle - Glowing text for "Jūsų gėlių specialistė" */}
        <h2 className={`text-3xl font-semibold text-center text-yellow-500 animate__animated animate__fadeIn animate__delay-2.5s animate__faster ${isScrolled ? 'sticky-title' : ''} glowing-text`}>
          Jūsų gėlių specialistė. 💛
        </h2>

        {/* Flower Tab Section */}
        <div className="tabs mt-8">
          <div className="flex justify-center gap-4">
            {flowerTabs.map((tab) => (
              <div
                key={tab.id}
                className={`cursor-pointer transition-transform duration-500 transform hover:scale-105 ${
                  selectedTab === tab.id ? 'border-b-4 border-green-600' : ''
                }`}
                onClick={() => setSelectedTab(tab.id)}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-600">
                  <img
                    src={tab.image}
                    alt={tab.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm mt-2">{tab.name}</p>
              </div>
            ))}
          </div>

          {/* Tab Content - Display 4 flowers for selected tab */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {filteredFlowers.map(flower => (
              <div
                key={flower.id}
                className="card bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1"
              >
                <div className="w-full h-72 flex justify-center items-center overflow-hidden">
                  <img
                    src={flower.image} // Display image for each flower
                    alt={flower.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-center text-gray-800 tracking-wide mb-4">{flower.name}</h3>
                  <button className="mt-4 w-full py-2 px-4 bg-green-600 text-white text-lg rounded-full shadow-md hover:bg-green-700 transform hover:scale-105 transition duration-300 ease-in-out">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

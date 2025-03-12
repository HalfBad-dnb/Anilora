import { Link } from "react-router-dom";

const flowerTabs = [
  { id: 0, name: "Sveiki atvyke", image: "/images/a10.jpg", path: "/" },
  { id: 1, name: "Mano geliu pasaulis", image: "/images/a1.jpg", path: "/bouquet" },
  { id: 2, name: "Susisiekime", image: "/images/a2.jpg", path: "/cactus" },
  { id: 3, name: "Apie mane", image: "/images/a3.jpg", path: "/sunflower" },
];

const FlowerMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-6 text-center px-4">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-md sm:max-w-xl">
        {flowerTabs.map((flower) => (
          <Link
            key={flower.id}
            to={flower.path}
            className="flex flex-col items-center p-3 sm:p-4 rounded-lg hover:scale-105 transition-transform"
          >
            <img
              src={flower.image}
              alt={flower.name}
              className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-full border-2 border-green-400"
            />
            <span className="mt-2 text-sm sm:text-base">{flower.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FlowerMenu;

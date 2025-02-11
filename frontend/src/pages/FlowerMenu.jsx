import { Link } from "react-router-dom";

const flowerTabs = [
  { id: 0, name: "Home", image: "/images/a10.jpg", path: "/" }, // Home tab
  { id: 1, name: "Bouquet", image: "/images/a1.jpg", path: "/bouquet" },
  { id: 2, name: "Cactus", image: "/images/a2.jpg", path: "/cactus" },
  { id: 3, name: "Sunflower", image: "/images/a3.jpg", path: "/sunflower" },
  { id: 4, name: "Orchid", image: "/images/a4.jpg", path: "/orchid" },
  { id: 5, name: "Daisy", image: "/images/a8.jpg", path: "/daisy" },
];

const FlowerMenu = () => {
  return (
    <div className="flex justify-center gap-6 mt-6">
      {flowerTabs.map((flower) => (
        <Link
          key={flower.id}
          to={flower.path}
          className="flex flex-col items-center p-4 rounded-lg hover:scale-105 transition-transform"
        >
          <img
            src={flower.image}
            alt={flower.name}
            className="w-20 h-20 object-cover rounded-full border-2 border-green-600"
          />
          <span className="mt-2 font-semibold text-green-700">{flower.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default FlowerMenu;

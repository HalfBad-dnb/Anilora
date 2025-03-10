import { Link } from "react-router-dom";

const flowerTabs = [
  { id: 0, name: "Sveiki atvyke", image: "/images/a10.jpg", path: "/" },
  { id: 1, name: "Mano geliu pasaulis", image: "/images/a1.jpg", path: "/bouquet" },
  { id: 2, name: "Susisiekime", image: "/images/a2.jpg", path: "/cactus" },
  { id: 3, name: "Apie mane", image: "/images/a3.jpg", path: "/sunflower" },
];

const FlowerMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-6 text-center">
      {/* Centered Flower Tabs */}
      <div className="flex flex-wrap justify-center gap-6">
        {flowerTabs.map((flower) => (
          <Link
            key={flower.id}
            to={flower.path}
            className="tab-item flex flex-col items-center p-4 rounded-lg hover:scale-105 transition-transform"
          >
            <img
              src={flower.image}
              alt={flower.name}
              className="w-20 h-20 object-cover rounded-full border-2 border-light-green"
            />
            <span className="mt-2 flower-tab-text">{flower.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FlowerMenu;

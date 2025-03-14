import { Link } from "react-router-dom";


const flowerTabs = [
  { id: 0, name: "Sveiki atvyke", image: "/images/a10.jpg", path: "/" },
  { id: 1, name: "Geliu pasaulis", image: "/images/a1.jpg", path: "/bouquet" },
  { id: 2, name: "Susisiekime", image: "/images/a2.jpg", path: "/cactus" },
  { id: 3, name: "Apie mane", image: "/images/a3.jpg", path: "/sunflower" },
];

const FlowerMenu = () => {
  return (
    <section className="flower-menu sticky top-0 z-10 shadow-lg flex justify-center mt-2 text-center px-2 bg-gray-100/50 backdrop-blur-md">
      <div className="relative z-10 flex flex-row gap-2 max-w-full justify-center sm:flex-row md:flex-row lg:flex-row xl:flex-row">
        {flowerTabs.map((flower) => (
          <Link
            key={flower.id}
            to={flower.path}
            className="flex flex-col items-center p-1 rounded-lg hover:scale-105 transition-transform"
          >
            <img
              src={flower.image}
              alt={flower.name}
              className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full border-2 border-green-400"
            />
            <span className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
              {flower.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FlowerMenu;

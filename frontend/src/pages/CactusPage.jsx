import { Link } from 'react-router-dom';
import Layout from './Layout'; // Import Layout component

const cactusData = [
  { id: 1, name: "Cactus Name 1", description: "A brief description of cactus 1.", image: "/images/cactus1.jpg" },
  { id: 2, name: "Cactus Name 2", description: "A brief description of cactus 2.", image: "/images/cactus2.jpg" },
  { id: 3, name: "Cactus Name 3", description: "A brief description of cactus 3.", image: "/images/cactus3.jpg" },
  { id: 4, name: "Cactus Name 4", description: "A brief description of cactus 4.", image: "/images/cactus4.jpg" },
  // Add more cactus items as needed
];

const CactusPage = () => {
  return (
    <Layout>
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Cactus Collection</h2>
        <p className="text-center mb-8 text-gray-600">Here are some of our best-selling cacti...</p>

        {/* Cactus items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cactusData.map((cactus) => (
            <div
              key={cactus.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={cactus.image}
                alt={cactus.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-green-600">{cactus.name}</h3>
              <p className="mt-2 text-gray-500">{cactus.description}</p>
              <Link to={`/cactus/${cactus.id}`} className="mt-4 text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CactusPage;

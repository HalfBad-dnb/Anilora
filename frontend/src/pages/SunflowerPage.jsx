import { Link } from 'react-router-dom';
import Layout from './Layout';  // Import Layout component

const sunflowerData = [
  { id: 1, name: "Sunflower Name 1", description: "A brief description of sunflower 1.", image: "/images/sunflower1.jpg" },
  { id: 2, name: "Sunflower Name 2", description: "A brief description of sunflower 2.", image: "/images/sunflower2.jpg" },
  // Add more sunflower items as needed
];

const SunflowerPage = () => {
  return (
    <Layout>  {/* Wrap page content with Layout component */}
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Sunflower Collection</h2>
        <p className="text-center mb-8 text-gray-600">Here are some of our best-selling sunflowers...</p>

        {/* Sunflower items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sunflowerData.map((sunflower) => (
            <div
              key={sunflower.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={sunflower.image}
                alt={sunflower.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-yellow-600">{sunflower.name}</h3>
              <p className="mt-2 text-gray-500">{sunflower.description}</p>
              <Link to={`/sunflower/${sunflower.id}`} className="mt-4 text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SunflowerPage;

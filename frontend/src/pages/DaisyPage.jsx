import { Link } from 'react-router-dom';
import Layout from './Layout';  // Import Layout component

const daisyData = [
  { id: 1, name: "Daisy Name 1", description: "A brief description of daisy 1.", image: "/images/daisy1.jpg" },
  { id: 2, name: "Daisy Name 2", description: "A brief description of daisy 2.", image: "/images/daisy2.jpg" },
  { id: 3, name: "Daisy Name 3", description: "A brief description of daisy 3.", image: "/images/daisy3.jpg" },
  // Add more daisy items as needed
];

const DaisyPage = () => {
  return (
    <Layout>  {/* Wrap page content with Layout component */}
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Daisy Collection</h2>
        <p className="text-center mb-8 text-gray-600">Here are some of our best-selling daisies...</p>

        {/* Daisy items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {daisyData.map((daisy) => (
            <div
              key={daisy.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={daisy.image}
                alt={daisy.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-yellow-600">{daisy.name}</h3>
              <p className="mt-2 text-gray-500">{daisy.description}</p>
              <Link to={`/daisy/${daisy.id}`} className="mt-4 text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DaisyPage;

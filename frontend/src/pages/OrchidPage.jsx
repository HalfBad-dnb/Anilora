import { Link } from 'react-router-dom';
import Layout from './Layout';  // Import Layout component

const orchidData = [
  { id: 1, name: "Orchid Name 1", description: "A brief description of orchid 1.", image: "/images/orchid1.jpg" },
  { id: 2, name: "Orchid Name 2", description: "A brief description of orchid 2.", image: "/images/orchid2.jpg" },
  // Add more orchid items as needed
];

const OrchidPage = () => {
  return (
    <Layout>  {/* Wrap page content with Layout component */}
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Orchid Collection</h2>
        <p className="text-center mb-8 text-gray-600">Here are some of our best-selling orchids...</p>

        {/* Orchid items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {orchidData.map((orchid) => (
            <div
              key={orchid.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={orchid.image}
                alt={orchid.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-purple-600">{orchid.name}</h3>
              <p className="mt-2 text-gray-500">{orchid.description}</p>
              <Link to={`/orchid/${orchid.id}`} className="mt-4 text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OrchidPage;

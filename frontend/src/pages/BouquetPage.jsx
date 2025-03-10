import { Link } from 'react-router-dom';
import Layout from './Layout'; // Adjust the path if needed

const BouquetPage = () => {
  return (
    <Layout>
      <h1 className="text-4xl text-center mb-8 anilora-title">Bouquet Collection</h1>
      <p className="text-center mb-8">Explore our beautiful bouquet flowers.</p>

      {/* Bouquet items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cards">
        {/* Bouquet Item 1 */}
        <div className="card rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src="/images/a1.jpg" // Adjust the path as needed
            alt="Bouquet 1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-xl text-center">Bouquet Name 1</h3>
          <p className="mt-2">Description of bouquet 1.</p>
          <Link to="/bouquet/1" className="mt-4 block text-center bouquet-link">View Details</Link>
        </div>

        {/* Bouquet Item 2 */}
        <div className="card rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src="/images/a2.jpg" // Adjust the path as needed
            alt="Bouquet 2"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-xl text-center">Bouquet Name 2</h3>
          <p className="mt-2">Description of bouquet 2.</p>
          <Link to="/bouquet/2" className="mt-4 block text-center bouquet-link">View Details</Link>
        </div>

        {/* Bouquet Item 3 */}
        <div className="card rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src="/images/a3.jpg" // Adjust the path as needed
            alt="Bouquet 3"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-xl text-center">Bouquet Name 3</h3>
          <p className="mt-2">Description of bouquet 3.</p>
          <Link to="/bouquet/3" className="mt-4 block text-center bouquet-link">View Details</Link>
        </div>

        {/* Bouquet Item 4 */}
        <div className="card rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src="/images/a4.jpg" // Adjust the path as needed
            alt="Bouquet 4"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-xl text-center">Bouquet Name 4</h3>
          <p className="mt-2">Description of bouquet 4.</p>
          <Link to="/bouquet/4" className="mt-4 block text-center bouquet-link">View Details</Link>
        </div>

        {/* Bouquet Item 5 */}
        <div className="card rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src="/images/a5.jpg" // Adjust the path as needed
            alt="Bouquet 5"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-xl text-center">Bouquet Name 5</h3>
          <p className="mt-2">Description of bouquet 5.</p>
          <Link to="/bouquet/5" className="mt-4 block text-center bouquet-link">View Details</Link>
        </div>

        {/* Bouquet Item 6 */}
        <div className="card rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src="/images/a7.jpg" // Adjust the path as needed
            alt="Bouquet 6"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-xl text-center">Bouquet Name 6</h3>
          <p className="mt-2">Description of bouquet 6.</p>
          <Link to="/bouquet/6" className="mt-4 block text-center bouquet-link">View Details</Link>
        </div>
      </div>
    </Layout>
  );
};

export default BouquetPage;
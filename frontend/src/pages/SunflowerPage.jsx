import Layout from './Layout'; // Import Layout component

const SunflowerPage = () => {
  return (
    <Layout>
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 anilora-title">Labas! Aš Karolina 👸🏽</h2>

        {/* Large Image and About Me Section */}
        <div className="flex flex-col sm:flex-row items-center mb-8">
          {/* Image */}
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-8">
            <img 
              src="/images/a10.jpg"  // Path to the image
              alt="Large Sunflower"
              className="w-96 h-96 object-cover rounded-lg"  // Adjust size as needed
            />
          </div>

          {/* About Me Text */}
          <div>
            <h3 className="text-4xl font-bold mb-4">Apie mane</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Labas! Aš esu Karolina, aistringa gėlių mylėtoja ir entuziastė. Esu profesionali floristė, dievinu visas gražias gėles. Kiekviena gėlė pasakoja savo unikalią istoriją, ir tikiu, kad jos atneša laimę ir teigiamą energiją į pasaulį. Leiskite kartu atrasti gėlių grožį!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SunflowerPage;

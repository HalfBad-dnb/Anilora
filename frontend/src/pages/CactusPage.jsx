import Layout from './Layout'; // Import Layout component

const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    text: "Follow us on Instagram for updates!",
    url: "https://www.instagram.com/_anilora_geles_klaipedoje/?locale=en%2F",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
  },
  {
    id: 2,
    name: "Facebook",
    text: "Join our Facebook community!",
    url: "https://www.facebook.com/profile.php?id=100057040377285",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
  },
  {
    id: 3,
    name: "Email",
    text: "Chat with us privately anytime!",
    url: "mailto:Aniloraflowers@gmail.com", // Make it a mailto link
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/messenger.svg",
  }
];

const CactusPage = () => {
  return (
    <Layout>
      <div className="py-8 px-4 max-w-7xl mx-auto content">
        <h2 className="anilora-title text-6xl font-bold text-center mb-16">Susisiekime</h2>

        <p className="glowing-text text-6xl sm:text-5xl text-center mb-12">per jums patogiausias platformas</p>

        {/* Social Links with Text */}
        <div className="flex flex-col items-center justify-center gap-6 social-links">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="social-card flex items-center justify-center p-6 w-full max-w-lg rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={link.image}
                alt={link.name}
                className="social-icon w-16 h-16 object-contain mr-4"
              />
              <div>
                <h3 className="flower-tab-text text-2xl font-semibold text-center">{link.name}</h3>
                <p className="social-text text-center text-lg">{link.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CactusPage;

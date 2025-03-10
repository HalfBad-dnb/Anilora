import Layout from './Layout'; // Import Layout component

const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    text: "Follow us on Instagram for updates!",
    url: "https://www.instagram.com",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
  },
  {
    id: 2,
    name: "Facebook",
    text: "Join our Facebook community!",
    url: "https://www.facebook.com",
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
  },
  {
    id: 3,
    name: "Private Chat",
    text: "Chat with us privately anytime!",
    url: "/chat", // Adjust to external chat link if needed (e.g., WhatsApp)
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/messenger.svg",
  },
];

const CactusPage = () => {
  return (
    <Layout>
      <div className="py-8 px-4 max-w-7xl mx-auto content">
        <h2 className="anilora-title text-center mb-8">Connect With Us</h2>
        <p className="glowing-text text-center mb-8">Stay in touch through your favorite platforms!</p>

        {/* Social Links with Text */}
        <div className="flex flex-col items-center gap-6 social-links">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="social-card flex items-center p-4 w-full max-w-lg"
            >
              <img
                src={link.image}
                alt={link.name}
                className="social-icon w-16 h-16 object-contain mr-4"
              />
              <div>
                <h3 className="flower-tab-text">{link.name}</h3>
                <p className="social-text">{link.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CactusPage;
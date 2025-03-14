import Layout from './Layout';
import { FaPhoneAlt } from 'react-icons/fa'; // Import the mobile phone icon
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Import Instagram and Facebook icons

// Update the socialLinks to include the icons directly
const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    text: "Follow us on Instagram for updates!",
    url: "https://www.instagram.com/_anilora_geles_klaipedoje/?locale=en%2F",
    icon: <FaInstagram className="social-icon w-16 h-16 object-contain mr-4 golden-icon" />, // Instagram icon with the same class
  },
  {
    id: 2,
    name: "Facebook",
    text: "Join our Facebook community!",
    url: "https://www.facebook.com/profile.php?id=100057040377285",
    icon: <FaFacebook className="social-icon w-16 h-16 object-contain mr-4 golden-icon" />, // Facebook icon with the same class
  },
  {
    id: 3,
    name: "Phone",
    text: "Call us directly for inquiries!",
    url: "tel:+37060000000", // Update with your actual phone number
    icon: <FaPhoneAlt className="social-icon w-16 h-16 object-contain mr-4 golden-icon" />, // Phone icon with the same class
  }
];

const CactusPage = () => {
  return (
    <Layout>
      <div className="py-8 px-4 max-w-7xl mx-auto content">
        <h2 className="anilora-title text-6xl font-bold text-center mb-16">Susisiekime</h2>
        <p className="glowing-text text-6xl sm:text-5xl text-center mb-12">per jums patogiausias platformas</p>

        <div className="flex flex-col items-center justify-center gap-6 social-links">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="social-card flex items-center justify-center p-6 w-full max-w-lg rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {link.icon} {/* Use the icon directly */}
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

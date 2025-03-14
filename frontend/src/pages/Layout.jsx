import FlowerMenu from './FlowerMenu';
import PropTypes from 'prop-types';
import '../Styles/footer.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* FlowerMenu */}
      <FlowerMenu /> {/* FlowerMenu is part of the layout */}

      {/* Main Content Section */}
      <div className="content py-8 px-4 max-w-7xl mx-auto">
        {children} {/* Render child components here */}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Anilora Flower Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

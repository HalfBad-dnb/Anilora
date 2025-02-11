import FlowerMenu from './FlowerMenu';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div>
      <FlowerMenu /> {/* FlowerMenu is part of the layout */}

      {/* Main Content Section */}
      <div className="py-8 px-4 max-w-7xl mx-auto">
        {children} {/* Render child components here */}
      </div>

      {/* You can add a footer here if needed */}
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;


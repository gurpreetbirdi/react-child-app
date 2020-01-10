import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = props => {
  return (
    <div className="header">React SPA</div>
  );
}

Header.propTypes = {
  name: PropTypes.string
};

export default Header;
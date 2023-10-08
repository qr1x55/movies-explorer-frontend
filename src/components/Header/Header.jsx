import React from 'react';
import './Header.css'
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, isMain }) {
  return (
    <header className={`header ${isMain ? 'header_type_main' : ""}`}>
      <Navigation loggedIn={loggedIn}/>
    </header>
  );
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export const Header = ({ isStatsPage = false }) => {
  if (isStatsPage) {
    return (
      <header className="header header--bg">
      <div className="header__container">
      <Link to="/" className="header__logo">
      ClickFinder
      </Link>
      
      </div>
      </header>
    );
  }
  
  return (
    <header className="header">
    <div className="header__container">
    <p className="header__logo logo">ClickFinder</p>
    </div>
    </header>
  );
};

export default Header;

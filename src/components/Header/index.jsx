import React from 'react';

import logo from '../../logo.svg';
import graphic from './graphics.png';
import './header.scss';

const Header = () => {
  return (
      <header>
        <div className="content">
          <img src={logo} alt="logo" className="header__logo" />
          <h1>Tailormade Software Solutions</h1>
          <hr/>
          <p>Expert in webdesign and development, creating custom software solutions  fulfilling your needs.</p>
        </div>
        <div className="header__graphics">
          <img src={graphic} alt="graphic" />
        </div>
      </header>
  );
}

export default Header;
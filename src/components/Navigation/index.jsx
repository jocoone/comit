import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import logo from '../../logo.svg';
import './navigation.scss';

const Navigation = () => {
  const [menuOpen, toggleMenu] = useState(false);

  return (
      <nav className={`${menuOpen && 'nav--opened'}`}>
        <div className="content">
          <Link to="/">
            <img src={logo} alt="logo" className="navigation__logo"/>
          </Link>
          <div className="menu">
            <button className="menu-toggle" type="button" onClick={() => toggleMenu(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} className="icon" />
              <span className="home">Home</span>
            </Link>
            <Link to="/projects">
              Projects
            </Link>
            <Link to="/contact">
              Contact
            </Link>
          </div>
          <button className="menu-toggle" type="button" onClick={() => toggleMenu(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>
  );
}

export default Navigation;
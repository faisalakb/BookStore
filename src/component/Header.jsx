import React from 'react';
import { NavLink } from 'react-router-dom';
import profImg from '../assets/defaultProfile.png';

const Header = () => (
  <div className="navContainer">
    <span className="Bookstore-CMS Text-Style-3">
      Bookstore CMS
    </span>
    <ul className="navIcons">
      <li className="Books">
        <NavLink className="nav-link" exact to="/">BOOKS</NavLink>
      </li>
      <li className="Category">
        <NavLink className="nav-link" to="/categories">CATEGORIES</NavLink>
      </li>
    </ul>
    <img className="Oval" src={profImg} alt="img not found" />
  </div>
);

export default Header;

import React from 'react';
import '../css/header.css';
import logo from '../img/rick-and-morty-logo.png';
import Search from './search';

function Header() {
  return (
    <div className="header">
       <img src={logo} alt="Rick And Morty" className="logo"></img>
        <Search/>
    </div>
  );
}

export default Header;

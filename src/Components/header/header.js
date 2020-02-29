import React from 'react';
import './header.css';

const Header = () =>{

    return (<div className="headerContainer"><nav >
    <div className="header-buttons-container">
      <a className="nav-btn" href="/">Home</a>
      <a className="nav-btn" href="/products">Products</a>
      <a className="nav-btn" href="/clients">Client</a>
      <a className="nav-btn" href="/contacts">Contacts</a>
    </div>
  </nav></div>);
}

export default Header;
import React, { Component } from 'react';
import CernerPicture from './CernerPicture.png';
import header from './header.css';



class Header extends Component {
  render() {
    return (
        <div className="w3-container w3-white">
        <img src={CernerPicture} className="Picture"/>
        <h3 className="headerText">Employee DataBase Management</h3>
        </div>
    );
  }
}

export default Header;

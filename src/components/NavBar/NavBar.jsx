import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './NavBar.css';
import {Link} from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
        <Menu>
          {/* We Never want to use <a> </a> tag inside out router application*/}
          {/* <a id="home" className="menu-item" href="/">Home</a> */}
          <Link to="/" className='menu-item'>Home</Link>
          <Link to="/education" className='menu-item'>Edu & Exp</Link>
          <Link to="/about" className='menu-item'>About</Link>
          <Link to="/projects" className='menu-item'>Projects</Link>
          <Link to="/skills" className='menu-item'>Skills</Link>
          <Link to="/contact" className='menu-item'>Contact</Link>
      </Menu>
    )
  }
}

export default NavBar;

import React from 'react';
import './navbar.css';

const Navbar = ({PageState}) => {

  return (
    <div className="navbar">
        <ul className="navbar-list">
        {PageState ? 
        <>
          <li>
            <a href="https://lawrenceclemente.wordpress.com/">My Blog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </>
       : 
          <li>
            <a href="/">
              <i className="fa-solid fa-left-long arrow-icon" />   
              <span> Back to portfolio</span>
            </a>
          </li>
    }
        </ul>
      
    </div>
  )
}

export default Navbar

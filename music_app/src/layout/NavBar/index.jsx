import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  let activeStyle = {
    textDecoration: 'underline',
    color: 'black'
  };

  return (
    <>
      <nav>
        <h2>Jimmy Sax</h2>
        <ul className='nav-links'>
          <li>
            <NavLink
              to='/'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Music
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/form'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Playlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/explore'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Explore
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;

import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header'>
      <NavLink to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <h1>Park Passport</h1>
      </NavLink>
      {/* TO DO: Add a logo */}
    </header>
  )
}
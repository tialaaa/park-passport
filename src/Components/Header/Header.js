import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='logo-link' style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <img className='logo' src='/PP-logo.png'
          alt='tan-colored line drawing of wilderness scene and the sun on green backdrop'/>
        <h1>Park<br/>Passport</h1>
      </NavLink>
    </header>
  );
};
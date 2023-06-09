import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Header = ({ percentVisited }) => {
  const percent = Math.ceil(percentVisited() * 100);
  let displayedPercent;

  if (!percent) {
    displayedPercent = "";
  } else {
    displayedPercent = <>{percent}% visited</>;
  };

  return (
    <header className='header'>
      <NavLink to='/' className='logo-link' style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <img className='logo' src='/PP-logo.png'
          alt='tan-colored line drawing of wilderness scene and the sun on green backdrop'/>
        <h1>Park<br/>Passport</h1>
      </NavLink>
      <div className='header-percent'>{displayedPercent}</div>
    </header>
  );
};

Header.propTypes = {
  percentVisited: PropTypes.func.isRequired
};
import './Park.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Park = ({ fullName, images, parkCode, toggleVisited }) => {
  return (
    <div>
      <div className="card">
        <img className="card-image" src={images[0].url} alt={images[0].altText} />
        <img className="visited-badge" id={parkCode}
            src='/PP-badge.png'
            alt='badge declaring Visited, with the site logo and name'
            onClick={(event) => toggleVisited(event.target.id)}
        />
      </div>
      <NavLink to={`/park-details/${parkCode}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <h2>{fullName}</h2>
      </NavLink>
    </div>
  );
};

Park.propTypes = {
  fullName: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  parkCode: PropTypes.string.isRequired,
  toggleVisited: PropTypes.func.isRequired
};
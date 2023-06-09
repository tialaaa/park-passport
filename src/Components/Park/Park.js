import './Park.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Park = ({ fullName, images, parkCode, toggleVisited }) => {
  let toggleGroup = (e) => {
    e.target.previousSibling.classList.toggle("greyscale");
    e.target.classList.toggle("marked");
    toggleVisited(e.target.id);
  };

  return (
    <div className="card">
      <NavLink to={`/park-details/${parkCode}`} className="link-to-details">{fullName}</NavLink>
      <img className={`card-image ${parkCode}`} src={images[0].url} alt={images[0].altText} />
      <img className="visited-badge" id={parkCode} src='/PP-badge.png'
        alt='badge declaring Visited, with the site logo and name'
        onClick={ (event) => toggleGroup(event) }
      />
    </div>
  );
};

Park.propTypes = {
  fullName: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  parkCode: PropTypes.string.isRequired,
  toggleVisited: PropTypes.func.isRequired
};
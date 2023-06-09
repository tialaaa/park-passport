import './Park.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Park = ({ fullName, images, parkCode, toggleVisited }) => {
  let toggleGroup = (event) => {
    event.target.previousSibling.classList.toggle("greyscale");
    event.target.parentElement.classList.toggle("greyscale");
    event.target.classList.toggle("checked");
    toggleVisited(event.target.id);
  };

  return (
    <div className="card">
      <NavLink to={`/park-details/${parkCode}`} style={{ color: 'inherit', textDecoration: 'inherit'}} className="link-to-details">
        <h3>{fullName}</h3>
      </NavLink>
      <img className={`card-image ${parkCode}`} src={images[0].url} alt={images[0].altText} />
      <img className="visited-badge" id={parkCode}
        src='/PP-badge.png'
        alt='badge declaring Visited, with the site logo and name'
        onClick={(event) => {
          event.target.previousSibling.classList.toggle("greyscale");
          event.target.parentElement.classList.toggle("greyscale");
          event.target.classList.toggle("checked");
          toggleVisited(event.target.id);
          // return toggleGroup(event);
        }}
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
import './Park.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Park = ({ fullName, images, parkCode, toggleVisited }) => {
  return (
    <div>
      <div className="card">
        <img className="card-image" src={images[0].url} alt={images[0].altText} />
        <button className="visited-badge" value={parkCode}
          onClick={(event) => toggleVisited(event.target.value)}>
        </button>
      </div>
      <NavLink to={`/park-details/${parkCode}`}>
        <h3>{fullName}</h3>
      </NavLink>
    </div>
  );
};
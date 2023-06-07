import './Park.css';
import React from 'react';

export const Park = ({ fullName, images }) => {
  return (
    <div className="card">
      <img className="card-image"src={images[0].url} alt={images[0].altText} />
      <div>
        <h3>{fullName}</h3>
        {/* <div className="visited-badge"></div> */}
      </div>
    </div>
  )
}
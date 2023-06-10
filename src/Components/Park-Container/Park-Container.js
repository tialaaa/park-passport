import './Park-Container.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Park } from '../Park/Park';

export const ParkContainer = ({ parksArray, userVisited, toggleVisited }) => {
  const parkCards = parksArray.map(park => {
    return (
      <Park
        fullName={park.fullName}
        key={park.parkCode}
        images={park.images}
        parkCode={park.parkCode}
        userVisited={userVisited}
        toggleVisited={toggleVisited}
      />
    )
  });
  
  return (
    <section className='parks-container'>
      {parkCards}
    </section>
  );
};

ParkContainer.propTypes = {
  parksArray: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ])
  ).isRequired,
  userVisited: PropTypes.array.isRequired,
  toggleVisited: PropTypes.func.isRequired
};
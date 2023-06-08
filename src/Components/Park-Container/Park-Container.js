import './Park-Container.css';
import React from 'react';
import { Park } from '../Park/Park';

export const ParkContainer = ({ parksArray }) => {
  const parkCards = parksArray.map(park => {
    return (
      <Park
        fullName={park.fullName}
        key={park.parkCode}
        images={park.images}
        parkCode={park.parkCode}
      />
    )
  });

  return (
    <section className='parks-container'>
      {parkCards}
    </section>
  );
};
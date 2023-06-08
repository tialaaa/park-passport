import './Park-Container.css';
import React from 'react';
import { Park } from '../Park/Park';

export const ParkContainer = ({ parksArray, loadingState, toggleVisited }) => {
  let displayedMessage;

  const parkCards = parksArray.map(park => {
    return (
      <Park
        fullName={park.fullName}
        key={park.parkCode}
        images={park.images}
        parkCode={park.parkCode}
        toggleVisited={toggleVisited}
      />
    )
  });
  
  if (loadingState) {
    displayedMessage = <p>Park information loading...</p>
  } else {
    displayedMessage = <p>How many US National Parks have you visited?<br/><br/>
    Browse the list below. Check off the parks you have visited.<br/>
    Find resources to help plan your future adventures.</p>
  }

  return (
    <>
      <div className='homepage-message'>
        {displayedMessage}
      </div>
      <section className='parks-container'>
        {parkCards}
      </section>
    </>
  );
};
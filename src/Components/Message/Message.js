import './Message.css';
import React from 'react';

export const Message = ({ loadingState, percentVisited }) => {
  const displayedPercent = Math.ceil(percentVisited() * 100);
  // const loading = <p>Park information loading...</p>;

  let displayedMessage;

  if (loadingState) {
    displayedMessage = <p>Park information loading...</p>;
  } else {
    displayedMessage = <p>How many US National Parks have you visited?<br/><br/>
    Browse the list below. Check off the parks you have visited.<br/>
    Find resources to help plan your future adventures.<br/><br/>
    You have visited {displayedPercent}% of the National Parks!</p>
  }

  return (
    <div className='homepage-message'>
      {displayedMessage}
    </div>
  );
};
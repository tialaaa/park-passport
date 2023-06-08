import './Message.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Message = ({ loadingState, percentVisited }) => {
  let displayedMessage;
  const loading = "Park information loading...";

  const helper = <>How many US National Parks have you visited?<br/><br/>
  Browse the list below. Check off the parks you have visited.<br/>
  Find resources to help plan your future adventures.</>;

  const percent = Math.ceil(percentVisited() * 100);
  const displayedPercent = <>You have visited {percent}% of the National Parks</>;

  if (loadingState) {
    displayedMessage = <p className='message-loading'>{loading}</p>;
  } else {
    displayedMessage = <>
      <p className='message-helper'>{helper}</p>
      <p className='message-percent'>{displayedPercent}</p>
    </>;
  };

  return (
    <div className='homepage-message'>
      {displayedMessage}
    </div>
  );
};

Message.propTypes = {
  loadingState: PropTypes.bool.isRequired,
  percentVisited: PropTypes.func.isRequired
};
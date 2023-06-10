import './Message.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Message = ({ loadingState, percentVisited }) => {
  let displayedMessage;
  const loading = "Park information loading...";

  const helper = <>How many U.S. National Parks have you explored so far?<br/><br/>
  Collect badges below for the Parks you have visited.<br/>
  To complete your passport, browse the additional resources to plan your future adventures.</>;

  const percent = Math.ceil(percentVisited() * 100);
  const displayedPercent = <>You have visited {percent}% of the National Parks!</>;

  if (loadingState) {
    displayedMessage = <p className='message-loading'>{loading}</p>;
  } else {
    displayedMessage = <>
      <p className='message-helper'>{helper}</p>
      <h2 className='message-percent'>{displayedPercent}</h2>
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
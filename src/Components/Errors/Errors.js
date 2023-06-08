import './Errors.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Errors = ({ error }) => {
  let displayedError;

  if (error) {
    displayedError = "We seem to be having technical issues. Please try again later."
  } else {
    displayedError = "Page not found. Please click the logo above to return home."
  };

  return <p className="error-message">{displayedError}</p>;
};

Errors.propTypes = {
  error: PropTypes.any.isRequired
};
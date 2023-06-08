import React from 'react';
import PropTypes from 'prop-types';

export const Map = ({ parkName }) => {
  parkName = parkName.replace("&", "%26").replace("-", "%2D");

  return (
    <iframe
      title={`Google Maps View of ${parkName}`}
      width="600"
      height="450"
      style={{border:0}}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${parkName}&maptype=satellite`}>
    </iframe>
  );
};

Map.propTypes = {
  parkName: PropTypes.string.isRequired
};
import React from 'react';
import PropTypes from 'prop-types';

export const Map = ({ parkName }) => {
  parkName = parkName.replace("&", "%26").replace("-", "%2D");

  return (
    <iframe
      title={`Google Maps View of ${parkName}`}
      width="100%"
      height="100%"
      style={{border:0, borderRadius:'0.5rem', boxShadow: 'rgba(99, 99, 99, 0.3) 0px 2px 8px 0px'}}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${parkName}&maptype=satellite`}>
    </iframe>
  );
};

Map.propTypes = {
  parkName: PropTypes.string.isRequired
};
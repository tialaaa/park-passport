import React from 'react';

export const Map = ({ parkName }) => {
  const mapSource = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${parkName}&maptype=satellite`;

  return (
    <iframe
      width="600"
      height="450"
      style={{border:0}}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={mapSource}>
    </iframe>
  )
}
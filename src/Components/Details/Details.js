import './Details.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Map } from '../Map/Map';
import { Message } from '../Message/Message';
import { convertStateCode } from '../../utilities';

export const Details = ({ park, percentVisited }) => {
  if (!park) {
    return <Message loadingState={true} percentVisited={percentVisited}/>
  };

  let addressToDisplay;
  const { fullName, states, addresses, description, url, activities, images } = park;
  
  const stateNames = states.split(',').map(code => convertStateCode(code)).join(", ");

  const activitiesList = activities.map(activity => activity.name).sort().join(", ");

  const physicalAddress = addresses.find(address => address.type === "Physical");

  const { city, line1, line2, stateCode, postalCode } = physicalAddress;

  if (!line2) {
    addressToDisplay =
      <p>
        {line1}<br/>
        {city}, {stateCode} {postalCode}
      </p>
  } else {
    addressToDisplay =
      <p>
        {line1}<br/>
        {line2}<br/>
        {city}, {stateCode} {postalCode}
      </p>
  };

  return (
    <section className='details-page'>
      <div className='details-banner'>
        <img className='banner-image' src={images[0].url} alt={images[0].altText}></img>
        <h2 className='banner-name'>{fullName}</h2>
      </div>
      <div className='content'>
        <p className='description'>{description}</p>
        <hr/>
        <div className='details-container'>
          <div className='details-info'>
            <p>Located in:</p>
            <p className='states'>{stateNames}</p>
            <div>Primary Address:</div>
            <div className='address'>{addressToDisplay}</div>
            <p>Popular Activities:</p>
            <p className='activities'>{activitiesList}</p>
            <div className='nps-container'>
              <img className='nps-logo' src='/NPS-logo.png' alt='National Park Service logo'/>
              <a href={url} className='link-to-nps'>More details from the National Park Service</a>
            </div>
          </div>
          <div className='details-map'>
            <Map parkName={fullName} />
          </div>
        </div>
      </div>
    </section>
  );
};

Details.propTypes = {
  park: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ])),
  percentVisited: PropTypes.func.isRequired
};
import './Details.css';
import React from 'react';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
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
        {/* <div>Badge</div> */}
        {/* <p className='banner-title'>{images[0].title}</p> */}
        {/* <p className='banner-caption'>{images[0].caption}</p> */}
      </div>
      <p className='description'>{description}</p>
      <div className='details-info'>
        
        <div>
          <p>Located in: {stateNames}</p>
          <div className='primary'>Primary Address:</div>
          <div className='address'>{addressToDisplay}</div>
          {/* <a href={url} className='link-to-nps'>Additional Details from NPS</a> */}
          <p className='popular'>Popular Activities:</p>
          <p className='activities'>{activitiesList}</p>
          <a href={url} className='link-to-nps'>Additional Details from NPS</a>
        </div>
        {/* <NavLink to='/'>Return to your passport</NavLink> */}
        <div className='details-map'>
          
          <Map parkName={fullName} />
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
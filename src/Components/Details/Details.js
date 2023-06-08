import './Details.css';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Map } from '../Map/Map';
import { Message } from '../Message/Message';

export const Details = ({ park, percentVisited }) => {
  if (!park) {
    return <Message loadingState={true} percentVisited={percentVisited}/>
  };

  let addressToDisplay;
  const { fullName, states, addresses, description, url, activities, images } = park;
  
  const activitiesList = activities.map(activity => activity.name).sort().join(", ");
  // TO DO: Update how activitiesList is displayed?
  // TO DO: Write cleaning function to convert 'states' into full name state names

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
      <div className='details-info'>
        <p>States: {states}</p>
        <div>Primary Address: {addressToDisplay}</div>
        <p>{description}</p>
        <a href={url} className='link-to-nps'>Additional Details from NPS</a>
        <p>Popular Activities: {activitiesList}</p>
        <NavLink to='/'>Return to your passport</NavLink>
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
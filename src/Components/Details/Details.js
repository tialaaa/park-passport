import './Details.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Map } from '../Map/Map';

export const Details = ({ park }) => {
  if (!park) {
    // return (<Errors errorMessage={error} />)
    return console.log('error loading details')
  };

  let addressToDisplay;
  const { fullName, states, addresses, description, url, activities, directionsUrl, images } = park;
  console.log(images)
  const activitiesList = activities.map(activity => activity.name).sort().join(", ");
  // TO DO: Update how activitiesList is displayed?
  // TO DO: Write cleaning function to convert 'states' into full name state names

  const physicalAddress = addresses.find(address => address.type === "Physical");

  const { city, line1, line2, stateCode, postalCode } = physicalAddress;

  if (!line2) {
    addressToDisplay =
      <p>
        {line1}<br></br>
        {city}, {stateCode} {postalCode}
      </p>
  } else {
    addressToDisplay =
      <p>
        {line1}<br></br>
        {line2}<br></br>
        {city}, {stateCode} {postalCode}
      </p>
  };

  return (
    <section className='details-page'>
      <div className='details-banner'>
        <img className='banner-image' src={images[1].url} alt={images[1].altText}></img>
        <h2 className='banner-name'>{fullName}</h2>
        {/* <div>Checkbox</div> */}
        {/* <p className='banner-title'>{images[1].title}</p> */}
        {/* <p className='banner-caption'>{images[1].caption}</p> */}
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
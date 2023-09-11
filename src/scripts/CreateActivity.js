import React from "react";

import imgStar from '../images/icons/Star 1.png';


export function CreateActivity(props) { 
  const { coverImg, stats, location, title, price, openSpots } = props;
  let badgeText;

  if (openSpots === 0) {
    badgeText = 'SOLD OUT!';
  } 
  else if (location === 'Online') {
    badgeText = location.toUpperCase();
  }

  const activity = (
    <div className='footer__activity-container'>
      {badgeText && <div className="footer__badge">{badgeText}</div>}
        <div className='footer__image-container'> 
          <img className="activity-image" src={`images/${coverImg}`}/>
        </div> 
        <div className='footer__details-container'>
          <div className='footer__rating-location-container'>
            <img className='rating-location-image' src={imgStar} />
            {stats.rating}
            <span className='rating-amount-text'> ({stats.reviewCount})</span>
            <span className='location-text'> &#183;{location}</span>
          </div>
          <div className='footer__title-container'> 
            {title}
          </div>
          <div className='footer__price'>
            <span className='bold-text'>From ${price} / </span>person
          </div>
        </div>
      </div>
  );
  
  return activity;
}
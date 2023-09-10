import React from "react";


export function CreateActivity(props) { 
  const { imgPreview, imgStar, rating, ratingAmount, location, title, price } = props;

  const activity = (
    <div className='footer__activity-container'>
        <div className='footer__image-container'> 
          <img className="activity-image" src={`./images/carousel/${imgPreview}`}/>
        </div> 
        <div className='footer__details-container'>
          <div className='footer__rating-location-container'>
            <img className='rating-location-image' src={imgStar} />
            {rating}
            <span className='rating-amount-text'> ({ratingAmount})</span>
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
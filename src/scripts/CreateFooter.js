import React from 'react';

import starIcon from '../images/icons/Star 1.png';

import swimmingImage from '../images/carousel/swimming-image.png';


export function CreateFooter() {
  const footer = (
  <footer className='footer'>
    <div className='footer__recomendation-container'>
      <div className='footer__activity-container'>
        <div className='footer__image-container'> 
          <img className="activity-image" src={swimmingImage} />
        </div> 
        <div className='footer__details-container'>
          <div className='footer__rating-location-container'>
            <img className='rating-location-image' src={starIcon} />
            5.0
            <span className='rating-text'> (6)</span>
            <span className='location-text'>&#183;USA</span>
          </div>
          <div className='footer__title-container'> 
            Life lessons with Katie Zaferes
          </div>
          <div className='footer__price'>
            <span className='bold-text'>From $136 / </span>person
          </div>
        </div>
      </div>
      

      <div className='footer__activity-container'>
        <div className='footer__image-container'> 
          <img className="activity-image" src={swimmingImage} />
        </div> 
        <div className='footer__details-container'>
          <div className='footer__rating-location-container'>
            <img className='rating-location-image' src={starIcon} />
            5.0
            <span className='rating-text'> (6)</span>
            <span className='location-text'>&#183;USA</span>
          </div>
          <div className='footer__title-container'> 
            Life lessons with Katie Zaferes
          </div>
          <div className='footer__price'>
            <span className='bold-text'>From $136 / </span>person
          </div>
        </div>
      </div>

    </div>
  </footer>);

  return footer;
}
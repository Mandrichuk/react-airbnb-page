import React from 'react';

import AirBnbIcon from '../images/icons/airbnb-icon.png';


export function CreateHeader() {
  const header = (
  <header className='header'>
    <a href='https://airbnb.com'>
      <img className='airbnb-icon' src={AirBnbIcon} />
    </a>
  </header>);

  return header;
}
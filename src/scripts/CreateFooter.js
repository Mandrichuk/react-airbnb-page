import React from 'react';

import { CreateActivity } from './CreateActivity.js';

import Data from '../data/data.js';

import starIcon from '../images/icons/Star 1.png';


export function CreateFooter() {
  const activities = Data.map((activity) => (
    <CreateActivity 
      key={activity.id}
      {...activity}
    />
  ));

  const footer = (
  <footer className='footer'>
    <div className='footer__recomendations-container'>
      {activities}
    </div>
  </footer>
  );

  return footer;
}
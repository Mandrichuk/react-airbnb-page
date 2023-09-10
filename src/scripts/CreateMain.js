import React from 'react';

import Image22 from '../images/decorations/image 22.png';
import Image23 from '../images/decorations/image 23.png';
import Image24 from '../images/decorations/image 24.png';
import Imag25 from '../images/decorations/image 25.png';
import Image26 from '../images/decorations/image 26.png';
import Image27 from '../images/decorations/image 27.png';
import Image28 from '../images/decorations/image 28.png';
import Image29 from '../images/decorations/image 29.png';
import Image30 from '../images/decorations/image 30.png';


export function CreateMain() {
  const main = (
  <main className='main'>
    <nav className='main__nav-images-container'>
      <img className='decoration-image' src={Image22}/>
      <img className='decoration-image' src={Image23}/>
      <img className='decoration-image' src={Image24}/>
      <img className='decoration-image' src={Imag25}/>
      <img className='decoration-image' src={Image26}/>
      <img className='decoration-image' src={Image27}/>
      <img className='decoration-image' src={Image28}/>
      <img className='decoration-image' src={Image29}/>
      <img className='decoration-image' src={Image30}/>
    </nav>

    <div className='main__about-container'>
      Online Experiences
      <p className='about-text'>
        Join unique interactive activities led by one-of-a-kind hosts—all   without leaving home.
      </p>
    </div>
  </main>
  );

  return main;
}
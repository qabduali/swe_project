import React from 'react';
import '../MainPage.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img alt='' class="img" src='./../../../img/img1.jpg' />
      <h1>INTERNATIONAL HOTEL CHAIN</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

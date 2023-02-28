import React from 'react';
import { SubHeading } from '../../components';
import findus from '../../assets/findus.png'


const FindUs = () => (
  <div className='section__padding app__wrapper app__bg'>
    <div className="app__wrapper_info">
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{marginBottom: '2.5rem'}}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className='p__opensans app__wrapper_info-adress' style={{color:'var(--color-grey)', marginBottom: '2rem'}}>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p className='p__cormorant' style={{color: 'var(--color-golden)', marginBottom: '1rem'}}>
          Opening Hours
        </p>
        <p className='p__opensans' style={{marginBottom: '1rem'}}>
          Mon - Fri: 10:00 am - 02:00 am
        </p>
        <p className='p__opensans' style={{marginBottom: '3rem'}}>
          Sat - Sun: 10:00 am - 03:00 am
        </p>
      </div>
      <button className='custom__button'>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={findus} alt='Find Us' />
    </div>
  </div>
);

export default FindUs;

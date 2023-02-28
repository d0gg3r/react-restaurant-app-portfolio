import React from 'react';
import G from '../../assets/G.png'
import spoon from '../../assets/spoon.svg'
import knife from '../../assets/knife.png'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg section__padding flex__center' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={G} alt='G letter'/>
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={spoon} alt='about__spoon' className='spoon__img' />
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quis<br/> pharetra adipiscing ultrices vulputate posuere tristique.
          In sed odio nec aliquet eu proin mauris et.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={knife} alt='about__knife'/>
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={spoon} alt='about__spoon' className='spoon__img' />
        <p className='p__opensans'>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
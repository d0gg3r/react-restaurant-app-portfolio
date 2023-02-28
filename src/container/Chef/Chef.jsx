import React from 'react';
import { SubHeading } from '../../components';
import chef from '../../assets/chef.png'
import sign from '../../assets/sign.png'
import quote from '../../assets/quote.png'

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={chef} alt='chef'/>
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef’s Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={quote} alt='quote' />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className='p__opensans'>
          auctor sit iaculis in arcu.Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat,aliquam molestie lectus eu.
          Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className='p__opensans' style={{color: 'var(--color-grey)'}}>Chef & Founder</p>
        <img src={sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
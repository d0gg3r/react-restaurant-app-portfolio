import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FooterOverlay, Newsletter} from '../../components'
import { images } from '../../constants'

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans" style={{marginBottom: '1rem'}}>9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="app__footer-links_logo">
        <h1 className='headtext__cormorant'>GERICHT</h1>
        <p className='p__opensans'>
          "The best way to find yourself is to lose yourself in the <br/>service of others.”
        </p>
         <img src={images.spoon} alt='spoon' style={{marginTop: '1rem'}} />
         <div className="app__footer-links_icons">
           <FiFacebook />
           <FiTwitter />
           <FiInstagram />
         </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Days</h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans" style={{marginBottom: '1rem'}}>08:00 am - 23:00 pm</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">07:00 am - 02:00 am </p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className='p__opensans' style={{color: 'var(--color-grey)', marginTop: '5rem'}}>
        2023 Gerícht. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;

import React from 'react';
import { FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Manan : 8368735708</p>
        <p className="p__opensans">Bhomik : 9057236734</p>
        <p className="p__opensans">Shailja : 9877313581</p>
        <p className="p__opensans">queries@urja2023.in</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;Uniting in Excellence: <br /> The Royal Sports Fest of Our University&quot;</p>
        <img src={images.spoon} alt="spoonImg" className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/urjafest?mibextid=ZbWKwL"><FiFacebook /></a>
          <a href="https://www.instagram.com/urja.tiet/"><FiInstagram /></a>
          <a href="https://www.linkedin.com/company/urja-tiet/"><FiLinkedin /></a>
        </div>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">URJA 2023. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
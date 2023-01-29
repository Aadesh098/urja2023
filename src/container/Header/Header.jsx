import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Experience The" />
      <h1 className="app__header-h1">Blazing Fire of the Sun</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Unleash your potential and showcase your skills at our annual Sports Fest. From thrilling competitions to exciting events, the opportunities for greatness await you.</p>
      <button type="button" className="custom__button"><a href="#about">Explore</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
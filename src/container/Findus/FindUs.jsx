import React from 'react';

import Contact from './Contact';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Got Any Queries?" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Contact Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans"><Contact /></p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>For Official Communication</p>
        <p className="mail">urja2023@thapar.edu</p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
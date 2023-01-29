import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Got Any Queries?" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Contact Us</h1>
      <div className="app__wrapper-content">
        {/* <p className="p__opensans">The Form Goes Here</p> */}
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>For Official Communication</p>
        <p className="p__opensans">urja2023@thapar.edu</p>
        <p className="p__opensans">+91 9810348721</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Contact From</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
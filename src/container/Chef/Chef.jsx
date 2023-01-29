import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Some Words of Wisdom" />
      <h1 className="headtext__cormorant">Directorate Thoughts</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Success is not final, failure is not fatal: It is the courage to continue that counts</p>
        </div>
        <p className="p__opensans"> As the Director of the University, it is my pleasure to emphasize the paramount importance of sports and fitness in one's life, beyond the realm of academics and professional careers. Engaging in regular physical activity not only improves physical health but also has a profound impact on mental well-being, cognitive function and overall productivity. Participation in sports and fitness activities also provides opportunities to develop teamwork, leadership, perseverance, discipline, and resilience.</p>
      </div>

      <div className="app__chef-sign">
        <p>Dr. Padmakumar Nair</p>
        <p className="p__opensans">Director, Thapar University</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
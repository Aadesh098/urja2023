import React from 'react';
import { useInView } from 'react-intersection-observer';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => {

  const [ref, inView] = useInView();
  
  return (
  <div className="app__bg app__wrapper section__padding" ref={ref}>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Some Words of Wisdom" />
      <h1 className= {"headtext__cormorant " + (inView? "sltr":"")} style={{animationDelay : '0s', opacity: '0'}}>Directorate Thoughts</h1>

      <div className={"app__chef-content " + (inView? "sltr":"")} style={{animationDelay : '.7s', opacity: '0'}}>
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Success is not final, failure is not fatal: It is the courage to continue that counts</p>
        </div>
        <p className="p__opensans"> As the Director of the University, it is my pleasure to emphasize the paramount importance of sports and fitness in one's life, beyond the realm of academics and professional careers. Engaging in regular physical activity not only improves physical health but also has a profound impact on mental well-being, cognitive function and overall productivity. Participation in sports and fitness activities also provides opportunities to develop teamwork, leadership, perseverance, discipline, and resilience.</p>
      </div>

      <div className="app__chef-sign">
        <p className={(inView? "sltr":"")} style={{animationDelay : '1.5s', opacity: '0'}}>Dr. Padmakumar Nair</p>
        <p className={"p__opensans " + (inView? "sltr":"")} style={{animationDelay : '2s', opacity: '0'}}>Director, Thapar University</p>
        <img src={images.sign} alt="sign_image"  />
      </div>
    </div>
  </div>
)};

export default Chef;
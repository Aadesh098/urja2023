import React from 'react';
import { useInView } from 'react-intersection-observer';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {

  const [ref, inView] = useInView();
  
  return (
  <div className="app__aboutus app__bg flex__center section__padding" id="about" ref={ref}>

    <div className="app__aboutus-content flex__center">
    
      <div className="app__aboutus-content_about">
        <div className={inView?'srtl':""} style={{animationDelay : '1s', opacity: '0', maxWidth: '450px'}}>
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
          

            Urja is one of the biggest sports extravaganzas in the Country, and We are back with the 6th edition this year. Thapar Institute of Engineering & Technology's annual sports fest has been a stage for college teams to showcase their supremacy by competing amongst the nation's best talents. TIET has had a rich history of hosting magnificent and renowned fests. The fests have become an integral part of the TIET culture and identity, encompassing innumerable institutes pan-India. After a three-year gap, the fest is set to witness the thrill, excitement, and competitiveness like never before.
            Train yourself and get ready to go out, all guns blazing, in the quest for victory!
            
            </p>
          <button type="button" className="custom__button"><a href="#intro">Know More</a></button>
        </div>
      </div>

      <div className={ "app__aboutus-content_knife flex__center " + (inView ? "sttb":"") } style={{opacity: '0'}}>
        <img src={images.knife} alt="about_knife" />
      </div> 

      <div className="app__aboutus-content_history">
        <div className={inView?'sltr':""} style={{animationDelay : '.5s', opacity: '0', maxWidth: '450px'}}>
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Over the years, the sports fest has made a name for itself by organizing one of the largest and most competitive sports fests in the state. This annual event, which brings together student-athletes from institutions across the region, has become a highlight of the college calendar, drawing thousands of participants and spectators from all over the state. Through the dedicated efforts of our members, the Urja Club has established a reputation as a leader in the field of college sports, and continues to inspire and motivate students to pursue their athletic passions.</p>
          <button type="button" className="custom__button"><a href="#intro">Know More</a></button>
        </div>
      </div>
    </div>
  </div>
)};

export default AboutUs;
import React from 'react';
import { useInView } from 'react-intersection-observer';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';



const Header = () => {

  const [ref, inView] = useInView();
  
  return (
  <div className="app__header app__wrapper section__padding" id="home" ref={ref}>
    <div className="app__wrapper_info">
      <SubHeading title="Experience The" />
      <h1 className={"app__header-h1 " + (inView? "sltr":"")}>Blazing Fire of the <br /> Sun</h1>
      <p className={"p__opensans " + (inView? "sltr":"")} style={{ margin: '2rem 0', animationDelay : '.5s', maxWidth: '800px', opacity: '0'}}>Unleash your potential and showcase your skills at our annual Sports Fest. From thrilling competitions to exciting events, the opportunities for greatness await you.</p>
      <button type="button" className="custom__button"><a href="#about">Explore</a></button>
    </div>

    <div className={"app__wrapper_img " + (inView? "srtl":"")}>
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
)};

export default Header;
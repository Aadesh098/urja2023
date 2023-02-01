import React from 'react';
import { useInView } from 'react-intersection-observer';

import { SubHeading} from '../../components';
// import {images } from '../../constants';
import '../../container/Sponsers/sponsers.css';



const Sponsers = () => {
 // eslint-disable-next-line 
  const [ref, inView] = useInView();

  return (
  <div className="app__specialMenu flex__center section__padding" id="menu" ref={ref}>
    <div className="app__specialMenu-title">
      <SubHeading title="The BackBone of the Event" />
      <h1 className="headtext__cormorant">Our Sponsers</h1>
    </div>
    
    </div>
)};

export default Sponsers;
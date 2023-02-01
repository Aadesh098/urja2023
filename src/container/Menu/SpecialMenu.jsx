import React from 'react';
import { useInView } from 'react-intersection-observer';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {

  const [ref, inView] = useInView();

  return (
  <div className="app__specialMenu flex__center section__padding" id="menu" ref={ref}>
    <div className="app__specialMenu-title">
      <SubHeading title="The Fierce Competition Awaits" />
      <h1 className="headtext__cormorant">Sporting Events</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Category A</p>
        <div className="app__specialMenu_menu_items">=-
          {data.sports1.map((sports1, index) => (
            <MenuItem key={sports1.title + index} title={sports1.title} price={sports1.price}
            tags={sports1.tags}
              cs={inView? "sltr": ""} st={index}/>
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" className={(inView? "sttb":"")} />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Category B</p>
        <div className="app__specialMenu_menu_items">
          {data.sports2.map((sports2, index) => (
            <MenuItem key={sports2.title + index} title={sports2.title} price={sports2.price} tags={sports2.tags} cs={inView? "srtl": ""} st={index}/>
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button"><a href="#gallery">View Gallery</a></button>
    </div>
  </div>
)};

export default SpecialMenu;
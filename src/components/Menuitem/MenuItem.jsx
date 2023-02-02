import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags, cs, st}) => (
  <div className={"app__menuitem " + cs} style={{animationDelay: (st*.5) + "s", opacity: 0}}>
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant"> <a href={price}> GuideLines </a> </p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu} from './container';
import { Navbar } from './components';
import './App.css';
import Registration from './container/Registration/Registration';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Intro />
    <SpecialMenu />
    <Registration />
    <Chef />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;

import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu} from './container';
import { Navbar } from './components';
import './App.css';
import Registration from './container/Registration/Registration';
import Axios from 'axios';
import CsvDownloadButton from "react-json-to-csv";
const App = () => {
  const [csvreport, setCsvreport] = useState()
  if (window.location.pathname === "/getTeams") {
    Axios.get('http://ec2-3-111-197-210.ap-south-1.compute.amazonaws.com:4000/getTeams').then((data) => {
      setCsvreport(data.data)
    }, (err) => {
      console.log("Error generating file!")
    });
  }
  return (
    <div>
      {
        window.location.pathname === "/getTeams" ?
          <div className='app__header flex__center section__padding' style={{ height: '100vh' }}>
            <div className="p__opensans "><CsvDownloadButton data={csvreport}>Export Teams Data</CsvDownloadButton></div>
          </div> :
          <>
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
          </>
      }
    </div>
  )
};

export default App;

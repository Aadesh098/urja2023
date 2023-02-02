import React,{useState} from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState("")
  var inputs = document.querySelectorAll('input')
  const handleSubmit = (e)=>{
    e.preventDefault();
    setEmail("")
    inputs.forEach(input => input.value = '')
  }
  return(
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <form className="app__newsletter-input flex__center" onSubmit={handleSubmit}>
      <input type="email" placeholder="Enter your email address" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <button type="submit" className="custom__button" >Subscribe</button>
    </form>
  </div>
)};

export default Newsletter;
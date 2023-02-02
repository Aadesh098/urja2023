import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Axios from "axios"
import { SubHeading } from '../../components';
import './Registration.css';

const Registration = () => {
  // eslint-disable-next-line 
  const [ref, inView] = useInView();

  const [formData, setFormData] = useState({
    managerName: "",
    managerPhone: "",
    sport: "",
    collegeName: "",
    playerNumber: "",
    playerNameandContact: [],
    tId: ""
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleArrChange = (event) => {

    let data = event.target.value;
    data = data.split(",");

    for (let i = 0; i < data.length; i++) {

      data[i] = data[i].trim()

    }

    setFormData({
      ...formData,
      playerNameandContact: data
    });

  };
  var inputs = document.querySelectorAll('input');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const btn = document.getElementById('submitButton');
    btn.innerHTML = 'Registering Team';
    Axios.post('http://ec2-3-111-197-210.ap-south-1.compute.amazonaws.com:4000/teamsignup', { ...formData }).then(() => {
      btn.innerHTML = 'Register';
      alert('Team Registered!');
      inputs.forEach(input => input.value = '');
      document.querySelectorAll('textarea')[0].value = ''
    }, (err) => {
      btn.innerHTML = 'Register';
      alert(err.message + ". Try again!");
    });

    // console.log(data);
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu" ref={ref}>
      <div className="app__specialMenu-title">
        <SubHeading title="Rise To Glory" />
        <h1 className="headtext__cormorant">Registration</h1>
      </div>

      <div style={{ width: '80%' }}>

        <form onSubmit={handleSubmit} >

          <div>
            <SubHeading title="Manager's Name" />
            <input name='managerName' type="text" onChange={handleInputChange} required/>
          </div>

          <div className='mt-4'>
            <SubHeading title="Manager's Contact Number" />
            <input name='managerPhone' type="number" onChange={handleInputChange} required/>
          </div>

          <div className='mt-4'>
            <SubHeading title="Name Of Sport" />
            <input name='sport' type="text" onChange={handleInputChange} required/>
          </div>

          <div className='mt-4'>
            <SubHeading title="College Name" />
            <input name='collegeName' type="text" onChange={handleInputChange} required/>
          </div>

          <div className='mt-4'>
            <SubHeading title="Number of Players in the Team" />
            <input name='playerNumber' type="number" onChange={handleInputChange} required/>
          </div>

          <div className='mt-4'>
            <SubHeading title="Name of Players and Contact number" />
            <textarea rows="10" name='playerNameandContact' onChange={handleArrChange} required></textarea>
          </div>

          <div className='mt-4'>
            <SubHeading title="Transaction Id (UTR no.)" />
            <input name='tId' type="text" onChange={handleInputChange} />
          </div>

          <div style={{ marginTop: 100 }}>
            <button type="submit" id="submitButton" className="custom__button">Register</button>
          </div>

        </form>

      </div>




    </div>
  )
};

export default Registration;
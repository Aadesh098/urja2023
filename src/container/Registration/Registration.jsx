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
    playerNameandContact: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleArrChange = (event) => {

    let data = event.target.value;
    data = data.split("\n");

    for (let i = 0; i < data.length; i++) {

      data[i] = data[i].trim()

    }

    setFormData({
      ...formData,
      playerNameandContact: data.toString()
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

    //console.log(data);
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="register" ref={ref}>
      <div className="app__specialMenu-title">
        <SubHeading title="Rise To Glory" />
        <h1 className="headtext__cormorant">Registration</h1>
      </div>

      <div style={{ width: '80%' }}>

        <form onSubmit={handleSubmit} >

          <div>
            <SubHeading title="Manager's Name" />
            <input name='managerName' type="text" onChange={handleInputChange} required />
          </div>

          <div className='mt-4'>
            <SubHeading title="Manager's Contact Number" />
            <input name='managerPhone' type="number" onChange={handleInputChange} required />
          </div>

          <div className='mt-4'>
            <SubHeading title="Name Of Sport" />
            <input name='sport' type="text" onChange={handleInputChange} required />
          </div>

          <div className='mt-4'>
            <SubHeading title="College Name" />
            <input name='collegeName' type="text" onChange={handleInputChange} required />
          </div>

          <div className='mt-4'>
            <SubHeading title="Number of Players in the Team" />
            <input name='playerNumber' type="number" onChange={handleInputChange} required />
          </div>

          <div className='mt-4'>
            <SubHeading title="Name of Players and Contact number" />
            <textarea rows="10" name='playerNameandContact' onChange={handleArrChange} required placeholder='Enter each player details in different lines.'></textarea>
          </div>

          <div style={{ marginTop: 100 }}>
            <button type="submit" id="submitButton" className="custom__button">Register</button>
          </div>

        </form>
        <br />

        <table className='w-100 paytable p__cormorant'>
          <tr>
            <td>Name of Account</td>
            <td>TIET STUDENT ACTIVITY ACCOUNT</td>
          </tr>

          <tr>
            <td>Account No.</td>
            <td>40507372828</td>
          </tr>

          <tr>
            <td>IFSC Code</td>
            <td>SBIN0050244</td>
          </tr>

          <tr>
            <td>Branch</td>
            <td>TIET</td>
          </tr>

          <tr>
            <td colSpan={2}><p className="p__opensans gold">*Once the payment is transferred, Kindly send a Proof to urja2023@thapar.edu and please wait for 24 hours for the Confirmation Mail. Incase of Any discrepancies, Contact the Undersigned</p></td>
          </tr>

          <tr>
            <td colSpan={2}><p className="p__opensans gold">Bhomik : +91 90572 88550 | Manan : +91 83687 35708</p></td>
          </tr>
        </table>
        
        

      </div>




    </div>
  )
};

export default Registration;
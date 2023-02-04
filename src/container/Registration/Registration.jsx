import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { SubHeading } from '../../components';
import 'react-dropdown/style.css';
import './Registration.css';
import undertaking from '../../assets/undertaking.pdf'
import firebase from 'firebase';
import Dropdown from 'react-dropdown';

const firebaseConfig = {
  apiKey: "AIzaSyB4CrYIA4IRF4sQnLHb_c1CcGTQz1bYdKY",
  authDomain: "urja-2023.firebaseapp.com",
  databaseURL: "https://urja-2023-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "urja-2023",
  storageBucket: "urja-2023.appspot.com",
  messagingSenderId: "64860474258",
  appId: "1:64860474258:web:dd005ef43a1e690a838f4b",
  measurementId: "G-PZ4NNRHQ1Q"
};
firebase.initializeApp(firebaseConfig);
// import DropdownInput from 'react-dropdown-input'
const Registration = () => {
  // eslint-disable-next-line 
  const [ref, inView] = useInView();
  const options = [
    'Cricket', 'Football', 'Volleyball', 'Basketball', 'Athletics', 'Table Tennis', 'Chess', 'Badminton', 'Tennis'
  ];

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
  const handleDropdown = (e) => {
    setFormData({
      ...formData,
      sport: e.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);


    const btn = document.getElementById('submitButton');
    btn.innerHTML = 'Registering Team';


    var database = firebase.database();
    var _id = Math.random() * 10000000;
    database.ref("Team no " + Math.round(_id)).set({
      ...formData
    }).then(() => {
      btn.innerHTML = 'Register';
      alert('Team Registered!');
      inputs.forEach(input => input.value = '');
      document.querySelectorAll('textarea')[0].value = ''
    }, (err) => {
      btn.innerHTML = 'Register';
      alert(err + ". Try again!");
    });


    // Axios.post('https://urja2023backend.tech:4000/teamsignup', { ...formData }).then(() => {
    //   btn.innerHTML = 'Register';
    //   alert('Team Registered!');
    //   inputs.forEach(input => input.value = '');
    //   document.querySelectorAll('textarea')[0].value = ''
    // }, (err) => {
    //   btn.innerHTML = 'Register';
    //   alert(err.message + ". Try again!");
    // });

    //console.log(data);
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="register" ref={ref}>
      <div className="app__specialMenu-title">
        <SubHeading title="Rise To Glory" />
        <h1 className="headtext__cormorant">Registration</h1>
        <h1 className="headtextvid"><a href='https://drive.google.com/file/d/1bPnvTSQJM2HGPgFnIiCBwfcbNKXxW4NO/view?usp=share_link' target='_blank'>Tutorial Video</a></h1>
      </div>

      <div style={{ width: '80%' }}>

        <form onSubmit={handleSubmit} >

          <div>
            <SubHeading title="Captain's Name" />
            <input name='managerName' type="text" onChange={handleInputChange} required />
          </div>

          <div className='mt-4'>
            <SubHeading title="Captain's Contact Number" />
            <input name='managerPhone' type="number" onChange={handleInputChange} required />
          </div>

          <div className='mt-4'>
            <SubHeading title="Name Of Sport" />
            {/* <input name='sport' type="text" onChange={handleInputChange} required /> */}
            <Dropdown name='sport' options={options} style={{ backgroundColor: '#666' }} controlClassName='dropdown-bg' onChange={handleDropdown} placeholder="Select an option" />
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
            <td>Undertaking Form</td>
            <td><a href={undertaking} download style={{ textDecoration: "underline" }}>Download Here</a> (Mandatory Hard Copy) </td>
          </tr>

          <tr>
            <td colSpan={2}><p class="p__opensans mail" style={{ textDecoration: 'none' }}>* Once the payment is transferred, Kindly send a screenshot of transaction id to urja2023@thapar.edu and please wait for 24 hours for the confirmation mail. Incase of any discrepancies, contact the undersigned</p></td>
          </tr>
          <tr>
            <td colSpan={2}><p class="p__opensans mail" style={{ textDecoration: 'none' }}>* An amount of 2500/- is to be paid per player once. It includes 1000/- refundable security fee and 1500/- non-refundable charges.</p></td>
          </tr>
          <tr>
            <td colSpan={2}><p class="p__opensans mail" style={{ textDecoration: 'none' }}>* Everyone must bring their Id cards along with a hard copy of Undertaking provided above..</p></td>
          </tr>

          <tr>
            <td colSpan={2}><p class="p__opensans">Bhomik : +91 90572 88550 | Manan : +91 83687 35708</p></td>
          </tr>
        </table>



      </div>




    </div>
  )
};

export default Registration;
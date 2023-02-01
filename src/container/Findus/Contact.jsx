import React, { useState } from "react";
import emailjs from "@emailjs/browser"
import "./Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  var inputs = document.querySelectorAll('input');
  emailjs.init("haQNEU4FyARygnFWQ");
  const btn = document.getElementById('submitButton');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    btn.innerHTML = 'Sending...';
    const serviceID = 'default_service';
    const templateID = 'template_rkccqcl';
    emailjs.sendForm(serviceID, templateID, '#contactForm')
      .then(() => {
        btn.innerHTML = 'Submit';
        inputs.forEach(input => input.value = '');
        document.querySelectorAll('textarea')[0].value = ''
        alert('Sent!');
      }, (err) => {
        btn.innerHTML = 'Submit';
        alert(JSON.stringify(err));
      });
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>

      <button id="submitButton" type="submit" className="custom__button">
        Submit
      </button>

    </form>
  );
};

export default ContactForm;
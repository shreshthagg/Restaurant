import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import "./contact.css";


function Contact() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, message);
    let inputName = document.getElementById('name');
    let inputEmail = document.getElementById('email');
    let inputMessage = document.getElementById('message');
    inputName.value = '';
    inputEmail.value = '';
    inputMessage.value = '';
  }

  return (
    <>
      <Navbar />
      <h1>This is the contact page</h1>
      <form>
      <div className = "name">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)}/>
      </div>

      <div className = "email">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
      </div>

      <div className = "message">
        <label htmlFor="message">Message</label>
        <span role="textbox"></span>
        <textarea id="message" name="message" value={message} onChange={e => setMessage(e.target.value)}/>
      </div>
    
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
      
    </>
  );
}

export default Contact;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "../components/Navbar";
import "./contact.css";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7mo1mjf', 'template_5xc96lk', form.current, 'XlK6MTtIrkbuYN4Ll')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>
      <Navbar />
      <div className="contacts">
        <h1>Contact Us!</h1></div>
      <form ref={form} onSubmit={sendEmail}>
      <label>Enter Your Name</label>
      <input type="text" name="user_name" />
      <label>Enter Your Email</label>
      <input type="email" name="user_email" />
      <label>Enter Your Message</label>
      <textarea name="message" />
      <input type="submit" value="SEND" />
    </form>
      
    </>
  );
}

export default Contact;

import { useState } from 'react';
import Navbar from '../components/Navbar';
import './contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const clearFields = () => {
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  const handleSubmit = (e, info) => {
    e.preventDefault();
    clearFields();

    const { name, email } = info;
    if (!name || !email) {
      setErrorMessage('Please enter your name and email.');
      return;
    }

    fetch('http://localhost:3000/api/v1/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Send request failed.');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='contact'>
      <Navbar />
      <div className='contacts'>
        <h1>Contact Us!</h1>
      </div>
      <form onSubmit={(e) => handleSubmit(e, { name, email, message })}>
        <label>Enter Your Name</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Enter Your Email</label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Enter Your Message</label>
        <textarea
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type='submit' value='SEND' />
        {errorMessage && <p className='error'>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Contact;

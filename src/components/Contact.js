import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y7wotag', 'template_4h0d6q1', form.current, 'cAQrcph2m8SB7nKs2ZZ5V')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contactform'>
      <h1 className='Ch1'>Conatct Me</h1>
      <h3>Please fill this form to reach out to me</h3>
      <label>Name</label>
      <input type="text" name="your_name" className='Cname'  />
      <label>Email</label>
      <input type="email" name="your_email" className='Cemail' />
      <label>Message</label>
      <textarea name="message" className='Cmessage'/>
      <input type="submit" value="Send"  className='Csend'/>
    </form>
  );
};

export default Contact;
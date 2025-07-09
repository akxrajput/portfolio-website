import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_y7wotag', 'template_4h0d6q1', form.current, 'cAQrcph2m8SB7nKs2ZZ5V')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <motion.form
      id="contact"
      ref={form}
      onSubmit={sendEmail}
      className="contactform"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="Ch1">Contact Me</h1>
      <h3 className="Cdesc">Please fill this form to reach out to me</h3>

      <label>Name</label>
      <input type="text" name="your_name" className="Cname" required />

      <label>Email</label>
      <input type="email" name="your_email" className="Cemail" required />

      <label>Message</label>
      <textarea name="message" className="Cmessage" rows="5" required />

      <input type="submit" value="Send" className="Csend" />
    </motion.form>
  );
};

export default Contact;

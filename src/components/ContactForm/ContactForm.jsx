import React from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {

  return (
     <form className={styles.ContactForm}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />

      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm

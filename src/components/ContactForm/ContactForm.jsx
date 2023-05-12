import React, { useRef, useState } from 'react';
import styles from './ContactForm.module.scss';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('contact_service', 'contact_form', form.current, 'HlAvtwUIbBjoVREC2')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        setIsSubmitted(true);
        form.current.reset();
      });
  };

  return (
    <>
      {!isSubmitted ? (
        <form className={styles.ContactForm} ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <button type="submit">Send</button>
        </form>
      ) : (
        <div className={styles.ConfirmationMessage}>
          <p>Thank you for your message. I'll get back to you as soon as I can!</p>
          <button onClick={() => setIsSubmitted(false)}>Send Another Message</button>
        </div>
      )}
    </>
  );
};

export default ContactForm;

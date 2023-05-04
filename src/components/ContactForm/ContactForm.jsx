import React, { useState } from 'react';
import { db } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore'
import styles from './ContactForm.module.scss';

const ContactForm = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [message,setMessage] = useState();

    const userCollectionRef = collection(db,"contactdata")

    const handleSubmit = () => {
      addDoc(userCollectionRef,{
        name: name,
        email: email,
        message: message
      }).then(() => {
        if(!alert("Form Submitted Successfully!!!")) document.location = 'https://www.google.co.uk/'
      }).catch((error) => {
        alert(error.message)
      })
    }

  return (
     <form className={styles.ContactForm}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" onChange={(event) => {
        setName(event.target.value)
      }} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" onChange={(event) => {
        setEmail(event.target.value)
      }} />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" onChange={(event) => {
        setMessage(event.target.value)
      }} />

      <button onClick={handleSubmit} type="submit">Send</button>
    </form>
  )
}

export default ContactForm

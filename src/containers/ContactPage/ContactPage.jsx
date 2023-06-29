import React from 'react';
import Header from '../../components/Header';
import ContactForm from '../../components/ContactForm/ContactForm';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

function ContactPage() {
  return (
    <>
    <Header />
    <NavBar />
    <main>
    <ContactForm />
    <footer>
    <Footer />
    </footer>
    </main>
    </>
  )
}

export default ContactPage

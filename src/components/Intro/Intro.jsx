import React from 'react';
import styles from './Intro.module.scss'
import NavBar from '../NavBar'

const Intro = () => {
  return (
    <section className={styles.intro}>
      <NavBar />
      <p className={styles.bio}>A Junior Web Developer based in Cardiff. A creative since the start, my passion and need to create and build has found it's home as I finally find a love for the medium of Web Development.</p>
    </section>
  )
}

export default Intro

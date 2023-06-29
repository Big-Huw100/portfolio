import React from 'react';
import styles from './Intro.module.scss'
import NavBar from '../NavBar'

const Intro = () => {
  return (
    <>
    <div className={styles.intro}>
    <NavBar />
    <p className={styles.bio}>A Junior Web Developer based in Cardiff. A life long creative, my passion and need to create and build has found it's home in the medium of Web Development.</p>
    </div>
    </>
  )
}

export default Intro

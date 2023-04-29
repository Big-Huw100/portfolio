import React from 'react';

import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
        <section className={styles.links}>
            <a href="#projectGrid"><h1>Projects</h1></a>
            <a href="#footer"><h1>Contact</h1></a>
        </section>
    </div>
  )
}

export default NavBar

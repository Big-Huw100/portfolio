import React from 'react';

import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
        <section className={styles.links}>
            <h1>Projects</h1>
            <h1>Contact</h1>
        </section>
    </div>
  )
}

export default NavBar

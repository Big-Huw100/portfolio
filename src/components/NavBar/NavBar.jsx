import React from 'react';

import styles from './NavBar.module.scss';

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
        <section className={styles.links}>
            <a href="#projectGrid"><h1>Projects</h1></a>
            <Link to="contact"><h1>Contact</h1></Link>
        </section>
    </div>
  )
}

export default NavBar

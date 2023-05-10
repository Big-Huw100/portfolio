import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className={styles.header}>
      <Link to="/"><img className={styles.img} src="./images/huw-godzilla.jpg" alt="Me with Godzilla" /></Link>
      <section className={styles.title}>
        <h1 className={styles.name}>Huw Williams</h1>
        <h2 className={styles.job}>Web Developer</h2>
      </section>
    </section>
  )
}

export default Header

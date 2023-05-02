import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className={styles.header}>
      <Link to="/"><img className={styles.img} src="./images/huw-godzilla.jpg" alt="Me with Godzilla" /></Link>
      <h1 className={styles.title}>Huw Williams</h1>
    </section>
  )
}

export default Header

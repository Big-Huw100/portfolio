import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <section className={styles.header}>
      <img className={styles.img} src="./images/huw-godzilla.jpg" alt="Me with Godzilla" />
      <h1 className={styles.title}>Huw Williams</h1>
    </section>
  )
}

export default Header

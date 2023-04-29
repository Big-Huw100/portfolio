import React from 'react';
import styles from './Intro.module.scss'
import NavBar from '../NavBar'

const Intro = () => {
  return (
    <section className={styles.intro}>
      <NavBar />
      <p className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ipsum quidem autem, atque modi nostrum aspernatur non consequuntur eaque dolore ratione maxime error alias accusamus recusandae aliquid totam magnam. Suscipit.</p>
    </section>
  )
}

export default Intro

import React from 'react'
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div id='footer' className={styles.footer}>
        <span className={styles.linkIcons}>
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="https://www.linkedin.com/in/huw-williams-09337767/" target='blank'><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://twitter.com/big_huw" target='blank'><FontAwesomeIcon icon={faTwitter} /></a>
      </span>
    </div>
  )
}

export default Footer

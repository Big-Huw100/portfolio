import React from 'react';
import styles from './ProjectCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      <h1 className={styles.projectName}>Project Name</h1>
      <img src="./images/huw-godzilla.jpg" alt="Huw with Godzilla" />
      <span className={styles.linkIcons}>
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faRocket} />
      </span>
    </div>
  )
}

export default ProjectCard

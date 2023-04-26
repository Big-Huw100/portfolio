import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      <h1 className={styles.projectName}>Project Name</h1>
      <img src="./images/huw-godzilla.jpg" alt="Huw with Godzilla" />
    </div>
  )
}

export default ProjectCard
